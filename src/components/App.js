import React, { lazy, Suspense } from "react";
import "./App.css";
//import CarouselComponentHOC from "./CarouselComponentHOC/CarouselCompoHOC.jsx";

const CarouselComponent = lazy(()=> import("./CarouselComponent/CarouselCompo.jsx"))

const App = (props)=>{
    return(
        <div className="appMainBox">
            <Suspense fallback={<div>Loading data ...</div>}>
                <CarouselComponent imageArr={props.store.imageArr} />
                <CarouselComponent imageArr={props.store.imageArr_2}/>
            </Suspense>

        </div>
    )
}

export default App;