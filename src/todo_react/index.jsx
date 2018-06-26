import React from 'react'
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'
import Footer from './components/Footer'
import { VisibilityFilters } from './helpers'

let nextTodoId = 0

export default class TodoReact extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
      visibilityFilter: VisibilityFilters.SHOW_ALL
    }

    this.addTodo = this.addTodo.bind(this);
    this.toggleTodo = this.toggleTodo.bind(this);
    this.setVisibilityFilter = this.setVisibilityFilter.bind(this);
  }

  addTodo(text) {
    const todo = {
      id: nextTodoId++,
      completed: false,
      text
    }

    const todos = [...this.state.todos, todo]
    this.setState({ todos })
  }

  getVisibleTodos (todos, visibilityFilter) {
    switch (visibilityFilter) {
      case VisibilityFilters.SHOW_ALL:
        return todos
      case VisibilityFilters.SHOW_COMPLETED:
        return todos.filter(t => t.completed)
      case VisibilityFilters.SHOW_ACTIVE:
        return todos.filter(t => !t.completed)
      default:
        throw new Error('Unknown filter: ' + visibilityFilter)
    }
  }

  toggleTodo(id) {
    const todos = this.state.todos.map(todo =>
      todo.id === id
        ? {...todo, completed: !todo.completed}
        : todo
    )

    this.setState({
      todos: todos
    })
  }

  setVisibilityFilter(visibilityFilter) {
    this.setState({ visibilityFilter })
  }

  render() {
    return (
      <div>
        <h3> Todo App with React only </h3>

        <AddTodo addTodo={this.addTodo} />
        <TodoList
          todos={this.getVisibleTodos(this.state.todos, this.state.visibilityFilter)}
          toggleTodo={this.toggleTodo}
        />
        <Footer
          visibilityFilter={this.state.visibilityFilter}
          setVisibilityFilter={this.setVisibilityFilter}
         />
      </div>
    );
  }
}
