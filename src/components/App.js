import React, { lazy, Suspense } from "react";
import "./App.css";
import CarouselComponentNew from "./CarouselComponentNew/CarouselCompoNew.jsx";

const CarouselComponent = lazy(()=> import("./CarouselComponent/CarouselCompo.jsx"))

const App = (props)=>{
    return(
        <div className="appMainBox">
            {/*<Suspense fallback={<div>Loading data ...</div>}>*/}
            {/*    /!*<CarouselComponent imageArr={props.store.imageArr} />*!/*/}
            {/*    <CarouselComponent imageArr={props.store.imageArr_2}/>*/}
            {/*</Suspense>*/}
            <CarouselComponentNew imageArr={props.store.imageArr_2}/>
        </div>
    )
}

export default App;