import React from "react";
import "./Footer.css"; // Import the corresponding CSS file

export const Footer = () => {

    const scrollToSection = (e) => {
        e.preventDefault();
        const targetId = e.target.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            const offset = 50;
            const targetPosition = targetElement.offsetTop - offset;
            window.scrollTo({
                top: targetPosition,
                behavior: "smooth"
            });
        }
    };

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
                        <a className="menu__link" href="#about" onClick={scrollToSection}>
                            About
                        </a>
                    </li>
                    <li className="menu__item">
                        <a className="menu__link" href="#news" onClick={scrollToSection}>
                            News
                        </a>
                    </li>
                    <li className="menu__item">
                        <a className="menu__link" href="#schedule" onClick={scrollToSection}>
                            Schedule
                        </a>
                    </li>
                    <li className="menu__item">
                        <a className="menu__link" href="#register" onClick={scrollToSection}>
                            Register
                        </a>
                    </li>
                </ul>
                <p>&copy;2024 GGJ-IIITS | All Rights Reserved</p>
            </footer>
        </>
    );
};

