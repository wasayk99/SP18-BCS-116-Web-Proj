import React from 'react'
import "./UnAvailable.css"
import image from "./404-error-background_23-2148110015.jpg"




export const NoGame = () => {
    return (
        <div className="Unavailable">
            <img src = {image} className="Unavailable"></img>
        </div>
    )
}

export default NoGame;


