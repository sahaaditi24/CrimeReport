import React, { useState } from 'react';
import axios from 'axios';
import { useUser } from '@clerk/clerk-react';
import { FaGreaterThan } from "react-icons/fa6";

const CrimeReportForm = () => {
  const { user } = useUser();
  const [formData, setFormData] = useState({
    crime: '',
    crimeType: '',
    crimePlace: '',
    district: '',
    pincode: '',
    firNumber: '',
    aadharNumber: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/submit-crime-report', {
        ...formData,
        userId: user.id, 
      });
      alert(response.data);
    } catch (error) {
      console.error('There was an error submitting the form!', error);
    }
  };

  return (
    <div className="max-w-full mx-auto mt-10 p-4 bg-[#040B11] shadow-md rounded-md">
      <div className='flex text-green-500 pb-6 ml-40'><FaGreaterThan/><FaGreaterThan/><FaGreaterThan/></div>
      <h2 className="text-2xl font-bold mb-8 text-white ml-40">Report A Crime</h2>
      <form onSubmit={handleSubmit}  className='-ml-16'>
        <div className='grid grid-cols-2 gap-5 px-56'>{[
          { label: 'Crime', name: 'crime' },
          { label: 'Crime Type', name: 'crimeType' },
          { label: 'Crime Place', name: 'crimePlace' },
          { label: 'District', name: 'district' },
          { label: 'Pincode', name: 'pincode' },
          { label: 'FIR Number', name: 'firNumber' },
          { label: 'Aadhar Number', name: 'aadharNumber' }
        ].map(({ label, name }) => (
          <div key={name} className="mb-4">
            <label htmlFor={name} className="block text-gray-300">{label}</label>
            <input
              type="text"
              id={name}
              name={name}
              value={formData[name]}
              onChange={handleChange}
              className='block appearance-none w-80 bg-transparent border border-gray-300 text-gray-700 py-2 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
            />
          </div>
        ))}</div>
        
    <div className='flex justify-center mt-16'>
      <button
          type="submit"
          className="w-36 bg-green-500 text-white py-2 rounded-md hover:bg-blue-600"
        >
          Submit
      </button>
    </div>
        
      </form>


      
    </div>
  );
};

export default CrimeReportForm;