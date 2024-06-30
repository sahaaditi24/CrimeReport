import React from 'react'
import { FcGlobe } from "react-icons/fc";
import { TbPointFilled } from "react-icons/tb";
import { PiLineVerticalBold } from "react-icons/pi";

const Home = () => {
  return (
    <>
    <div className='pt-14 relative h-auto bg-[#040B11] w-auto'>
        <div className='relative h-auto'>
          
            <img src="src\pages\Topbg.png" alt="tt" className='w-full h-full object-cover'/>
           
       </div>

       <div className='flex items-center justify-center transform -translate-y-1/4 pb-80'>
            <img src="src\pages\small1.png" alt="" className='w-32 h-32 -mt-12 -mr-2'/>
            <img src=".\public\trailmap.png" alt="centerimage" className='w-1/4 h-auto bg-[#040B11]'/>
            <img src="src\pages\small2.png" alt="" className='w-28 h-28 -mt-36'/>
        
       </div>

       <div className='absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 text-center text-white pt-6'>
            <h1 className='text-3xl font-bold -mr-3'>GreenInvest : Invest in sustainable projects</h1>
            <h2 className='text-xs pt-4'>Invest in sustainable projects and earn returns. Support eco-friendly</h2>
            <h2 className='text-xs'>initiatives and watch your investments grow.</h2>

            <div className='flex space-x-4 items-center justify-center pt-8'>
            <button className='bg-green-500 text-[#040B11] text-sm px-6 py-2 rounded-md hover:bg-green-600 font-bold'>
                KNOW MORE
            </button>
            <button className='border border-green-500 text-green-500 text-sm px-6 py-2 rounded-md hover:bg-green-500 hover:text-white'>
                REPORT A CRIME
            </button>


       </div>


       <div className='flex justify-center mt-4'>
            <div className='w-24 h-24 mr-4'>
                <a href="./Volunteers">
              <img src='.\public\Icon1.png' alt='icon1' className='w-full h-full object-contain' /></a>
            </div>
            <div className='w-24 h-24 mr-4'>
              <a href="/">
              <img src='src\pages\Icon2.png' alt='icon2' className='w-full h-full object-contain' /></a>
            </div>
            <div className='w-24 h-24'>
              <img src='.\public\Icon3.png' alt='icon3' className='w-full h-full object-contain' />
            </div>
        </div>


       </div>


       
       <div className=' text-3xl pl-64 -mt-20'>
            <h2 className='text-white font-bold'>Join a</h2>
            <div className='flex'>
                <h2 className='text-white font-bold mr-2'>Community </h2>
                <h2 className='text-green-500'>on Sustainability</h2>
            </div>

            <div className='flex left-56 pt-10'>
                <div className='flex flex-col'>
                    <h1 className='text-7xl font-bold pb-1 bg-gradient-to-l from-indigo-600 to-sky-300 bg-clip-text text-transparent'>11.5K+</h1>
                    <h1 className='text-white text-[10px]'>CRIME REPORTS</h1>
                </div>
                <div className='flex flex-col pl-44'>
                    <h1 className='text-7xl font-bold pb-1 bg-gradient-to-r from-sky-600 to-blue-800 bg-clip-text text-transparent'>554</h1>
                    <h1 className='text-white text-[10px]'>VOLUNTEERS REGISTERED</h1>
                </div>
                <div className='flex flex-col pl-44'>
                    <h1 className='text-7xl font-bold pb-1 bg-gradient-to-r from-sky-400 to-emerald-400 bg-clip-text text-transparent'>$0.00025</h1>
                    <h1 className='text-white text-[10px]'>AVERAGE COST PER TRANSACTION</h1>
                </div>


            </div>

       </div>

       <div className='absolute top-[calc(72%+4rem)] left-0 w-5/6 h-5/6 bg-no-repeat bg-contain' style={{ backgroundImage: "url('src/pages/bg2.png')" }}>
          
        </div>

        <div className='absolute top-[calc(100%+4rem)] w-[30%] h-3/4 bg-no-repeat bg-contain mr-0 right-0' style={{ backgroundImage: "url('src/pages/bg1.png')" }}>
         </div>


        <div className='absolute pt-20 left-48'>
            <div className='ml-8 text-white'>
                <h2 className='text-5xl font-bold'> What we</h2>
                <h2 className='text-5xl font-bold'> have for you ?</h2>
                <p className='text-md pt-4 flex text-green-500'><FcGlobe className='mr-1 size-5'/> WORLD MADE SMALLER</p>
                <p className='text-md pt-12 flex'><TbPointFilled className='text-green-500 mr-1 size-4'/>Unmatched Transparency</p>
                <p className='text-md pt-4 flex'><TbPointFilled className='text-green-500  mr-1 size-4'/>Community Empowerment</p>
                <p className='text-md pt-4 flex'><TbPointFilled className='text-green-500  mr-1 size-4'/>Innovation Rewards</p>
                <p className='text-md pt-4 flex'><TbPointFilled className='text-green-500  mr-1 size-4'/>Holistic Impact</p>
            </div>

        </div>




    <div className='absolute pt-20 left-3/7 right-24'>
        <div className='grid grid-cols-2 gap-3 pl-44'>

          <div className='w-[26rem] h-[26rem] pt-20 pl-10'>
            <img src="src\pages\1.png" alt="" className='pt-4'/>
            <img src="src\pages\BG.png" alt="" className='-mt-24 ml-2'/>  
            <img src="src\pages\Vector 3.png" alt="" className='-mt-24 ml-[16.5rem]' />

            <div className='absolute inset-0 flex flex-col text-left mt-52 ml-64'>
            <h2 className='text-white text-3xl flex '><PiLineVerticalBold className='text-blue-400'/> Crime 
              <img src="src\pages\Sheild1.png" alt="" className='pl-28'/>
            </h2>
            <h2 className='text-white text-3xl pb-4 pl-8 -mt-4'>Reporting</h2>
            <p className='text-gray-400 text-md pl-4'>Easily report crimes and track</p>
            <p className='text-gray-400 text-md pl-4'>the progress of investigations.</p>
            <p className='text-gray-400 text-md pl-4'>Our blockchain technology</p>
            <p className='text-gray-400 text-md pl-4'>ensures every report is secure</p>
            <p className='text-gray-400 text-md pl-4'>and transparent, fostering trust</p>
            <p className='text-gray-400 text-md pl-4'>in the process.</p>
          </div>
          </div>


            <div className='p-4 bg-white bg-opacity-5 backdrop-blur-md text-white w-[22rem] h-[22rem] rounded-3xl'>
              <h2 className='text-3xl mb-2 pt-4 flex'><PiLineVerticalBold className='text-yellow-400 size-10 -mt-1'/> Hit-spot Alerts: <img src="src\pages\Ellipse 1024.png" alt="" className='relative w-12 h-12'/><img src="src\pages\World Markets.png" alt="" className='w-12 h-12 absolute inset-0 bg-no-repeat bg-cover ml-72 mt-8'/></h2>
              <p className='text-gray-400 text-md pl-4 pt-6'>Receive real-time alerts about crime hit-spots in your area to stay informed and safe.Get notified of potential dangers and take necessary precautions to protect yourself.</p>
            </div>
            
        </div>

          <div className='grid grid-cols-2 gap-3 pl-44'>
            <div className='pl-10 pt-5 pb-10'>
              <div className='p-4 bg-white bg-opacity-5 backdrop-blur-md text-white w-[22rem] h-[22rem] rounded-3xl'>
                <h2 className='text-3xl mb-2 pt-4 flex'><PiLineVerticalBold className='text-violet-800 size-14 -mt-4'/>Safe Route Planner <img src="src\pages\Ellipse 1024.png" alt="" className='relative w-12 h-12'/> <img src="src\pages\Leaf.png" alt="" className='w-12 h-12 absolute inset-0 bg-no-repeat bg-cover ml-72 mt-8'/></h2>
                <p className='text-gray-400 text-md pl-4 pt-6'>Analyze your travel routes for crime rates and find safer alternatives.Plan your journeys with confidence, knowing you’re choosing the safest paths.</p>
              </div>
            </div>
            <div className='pb-10 -mt-6'>
            <div className='p-4 bg-white bg-opacity-5 backdrop-blur-md text-white w-[22rem] h-[22rem] rounded-3xl'>
              <h2 className='text-3xl mb-2 pt-4 flex'><PiLineVerticalBold className='text-green-500 -mt-1'/>Direct Donations <img src="src\pages\Ellipse 1024.png" alt="" className='relative w-12 h-12'/> <img src="src\pages\Donation.png" alt="" className='w-10 h-10 absolute inset-0 bg-no-repeat bg-cover ml-72 mt-8'/></h2>
              <p className='text-gray-400 text-md pl-4 pt-6'>Access comprehensive data on crime trends and hot-spots in your community.
              Stay aware of local crime statistics to make informed decisions about your safety.</p>
              <p className='text-2xl pl-4 mt-4'>45%</p>
              <p className='text-green-500 text-md pl-4'>crime rates reduced</p>
            </div>
          </div>
          </div>

        </div>

       
    </div>
       
    </>
  )
}

export default Home