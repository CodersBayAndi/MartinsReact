import React from "react"
import ReactDOM from "react-dom"
import Map from "./components/Map"
import App from "./components/App"
import sunImage from "../src/images/clear.png"
import {createRoot} from "react-dom/client";

const root = createRoot(document.getElementById("root"));
root.render(<App/>);

