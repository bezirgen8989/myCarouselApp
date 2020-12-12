import React, {useEffect, useState} from 'react';
import './carouselNewStyle.css'
import ItemsCompo from "./ItemCompo/ItemCompo.jsx";

const CarouselComponentNew = (props) => {
    return (
        <div className='mainBox'>
            <h1>Carousel Component</h1>
            <ItemsCompo imageArr={props.imageArr}/>
        </div>
    )
}

export default CarouselComponentNew;