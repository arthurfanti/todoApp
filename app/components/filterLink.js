import React from 'react';
import ReactDOM from 'react-dom';

import appStore from '../stores/app'

const FilterLink = ({ filter, currentFilter, children, onClick }) => {
  if (filter === currentFilter) {
    return (
      <span>{children}</span>
    )
  }

  return (
    <a href='#'
      onClick={(e) => {
        e.preventDefault()
        onClick(filter)
      }}
      style={{
        padding: '2px 4px'
      }}>{children}</a>
  )
}

export default FilterLink
