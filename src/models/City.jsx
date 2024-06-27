import React, { useRef, useEffect} from 'react'
import { useGLTF } from '@react-three/drei'
import {useFrame, useThree} from '@react-three/fiber'
import {a} from '@react-spring/three'
import { IoLocation } from "react-icons/io5";
import {Html} from '@react-three/drei'
import Tree from './Tree'
import Dog from './Dog'



import cityScene from '../assets/3d/port_town.glb'


const City = ({isRotating, setIsRotating,  ...props})=> {
  const cityRef = useRef();

  const {gl, viewport} = useThree();

  const { nodes, materials } = useGLTF(cityScene);
  const lastX = useRef(0);
  const rotationSpeed = useRef(0);
  
  const dampingFactor = 0.95;

  const handlePointerDown = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsRotating(true);

    const clientX = e.touches ? e.touches[0].clientX : e.clientX;

    lastX.current = clientX;
  }

  const handlePointerUp = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsRotating(false);

    
  }

  const handlePointerMove = (e) => {
    e.stopPropagation();
    e.preventDefault();
    
    if (isRotating){
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;

      const delta = (clientX - lastX.current)/ viewport.width;
      cityRef.current.rotation.y += delta * 0.35* Math.PI;

      lastX.current = clientX;

      rotationSpeed.current = delta * 0.35 * Math.PI;
    }
  }

  const handleKeyDown = (e) => {
    if(e.key === 'ArrowLeft'){
      if(!isRotating)setIsRotating (true);
      cityRef.current.rotation.y += 0.01 * Math.PI;
    } else if(e.key === 'ArrowRight'){
      if(!isRotating)setIsRotating (true);
      cityRef.current.rotation.y -= 0.01 * Math.PI;
    }
  }

  const handleKeyUp = (e) => {
    if (e.key === 'ArrowLeft' || e.key === 'ArrowRight'){
      setIsRotating(false);
    }
  }

  useFrame (() => {
    if (!isRotating){
      rotationSpeed.current *= dampingFactor;

      if(Math.abs(rotationSpeed.current)< 0.001){
        rotationSpeed.current = 0;
      }
    } else {
      const rotation = cityRef.current.rotation.y;

      const normalizedRotation =
            ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);

      // Set the current stage based on the island's orientation
        switch (true) {
            case normalizedRotation >= 5.45 && normalizedRotation <= 5.85:
                setCurrentStage(4);
            break;
            case normalizedRotation >= 0.85 && normalizedRotation <= 1.3:
                setCurrentStage(3);
            break;
            case normalizedRotation >= 2.4 && normalizedRotation <= 2.6:
                setCurrentStage(2);
            break;
            case normalizedRotation >= 4.25 && normalizedRotation <= 4.75:
                setCurrentStage(1);
            break;
            default:
                setCurrentStage(null);
      }
    }


    }
  );
    

  

  useEffect (() => {
    const canvas = gl.domElement;

    canvas.addEventListener('pointerdown', handlePointerDown);
    canvas.addEventListener('pointerup', handlePointerUp);
    canvas.addEventListener('pointermove', handlePointerMove);
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);

    return () =>{
      canvas.removeEventListener('pointerdown', handlePointerDown);
      canvas.removeEventListener('pointerup', handlePointerUp);
      canvas.removeEventListener('pointermove', handlePointerMove);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keyup', handleKeyUp);

    }


  }, [gl, handlePointerDown, handlePointerUp, handlePointerMove]);

  return (
    <a.group ref={cityRef}{...props} dispose={null}>
      
      <a.group position={[0, -192.383, -951.611]} rotation={[-Math.PI / 2, 0, 0]} scale={82.087}>


        <mesh     
          geometry={nodes.Cube001_road_0.geometry}
          material={materials.road}
        >
          <Html position = {[0, -20, 6]}>
             <a href="/Road" style = {{textDecoration : 'none'}}>         
              <IoLocation className='text-white size-10'/>
            </a> 
          </Html>

        </mesh>

        <mesh   
          geometry={nodes.Cube001_wood_0.geometry}
          material={materials.wood}
        />

        <mesh   
          geometry={nodes.Cube001_wood_0_1.geometry}
          material={materials.wood}
        />

        <mesh       
          geometry={nodes.Cube001_sidewalk_0.geometry}
          material={materials.sidewalk}
        />
  
        
        <mesh         
          geometry={nodes.Cube001_grass_0.geometry}
          material={materials.grass}
        />
          
        
        <mesh
              geometry={nodes.Cube001_water_0.geometry}
              material={materials.water}
        >
          <Html position = {[10, -25, 0]}>
             <a href="/Water" style = {{textDecoration : 'none'}}>         
              <IoLocation className='text-white size-10'/>
            </a> 
          </Html>
        </mesh>
            
        <mesh
          geometry={nodes.Cube001_graywood_0.geometry}
          material={materials.graywood}
        />
        <mesh
              
          geometry={nodes.Cube001_rope_0.geometry}
          material={materials.rope}
        />
        
        <mesh       
          geometry={nodes.Cube001_whitewood_0.geometry}
          material={materials.whitewood}
        />

        <mesh
       
          geometry={nodes.Cube001_redlight_0.geometry}
          material={materials.redlight}
        />
        <mesh
          
          
          geometry={nodes.Cube001_bluewood_0.geometry}
          material={materials.bluewood}
        />
        <mesh
          geometry={nodes.Cube001_glass_0.geometry}
          material={materials.glass}
        >
          
          <Html position = {[-14, -6, 0]}>
             <a href="/Plant" style = {{textDecoration : 'none'}}>         
              <IoLocation className='text-white size-10'/>
            </a> 
          </Html>

          </mesh>
        <mesh
             
          geometry={nodes.Cube001_darkwood_0.geometry}
          material={materials.darkwood}
        />
        <mesh
          geometry={nodes.Cube001_stone_0.geometry}
          material={materials.stone}
        >
          <Html position = {[-20, 25, 0]}>
             <a href="/Reportoffice" style = {{textDecoration : 'none'}}>         
              <IoLocation className='text-white size-10'/>
            </a> 
          </Html>


        </mesh>
        <mesh
      
          geometry={nodes.Cube001_mediumwood_0.geometry}
          material={materials.mediumwood}
        />
        <mesh
    
          geometry={nodes.Cube001_yellowpaint_0.geometry}
          material={materials.yellowpaint}
        />
        <mesh
                
          geometry={nodes.Cube001_red_paint_0.geometry}
          material={materials.red_paint}
        />
        <mesh
               
          geometry={nodes.Cube001_yellowlight_0.geometry}
          material={materials.yellowlight}
        />
      </a.group>
      <Tree position={[-70, 4, -30]} scale={[7, 7, 7]} />
      <Dog/>
    </a.group>
  )
}





export default City;