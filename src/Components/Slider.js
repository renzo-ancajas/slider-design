import { useState } from "react";
import dataSlider from "../Components/dataSlider";
import '../Styles/Slider.css';
import BtnSlider from "./BtnSlider";

export default function Slider() {
    const [slideIndex, setSlideIndex] = useState(1);

    const nextSlide = () => {
        if (slideIndex !== dataSlider.length){
            setSlideIndex(slideIndex +1)
        }
        else if (slideIndex === dataSlider.length){
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if (slideIndex !== 1){
            setSlideIndex(slideIndex -1)
        }
        else if (slideIndex === 1) {
            setSlideIndex (dataSlider.length)
        }
    }

    const goToDot = index => {
        setSlideIndex(index)
    }

    return (
        <div className="container-slider">
            {dataSlider.map((obj, index) => { 
                return (

                    <div key={obj.id}
                    className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
                    >
                        <p className="text-style">{obj.title}</p>
                        <img src={"http://localhost:3000" + `/Imgs/img${index + 1}.jpg`} alt="animals"/>
                        <p className="text-style">{obj.subTitle}</p>
                    </div>
                )
            })}
            <BtnSlider moveSlide={nextSlide} direction={"next"}/>
            <BtnSlider moveSlide={prevSlide} direction={"prev"}/>

            <div className="container-dots">
                {Array.from({length: 5}).map((item, index) => 
                    (
                        <div
                        onClick={() => goToDot(index +1)}
                        className={slideIndex === index + 1 ? "dot active" : "dot"}
                        ></div>
                    ))}
            </div>
        </div>
    )
}


