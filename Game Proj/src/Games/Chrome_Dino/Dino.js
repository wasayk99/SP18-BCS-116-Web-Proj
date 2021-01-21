import React from 'react'
import './Dino.css'
import createClass from 'create-react-class';
//<script src="script.js"/>
var character = document.getElementById("character");
function jump(){
    
    character.classList.add(" animate");
    setTimeout(function(){
        character.classList.remove("animate");
    },300);
}

export const Dino = () => {
    return (
        <div onClick={ this.jump()}>

        <div class="game" >
            <div id="character  " ></div>
            <div id="block"></div>
        </div>
        <p>Score: <span id="scoreSpan"></span></p>
        
            
        </div>
    )
}

export default Dino;
