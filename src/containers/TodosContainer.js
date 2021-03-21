import React, { useCallback } from 'react';
import Todos from '../components/Todos';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, removeTodo, toggleTodo } from '../modules/todos';

const TodosContainer = () => {
  const todos = useSelector(state => state.todos);

  const dispatch = useDispatch();

  const onCreate = useCallback(text => dispatch(addTodo(text)), [dispatch]);
  const onDelete = useCallback(id => dispatch(removeTodo(id)), [dispatch]);
  const onToggle = useCallback(id => dispatch(toggleTodo(id)), [dispatch]);

  return <Todos onCreate={onCreate} onDelete={onDelete} onToggle={onToggle} todos={todos} />;
};

export default TodosContainer;
