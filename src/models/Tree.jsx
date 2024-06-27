import React from 'react'
import { useGLTF } from '@react-three/drei'
import tree from '../assets/3d/Tree.glb'

const Tree = () => {

const {scene} = useGLTF(tree);
  return (

    <mesh position ={[-1000, -100, -28]} scale={[70, 70, 70]}>
        <primitive object={scene}/>

    </mesh>

  )
}

export default Tree


// position ={[-70, 4, -30]} scale={[7, 7, 7]}