// src/components/AddTodo.js
import React, { useState } from 'react';

function AddTodo({ onAddTodo }) {
  const [newTodo, setNewTodo] = useState('');
  const [deadline, setDeadline] = useState('');

  const handleAdd = () => {
    if (newTodo.trim() && deadline) {
      onAddTodo(newTodo, deadline);
      setNewTodo('');
      setDeadline('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add a new todo"
      />
      <input
        type="date"
        value={deadline}
        onChange={(e) => setDeadline(e.target.value)}
      />
      <button onClick={handleAdd}>Add Todo</button>
    </div>
  );
}

export default AddTodo;
