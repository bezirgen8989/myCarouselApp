import React, {useEffect, useState} from "react";
import './itemStyle.css'

const ItemsCompo = ({imageArr}) => {
    const [x, setX] = useState(0);
    const [transition, setTransition] = useState('1s ease');
    const [activeImage, setActiveImage] = useState(1);

    const [moving, setMoving] = useState(false);
    const [diff, setDiff] = useState(0);
    const [currentPosition, setCurrentPosition] = useState(0);


    const [move, setMove] = useState(0);
    const [initPosition, setInitPosition] = useState(0);

    let slideToRight = () => {
        if (activeImage === (imageArr.length + 1)) {
            setX(-100)
            setActiveImage(1)
        } else {
            setActiveImage(activeImage + 1)
            setX((activeImage + 1) * -100)
            setTransition('0.5s ease')
            // console.log(activeImage)
        }
    }
    let transitionEnd = () => {
        if (activeImage === (imageArr.length + 1)) {
            setX(-100);
            setActiveImage(1)
            setTransition('none');
        }
    }
    let itemBoxStyle = {
        transform: `translateX(${x}px)`,
        // transition: transition
    }
    console.log(diff)

    return (
        <div className={'carouselMainBox'} id={'track'}>

            {/*<div className='lastImg' style={itemBoxStyle}>*/}
            {/*    <img src={imageArr[imageArr.length - 1].imageURL} alt={imageArr[imageArr.length - 1].id}/>*/}
            {/*    <div><span className='info'>Name: {imageArr[imageArr.length - 1].info}</span></div>*/}
            {/*    <div><span className='info'>Likes: {imageArr[imageArr.length - 1].likesCount}</span></div>*/}
            {/*</div>*/}

            {imageArr.map((item, id) => (
                <div
                    key={id} className='itemBox'
                    style={itemBoxStyle}
                    onTouchStart={(e)=>{
                        setInitPosition(e.touches[0].clientX);
                        setMoving(true)
                    }}
                    onTouchMove={(e)=>{
                        if (moving) {
                            const currentPosition = e.touches[0].clientX;
                            setDiff(currentPosition - initPosition);
                            setX(diff)
                        }
                    }}
                    onTouchEnd={(e)=>{
                        setMoving(false)
                    }}

                    onMouseDown={(e) => {
                        setInitPosition(e.pageX);
                        setMoving(true);
                        const transformMatrix = window.getComputedStyle(document.getElementById('track').getPropertyValue('transform'))
                    }}

                    onMouseMove={(e) => {
                        if (moving) {
                            setCurrentPosition(e.pageX);
                            setDiff(currentPosition - initPosition);
                            setX(diff)
                        }
                    }}

                    onMouseUp={(e) => {
                        setMoving(false)
                    }}

                >
                    <img src={item.imageURL} alt={item.id}/>
                    <div><span className='info'>Name: {item.info}</span></div>
                    <div><span className='info'>Likes: {item.likesCount}</span></div>
                </div>
            ))}

            {/*<div className='firstImage' style={itemBoxStyle} onTransitionEndCapture={transitionEnd}>*/}
            {/*    <img src={imageArr[0].imageURL} alt={imageArr[0].id}/>*/}
            {/*    <div><span className='info'>Name: {imageArr[0].info}</span></div>*/}
            {/*    <div><span className='info'>Likes: {imageArr[0].likesCount}</span></div>*/}
            {/*</div>*/}
            <button className='right' onClick={slideToRight}>right</button>

        </div>
    )
}

export default ItemsCompo;