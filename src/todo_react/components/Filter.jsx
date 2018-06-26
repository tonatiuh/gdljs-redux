import React from 'react'
import PropTypes from 'prop-types'

const Filter = ({ setVisibilityFilter, filter, visibilityFilter, children }) => (
  <button
    onClick={() => setVisibilityFilter(filter)}
    disabled={ filter == visibilityFilter }
    style={{
       marginLeft: '4px',
    }}
  >
    {children}
  </button>
)

export default Filter
