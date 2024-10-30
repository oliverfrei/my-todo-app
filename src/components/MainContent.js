// src/components/MainContent.js
import React from 'react';
import TodoItem from './ToDoItem';

function MainContent({ todos }) {
  return (
    <div>
      <h2>My Todos</h2>
      {todos.length === 0 ? (
        <p>No todos available</p>
      ) : (
        todos.map((todo, index) => (
          <TodoItem key={index} title={todo.title} deadline={todo.deadline} />
        ))
      )}
    </div>
  );
}

export default MainContent;
