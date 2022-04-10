import React from 'react'
import { v1 as uuid } from "uuid";
import { Slide } from "react-slideshow-image";

export default function Serie({ serie }) {
    const swidth = window.screen.width;
    const style = {
        textAlign: 'center',
        fontSize: '30px'
    };

    const properties = {
        duration: 3000,
        slidesToShow: swidth > 400 ? 4 : 1,
        slidesToScroll: 1,
        autoplay: false,
        indicators: true,
    };

    const handleVisibility = (e) => {
        if (e.target.id == "ep-desc")
            e.target.style.visibility = "visible";
        else
            e.target.children[1].style.visibility = "visible";
    }

    const ReverseVisibility = (e) => {
        if (e.target.id == "ep-desc")
            e.target.style.visibility = "hidden";
        else
            e.target.children[1].style.visibility = "hidden";
    }

    const handleClick = (e, id) => {
        const name = id.startsWith("f") ? "foundou" : id.startsWith("b") ? "bara2a" : "blablabla";
        window.location.assign(`/watch/${name}/${id}`)
    }

    return (
        <div className='serie'>
            <h1>{serie.name}</h1>
            <Slide easing={"ease"} {...properties}>
                {
                    serie ? serie.episodes.map(episode => {
                        return (
                            <div onClick={(e) => { handleClick(e, episode.id) }} onMouseOutCapture={ReverseVisibility} onMouseOverCapture={handleVisibility} className="each-slide episode" style={style}>
                                <div style={{ 'backgroundImage': `url(${process.env.PUBLIC_URL}${episode.cover})` }}>
                                    <div className='hidden'></div>
                                    <span id="ep-desc">{episode.name} ({episode.quality})</span>
                                </div>
                            </div>
                        )
                    }) : null
                }
            </Slide>
        </div>
    )
}
