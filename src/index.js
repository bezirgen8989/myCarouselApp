import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App.js";
import store from "./storeDir/store.js";
ReactDOM.render(<App store={store}/>, document.getElementById("root"));