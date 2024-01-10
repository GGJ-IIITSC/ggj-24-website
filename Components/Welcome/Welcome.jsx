import React from 'react'
import Typed from 'react-typed'
import './Welcome.css'

export const Welcome = () => {
    return (
        <div className='welcome-super' >
            <div className='welcome-inner' >
                <div className="welcome-text">
                    <h1>
                        Global Game Jam - IIITS
                    </h1>
                    <div className="animated-typing">
                        <Typed
                            strings={[
                                'CODE, CREATE, CONQUER!',
                                'UNLOCK IDEAS, GAME ON!',
                                'IGNITE, INNOVATE, PLAY!']}
                            typeSpeed={40}
                            backSpeed={50}
                            loop
                        >
                        </Typed>
                    </div>
                </div>
            </div>
        </div>
    )
}
