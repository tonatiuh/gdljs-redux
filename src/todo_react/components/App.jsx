import React from 'react'
import AddTodoContainer from '../containers/AddTodoContainer'
import TodoListContainer from '../containers/TodoListContainer'
import Footer from './Footer'

const App = () => (
  <div>
    <h3> Todo App with React & Redux </h3>

    <AddTodoContainer />
    <TodoListContainer />
    <Footer />
  </div>
)

export default App
