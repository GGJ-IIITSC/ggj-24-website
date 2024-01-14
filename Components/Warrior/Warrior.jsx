import React, { useEffect } from 'react';
import { Environment, Scroll, ScrollControls } from '@react-three/drei';
import { Warrior_toy } from './Warrior_toy';

export const Warrior = ({ children }) => {


    return (
        <ScrollControls pages={3.5}  >
            <Environment preset={"warehouse"} />
            <Scroll html>
                {children}
            </Scroll>
            <Warrior_toy />
        </ScrollControls>
    );
};
