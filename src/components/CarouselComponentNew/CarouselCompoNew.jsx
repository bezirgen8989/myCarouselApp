import React, {useEffect, useState} from 'react';
import './carouselNewStyle.css'
import ItemsCompo from "./ItemCompo/ItemCompo.jsx";
import DotsCompo from "./DotsCompo/DotsCompo.jsx";

const CarouselComponentNew = (props) => {
    return (
        <div className='mainBox'>
            <h1>Carousel Component</h1>
            <ItemsCompo
                boxStylesActive={props.boxStylesActive}
                imageArr={props.imageArr}
                boxStyles={props.boxStyles}
                setTranslateX={props.setTranslateX}
                setActiveImage={props.setActiveImage}
                activeImage={props.activeImage}
                transitionForLastImg={props.transitionForLastImg}
                moveStartFoo={props.moveStartFoo}
                moveFoo={props.moveFoo}
                moveEndFoo={props.moveEndFoo}
                transitionForFirstImg={props.transitionForFirstImg}
                setTransition={props.setTransition}
                setBoxWidthStyle={props.setBoxWidthStyle}
            />

            <DotsCompo
                imageArr={props.imageArr}
                dotsFoo={props.dotsFoo}
                activeImage={props.activeImage}
            />
        </div>
    )
}

export default CarouselComponentNew;