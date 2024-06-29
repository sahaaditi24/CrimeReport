import React, { useRef } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { FaDownload } from 'react-icons/fa';

const CrimeReportPDF = ({ report }) => {
  const pdfRef = useRef(null);

  const handleDownloadPDF = () => {
    const input = pdfRef.current;
    input.classList.add('hidden-for-pdf'); // Add the class to hide the element

    html2canvas(input)
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        console.log('imgData:', imgData); // Log image data for debugging

        const pdf = new jsPDF('p', 'mm', 'a4');
        const width = pdf.internal.pageSize.getWidth();
        const height = pdf.internal.pageSize.getHeight();

        pdf.addImage(imgData, 'PNG', 0, 0, width, height);
        pdf.save(`${report.crime}_${report._id}.pdf`);

        input.classList.remove('hidden-for-pdf'); // Remove the class after generating the PDF
      })
      .catch((error) => {
        console.error('Error generating PDF:', error);
        input.classList.remove('hidden-for-pdf'); // Remove the class in case of error
      });
  };

  return (
    <div className="relative">
      <button
        onClick={handleDownloadPDF}
        className="absolute -top-80 right-0 mt-2 mr-2 bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
      >
        <FaDownload />
      </button>
      <div ref={pdfRef} className="absolute left-[-9999px] top-[-9999px]">
        <h1>{report.crime}</h1>
        <p>Type: {report.crimeType}</p>
        <p>Place: {report.crimePlace}</p>
        <p>District: {report.district}</p>
        <p>Pincode: {report.pincode}</p>
        <p>FIR Number: {report.firNumber}</p>
        <p>Aadhar Number: {report.aadharNumber}</p>
        <p>User ID: {report.userId}</p>
        <p>Status: {report.status}</p>
        <p>Description: {report.description}</p>
      </div>
    </div>
  );
};

export default CrimeReportPDF;
