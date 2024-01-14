import React from "react";
import "./Footer.css";
import ggjLogo from "/src/assets/ggj00-roundlogo-900x900.png"
import iotaLogo from "/src/assets/iota_logo.png"
import enigmaLogo from "/src/assets/enigma.jpg"
import iiitsLogo from "/src/assets/COLLEGE_LOGO_WHITE.png"

export const Footer = () => {



    return (
        <>
            <div className="footer-cover"></div>
            <footer className="footer">
                <div className="waves">
                    <div className="wave" id="wave1"></div>
                    <div className="wave" id="wave2"></div>
                    <div className="wave" id="wave3"></div>
                    <div className="wave" id="wave4"></div>
                </div>
                <ul className="menu">
                    <li className="menu__item">
                        <a className="menu__link" href="https://www.iiits.ac.in/">
                            <img src={iiitsLogo} alt="IIITS" />
                        </a>
                    </li>
                    <li className="menu__item">

                        <a className="menu__link" href="https://www.iiits.ac.in/">
                            <img src={iotaLogo} alt="IOTA" />
                        </a>
                    </li>
                    <li className="menu__item">

                        <a className="menu__link" href="https://www.iiits.ac.in/">
                            <img src={enigmaLogo} alt="IOTA" />
                        </a>
                    </li>
                    <li className="menu__item">

                        <a className="menu__link" href="https://www.iiits.ac.in/">
                            <img src={ggjLogo} alt="GGJ" />
                        </a>
                    </li>
                </ul>
                <p>&copy;2024 GGJ-IIITS | All Rights Reserved</p>
                <div className="bad-idea"></div>
            </footer>
        </>
    );
};

