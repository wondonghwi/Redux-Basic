const ADD_TODO = 'todos/ADD_TODO';
const REMOVE_TODO = 'todos/REMOVE_TODO';
const TOGGLE_TODO = 'todos/TOGGLE_TODO';

let nextId = 2;
export const addTodo = text => ({
  type: ADD_TODO,
  todo: {
    id: nextId++,
    text,
  },
});
export const removeTodo = id => ({
  type: REMOVE_TODO,
  id,
});
export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  id,
});

const initialState = [
  {
    id: 1,
    text: 'first',
    done: false,
  },
];

export default function todos(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return state.concat(action.todo);
    case REMOVE_TODO:
      return state.filter(item => item.id !== action.id);
    case TOGGLE_TODO:
      return state.map(item => (item.id === action.id ? { ...item, done: !item.done } : item));
    default:
      return state;
  }
}
