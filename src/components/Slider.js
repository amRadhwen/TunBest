import React from 'react'
import 'react-slideshow-image/dist/styles.css';
import { Slide } from "react-slideshow-image";

const Slider = () => {

    const images = [
        {
            url: `${process.env.PUBLIC_URL}/assets/images/foundou.jpg`,
            caption: "El Foundou"
        },
        {
            url: `${process.env.PUBLIC_URL}/assets/images/bara2a.jpg`,
            caption: "براءة"
        }
    ]

    return (
        <div>
            <Slide easing="ease">
                <div className="each-slide">
                    <div style={{ 'backgroundImage': `url(${images[0].url})` }}>
                        <span>{images[0].caption}</span>
                    </div>
                </div>
                <div className="each-slide">
                    <div style={{ 'backgroundImage': `url(${images[1].url})` }}>
                        <span>{images[0].caption}</span>
                    </div>
                </div>
            </Slide>
        </div>
    )
}

export default Slider;