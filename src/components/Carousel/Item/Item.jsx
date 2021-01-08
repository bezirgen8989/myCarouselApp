import React, {useEffect, useRef} from "react";
import './item.css'

const Items = (props) => {
    let styleWidth = useRef(0);
    useEffect(() => {
        return (
            props.setBoxWidthStyle(-styleWidth.current.clientWidth)
        )
    }, [])

    return (
        <div className={'carouselMainBox'} ref={styleWidth}>

            <div
                className='lastImg'
                style={props.boxStyles} draggable={'false'}
                onTransitionEnd={props.transitionForLastImg}>
                {props.itemsArr[props.itemsArr.length - 1].imageURL}
                <div><span className='info'>Name: {props.itemsArr[props.itemsArr.length - 1].info}</span></div>
                <div><span className='info'>Likes: {props.itemsArr[props.itemsArr.length - 1].likesCount}</span>
                </div>
            </div>

            {props.itemsArr.map((item, id) => (
                <div
                    key={id} className='itemBox'
                    style={props.activeImage === id ? props.boxStylesActive : props.boxStyles}
                    draggable={'false'}

                    onMouseDown={props.swipeMoveStart}
                    onMouseMove={props.swipeMove}
                    onMouseUp={props.swipeMoveEnd}

                    onTouchStart={props.swipeMoveStart}
                    onTouchMove={props.swipeMove}
                    onTouchEnd={props.swipeMoveEnd}
                >
                    {item.imageURL}
                    <div><span className='info'>Name: {item.info}</span></div>
                    <div><span className='info'>Likes: {item.likesCount}</span></div>
                </div>
            ))}

            <div className='firstImage' style={props.boxStyles}
                 onTransitionEnd={props.transitionForFirstImg} draggable={'false'}>
                {props.itemsArr[0].imageURL}
                <div><span className='info'>Name: {props.itemsArr[0].info}</span></div>
                <div><span className='info'>Likes: {props.itemsArr[0].likesCount}</span></div>
            </div>
        </div>
    )
}

export default Items;