import React from 'react';
import Navbar from '../Components/Navbar/Navbar'
import './App.css'
import { Warrior } from '../Components/Warrior/Warrior';
import { Welcome } from '../Components/Welcome/Welcome';
import { Footer } from '../Components/Footer/Footer';

function App() {

  return (
    <>
      <Warrior >
        <div className="inner-warrior">

          <Navbar />
          <Welcome />

          <Footer />
        </div>
      </Warrior>

    </>
  )
}

export default App
