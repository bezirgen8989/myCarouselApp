import React, {useEffect, useRef, useState} from "react";
import './itemStyle.css'
import DotsCompo from "../DotsCompo/DotsCompo.jsx";

const ItemsCompo = (props) => {
    let styleWidth = useRef();
    useEffect(() => {
        return (
            props.setBoxWidthStyle(-styleWidth.current.clientWidth)
        )
    }, [])

    return (
        <div className={'carouselMainBox'}
             ref={styleWidth}
             onMouseDown={props.moveStartFoo}
             onMouseMove={props.moveFoo}
             onMouseUp={props.moveEndFoo}

             onTouchStart={props.moveStartFoo}
             onTouchMove={props.moveFoo}
             onTouchEnd={props.moveEndFoo}
        >

            <div
                className='lastImg'
                style={props.boxStyles}
                onTransitionEnd={props.transitionForLastImg}>
                <img src={props.imageArr[props.imageArr.length - 1].imageURL}
                     alt={props.imageArr[props.imageArr.length - 1].id} draggable={"false"}/>
                <div><span className='info'>Name: {props.imageArr[props.imageArr.length - 1].info}</span></div>
                <div><span className='info'>Likes: {props.imageArr[props.imageArr.length - 1].likesCount}</span>
                </div>
            </div>

            {props.imageArr.map((item, id) => (
                <div
                    key={id} className='itemBox'
                    // style={props.boxStyles}
                    style={props.activeImage === id
                        ? props.boxStylesActive : props.boxStyles

                    }
                >
                    <img src={item.imageURL} alt={item.id} draggable={"false"}/>
                    <div><span className='info'>Name: {item.info}</span></div>
                    <div><span className='info'>Likes: {item.likesCount}</span></div>
                </div>
            ))}

            <div className='firstImage' style={props.boxStyles}
                 onTransitionEnd={props.transitionForFirstImg}>
                <img src={props.imageArr[0].imageURL} alt={props.imageArr[0].id} draggable={"false"}/>
                <div><span className='info'>Name: {props.imageArr[0].info}</span></div>
                <div><span className='info'>Likes: {props.imageArr[0].likesCount}</span></div>
            </div>
        </div>
    )
}

export default ItemsCompo;