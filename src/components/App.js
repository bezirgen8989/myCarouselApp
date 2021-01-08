import React, {useEffect} from 'react';
import "./App.css";
import Carousel from "./Carousel/Carousel.jsx";
import img5 from "../../img/cat-feline-back-simple-background-artwork-digital-art-minima.jpg";
import img7 from "../../img/girl-red-eyes-white-hair-long-hair-necklace-dark-simple-back.jpg";
import img3 from "../../img/gorod-minimalizm-reka-otrazhenie-noch-nochnoi-gorod.jpg";


const itemsArr = [
    { id: 0, imageURL: <a>Example link</a>, info: 'test', likesCount: Math.round(Math.random()*5 ) },
    { id: 1, imageURL: <img src={img5} alt={'cat-feline-back-simple-background-artwork'} draggable={'false'}/>, info: 'sipukha', likesCount: Math.round(Math.random()*5 ) },
    { id: 2, imageURL: <h1>Header 1</h1>, info: 'Header 1', likesCount: Math.round(Math.random()*5 ) },
    { id: 3, imageURL: <img src={img7} alt={'girl-red-eyes-white'} draggable={'false'}/>, info: 'sipukha', likesCount: Math.round(Math.random()*5 ) },
    { id: 4, imageURL: <img src={img3} alt={'city-minimalism-river'} draggable={'false'}/>, info: 'sipukha', likesCount: Math.round(Math.random()*5 ) },
    { id: 5, imageURL: <h2>Header 2</h2>, info: 'Header 2', likesCount: Math.round(Math.random()*5 ) },
    { id: 6, imageURL:
            <video controls width="800" height="400" preload="none" draggable={'false'} autoPlay={'autoplay'}>
                <source src="/video/simon_fly.mp4" type="video/mp4"/>
            </video>

        , info: 'video', likesCount: Math.round(Math.random()*5 ) },
]

const App = (props)=>{
    return(
        <div className="appMainBox">
            <Carousel itemsArr={itemsArr} />
        </div>
    )
}

export default App;