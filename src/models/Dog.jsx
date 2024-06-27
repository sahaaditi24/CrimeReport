import React from 'react'
import { useGLTF } from '@react-three/drei'
import dog from '../assets/3d/Dog.glb'

const Dog = () => {

const {scene} = useGLTF(dog);
  return (

    <mesh position ={[-10, 20, 12]} scale={[4, 4, 4]} rotation={[0, Math.PI / 2, 0]}>
        <primitive object={scene}/>

    </mesh>

  )
}

export default Dog