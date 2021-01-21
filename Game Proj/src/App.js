//import './App.css';
import './components/TopBar.css'
import MainPage from './components/MainPage';
import NoGame from './Unavailable/NoGame'
import SnakeGame from './Games/Snake/SnakeGame'
import TopBar from './components/TopBar';
import Game from './Games/TicTacToe/Game'
import MS from './Games/MineSweeper/MS'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import "./components/TopBar.css"

function App() {
  return (
    <div >
      
            
        
      <Router>
        <div className="Whole">
          <TopBar />\
          </div>
        <Switch>
          <Route path="/" exact component={MainPage} />
          <Route path="/Not" exact component={NoGame} />
          <Route path="/Snake" exact component={SnakeGame} />
          <Route path="/ticTacToe" exact component={Game} />
          <Route path="/MS" exact component={MS} />
          
          
        </Switch>
        </Router>
    </div>
  );
}

export default App;
