// src/components/TodoItem.js
import React from 'react';

function TodoItem({ title, deadline }) {
  const today = new Date().toISOString().split('T')[0];
  const isOverdue = today > deadline;

  return (
    <div>
      <p>{title}</p>
      <p>Deadline: {deadline}</p>
      {isOverdue && <p style={{ color: 'red' }}>Deadline overskredet!</p>}
    </div>
  );
}

export default TodoItem;
