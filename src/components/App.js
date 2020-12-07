import React, { lazy, Suspense } from "react";
import "./App.css";
//import CarouselComponent from "./CarouselComponent/CarouselComponent.jsx"

const CarouselComponent = lazy(()=> import("./CarouselComponent/CarouselComponent.jsx"))

const App = (props)=>{
    return(
        <div className="appMainBox">
            <Suspense fallback={<div>Loading data ...</div>}>
                <CarouselComponent imageArr={props.store.imageArr} />
            </Suspense>
        </div>
    )
}

export default App;