import React from 'react';
import {FSA} from './app-constants';
import {getTransitionDestinationState, getFinalLabelForState} from './utils';

test('assert transition destination state', () => {
  const happyInput = getTransitionDestinationState(FSA.STATES[FSA.INITIAL_STATE], FSA.INPUTS[0]);
  expect(happyInput).toBe('S0');

  const invalidInput = getTransitionDestinationState('_THIS_SHOULD_NOT_BE_A_SUPPORTED_STATE_',  FSA.INPUTS[0]);
  expect(invalidInput).toBe('invalid input');
});

test('important business case scenario #1', () => {
  const step1 = getTransitionDestinationState('S0', '1');
  expect(step1).toBe('S1');

  const step2 = getTransitionDestinationState('S1', '1');
  expect(step2).toBe('S0');

  const step3 = getTransitionDestinationState('S0', '0');
  expect(step3).toBe('S0');
});

test('important business case scenario #2', () => {
  const step1 = getTransitionDestinationState('S0', '1');
  expect(step1).toBe('S1');

  const step2 = getTransitionDestinationState('S1', '0');
  expect(step2).toBe('S2');

  const step3 = getTransitionDestinationState('S2', '1');
  expect(step3).toBe('S2');

  const step4 = getTransitionDestinationState('S2', '0');
  expect(step4).toBe('S1');
});

test('basic final state label assurance', () => {
  const happyInput = getFinalLabelForState(FSA.STATES[FSA.INITIAL_STATE]);
  expect(happyInput).toBe(FSA.STATE_LABELS[FSA.STATES[FSA.INITIAL_STATE]]);

  const invalidInput = getFinalLabelForState('_THIS_SHOULD_NOT_BE_A_SUPPORTED_STATE_');
  expect(invalidInput).toBe('invalid input');
});