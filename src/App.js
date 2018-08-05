import React, { Component } from 'react';
import './App.css';
import GameComponent from './components/GameComponent';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        
        <GameComponent />
      </div>
    );
  }
}

export default App;
