import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';

const ADD_TODO = 'todos/ADD_TODO';
const REMOVE_TODO = 'todos/REMOVE_TODO';
const TOGGLE_TODO = 'todos/TOGGLE_TODO';

let nextId = 2;
export const addTodo = createAction(ADD_TODO, text => ({
  id: nextId++,
  text,
  done: false,
}));

export const removeTodo = createAction(REMOVE_TODO, id => id);

export const toggleTodo = createAction(TOGGLE_TODO, id => id);

const initialState = [
  {
    id: 1,
    text: 'first',
    done: false,
  },
];

const todos = handleActions(
  {
    [ADD_TODO]: (state, action) =>
      produce(state, draft => {
        draft.push(action.payload);
      }),
    [REMOVE_TODO]: (state, action) =>
      produce(state, draft => {
        draft.splice(
          draft.findIndex(todo => todo.id === action.payload),
          1
        );
      }),
    [TOGGLE_TODO]: (state, action) =>
      state.map(item => (item.id === action.payload ? { ...item, done: !item.done } : item)),
  },
  initialState
);

export default todos;
