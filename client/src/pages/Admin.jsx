import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CrimeReportPDF from '../components/CrimeReportPdf';


const Admin = () => {
  const [crimeReports, setCrimeReports] = useState([]);

  useEffect(() => {
    const fetchCrimeReports = async () => {
      try {
        const response = await axios.get('http://localhost:3000/crime-reports');
        setCrimeReports(response.data);
      } catch (error) {
        console.error('Error fetching crime reports', error);
      }
    };

    fetchCrimeReports();
  }, []);

  const updateStatus = async (id, status) => {
    try {
      const response = await axios.patch(`http://localhost:3000/crime-reports/${id}`, { status });
      setCrimeReports((prevReports) =>
        prevReports.map((report) => (report._id === id ? response.data : report))
      );
    } catch (error) {
      console.error('Error updating status', error);
    }
  };

  const getStatusClass = (status) => {
    switch (status) {
      case 'active':
        return 'text-green-500';
      case 'pending':
        return 'text-yellow-500';
      case 'solved':
        return 'text-blue-500';
      case 'false':
        return 'text-red-500';
      default:
        return 'text-gray-500';
    }
  };

  const getCardClass = (status) => {
    return status === 'false' ? 'line-through border-2 border-red-500' : '';
  };

  return (
    <div className="max-w-6xl mx-auto mt-10">
      <h2 className="text-3xl font-bold py-8 text-center text-white">Admin Crime Reports</h2>
      <div className="flex flex-col space-y-6">
        {crimeReports.map((report) => (
          <div key={report._id} className={`bg-gradient-to-r from-gray-800 via-gray-900 to-black shadow-lg rounded-lg overflow-hidden ${getCardClass(report.status)}`}>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-4">{report.crime}</h3>
              <div className="text-gray-400 mb-4">
                <p><strong>Type:</strong> {report.crimeType}</p>
                <p><strong>Place:</strong> {report.crimePlace}</p>
                <p><strong>District:</strong> {report.district}</p>
                <p><strong>Pincode:</strong> {report.pincode}</p>
                <p><strong>FIR Number:</strong> {report.firNumber}</p>
                <p><strong>Aadhar Number:</strong> {report.aadharNumber}</p>
                <p><strong>User ID:</strong> {report.userId}</p>
              </div>
              <p className={`text-sm font-bold mb-4 ${getStatusClass(report.status)}`}>
                Status: {report.status}
              </p>
              <div className="flex space-x-2">
                <button
                  onClick={() => updateStatus(report._id, 'active')}
                  className={`flex-1 py-2 rounded-md transition-colors ${
                    report.status === 'active' ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-800'
                  }`}
                >
                  Active
                </button>
                <button
                  onClick={() => updateStatus(report._id, 'pending')}
                  className={`flex-1 py-2 rounded-md transition-colors ${
                    report.status === 'pending' ? 'bg-yellow-500 text-white' : 'bg-gray-200 text-gray-800'
                  }`}
                >
                  Pending
                </button>
                <button
                  onClick={() => updateStatus(report._id, 'solved')}
                  className={`flex-1 py-2 rounded-md transition-colors ${
                    report.status === 'solved' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
                  }`}
                >
                  Solved
                </button>
                <button
                  onClick={() => updateStatus(report._id, 'false')}
                  className={`flex-1 py-2 rounded-md transition-colors ${
                    report.status === 'false' ? 'bg-red-500 text-white' : 'bg-gray-200 text-gray-800'
                  }`}
                >
                  False
                </button>
              </div>
              <CrimeReportPDF report={report} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Admin;
