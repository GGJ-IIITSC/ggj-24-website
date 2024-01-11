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
                        <a className="menu__link" href="#">
                            Home
                        </a>
                    </li>
                    <li className="menu__item">
                        <a className="menu__link" href="#about">
                            About
                        </a>
                    </li>
                    <li className="menu__item">
                        <a className="menu__link" href="#news">
                            News
                        </a>
                    </li>
                    <li className="menu__item">
                        <a className="menu__link" href="#schedule">
                            Schedule
                        </a>
                    </li>
                    <li className="menu__item">
                        <a className="menu__link" href="#register">
                            Register
                        </a>
                    </li>
                </ul>
                <p>&copy;2024 GGJ-IIITS | All Rights Reserved</p>
            </footer>
        </>
    );
};

