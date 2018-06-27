import React from 'react'

const TodoList = ({ todos, toggleTodo }) => (
  <ul>
    {todos.map(todo =>
      <li
        onClick={() => toggleTodo(todo.id)}
        style={{
          textDecoration: todo.completed ? 'line-through' : 'none'
        }}
        key={todo.id}
      >
        {todo.text}
      </li>
    )}
  </ul>
)

export default TodoList
