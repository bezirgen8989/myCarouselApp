import React from 'react';
import "./App.css";
import Carousel from "./Carousel/Carousel.jsx";
import img5 from "../../img/cat-feline-back-simple-background-artwork-digital-art-minima.jpg";
import img7 from "../../img/girl-red-eyes-white-hair-long-hair-necklace-dark-simple-back.jpg";
import img3 from "../../img/gorod-minimalizm-reka-otrazhenie-noch-nochnoi-gorod.jpg";

const elementsArr = [
    { id: 0, element: <a>Example link</a>, info: 'test', likesCount: Math.round(Math.random()*5 ) },
    { id: 1, element: <img src={img5} alt={'cat-feline-back-simple-background-artwork'} draggable={'false'}/>, info: 'sipukha', likesCount: Math.round(Math.random()*5 ) },
    { id: 2, element: <h1>Header 1</h1>, info: 'Header 1', likesCount: Math.round(Math.random()*5 ) },
    { id: 3, element:
            <video controls width="800" height="400" preload="none" draggable={'false'}>
                <source src="/video/simon_fly.mp4" type="video/mp4"/>
            </video>,
        info: 'simon_fly', likesCount: Math.round(Math.random()*5 ) },
    { id: 4, element: <img src={img7} alt={'girl-red-eyes-white'} draggable={'false'}/>, info: 'sipukha', likesCount: Math.round(Math.random()*5 ) },
    { id: 5, element: <img src={img3} alt={'city-minimalism-river'} draggable={'false'}/>, info: 'sipukha', likesCount: Math.round(Math.random()*5 ) },
    { id: 6, element: <h2>Header 2</h2>, info: 'Header 2', likesCount: Math.round(Math.random()*5 ) },

]

const App = ()=>{
    return(
        <div className="appMainBox">
            <Carousel elementsArr={elementsArr} />
        </div>
    )
}

export default App;