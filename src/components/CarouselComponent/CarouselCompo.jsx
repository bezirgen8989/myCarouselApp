import React, {useEffect, useMemo, useState} from 'react';
import './carouselStyle.css'

const CarouselComponent = (props) => {
    const [x, setX] = useState(-102)
    const [transition, setTransition] = useState('0.5s ease')
    const [activeImage, setActiveImage] = useState(0)
    const [startTouch, setStartTouch] = useState(0)
    const [moveTouch, setMoveTouch] = useState(0)
    const [btnDisabling, setBtnDisabling] = useState(false)

    let rightFoo = () => {
        activeImage === (props.imageArr.length - 1) ? setActiveImage(0) : setActiveImage(activeImage + 1)
        setX((activeImage + 2) * -102);
        setTransition('0.5s ease');
        setBtnDisabling(true)
    }

    let leftFoo = () => {
        activeImage === 0 ? setActiveImage(props.imageArr.length - 1) : setActiveImage(activeImage - 1)
        if ((activeImage + 2) * -102 <= -102) {
            setX(activeImage * -102)
            setTransition('0.5s ease');
        }
        setBtnDisabling(true)
    }

    let dotsFoo = (imageId) => {
        setActiveImage(imageId);
        setX((imageId + 1) * -102);
        setTransition('0.3s ease');
    }

    let transitionEndFoo = () => {
        setTransition('none');
        if (x <= -102 * (props.imageArr.length + 1)) {
            setX(-102)
        }
        setBtnDisabling(false)
    }

    let transitionEndFooForEnd = () => {
        setTransition('none');
        if (x >= (-102) && x === 0) {
            setX((activeImage + 1) * -102)
        }
    }

    let touchStart = (event) => {
        setStartTouch(event.touches[0].clientX)
    }

    let touchMove = (event) => {
        setMoveTouch(event.touches[0].clientX);
        if (moveTouch < event.touches[0].clientX) {
            setX(x + 2);
            setTransition('1s ease');
        } else if (moveTouch > event.touches[0].clientX) {
            setX(x - 2);
            setTransition('1s ease');
        }
    }

    let touchEnd = (event) => {
        if (event.changedTouches[0].clientX < startTouch) {
            rightFoo();
        } else if (event.changedTouches[0].clientX > startTouch) {
            leftFoo();
        }
    }
    useEffect(()=>{
        console.log ('component did mount')
    },[])

    console.log ('render')

    return (
        <div className='mainBox'>
            <h1>Carousel Component</h1>
            <div
                className={'carouselMainBox'}
                onTouchStart={touchStart}
                onTouchEnd={touchEnd}
            >
                <img
                    src={props.imageArr[props.imageArr.length - 1].imageURL}
                    onTransitionEnd={transitionEndFooForEnd}
                    alt={props.imageArr[props.imageArr.length - 1].id}
                    style={{
                        transform: `translateX(${x}%)`,
                        transition: transition,
                        opacity: activeImage === props.imageArr.length - 1 ? 1 : 0.2
                    }}
                />
                {props.imageArr.map((item, id) => {
                    return (
                        <img
                            key={item.id}
                            src={item.imageURL}
                            alt={item.id}
                            style={activeImage === id
                                ? { transform: `translateX(${x}%)`, transition: transition, opacity: 1, }
                                : { transform: `translateX(${x}%)`, transition: transition, opacity: 0.2 }}
                            onTouchMove={touchMove}
                        />
                    )
                })}

                <img
                    onTransitionEnd={transitionEndFoo}
                    src={props.imageArr[0].imageURL}
                    alt={props.imageArr[0].id}
                    style={{
                        transform: `translateX(${x}%)`,
                        transition: transition,
                        opacity: activeImage === props.imageArr[0].id ? 1 : 0.2 }}
                />
                <button id='left' onClick={leftFoo} disabled={btnDisabling}></button>
                <button id='right' onClick={rightFoo} disabled={btnDisabling}></button>
            </div>
            <br />
            <div className='dotsBox'>
                {
                    props.imageArr.map((items, id) => {
                        return (
                            <span
                                onClick={() => { dotsFoo(id) }}
                                key={items.id}
                                className={id === activeImage ? 'dots_active' : 'dots'}
                            ></span>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default CarouselComponent;