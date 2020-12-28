import React, {useEffect, useState} from 'react';
import "./App.css";
import CarouselComponentNew from "./CarouselComponentNew/CarouselCompoNew.jsx";

const App = (props)=>{
    const [boxWidthStyle, setBoxWidthStyle] = useState(0);
    //swipe states
    const [translateX, setTranslateX] = useState(0);
    const [transition, setTransition] = useState('0.5s ease-in-out');
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
        opacity: 0.2
    }
    let boxStylesActive = {
        transform: `translateX(${translateX}px)`,
        transition: transition,
        opacity: 1
    }

    let slideToRight = () => {
        setActiveImage(activeImage + 1)
        setTranslateX((activeImage + 2) * boxWidthStyle);
        setTransition('0.5s ease');
    }
    let slideToLeft = () => {
        setActiveImage(activeImage - 1)
        setTranslateX((activeImage) * boxWidthStyle);
        setTransition('0.5s ease');
    }

    const moveStartFoo = (event)=>{
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
    const moveFoo = (event)=>{
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
    const moveEndFoo = (event)=>{
        if (event.type === "mouseup"){
            setTransition('0.5s ease-in-out')
            setMouseMove(false);
            if(event.pageX < initPosition){
                slideToRight();
            }else if(event.pageX > initPosition){
                slideToLeft();
            }
        }else if (event.type === "touchend"){
            setTransition('0.5s ease-in-out')
            setMouseMove(false);
            if(event.changedTouches[0].clientX < initPosition){
                slideToRight();
            }else if(event.changedTouches[0].clientX > initPosition){
                slideToLeft();
            }
        }
    }

    let transitionForLastImg = () => {
        setTransition('none');
        if (activeImage === -1) {
            setTranslateX(props.store.imageArr_2.length * boxWidthStyle)
            setActiveImage(props.store.imageArr_2.length-1)
        }
    }
    let transitionForFirstImg = () => {
        setTransition('none');
        if (translateX <= boxWidthStyle * (props.store.imageArr_2.length + 1)) {
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
        setTransition('0.5s ease');
    }

    return(
        <div className="appMainBox">
            <CarouselComponentNew
                imageArr={props.store.imageArr_2}
                boxStyles={boxStyles}
                boxStylesActive={boxStylesActive}
                setTranslateX={setTranslateX}
                setActiveImage={setActiveImage}
                activeImage={activeImage}
                transitionForLastImg={transitionForLastImg}
                moveStartFoo={moveStartFoo}
                moveFoo={moveFoo}
                moveEndFoo={moveEndFoo}
                transitionForFirstImg={transitionForFirstImg}
                setTransition={setTransition}
                setBoxWidthStyle={setBoxWidthStyle}
                dotsFoo={dotsFoo}
            />
        </div>
    )
}

export default App;