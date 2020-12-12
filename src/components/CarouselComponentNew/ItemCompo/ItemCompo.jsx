import React, {useState} from "react";
import './itemStyle.css'

const ItemsCompo = ({imageArr}) => {
    const [x, setX] = useState(-100);
    const [transition, setTransition] = useState('1s ease');
    const [activeImage, setActiveImage] = useState(1);
    const [move, setMove] = useState(0);

    let slideToRight = () => {
        if (activeImage === (imageArr.length+1)){
            setX(-100)
            setActiveImage(1)
        }else{
            setActiveImage(activeImage + 1)
            setX((activeImage + 1) * -100)
            setTransition('0.5s ease')
            // console.log(activeImage)
        }
    }
    let transitionEnd = ()=>{
        if (activeImage === (imageArr.length+1)){
            setX(-100);
            setActiveImage(1)
            setTransition('none');
        }
    }
    let itemBoxStyle = {
        transform: `translateX(${x}%)`,
        transition: transition
    }

    let startTouch = (e)=>{

    }

    let moveFoo = (e)=>{
        setMove(e.touches[0].clientX)
        if (move < e.touches[0].clientX){
            setX(x+1)
        }else if (move > e.touches[0].clientX){
            setX(x-1)
        }
    }

    return (
        <div className={'carouselMainBox'}
             onTouchMove={moveFoo}
             onTouchStart={startTouch}
        >

            <div className='lastImg' style={itemBoxStyle}>
                <img src={imageArr[imageArr.length - 1].imageURL} alt={imageArr[imageArr.length - 1].id}/>
                <div><span className='info'>Name: {imageArr[imageArr.length - 1].info}</span></div>
                <div><span className='info'>Likes: {imageArr[imageArr.length - 1].likesCount}</span></div>
            </div>

            {imageArr.map((item, id) => (
                <div key={id} className='itemBox' style={itemBoxStyle} >
                    <img src={item.imageURL} alt={item.id}/>
                    <div><span className='info'>Name: {item.info}</span></div>
                    <div><span className='info'>Likes: {item.likesCount}</span></div>
                </div>
            ))}

            <div className='firstImage' style={itemBoxStyle} onTransitionEndCapture={transitionEnd}>
                <img src={imageArr[0].imageURL} alt={imageArr[0].id}/>
                <div><span className='info'>Name: {imageArr[0].info}</span></div>
                <div><span className='info'>Likes: {imageArr[0].likesCount}</span></div>
            </div>
            <button className='right' onClick={slideToRight}>right</button>

        </div>
    )
}

export default ItemsCompo;