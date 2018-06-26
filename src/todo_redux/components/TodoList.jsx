import React from 'react'
import PropTypes from 'prop-types'

const TodoList = ({ todos, toggleTodo }) => (
  <ul>
    {todos.map(todo =>
      <li
        onClick={() => toggleTodo(todo.id)}
        style={{
          textDecoration: todo.completed ? 'line-through' : 'none'
        }}
      >
        {todo.text}
      </li>
    )}
  </ul>
)

export default TodoList
