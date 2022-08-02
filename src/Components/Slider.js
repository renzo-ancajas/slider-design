import dataSlider from "../Components/dataSlider";
import '../Styles/Slider.css';

export default function Slider() {
    return (
        <div className="container-slider">
            {dataSlider.map((obj, index) => {
                return (
                    <div className='slide'>
                        <img src={"http://localhost:3000" + `/Imgs/img${index + 1}.jpg`} alt="animals"/>
                    </div>
                )
            })}
        </div>
    )
}


