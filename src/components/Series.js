import React from 'react'
import Serie from './Serie'
import _series from "../data";


const Series = () => {
    return (
        <div className='series'>
            <Serie serie={_series[0]} />
            <Serie serie={_series[1]} />
        </div>
    )
}

export default Series;