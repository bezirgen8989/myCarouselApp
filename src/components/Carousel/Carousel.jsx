import React, {useEffect, useState} from 'react';
import './carousel.css'
import Items from "./Item/Item.jsx";
import Dots from "./Dots/Dots.jsx";

const CarouselComponentNew = (props) => {
    const [boxWidthStyle, setBoxWidthStyle] = useState(0);
    //swipe states
    const [translateX, setTranslateX] = useState(0);
    const [transition, setTransition] = useState('0.5s');
    const [activeImage, setActiveImage] = useState(0);
    // mose event states
    const [initPosition, setInitPosition] = useState(0);
    const [mouseMove, setMouseMove] = useState(false);
    const [transform, setTransform] = useState(0);

    useEffect(()=>{
        return (
            setTransition('none'),
                setTranslateX(boxWidthStyle)
        )
    },[boxWidthStyle])

    let boxStyles = {
        transform: `translateX(${translateX}px)`,
        transition: transition,
        opacity: 0.5
    }
    let boxStylesActive = {
        transform: `translateX(${translateX}px)`,
        transition: transition,
        opacity: 1
    }

    let slideToRight = () => {
        setActiveImage(activeImage + 1)
        setTranslateX((activeImage + 2) * boxWidthStyle);
        setTransition('0.5s');
    }
    let slideToLeft = () => {
        setActiveImage(activeImage - 1)
        setTranslateX((activeImage) * boxWidthStyle);
        setTransition('0.5s');
    }

    const swipeMoveStart = (event)=>{
        if (event.type === "mousedown"){
            setInitPosition(event.pageX);
            setMouseMove(true);
            setTransition('none')
            const transformMemory = window.getComputedStyle(document.querySelector('.itemBox')).getPropertyValue('transform');
            if (transformMemory !== 'none'){
                setTransform(parseInt(transformMemory.split(',')[4].trim()))
            }
        }else if (event.type === "touchstart"){
            setInitPosition(event.targetTouches[0].clientX);
            setMouseMove(true);
            setTransition('none')
            const transformMemory = window.getComputedStyle(document.querySelector('.itemBox')).getPropertyValue('transform');
            if (transformMemory !== 'none'){
                setTransform(parseInt(transformMemory.split(',')[4].trim()))
            }
        }
    }
    const swipeMove = (event)=>{
        if (event.type === "touchmove"){
            if(mouseMove){
                let currentPos = event.targetTouches[0].clientX;
                let diff = currentPos - initPosition;
                setTranslateX(transform + diff)
            }
        } else if (event.type === "mousemove"){
            if(mouseMove){
                let currentPos = event.pageX;
                let diff = currentPos - initPosition;
                setTranslateX(transform + diff)
            }
        }
    }
    const swipeMoveEnd = (event)=>{
        if (event.type === "mouseup"){
            setTransition('0.5s')
            setMouseMove(false);
            if(event.pageX < initPosition){
                slideToRight();
            }else if(event.pageX > initPosition){
                slideToLeft();
            }
        }else if (event.type === "touchend"){
            setTransition('0.5s')
            setMouseMove(false);
            if(event.changedTouches[0].clientX < initPosition){
                slideToRight();
            }else if(event.changedTouches[0].clientX > initPosition){
                slideToLeft();
            }
        }
        console.log(activeImage)
    }

    let transitionForLastImg = () => {
        setTransition('none');
        if (activeImage === -1) {
            setTranslateX(props.itemsArr.length * boxWidthStyle)
            setActiveImage(props.itemsArr.length-1)
        }
    }
    let transitionForFirstImg = () => {
        setTransition('none');
        if (translateX <= boxWidthStyle * (props.itemsArr.length + 1)) {
            setTranslateX(boxWidthStyle)
            setActiveImage(0)
        }
    }
    let dotsFoo = (imageId) => {
        if (imageId <= 1){
            setTranslateX((imageId + 1) * boxWidthStyle)
        }else{
            setTranslateX((imageId+1) * boxWidthStyle)
        }
        setActiveImage(imageId)
        setTransition('0.5s');
    }
    return (
        <div className='mainBox'>
            <h1>Carousel Component</h1>
            <Items
                boxStylesActive={boxStylesActive}
                boxStyles={boxStyles}
                itemsArr={props.itemsArr}
                setTranslateX={setTranslateX}
                setActiveImage={setActiveImage}
                activeImage={activeImage}
                transitionForLastImg={transitionForLastImg}
                swipeMoveStart={swipeMoveStart}
                swipeMove={swipeMove}
                swipeMoveEnd={swipeMoveEnd}
                transitionForFirstImg={transitionForFirstImg}
                setTransition={setTransition}
                setBoxWidthStyle={setBoxWidthStyle}
            />

            <Dots
                itemsArr={props.itemsArr}
                dotsFoo={dotsFoo}
                activeImage={activeImage}
            />
        </div>
    )
}

export default CarouselComponentNew;