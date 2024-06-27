import React, {useState, useEffect} from 'react'
import {Canvas} from '@react-three/fiber'
import {Suspense} from 'react'
import Loader from '../components/Loader'
import City from '../models/City';
import Sky from '../models/Sky';
import Tree from '../models/Tree';
import Dog from '../models/Dog';


{/* <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
            POPUP
        </div> */}

 const Threedcity = () => {
    const [isRotating, setIsRotating] = useState(false);
    const [cityScale, setCityScale] = useState([1, 1, 1]);
    const [cityPosition, setCityPosition] = useState([0, -10, -100]);
    const [cityRotation, setCityRotation] = useState([0, 0, 0]);
    const [setCurrentStage] = useState(1);
    
    const adjustCityForScreenSize = () =>{
        let screenScale = null;
        let screenPosition = [0, -10, -80];
        let rotation = [0, 0, 0];
        
        if (window.innerWidth < 768){
            screenScale = [0.1, 0.1, 0.1];
        }
        else {
            screenScale = [0.08, 0.08, 0.08];
            
        }
        setCityScale(screenScale);
        setCityPosition(screenPosition);
        setCityRotation(rotation);
    }
    useEffect(() => {
        adjustCityForScreenSize();
        window.addEventListener('resize', adjustCityForScreenSize);
        return () => {
            window.removeEventListener('resize', adjustCityForScreenSize);
        };
    }, []);

  return (
    <section className='w-full h-screen relative'>
    <Canvas 
        className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
        camera={{near : 0.1, far : 1000, position : [0, 70, 100]}}
        >
    <Suspense fallback = {<Loader/>}>
        <directionalLight position={[1, 1, 1]} intensity={2}/>
        <ambientLight intensity={0.3}/>
        <hemisphereLight skyColor= "#b1e1ff" groundColor = "#000000" intensity = {1.5}/>
        <Sky/>
        <Tree/>
        
        
        <City
            position = {cityPosition}
            scale = {cityScale}
            rotation = {cityRotation}
            isRotating = {isRotating}
            setIsRotating = {setIsRotating}
            setCurrentStage={setCurrentStage}
        />
         <Dog/> 
        
        

    </Suspense>

    </Canvas>   

    </section>
  );
};

export default Threedcity