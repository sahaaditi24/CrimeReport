const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors()); // Use CORS middleware

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

// Crime report model
const crimeReportSchema = new mongoose.Schema({
  crime: String,
  crimeType: String,
  crimePlace: String,
  district: String,
  pincode: String,
  firNumber: String,
  aadharNumber: String,
  userId: String,
  status: {
    type: String,
    enum: ['active', 'pending', 'solved'],
    default: 'pending'
  }
});


const CrimeReport = mongoose.model('CrimeReport', crimeReportSchema);

// Route to handle form submission
app.post('/submit-crime-report', async (req, res) => {
  const { crime, crimeType, crimePlace, district, pincode, firNumber, aadharNumber, userId } = req.body;

  const newCrimeReport = new CrimeReport({
    crime,
    crimeType,
    crimePlace,
    district,
    pincode,
    firNumber,
    aadharNumber,
    userId,
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

  if (!['active', 'pending', 'solved'].includes(status)) {
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


// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});