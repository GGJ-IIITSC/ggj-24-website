/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 warrior_toy.glb --transform 
Files: warrior_toy.glb [60.61MB] > C:\Users\mail4\Desktop\Three Projects\three fiber testing\public\models\player\warrior_toy-transformed.glb [4.46MB] (93%)
Author: 3dhdscan (https://sketchfab.com/3dhdscan)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/warrior-toy-a01f57189100463cbd9c75a127609e79
Title: Warrior Toy
*/

import React, { useEffect, useLayoutEffect, useRef } from 'react'
import { useGLTF, useAnimations, useScroll } from '@react-three/drei'
import gsap from 'gsap'
import { useFrame } from '@react-three/fiber'

export function Warrior_toy(props) {
  const { nodes, materials } = useGLTF('/Models/warrior_toy-transformed.glb')


  const group = useRef()
  const Scroll = useScroll()
  const tl = useRef()


  useFrame((state, delta) => {
    tl.current.seek(Scroll.offset * tl.current.duration())
  })

  useLayoutEffect(() => {
    tl.current = gsap.timeline({ duration: 1, delay: 3, ease: 'power1.inout' })


    tl.current
      .to(group.current.rotation, { x: 0, y: 0, z: 0 }, 0)
      .to(group.current.position, { x: 0, y: 0, z: 0 }, 0)
      .to(group.current.rotation, { x: -1, y: -2, z: -0.7 }, 4)
      .to(group.current.position, { x: -9, y: -5, z: 5 }, 4)
      .to(group.current.rotation, { x: -1, y: -2, z: -0.7 }, 9)
      .to(group.current.position, { x: -9, y: -2, z: 5 }, 9)
  }, [])

  return (
    <group {...props} dispose={null} ref={group} >
      <mesh geometry={nodes.bojovnik_bojovnikDiffuseMap_0.geometry} material={materials.bojovnikDiffuseMap} position={[-7, -4, -4.232]} rotation={[1.436, 0.205, -3.9]} scale={0.4} />
    </group>
  )
}

useGLTF.preload('/Models/warrior_toy-transformed.glb')