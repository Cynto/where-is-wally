import { useState } from 'react';
import HomePage from './components/homepage/HomePage';
import Header from './components/header/Header';
import Game from './components/game/Game';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import firebase from './Firebase';

function App() {
  const [username, setUsername] = useState('');
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <HomePage username={username} setUsername={setUsername}/>
          </Route>
          <Route exact path="/game">
            <Game username={username} setUsername={setUsername}/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
