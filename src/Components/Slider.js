import React, {useState} from 'react';
import dataSlider from "../Components/dataSlider";
import '../Styles/Slider.css';


export default function Slider() {
    return (
        <div className="container-slide">
            {dataSlider.map((obj, index) => {
                return (
                    <div className='slide'>
                        <img src={process.env.PUBLIC_URL + `/Images/img${index + 1}.jpg`}/> 
                    </div>
                )
            })}
        </div>
    )
}


