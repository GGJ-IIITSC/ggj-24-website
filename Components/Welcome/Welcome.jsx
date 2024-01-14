import React from 'react';
import { TypeAnimation } from 'react-type-animation'; // Importing react-type-animation
import './Welcome.css';
import ggjLogo from "/src/assets/ggj00-roundlogo-900x900.png"

export const Welcome = () => {
    return (
        <div className='welcome-super'>
            <div className='welcome-inner'>
                <div className="welcome-text">
                    <img src={ggjLogo} alt="" />
                    <h1>
                        Global Game Jam - IIITS
                    </h1>
                    <div className="animated-typing">
                        {/* Using TypeAnimation from react-type-animation */}
                        <TypeAnimation
                            sequence={[
                                'CODE, CREATE, CONQUER!',
                                1000,
                                'UNLOCK IDEAS, GAME ON!',
                                1000,
                                'IGNITE, INNOVATE, PLAY!'
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
