import React from 'react'
import Lavazza from "../../src/assets/Lavazza-Logo.svg.png"
import Deeplink from "../../src/assets/deeplink-Logo.jpg"
import Imsk from "../../src/assets/Imsk-Logo.png"
import "./Sponsors.css"

export const Sponsors = () => {
    return (
        <div className='sponsors' >
            <h1>Our Sponsors</h1>
            <div className="sponsors-holder">
                <a href="https://www.lavazza.com/" target="_blank" rel="noopener noreferrer"><img src={Lavazza} alt="" /></a>
                <a href="https://deeplink.cloud/" target="_blank" rel="noopener noreferrer"><img src={Deeplink} alt="" /></a>
                <a href="http://imsk.net/" target="_blank" rel="noopener noreferrer"><img src={Imsk} alt="" /></a>



            </div>
        </div>
    )
}
