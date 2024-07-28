const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
require('dotenv').config();
const nodemailer = require('nodemailer');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use('/uploads', express.static(path.join(__dirname, 'uploads'))); // Serve static files from the uploads directory

// Setup storage for uploaded images
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Appending extension
  }
});

const upload = multer({ storage: storage });

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Configure NodeMailer
const transporter = nodemailer.createTransport({
  service: 'outlook',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

const sendEmergencyEmail = (latitude, longitude) => {
  const mapsLink = `https://www.google.com/maps?q=${latitude},${longitude}`;
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMERGENCY_EMAILS.split(','), // List of emergency emails separated by commas
    subject: 'Emergency SOS',
    text: `An emergency has been reported at the following location: ${mapsLink}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.error('Error sending email:', error);
    }
    console.log('Email sent:', info.response);
  });
};

// Route to handle SOS submission
app.post('/send-sos', (req, res) => {
  const { location } = req.body;
  const [latitude, longitude] = location.match(/-?\d+\.\d+/g);

  try {
    // Send an emergency email with the user's location
    sendEmergencyEmail(latitude, longitude);
    res.status(200).send('SOS sent successfully');
  } catch (error) {
    res.status(500).send('Error sending SOS');
  }
});

// Crime report model
const crimeReportSchema = new mongoose.Schema({
  crime: String,
  crimeType: String,
  description: String,
  crimePlace: String,
  district: String,
  pincode: String,
  firNumber: String,
  aadharNumber: String,
  userId: String,
  imageUrl: String, // Add this field to store the image URL
  status: {
    type: String,
    enum: ['active', 'pending', 'solved', 'false'],
    default: 'pending'
  }
});

const CrimeReport = mongoose.model('CrimeReport', crimeReportSchema);

// Route to handle form submission with image
app.post('/submit-crime-report', upload.single('crimeImage'), async (req, res) => {
  const { crime, crimeType, description, crimePlace, district, pincode, firNumber, aadharNumber, userId } = req.body;
  const imageUrl = req.file ? `/uploads/${req.file.filename}` : null;

  const newCrimeReport = new CrimeReport({
    crime,
    crimeType,
    description,
    crimePlace,
    district,
    pincode,
    firNumber,
    aadharNumber,
    userId,
    imageUrl
  });

  try {
    await newCrimeReport.save();
    res.status(200).send('Crime report submitted successfully');
  } catch (error) {
    res.status(500).send('Error submitting crime report');
  }
});

// Route to fetch all crime reports
app.get('/crime-reports', async (req, res) => {
  try {
    const crimeReports = await CrimeReport.find();
    res.status(200).json(crimeReports);
  } catch (error) {
    res.status(500).send('Error fetching crime reports');
  }
});

// Route to update the status of a crime report
app.patch('/crime-reports/:id', async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  if (!['active', 'pending', 'solved', 'false'].includes(status)) {
    return res.status(400).send('Invalid status');
  }

  try {
    const updatedReport = await CrimeReport.findByIdAndUpdate(id, { status }, { new: true });
    if (!updatedReport) {
      return res.status(404).send('Crime report not found');
    }
    res.status(200).json(updatedReport);
  } catch (error) {
    res.status(500).send('Error updating crime report status');
  }
});

// Route to mark a crime report as false
app.patch('/crime-reports/:id/false', async (req, res) => {
  const { id } = req.params;

  try {
    const updatedReport = await CrimeReport.findByIdAndUpdate(id, { status: 'false' }, { new: true });
    if (!updatedReport) {
      return res.status(404).send('Crime report not found');
    }
    res.status(200).json(updatedReport);
  } catch (error) {
    res.status(500).send('Error updating crime report status');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
