import React, { useState } from 'react';

const TodoItem = ({ todo, onToggle, onDelete }) => {
  return (
    <li
      style={{
        textDecoration: todo.done ? 'line-through' : 'none',
      }}
      onClick={() => onToggle(todo.id)}
    >
      {todo.text}
      <button onClick={() => onDelete(todo.id)}>x</button>
    </li>
  );
};

const TodoList = ({ todos, onToggle, onDelete }) => {
  return (
    <ul>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} onToggle={onToggle} onDelete={onDelete} />
      ))}
    </ul>
  );
};

const Todos = ({ todos, onCreate, onToggle, onDelete }) => {
  const [text, setText] = useState('');
  const onChange = e => setText(e.target.value);
  const onSubmit = e => {
    e.preventDefault();
    onCreate(text);
    setText('');
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} placeholder="할일 입력" />
        <button type="submit">등록</button>
      </form>
      <TodoList todos={todos} onToggle={onToggle} onDelete={onDelete} />
    </div>
  );
};

export default Todos;
