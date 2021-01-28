import React, { useState } from 'react'

function ListTodosComponent() {
    const [todos, setTodos] = useState([{
        id: 1,
        desc: "Learn Java Spring",
        completed: "false",
        targetDate: '2/10/2021'
      }, {
        id: 2,
        desc: "Learn React",
        completed: "false",
        targetDate: '2/10/2021'
      }]);
      return (
        <div>
          <h1>Todo List</h1>
          <table style={{margin: "auto"}}>
              <thead>
                  <tr>
                      <th>id</th>
                      <th>description</th>
                      <th>Completed</th>
                      <th>Target Date</th>
                  </tr>
              </thead>
              <tbody>
                  {todos.map(todo =>
                  <tr key={todo.id}>
                      <td>{todo.id}</td>
                      <td>{todo.desc}</td>
                      <td>{todo.completed}</td>
                      <td>{todo.targetDate}</td>
                  </tr>
                  )}
              </tbody>
          </table>
        </div>
      );
}

export default ListTodosComponent
