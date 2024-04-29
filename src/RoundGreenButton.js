import React from "react";
import "./button.css"

const RoundGreenButton = ({onClick}) =>{
    return(
        <button className="round-green-button" onClick={onClick}>+ Widget</button>
    )
}
export default RoundGreenButton;