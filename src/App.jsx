import { useEffect } from 'react';
import Navbar from '../Components/Navbar/Navbar'
import './App.css'

function App() {
  useEffect(() => {
    window.addEventListener("scroll", function () {
      if (this.window.innerWidth < 950) {
        const scrollProgress = window.scrollY / (document.body.scrollHeight - window.innerHeight);

        const topColor = `rgb(0, 30, 55) ${70 + scrollProgress * 30}%`;
        const bottomColor = `rgb(3, 54, 86) ${70 - scrollProgress * 30}%`;

        document.getElementById("root").style.setProperty("--gradient-top", topColor);
        document.getElementById("root").style.setProperty("--gradient-bottom", bottomColor);

      } else {

        const scrollProgress = window.scrollY / (document.body.scrollHeight - window.innerHeight);

        const topColor = `rgb(0, 30, 55) ${50 + scrollProgress * 50}%`;
        const bottomColor = `rgb(3, 54, 86) ${50 - scrollProgress * 50}%`;

        document.getElementById("root").style.setProperty("--gradient-top", topColor);
        document.getElementById("root").style.setProperty("--gradient-bottom", bottomColor);
      }
    });
  }, []);

  return (
    <>
      <Navbar />
    </>
  )
}

export default App
