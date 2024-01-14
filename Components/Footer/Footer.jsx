import React from "react";
import "./Footer.css"; // Import the corresponding CSS file

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
                            <img src="/src/assets/COLLEGE_LOGO_WHITE.png" alt="IIITS" />
                        </a>
                    </li>
                    <li className="menu__item">

                        <a className="menu__link" href="https://www.iiits.ac.in/">
                            <img src="/src/assets/iota_logo.png" alt="IIITS" />
                        </a>
                    </li>
                    <li className="menu__item">

                        <a className="menu__link" href="https://www.iiits.ac.in/">
                            <img src="/src/assets/ggj00-roundlogo-900x900.png" alt="IIITS" />
                        </a>
                    </li>
                </ul>
                <p>&copy;2024 GGJ-IIITS | All Rights Reserved</p>
            </footer>
        </>
    );
};

