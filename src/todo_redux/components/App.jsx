import React from 'react'
import Footer from './Footer'
import AddTodoContainer from '../containers/AddTodoContainer'
import VisibleTodoListContainer from '../containers/VisibleTodoListContainer'

const App = () => (
  <div>
    <h3> Todo App with React & Redux </h3>

    <AddTodoContainer />
    <VisibleTodoListContainer />
    <Footer />
  </div>
)

export default App
