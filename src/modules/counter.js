import { createAction, handleActions } from 'redux-actions';

const SET_DIFF = 'counter/SET_DIFF';
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

export const setDiff = createAction(SET_DIFF, diff => diff);
export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

const initialState = {
  number: 0,
  diff: 1,
};

const counter = handleActions(
  {
    [SET_DIFF]: (state, action) => ({ ...state, diff: action.payload }),
    [INCREASE]: state => ({ ...state, number: state.number + state.diff }),
    [DECREASE]: state => ({ ...state, number: state.number - state.diff }),
  },
  initialState
);

export default counter;
