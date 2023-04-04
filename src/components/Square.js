import React from "react"
import "../style.css"
let square = document.getElementById("root")


export default function Square(props){
    return (
        <div className={props.color} id={props.id} >{props.temp}</div>
    )
}