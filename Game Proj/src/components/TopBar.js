import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./TopBar.css"

export const TopBar = () => {
    return (
        
        <nav className ="Navbar">
            <div >
                <img src="/Images/GameLogo.png" alt="logo" className = "logo"/>
            </div>
            <ul >
                <li className="no_bull">
                <Link to="/Not" className="NoUnder">
                        <a className="NoUnder" href =''>  New Games</a>
                        </Link>
                </li>
                <li className="no_bull">
                    <Link to="/Not" className="NoUnder">
                    <a className="NoUnder" href="">Upload Games</a>
                    </Link>
                </li>
                <li className="no_bull">
                    <Link to="/Not" className="NoUnder">
                        <a className="NoUnder" href="">Multiplayer Games</a>
                        </Link>
                </li>
                <li className="no_bull">
                    <Link to="/Not" className="NoUnder">
                        <a className="NoUnder" href="">Puzzle Games</a>
                        </Link>
                </li>
                <li className="no_bull2">
                    <Link to="/" className="NoUnder2">
                        <a className="NoUnder2" href="">Salamander Games</a>
                        </Link>
                </li>
                
            </ul>
            </nav>
    )
}

export default TopBar;
