// import { useGLTF } from '@react-three/drei'
// import React, {useRef}from 'react'

// import { useFrame } from '@react-three/fiber';
// import skyScene from '../assets/3d/Night.glb';



// const Sky = () => {
//   const skyRef = useRef();
//   const {scene} = useGLTF(skyScene);

//   useFrame(() => {
//     if (skyRef.current) {
//       skyRef.current.rotation.y += 0.001; // Adjust the speed of rotation here
//     }
//   });

//   return (
//    <mesh ref = {skyRef} >
//         <primitive object = {scene}/>

//    </mesh>
//   );
// }

// export default Sky;



import { useGLTF } from '@react-three/drei';
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

import skyScene from '../assets/3d/Nightsky.glb';

const Sky = () => {
  const skyRef = useRef();
  const { scene } = useGLTF(skyScene);

  useFrame(() => {
    if (skyRef.current) {
      skyRef.current.rotation.y += 0.001; // Optional: Slowly rotate the sky for a dynamic effect
    }
  });

  return (
    <primitive 
      ref={skyRef}
      object={scene}
      scale={[500, 500, 1000]} // Adjust scale to ensure it covers the scene
      position={[0, 0, 0]}
    />
  );
}

useGLTF.preload(skyScene);

export default Sky;