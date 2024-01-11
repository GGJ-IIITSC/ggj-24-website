import React from 'react';
import './App.css'
import { Warrior } from '../Components/Warrior/Warrior';
import { Welcome } from '../Components/Welcome/Welcome';
import { Footer } from '../Components/Footer/Footer';

function App() {

  return (
    <>
      <Warrior >
        <div className="inner-warrior">

          <Welcome />

          <div className="banner-super">

            <div className="banner-container">

            </div>
          </div>

          <Footer />
        </div>
      </Warrior>

    </>
  )
}

export default App
