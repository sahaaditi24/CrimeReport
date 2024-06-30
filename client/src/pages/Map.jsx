import React, {useState} from 'react'
import { PiLineVerticalBold } from "react-icons/pi";
import { RiAlarmWarningFill } from "react-icons/ri";
import { GoDotFill } from "react-icons/go";

import { Link } from 'react-router-dom'



const Map = () => {
  const [selectedState, setSelectedState] = useState('');
  const [selectedPoliceStation, setSelectedPoliceStation] = useState('');

  const handleStateChange = (event) => {
    setSelectedState(event.target.value);
  };

  const handlePoliceStationChange = (event) => {
    setSelectedPoliceStation(event.target.value);
  };


  return (
    <div className='pt-14 relative h-auto bg-[#040B11] w-auto'>

        <div className='relative h-auto'>
            <img src="src/pages/Topbg.png" alt="" />
        </div>

        <div className='flex transform -translate-y-1/4 -mt-48 pl-28'>
        <PiLineVerticalBold className='text-yellow-400 size-10'/>
        <h1 className='text-3xl font-bold text-white flex'>Ensure Your <h1 className='text-green-500 ml-2'>Safety</h1></h1>
        </div>

        <div className='flex pl-36 mt-8 mb-10'>
        <RiAlarmWarningFill className='text-red-700 size-7 pr-2'/>
        <h1 className='text-white pt-1'>Tips from the Authority</h1>

        </div>

        <div className='flex pl-36 gap-12'>
            <img src="./public/m2.png" alt="" />
            <img src="./public/m1.png" alt="" />
            <img src="./public/m4.png" alt="" />
            <img src="./public/m3.png" alt="" />
        </div>

        <div className='pl-36 pr-36'>

        <div className="bg-[#2A312E] p-4 rounded-lg w-full mt-10">
            <p className=" text-white flex">
            <GoDotFill className='size-9 -mt-1 mr-2'/>Ensure a safe journey by staying informed about your surroundings. Enter your starting and destination locations, and we'll provide a detailed analysis of crime rates along your route. Discover which areas are dense with crime and which are safer, along with alternative paths to keep your journey secure.
            </p>
        </div>
        </div>

        <div className='flex items-center justify-center space-x-4 pt-10 pb-20'>

          <Link to = 'http://localhost:4000/' target='_blank'>
            <button className='bg-green-500 text-white text-sm px-6 py-2 rounded-md hover:bg-green-600'>
                FIND SAFEST PATH
            </button>
          </Link>
            
            <Link to = 'https://hitmap-crime.vercel.app/' target='_blank'>
            <button className='bg-green-500 text-white text-sm px-6 py-2 rounded-md hover:bg-green-600 w-40'>
                HEAT MAP
            </button>
            </Link>

        </div>



    </div>
  )
}

export default Map