import React, { useEffect } from 'react';
import { Environment, Scroll, ScrollControls } from '@react-three/drei';
import { Warrior_toy } from './Warrior_toy';

export const Warrior = ({ children }) => {


    return (
        <ScrollControls pages={4} damping={0.1} >
            <Environment preset={"warehouse"} />
            <Scroll html>
                {children}
            </Scroll>
            <Warrior_toy />
        </ScrollControls>
    );
};
