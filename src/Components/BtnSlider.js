import React from "react";
import '../Styles/Slider.css';

import leftArrow from '../Icons/left-arrow.svg';

import rightArrow from '../Icons/right-arrow.svg';


export default function BtnSlider({moveSlide, direction}) {
    console.log(moveSlide, direction)
    return(
        <button className={direction === "next" ? 'btn-slide next' : "btn-slide prev"} onClick={moveSlide}>
            <img src={direction === "next" ? rightArrow : leftArrow}/>
        </button>
    )
}