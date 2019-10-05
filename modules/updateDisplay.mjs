import {multiply} from './multiply.mjs';

export function updateDisplay(state, key, value) {
    state[key] = value;
    multiply(state);
}