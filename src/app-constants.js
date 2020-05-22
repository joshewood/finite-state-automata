const STATES = ['S0', 'S1', 'S2'];
const INITIAL_STATE = `${STATES[0]}`;
const INPUTS = [0, 1];
const FINAL_STATES = [...STATES];
const TRANSITIONS = [{
  input: 0,
  from: STATES[0],
  to: STATES[0]
}, {
  input: 1,
  from: STATES[0],
  to: STATES[1]
}, {
  input: 0,
  from: STATES[1],
  to: STATES[2]
}, {
  input: 1,
  from: STATES[1],
  to: STATES[0]
}, {
  input: 0,
  from: STATES[2],
  to: STATES[0]
}, {
  input: 1,
  from: STATES[2],
  to: STATES[2]
}];

export const FSA = {
  INITIAL_STATE,
  STATES,
  INPUTS,
  FINAL_STATES,
  TRANSITIONS
};