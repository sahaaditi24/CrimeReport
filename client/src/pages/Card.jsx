// import React from 'react';
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";


//  const Card = () => {
//   const settings = {
//     dots: true,
//     infinite: false,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//   };
  
  

//   return (
//     <>
    
   
//   <div className='flex '>
//    <div className='max-w-full pr-5 pl-12'>
//     <Slider {...settings}>

//         <div>
//             <img src="src\pages\Cardbg.png" alt="" />
//         </div>

      


//     </Slider>
        
//     </div> 
//   </div>

    


// </>
        
//   )
// }

// export default Card;


import React from 'react'
import { IoMdContact } from "react-icons/io";

const Card = () => {
  return (
    <>

    <div className='flex'>


        <div className='pl-40 mt-10 relative'>
        <img src="src\pages\Cardbg.png" alt="" className='w-[25.5rem] h-auto'/>
        <div className='absolute inset-0 p-8'>
        <h1 className='text-2xl font-bold text-white pl-40 pt-4'>Street Light Not Working</h1>

        <div className='flex pl-40 mt-6'>
            <IoMdContact className='text-white size-7' />
            <h1 className='text-white text-lg ml-2 mr-14'>Aditi Saha</h1>
        <div className="flex p-4 bg-[#444343] text-white rounded-full shadow-lg pl-8 pr-8 -mt-3">
        
            <p className="text-base text-green-500 font-bold flex"><img src="src\pages\Triflag.png" alt="" className='pr-2'/>3 flags</p>
        </div>
        </div>
        <div className='w-[27.5rem] h-auto pl-44'>
            <p className='text-white mt-4 text-xl flex flex-col'>
                I am writing to report a street light that has not been working for the past week. The street light is located on Maple Avenue, near ......
            </p>
        </div>

        <div className='flex space-x-4 pl-40 '>
            <button className='bg-green-500 text-white text-sm px-6 py-2 rounded-md hover:bg-green-600'>
                Show on Map
            </button>
            
           
            <button className='border border-green-500 text-green-500 text-sm px-6 py-2 rounded-md hover:bg-green-500 hover:text-white'>
                Flag
            </button>

        </div>
           

        </div>
    </div>


    <div className='pl-40 mt-10 relative'>
        <img src="src\pages\Cardbg.png" alt="" className='w-[25.5rem] h-auto'/>
        <div className='absolute inset-0 p-8'>
        <h1 className='text-2xl font-bold text-white pt-4 pl-40'>Street Light Not Working</h1>

        <div className='flex pl-40 mt-6'>
            <IoMdContact className='text-white size-7' />
            <h1 className='text-white text-lg ml-2 mr-14'>Aditi Saha</h1>
        <div className="flex p-4 bg-[#444343] text-white rounded-full shadow-lg pl-8 pr-8 -mt-3">
        
            <p className="text-base text-green-500 font-bold flex"><img src="src\pages\Triflag.png" alt="" className='pr-2'/>3 flags</p>
        </div>
        </div>
        <div className='w-[27.5rem] h-auto pl-44'>
            <p className='text-white mt-4 text-xl flex flex-col'>
                I am writing to report a street light that has not been working for the past week. The street light is located on Maple Avenue, near ......
            </p>
        </div>

        <div className='flex space-x-4 pl-40'>
            <button className='bg-green-500 text-white text-sm px-6 py-2 rounded-md hover:bg-green-600'>
                Show on Map
            </button>
            
           
            <button className='border border-green-500 text-green-500 text-sm px-6 py-2 rounded-md hover:bg-green-500 hover:text-white'>
                Flag
            </button>

        </div>
           

        </div>
    </div>
 




    

    </div>


    </> 
    
  )
}

export default Card