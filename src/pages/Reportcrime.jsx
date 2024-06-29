import React, { useState } from 'react'
import { PiLineVertical } from "react-icons/pi";
import { BsDot } from "react-icons/bs";
import { FaGreaterThan } from "react-icons/fa6";
import { FaRegCircleDot } from "react-icons/fa6";
import { FaRegCircle } from "react-icons/fa";
import Card from './Card';




const Reportcrime = () => {
  const [selectedState, setSelectedState] = useState('');
  const [selectedPoliceStation, setSelectedPoliceStation] = useState('');
  const [isCircleSelected1, setIsCircleSelected1] = useState(false);
  const [isCircleSelected2, setIsCircleSelected2] = useState(false);
  const [isCircleSelected3, setIsCircleSelected3] = useState(false);

  const handleStateChange = (event) => {
    setSelectedState(event.target.value);
  };

  const handlePoliceStationChange = (event) => {
    setSelectedPoliceStation(event.target.value);
  };


  const toggleCircle1 = () => {
    setIsCircleSelected1(!isCircleSelected1);
  };

  const toggleCircle2 = () => {
    setIsCircleSelected2(!isCircleSelected2);
  };

  const toggleCircle3 = () => {
    setIsCircleSelected3(!isCircleSelected3);
  };



  return (
    <>
    <div className='pt-4 relative h-auto bg-[#040B11] w-auto'>
        <div className='relative h-auto'>
        <img src="src\pages\Reportcrimebg.png" alt="tt" className='w-full h-full object-cover'/>

        </div>

        <div className='pl-24 transform -translate-y-1/4 -mt-64'>
            <h1 className='flex text-white text-3xl font-bold -mt-6 pb-8'><PiLineVertical className='text-yellow-500 size-12 font-extrabold -mt-2'/>Read This <h1 className='text-green-600 ml-2'>Carefully</h1></h1> 
            <h2 className='text-white text-xl flex pl-12 -pb-4'><BsDot className='text-white size-10 -mt-2'/>Ensure all information provided is accurate and truthful.False reports can lead to legal consequences and harm the platform's integrity</h2>
            <h2 className='text-white text-xl flex pl-12 -pb-4'><BsDot className='text-white size-10 -mt-2'/>This platform is for <h2 className='text-green-600 mr-2 ml-2'>non-emergency crime </h2>reporting only. For emergencies, contact local emergency services immediately.</h2>
            <h2 className='text-white text-xl flex pl-12 -pb-4'><BsDot className='text-white size-10 -mt-2'/>Reports are <h2 className='text-green-600 mr-2 ml-2'>confidential </h2> and undergo verification. Personal details are secure, and false reports may result in <h2 className='text-red-600 mr-2 ml-2'>account suspension.</h2></h2>
            <h2 className='text-white text-xl flex pl-12 -pb-4'><BsDot className='text-white size-10 -mt-2'/>Submitted data may be used for statistical purposes to help identify crime trends and improve community safety. Personal details will not be shared without consent.</h2>
  
        </div>

        <div className='pl-40 mt-20'>
          <h1 className='text-green-600 flex '><FaGreaterThan /><FaGreaterThan /><FaGreaterThan /></h1>
          <h1 className='text-white font-bold text-3xl mt-4'>Report A Crime</h1>
        </div>

        <div className='pl-48 mt-16 flex'>
            <FaRegCircleDot className='text-green-600 size-5'/>
            <h1 className='text-gray-400 font-bold ml-8 -mt-1 text-xl'>Track your report</h1>
            <FaRegCircle className='text-gray-400 ml-72 size-5'/>
            <h1 className='text-gray-400 font-bold ml-8 -mt-1 text-xl'>Report a crime</h1>

        </div>

        <div className='flex text-gray-400 text-md pl-48 mt-16 font-bold'>
          <h1 className='pl-6'>state</h1>
          <h1 className='pl-80 ml-56'>Police station</h1>
        </div>



        <div className='flex text-gray-400 text-md pl-52 mt-4'>
          <div className='relative inline-block w-1/3 mr-32'>
            <select
              value={selectedState}
              onChange={handleStateChange}
              className='block appearance-none w-full border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded-lg leading-tight focus:outline-none focus:border-gray-500 bg-transparent'
            >
              <option value='' disabled>
                West Bengal
              </option>
              <option value='state1'>State 1</option>
              <option value='state2'>State 2</option>
              <option value='state3'>State 3</option>
            </select>
            <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
              <svg className='fill-current h-4 w-4' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
                <path d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z' />
              </svg>
            </div>
          </div>

          <div className='relative inline-block w-1/3 pl-6'>
            <select
              value={selectedPoliceStation}
              onChange={handlePoliceStationChange}
              className='block appearance-none w-full border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded-lg leading-tight focus:outline-none focus: border-gray-500 bg-transparent'
            
            >
              <option value='' disabled>
                West Bengal
              </option>
              <option value='station1'>Station 1</option>
              <option value='station2'>Station 2</option>
              <option value='station3'>Station 3</option>
            </select>
            <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
              <svg className='fill-current h-4 w-4' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
                <path d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z' />
              </svg>
            </div>
          </div>
        </div>


        <div className='flex text-gray-400 text-md pl-48 mt-16 font-bold'>
          <h1 className='pl-6'>FIR Number</h1>
          <h1 className='pl-80 ml-44'>Year</h1>
        </div>



        <div className='flex text-gray-400 text-md pl-52 mt-4'>
          <div className='relative inline-block w-1/3 mr-32'>
            <select
              value={selectedState}
              onChange={handleStateChange}
              className='block appearance-none w-full border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded-lg leading-tight focus:outline-none focus:border-gray-500 bg-transparent'
            >
              <option value='' disabled>
                Enter your registered FIR number
              </option>
              <option value='state1'>FIR 1</option>
              <option value='state2'>FIR 2</option>
              <option value='state3'>FIR 3</option>
            </select>
            <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
              <svg className='fill-current h-4 w-4' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
                <path d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z' />
              </svg>
            </div>
          </div>

          <div className='relative inline-block w-1/3 pl-6'>
            <select
              value={selectedPoliceStation}
              onChange={handlePoliceStationChange}
              className='block appearance-none w-full border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded-lg leading-tight focus:outline-none focus: border-gray-500 bg-transparent'
            
            >
              <option value='' disabled>
                2024
              </option>
              <option value='station1'>y-1</option>
              <option value='station2'>y-2</option>
              <option value='station3'>y-3</option>
            </select>
            <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
              <svg className='fill-current h-4 w-4' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
                <path d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z' />
              </svg>
            </div>
          </div>
        </div>




      <div className='flex pl-64'> 
        <div className='pl-40 mt-16 flex'>
          <div onClick={toggleCircle1} className='cursor-pointer'>
            {isCircleSelected1 ? (
              <FaRegCircleDot className='text-green-600 size-5' />
            ) : (
              <FaRegCircle className='text-gray-400 size-5' />
            )}
          </div>
          
          <h1 className='text-gray-400 ml-8'>Pending</h1>
          
        </div>



        <div className='pl-28 mt-16 flex'>
          <div onClick={toggleCircle2} className='cursor-pointer'>
            {isCircleSelected2 ? (
              <FaRegCircleDot className='text-green-600 size-5' />
            ) : (
              <FaRegCircle className='text-gray-400 size-5' />
            )}
          </div>
          
          <h1 className='text-gray-400 ml-8'>Disposed</h1>
          
        </div>



        <div className='pl-28 mt-16 flex'>
          <div onClick={toggleCircle2} className='cursor-pointer'>
            {isCircleSelected2 ? (
              <FaRegCircleDot className='text-green-600 size-5' />
            ) : (
              <FaRegCircle className='text-gray-400 size-5' />
            )}
          </div>
          
          <h1 className='text-gray-400 ml-8'>Both</h1>
          
        </div>

      </div>

      <div className='flex space-x-4 items-center justify-center pt-16'>
            <button className='bg-green-500 text-white text-sm px-10 py-2 rounded-md hover:bg-green-600'>
                TRACK
            </button>
            
            
            <button className='border border-green-500 text-green-500 text-sm px-10 py-2 rounded-md hover:bg-green-500 hover:text-white'>
                RESET
            </button>
      </div>


      <div className='pl-40 mt-20'>
          <h1 className='text-green-600 flex '><FaGreaterThan /><FaGreaterThan /><FaGreaterThan /></h1>
          <h1 className='text-white font-bold text-3xl mt-4'>Reports From Your Area</h1>
        </div>



      
      <Card/>



      <div>


      </div>



    </div>
    </>
  )
}

export default Reportcrime