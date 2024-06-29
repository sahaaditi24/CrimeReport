import React, { useEffect, useState } from "react";
import CrimeReportForm from "../components/ReportForm";
import { PiLineVertical } from "react-icons/pi";
import { BsDot } from "react-icons/bs";
import { FaGreaterThan } from "react-icons/fa6";
import Card from "./Card";
import axios from 'axios';

const Reportcrime = () => {

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

  const handleShowMap = (location) => {
    console.log(`Show map for location: ${location}`);
  };

  const handleFlag = (id) => {
    setReports((prevReports) =>
      prevReports.map((report) =>
        report.id === id ? { ...report, flags: report.flags + 1 } : report
      )
    );
  };

  return (
    <section>
      <div className="pt-4 relative h-auto bg-[#040B11] w-auto">
        <div className="relative h-auto">
          <img
            src="src\pages\Reportcrimebg.png"
            alt="tt"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="pl-8 transform -translate-y-1/4 -mt-64">
          <h1 className="flex text-white text-3xl font-bold -mt-6 pb-8">
            <PiLineVertical className="text-yellow-500 size-12 font-extrabold -mt-2" />
            Read This <h1 className="text-green-600 ml-2">Carefully</h1>
          </h1>
          <h2 className="text-white text-xl flex pl-12 -pb-4">
            <BsDot className="text-white size-10 -mt-2" />
            Ensure all information provided is accurate and truthful.False
            reports can lead to legal consequences and harm the platform's
            integrity
          </h2>
          <h2 className="text-white text-xl flex pl-12 -pb-4">
            <BsDot className="text-white size-10 -mt-2" />
            This platform is for{" "}
            <h2 className="text-green-600 mr-2 ml-2">non-emergency crime </h2>
            reporting only. For emergencies, contact local emergency services
            immediately.
          </h2>
          <h2 className="text-white text-xl flex pl-12 -pb-4">
            <BsDot className="text-white size-10 -mt-2" />
            Reports are{" "}
            <h2 className="text-green-600 mr-2 ml-2">confidential </h2> and
            undergo verification. Personal details are secure, and false reports
            may result in{" "}
            <h2 className="text-red-600 mr-2 ml-2">account suspension.</h2>
          </h2>
          <h2 className="text-white text-xl flex pl-12 -pb-4">
            <BsDot className="text-white size-10 -mt-2" />
            Submitted data may be used for statistical purposes to help identify
            crime trends and improve community safety. Personal details will not
            be shared without consent.
          </h2>
        </div>
      </div>

      <CrimeReportForm />


      <section className="max-w-full bg-[#040B11] py-20">
      <div className='flex text-green-500 pb-6 ml-20'><FaGreaterThan/><FaGreaterThan/><FaGreaterThan/></div>
      <h2 className="text-2xl font-bold mb-8 text-white ml-20">Reported Crimes in your area</h2>

      <div className="grid grid-cols-3 gap-4 mx-14">
        {crimeReports.map((report) => (
          <Card
            key={report._id}
            title={report.crime}
            name={report.crimePlace}
            flags={report.flags || 3}
            description={report.description}
            onShowMap={() => handleShowMap(report.crimePlace)}
            onFlag={() => handleFlag(report._id)}
            status={report.status}
          />
        ))}
      </div>
      </section>
    </section>
  );
};

export default Reportcrime;
