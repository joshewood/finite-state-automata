import {FSA} from './app-constants';

export const getFinalLabelForState = targetState => {
  if (typeof (FSA.STATE_LABELS[targetState]) !== 'undefined'
  && FSA.FINAL_STATES.includes(targetState)) {
    return FSA.STATE_LABELS[targetState];
  }

  return 'invalid input';
}

export const getTransitionDestinationState = (currentState, currentInput) => {
  const transition = FSA.TRANSITIONS.find(transition => (transition.from === currentState 
      && transition.input === currentInput));
  if (transition) {
    return transition.to;
  }
  return 'invalid input';
}
