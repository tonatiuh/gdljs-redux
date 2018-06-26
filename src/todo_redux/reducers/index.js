import { VisibilityFilters } from '../actions'

const INITIAL_STATE = {
  todos: [],
  visibilityFilter: VisibilityFilters.SHOW_ALL
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [...state.todos, action.todo]
      }
    case 'TOGGLE_TODO':
      const todos = state.todos.map(todo =>
        todo.id === action.id
          ? {...todo, completed: !todo.completed}
          : todo
      )

      return {
        ...state,
        todos: todos
      }
    case 'SET_VISIBILITY_FILTER':
      return {
        ...state,
        visibilityFilter: action.visibilityFilter
      }
    default:
      return state
  }
}
