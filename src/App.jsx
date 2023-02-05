import React, { useState, useEffect } from 'react'
import './App.css'
import InputTodo from '../components/InputTodo'
import ListTodos from '../components/ListTodos'

function App() {

  const [todos, setTodos] = useState([]);

  const deleteTodoCallback = async id => {
    try {
      const deleteTodo = await fetch(`http://localhost:5000/todos/${id}`, {
        method: 'DELETE'
      });
      setTodos(todos.filter(todo => todo.todo_id !== id));
    } catch (err) {
      console.error(err.message);
    }
  }

  const editTodoCallback = async (formData) => {
    try {
      const { description, id } = formData;
      const body = { description };
      const editTodo = await fetch(`http://localhost:5000/todos/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      })
      .then(response => response.json())
      .then(data => {
        const updatedTodo = data;
        setTodos(todos => todos.map(todo => {
          if (todo.todo_id === id) {
            return updatedTodo;
          } else {
            return todo;
          }
        }));
      });
    } catch (err) {
      console.error(err.message);
    }
  }

  const getTodos = async () => {
    try {
      const response = await fetch('http://localhost:5000/todos');
      const jsonData = await response.json();
      setTodos(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  }

  useEffect(() => {
    getTodos();
  }, []);
  
  const addTodoCallback = async (formData) => {
    try {
      const { description } = formData;
      const body = { description };
      const response = await fetch("http://localhost:5000/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      })
      .then(response => response.json())
      .then(data => {
        const newTodo = data;
        setTodos([...todos, newTodo]);
      });
    } catch (err) {
      console.error(err.message);
    }
  }
  
  return (
    <>
      <div className="container">
        <InputTodo addTodoCallback={addTodoCallback} />
        <ListTodos 
          todos={todos} 
          deleteTodoCallback={deleteTodoCallback}
          editTodoCallback={editTodoCallback}
        />
      </div>
    </>
  )
}

export default App
