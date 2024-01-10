import React from 'react'

import { Environment, Scroll, ScrollControls } from '@react-three/drei';
import { Warrior_toy } from './Warrior_toy';

export const Warrior = ({ children, ref }) => {
    return (
        <ScrollControls pages={2.5} damping={0.1} ref={ref} >
            <ambientLight intensity={1} />
            <Environment
                preset={"warehouse"} />
            <Scroll html>
                {children}
            </Scroll>
            <Warrior_toy />

        </ScrollControls>
    )
}
