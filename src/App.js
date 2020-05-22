import React, { useState, useCallback } from 'react';
import './App.scss';
import {FSA} from './app-constants';

const getTransitionDestinationState = (currentState, currentInput) => {
  return FSA.TRANSITIONS.find(transition => (transition.from === currentState 
      && transition.input === currentInput)).to;
}

function App() {
  const [previousState, setPreviousState] = useState(undefined);
  const [currentState, setCurrentState] = useState(FSA.STATES[FSA.INITIAL_STATE]);
  const [previewNextState, setPreviewNextState] = useState(undefined);

  const onInputPreview = useCallback(ev => {
    const {value} = ev.target;
    setPreviewNextState(getTransitionDestinationState(currentState, value));
  }, [previewNextState, currentState]);

  const onInputAction = useCallback(ev => {
    setPreviousState(currentState);
    const {value} = ev.target;
    const newState = getTransitionDestinationState(currentState, value); 
    setCurrentState(newState);
    setPreviewNextState(getTransitionDestinationState(newState, value));
  }, [currentState]);
 
  return (
    <div className="App">
      <h1>Finite State Automata</h1>
      <main>
        <h2>Change State <small><em>by pressing a button</em></small></h2>
        <div className="InputContainer">
          <button type="button" value="0" onMouseEnter={onInputPreview} onClick={onInputAction}>0</button>
          <button type="button" value="1" onMouseEnter={onInputPreview} onClick={onInputAction}>1</button>
        </div>
        <div className="StateContainer">
          <span className="StateItem Previous">
            <h3>Previous</h3>
            <span>{previousState}</span>
          </span>
          <span className="StateItem Current">
            <h3>Current</h3>
            <span>{currentState}</span>
          </span>
          <span className="StateItem Next">
            <h3>Next</h3>
            <span>{previewNextState}</span>
          </span>
        </div>
      </main>
    </div>
  );
}

export default App;
