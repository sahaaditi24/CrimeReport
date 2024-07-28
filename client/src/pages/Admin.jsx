import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CrimeReportPDF from '../components/CrimeReportPdf';

const Admin = () => {
  const [crimeReports, setCrimeReports] = useState([]);
  const [imageVisibility, setImageVisibility] = useState({});

  useEffect(() => {
    const fetchCrimeReports = async () => {
      try {
        const response = await axios.get('http://localhost:3000/crime-reports');
        setCrimeReports(response.data);
        const visibility = response.data.reduce((acc, report) => {
          acc[report._id] = false;
          return acc;
        }, {});
        setImageVisibility(visibility);
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

  const toggleImageVisibility = (id) => {
    setImageVisibility((prevVisibility) => ({
      ...prevVisibility,
      [id]: !prevVisibility[id],
    }));
  };

  return (
    <div className="max-w-6xl mx-auto mt-10">
      <h2 className="text-3xl font-bold py-8 text-center text-white">Admin Crime Reports</h2>
      <div className="flex flex-col space-y-6">
        {crimeReports.map((report) => (
          <div
            key={report._id}
            className={`bg-gradient-to-r from-gray-800 via-gray-900 to-black shadow-lg rounded-lg overflow-hidden ${getCardClass(
              report.status
            )}`}
          >
            <div className="p-6 relative">
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
                {['active', 'pending', 'solved', 'false'].map((status) => (
                  <button
                    key={status}
                    onClick={() => updateStatus(report._id, status)}
                    className={`flex-1 py-2 rounded-md transition-colors ${
                      report.status === status
                        ? `bg-${status === 'active' ? 'green' : status === 'pending' ? 'yellow' : status === 'solved' ? 'blue' : 'red'}-500 text-white`
                        : 'bg-gray-200 text-gray-800'
                    }`}
                  >
                    {status.charAt(0).toUpperCase() + status.slice(1)}
                  </button>
                ))}
                <button
                  onClick={() => toggleImageVisibility(report._id)}
                  className="flex-1 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                >
                  {imageVisibility[report._id] ? 'Hide Image' : 'Show Image'}
                </button>
              </div>
              {imageVisibility[report._id] && report.imageUrl && (
                <img src={`http://localhost:3000${report.imageUrl}`} alt="Crime" className="mt-4 rounded-lg shadow-lg" />
              )}
              <CrimeReportPDF report={report} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Admin;
