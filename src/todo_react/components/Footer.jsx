import React from 'react'
import Filter from './Filter'
import { VisibilityFilters } from '../actions'

const Footer = ({ visibilityFilter, setVisibilityFilter }) => (
  <div>
    <span>Show: </span>

    <Filter
      filter={VisibilityFilters.SHOW_ALL}
      visibilityFilter={visibilityFilter}
      setVisibilityFilter={setVisibilityFilter}
    >
      All
    </Filter>

    <Filter
      filter={VisibilityFilters.SHOW_ACTIVE}
      visibilityFilter={visibilityFilter}
      setVisibilityFilter={setVisibilityFilter}
    >
      Active
    </Filter>

    <Filter
      filter={VisibilityFilters.SHOW_COMPLETED}
      visibilityFilter={visibilityFilter}
      setVisibilityFilter={setVisibilityFilter}
    >
      Completed
    </Filter>
  </div>
)

export default Footer
