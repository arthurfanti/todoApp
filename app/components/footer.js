import React from 'react';
import ReactDOM from 'react-dom';

import FilterLink from './filterLink'

const Footer = ({ visibilityFilter, onFilterClick }) => {
  return (
    <p>
      <FilterLink filter={'SHOW_ALL'}
        currentFilter={visibilityFilter}
        onClick={onFilterClick}>
        Show All
      </FilterLink>
      <FilterLink filter={'SHOW_ACTIVE'}
        currentFilter={visibilityFilter}
        onClick={onFilterClick}>
        Show Active
      </FilterLink>
      <FilterLink filter={'SHOW_COMPLETED'}
        currentFilter={visibilityFilter}
        onClick={onFilterClick}>
        Show Completed
      </FilterLink>
    </p>
  )
}

export default Footer
