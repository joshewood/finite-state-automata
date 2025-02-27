const STATES = ['S0', 'S1', 'S2'];
const INITIAL_STATE_INDEX = 0;
const INPUTS = ['0', '1'];
const FINAL_STATES = [...STATES];
const TRANSITIONS = [{
  input: INPUTS[0],
  from: STATES[0],
  to: STATES[0]
}, {
  input: INPUTS[1],
  from: STATES[0],
  to: STATES[1]
}, {
  input: INPUTS[0],
  from: STATES[1],
  to: STATES[2]
}, {
  input: INPUTS[1],
  from: STATES[1],
  to: STATES[0]
}, {
  input: INPUTS[0],
  from: STATES[2],
  to: STATES[1]
}, {
  input: INPUTS[1],
  from: STATES[2],
  to: STATES[2]
}];

const STATE_LABELS = {
  S0: 0,
  S1: 1,
  S2: 2
};

export const FSA = {
  INITIAL_STATE_INDEX,
  STATES,
  INPUTS,
  FINAL_STATES,
  TRANSITIONS,
  STATE_LABELS
};
