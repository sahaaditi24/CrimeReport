import React from 'react'
import { PiLineVertical } from "react-icons/pi";
import { BsDot } from "react-icons/bs";

const Reportcrime = () => {
  return (
    <>
    <div className='pt-4 relative h-auto bg-[#040B11] w-auto'>
        <div className='relative h-auto'>
        <img src="src\pages\Reportcrimebg.png" alt="tt" className='w-full h-full object-cover'/>

        </div>

        <div className='pl-24 transform -translate-y-1/4 -mt-64'>
            <h1 className='flex text-white text-3xl font-bold -mt-6 pb-8'><PiLineVertical className='text-yellow-500 size-12 font-extrabold -mt-2'/>Read This <h1 className='text-green-600 ml-2'>Carefully</h1></h1> 
            <h2 className='text-white text-xl flex pl-12 -pb-4'><BsDot className='text-white size-10 -mt-2'/>Ensure all information provided is accurate and truthful. False reports can lead to legal consequences and harm the platform's integrity</h2>
            <h2 className='text-white text-xl flex pl-12 -pb-4'><BsDot className='text-white size-10 -mt-2'/>This platform is for non-emergency crime reporting only. For emergencies, contact local emergency services immediately.</h2>
            <h2 className='text-white text-xl flex pl-12 -pb-4'><BsDot className='text-white size-10 -mt-2'/>Reports are confidential and undergo verification. Personal details are secure, and false reports may result in account suspension.</h2>
            <h2 className='text-white text-xl flex pl-12 -pb-4'><BsDot className='text-white size-10 -mt-2'/>Submitted data may be used for statistical purposes to help identify crime trends and improve community safety. Personal details will not be shared without consent.</h2>
        </div>







    </div>
    </>
  )
}

export default Reportcrime