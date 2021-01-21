import React from 'react'
import Snake from './GameIcons/Snake.png'
import MS from './GameIcons/MineSweep.png'
import Tic from './GameIcons/TicTacToe.png'
import './MainPage.css';
import BG from "./GameIcons/BG.jpg";

import { Link } from 'react-router-dom';

export const MainPage = () => {
    return (
        <div  >
            <div className="BG">
            <Link to="/Snake" >
            <div className="Card">
                <img src={Snake} alt="Snake Xenzia" className="GameLogo" />
                <h2 className="Name">Snake Xenzia</h2>
                </div>
                </Link>
            <Link to="/MS" >
            <div className="Card">
                <img src={MS} alt="MineSweeper" className="GameLogo" />
                <h2 className="Name">MineSweeper</h2>
                </div>
                </Link>
            <Link to="/ticTacToe" >
            <div className="Card">
                <img src={Tic} alt="Tic Tac Toe" className="GameLogo" />
                <h2 className="Name">Tic Tac Toe</h2>
                </div>
                </Link>

            

            </div>
        </div>
    )
}

export default MainPage;
