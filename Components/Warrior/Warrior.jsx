import React, { useEffect } from 'react';
import { Environment, Scroll, ScrollControls } from '@react-three/drei';
import { Warrior_toy } from './Warrior_toy';

export const Warrior = ({ children }) => {


    return (
        <ScrollControls pages={(window.innerWidth < 500) ? 3.5 : 3.5}  >
            <Environment preset={"warehouse"} />
            <Scroll html style={{ overflowY: "auto", height: "300vh" }} >
                {children}
            </Scroll>
            <Warrior_toy />
        </ScrollControls>
    );
};
