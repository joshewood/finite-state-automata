import React, { useState, useCallback } from 'react';
import './App.css';
import {FSA} from './app-constants';

function App() {
  const [currentState, setCurrentState] = useState(FSA.STATES[FSA.INITIAL_STATE]);
  const onInputAction = useCallback(ev => {
    const newState = FSA.TRANSITIONS.find(transition => (transition.from === currentState 
      && transition.input === ev.target.value)).to;
    setCurrentState(newState)
  }, [currentState]);
 
  return (
    <div className="App">
      <h1>Finite State Automata</h1>
      <main>
        <h2>Change State <small>by pressing a button</small></h2>
        <button type="button" value="0" onClick={onInputAction}>0</button>
        <button type="button" value="1" onClick={onInputAction}>1</button>
        <div>{currentState}</div>
      </main>
    </div>
  );
}

export default App;
