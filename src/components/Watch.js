import React from 'react'
import series from "../data";

export default function Watch(props) {
    const name = props.match.params.name;
    const id = props.match.params.id;
    const _id = parseInt(id.substr(1,2));
    const serie = name == "foundou" ? series[0] : name == "bara2a" ? series[1] : null;

    const url = name && id ? serie.episodes[_id-1].url : null;
    const title = name && id ? serie.name : null;
    const episode = name && id ? serie.episodes[_id-1].name : null;
    const quality = name && id ? serie.episodes[_id-1].quality : null;

  return (
    <div className='watch'>
        {
            url && title && episode && quality ? (
                <div className='container'>
                <h1>{title}</h1>
                <h3>{episode}({quality})</h3>
                <div className='player'>
                    <video ocontrols>
                        <source src={url} type="video/mp4"/>
                    </video>
                </div>
                </div>
            ) : (<div className="loading"></div>)
        }
    </div>
  )
}
