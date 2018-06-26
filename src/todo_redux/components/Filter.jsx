import React from 'react'

const Filter = ({ setVisibilityFilter, filter, visibilityFilter, children }) => (
  <button
    onClick={() => setVisibilityFilter(filter)}
    disabled={ filter === visibilityFilter }
    style={{
       marginLeft: '4px',
    }}
  >
    {children}
  </button>
)

export default Filter
