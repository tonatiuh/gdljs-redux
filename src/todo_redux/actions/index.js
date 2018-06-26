let nextTodoId = 0
export const addTodo = text => ({
  type: 'ADD_TODO',
  todo: {
    id: nextTodoId++,
    completed: false,
    text
  }
})

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id
})

export const setVisibilityFilter = visibilityFilter => ({
  type: 'SET_VISIBILITY_FILTER',
  visibilityFilter
})

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}
