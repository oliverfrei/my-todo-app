// src/App.js
import React, { useState } from 'react';
import MainContent from './components/MainContent';
import AddTodo from './components/AddTodo';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // For tilgængelighed, angiver hvor modal er i DOM

function App() {
  const [todos, setTodos] = useState([
    { title: 'Learn React', deadline: new Date().toISOString().split('T')[0] },
    { title: 'Build a Todo App', deadline: '2024-12-01' },
    { title: 'Master React Props', deadline: '2024-11-15' }
  ]);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const addTodo = (title, deadline) => {
    setTodos([...todos, { title, deadline }]);
    setModalIsOpen(false); // Luk modal når ny todo er tilføjet
  };

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  const clearTodos = () => {
    setTodos([]);
  };

  return (
    <div className="App">
      <h1>My Todo App</h1>
      <button onClick={openModal}>Add New Todo</button>
      <button onClick={clearTodos}>Clear Todos</button>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Add New Todo"
        style={{
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
          },
        }}
      >
        <h2>Add New Todo</h2>
        <AddTodo onAddTodo={addTodo} />
        <button onClick={closeModal}>Close</button>
      </Modal>

      <MainContent todos={todos} />
    </div>
  );
}

export default App;
