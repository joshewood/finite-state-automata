import React from 'react';
import './App.css';
import {FSA} from './app-constants';

function App() {
  return (
    <div className="App">
      <h1>Finite State Automata</h1>
      <main>
        <h2>Change State <small>by pressing a button</small></h2>
        <button type="button">0</button>
        <button type="button">1</button>
        <div>{fun}</div>
      </main>
    </div>
  );
}

export default App;
