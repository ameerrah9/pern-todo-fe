import React from 'react'
import EditTodo from './EditTodo';

const ListTodos = ({ todos, deleteTodoCallback, editTodoCallback }) => {

  
  const todosList = todos.map(todo => {
    return ( 
      <tr key={todo.todo_id}>
        <td>{todo.description}</td>
        <td><EditTodo editTodoCallback={editTodoCallback} todo={todo}/></td>
        <td><button className="btn btn-danger" onClick={() => deleteTodoCallback(todo.todo_id)}>Delete</button></td>
      </tr>
    )});

  return (
    <>
      {" "}
      <table className="table mt-5 text-center">
        <thead>
          <tr>
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {todosList}
        </tbody>
      </table>
    </>
  )
}

export default ListTodos;