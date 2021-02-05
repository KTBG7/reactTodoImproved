import React, { useState, useEffect } from 'react'
import {useHistory} from 'react-router-dom'
import { deleteTodo, retrieveTodoList } from '../api/todo/TodoDataService.js';
import { getLoggedInUserName } from './AuthenticationService.js';

function ListTodosComponent() {
  let history = useHistory();

    const [todos, setTodos] = useState([]);
    const [message, setMessage] = useState(null);

    useEffect(() =>{
      let username = getLoggedInUserName();
      retrieveTodoList(username)
      .then(response => setTodos(response.data))
    })

    const handleDelete= (id) =>{
      let username = getLoggedInUserName();
      deleteTodo(username, id)
      .then(response => setMessage(`Delete of todo ${id} was Successful`))
      .catch(response => setMessage(response.data))

    }

    const handleUpdate = (id) =>{
      
      history.push(`/todos/${id}`)
      // let username = getLoggedInUserName();
      // updateTodo(username, id)
      // .then(response => setMessage(`Edit of todo ${id} was Successful`))
      // .catch(response => setMessage(response.data))
    }
    
      return (
        <div>
          <h1>Todo List</h1>
          {message && <div className="alert alert-success">{message}</div>}
          <div className="container">
          <table className="table">
              <thead>
                  <tr>
                      <th>description</th>
                      <th>Target Date</th>
                      <th>Completed</th>
                      <th>Edit</th>
                      <th>Delete</th>
                  </tr>
              </thead>
              <tbody>
                  {todos.map(todo =>
                  <tr key={todo.id}>
                      <td>{todo.description}</td>
                      <td>{todo.targetDate}</td>
                      <td>{todo.completed.toString()}</td>
                      <td><button onClick={()=>handleUpdate(todo.id)} className="btn btn-success">Edit</button></td>
                      <td><button onClick={() => handleDelete(todo.id)} className="btn btn-danger">Delete</button></td>
                  </tr>
                  )}
              </tbody>
          </table>
          </div>
        </div>
      );
}

export default ListTodosComponent
