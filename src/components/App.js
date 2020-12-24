import React, {useState} from "react";
import "./App.css";
import CarouselComponentNew from "./CarouselComponentNew/CarouselCompoNew.jsx";

const App = (props)=>{

    return(
        <div className="appMainBox">
            <CarouselComponentNew 
                imageArr={props.store.imageArr_2} 
            />
        </div>
    )
}

export default App;