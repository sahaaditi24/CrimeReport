import React from 'react'
import {NavLink} from 'react-router-dom'
import { FaDiscord } from 'react-icons/fa';

const Navbar = () => {
  return (
    <header className='fixed top-0 left-0 w-full flex pl-36 p-3 z-50 items-center rounded-b-2xl' style={{ backgroundColor: '#040B11' }}>

      <div className='pr-36 pl-16'>
        <NavLink to="/" className = "items-center justify-center flex font-bold shadow-md"> 
            <p className='text-white'>LOGO</p>
        </NavLink>
      </div>


      <div className='items-center flex justify-center pl-28'>


        <NavLink to="/" className = "items-center justify-center flex font-bold shadow-md pl-8"> 
            <p className='text-white text-xs'>HOME</p>
        </NavLink>


        <NavLink to="/" className = "items-center justify-center flex font-bold shadow-md pl-8"> 
            <p className='text-white text-xs'>KNOW ABOUT</p>
        </NavLink>


        <NavLink to="./Threedcity" className = "items-center justify-center flex font-bold shadow-md pl-8"> 
            <p className='text-white text-xs'>3D CITY</p>
        </NavLink>



        <NavLink to="/" className = "items-center justify-center flex font-bold shadow-md pl-8"> 
            <p className='text-white text-xs'>REPORT</p>
        </NavLink>


        <NavLink to="/" className = "items-center justify-center flex font-bold shadow-md pl-8"> 
            <p className='text-white text-xs'>VOLUNTEER</p>
        </NavLink>


        <NavLink to="/" className = "items-center justify-center flex font-bold shadow-md pl-8"> 
            <p className='text-white text-xs'>FAQ</p>
        </NavLink>

        </div>


      <div className='pl-44'>
        <button className="flex items-center bg-green-500 text-black px-2 py-2 font-bold hover:bg-green-400">
            <FaDiscord className="mr-2" /> Discord
        </button>
      </div>
    </header>
  )
}

export default Navbar