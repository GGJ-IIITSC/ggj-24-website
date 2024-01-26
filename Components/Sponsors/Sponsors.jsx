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
                <img src={Lavazza} alt="" /><img src={Deeplink} alt="" /><img src={Imsk} alt="" />
            </div>
        </div>
    )
}
