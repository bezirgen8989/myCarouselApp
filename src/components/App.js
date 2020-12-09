import React, { lazy, Suspense } from "react";
import "./App.css";
//import CarouselComponentHOC from "./CarouselComponentHOC/CarouselCompoHOC.jsx";

const CarouselComponentHOC = lazy(()=> import("./CarouselComponentHOC/CarouselCompoHOC.jsx"))

const App = (props)=>{
    return(
        <div className="appMainBox">
            <Suspense fallback={<div>Loading data ...</div>}>
                <CarouselComponentHOC imageArr={props.store.imageArr} />
                <CarouselComponentHOC imageArr={props.store.imageArr_2}/>
            </Suspense>

        </div>
    )
}

export default App;