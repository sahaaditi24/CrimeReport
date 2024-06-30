const Web3 = require('web3');
const mongoose = require('mongoose');
const fs = require('fs');
const CrimeReport = require('./build/contracts/CrimeReport.json');

// Connect to Ganache
const web3 = new Web3('http://localhost:8545');

// Define the ABI and bytecode
const contractABI = CrimeReport.abi;
const contractBytecode = CrimeReport.bytecode;

// Connect to MongoDB
mongoose.connect('mongo', { useNewUrlParser: true, useUnifiedTopology: true });

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
    status: {
        type: String,
        enum: ['active', 'pending', 'solved', 'false'],
        default: 'pending'
    }
});

const CrimeReportModel = mongoose.model('CrimeReport', crimeReportSchema);

async function deployCrimeReports() {
    const accounts = await web3.eth.getAccounts();
    const reports = await CrimeReportModel.find();

    for (const report of reports) {
        const { _id, crime, description, pincode } = report;

        const deployedContract = await new web3.eth.Contract(contractABI)
            .deploy({
                data: contractBytecode,
                arguments: [crime, description, pincode, _id.toString()]
            })
            .send({ from: accounts[0], gas: 1500000 });

        const contractAddress = deployedContract.options.address;
        console.log(`Deployed contract address: ${contractAddress}`);

        // Append the contract address to a file
        fs.appendFileSync('deployed_contracts.txt', `${contractAddress}\n`);
    }

    mongoose.connection.close();
}

deployCrimeReports().catch(console.error);
