import React, { useState } from 'react';
import './carouselStyle.css'

const CarouselComponent = ({ imageArr }) => {
    const [x, setX] = useState(-102)
    const [transition, setTransition] = useState('0.5s ease')
    const [activeImage, setActiveImage] = useState(0)
    const [startTouch, setStartTouch] = useState(0)
    const [moveTouch, setMoveTouch] = useState(0)
    const [btnDisabling, setBtnDisabling] = useState(false)


    let rightFoo = () => {
        activeImage === (imageArr.length - 1) ? setActiveImage(0) : setActiveImage(activeImage + 1)
        setX((activeImage + 2) * -102);
        setTransition('0.3s ease');
        setBtnDisabling(true)
    }

    let leftFoo = () => {
        activeImage === 0 ? setActiveImage(imageArr.length - 1) : setActiveImage(activeImage - 1)
        if ((activeImage + 2) * -102 <= -102) {
            setX(activeImage * -102)
            setTransition('0.3s ease');
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
        if (x <= -102 * (imageArr.length + 1)) {
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
            setX(x + 0.5);
        } else if (moveTouch > event.touches[0].clientX) {
            setX(x - 0.5);
        }
    }

    let touchEnd = (event) => {
        if (event.changedTouches[0].clientX < startTouch) {
            rightFoo();
        } else if (event.changedTouches[0].clientX > startTouch) {
            leftFoo();
        }
    }

    return (
        <div className='mainBox'>
            <h1>Carousel Component</h1>
            <div
                className={'carouselMainBox'}
                onTouchStart={touchStart}
                onTouchEnd={touchEnd}
            >
                <img
                    src={imageArr[imageArr.length - 1].imageURL}
                    onTransitionEnd={transitionEndFooForEnd}
                    alt={imageArr[imageArr.length - 1].id}
                    style={{ transform: `translateX(${x}%)`, transition: transition, opacity: 0.2 }}
                />
                {imageArr.map((item, id) => {
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
                    src={imageArr[0].imageURL}
                    alt={imageArr[0].id}
                    style={{ transform: `translateX(${x}%)`, transition: transition, opacity: 0.2 }}
                />
                <button id='left' onClick={leftFoo} disabled={btnDisabling}></button>
                <button id='right' onClick={rightFoo} disabled={btnDisabling}></button>
            </div>
            <br />
            <div className='dotsBox'>
                {
                    imageArr.map((items, id) => {
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