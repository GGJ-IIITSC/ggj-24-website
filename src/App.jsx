import React from 'react';
import './App.css'
import { Warrior } from '../Components/Warrior/Warrior';
import { Welcome } from '../Components/Welcome/Welcome';
import { Footer } from '../Components/Footer/Footer';
import { Canvas } from '@react-three/fiber'
import EventDetails from '../Components/EventDetails/EventDetails';

function App() {

  return (
    <>
      <Canvas>
        <Warrior >
          <div className="inner-warrior">

            <Welcome />


            <div className="banner-super">
              <div className="banner-container">

              </div>
            </div>

            <EventDetails />

            <Footer />

          </div>
        </Warrior>

      </Canvas>
    </>
  )
}

export default App
