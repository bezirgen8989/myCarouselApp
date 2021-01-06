import React, {useEffect, useState} from 'react';
import "./App.css";
import Carousel from "./Carousel/Carousel.jsx";

const App = (props)=>{
    return(
        <div className="appMainBox">
            <Carousel imageArr={props.store.imageArr_2} />
        </div>
    )
}

export default App;