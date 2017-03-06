import React from 'react';
import ReactDOM from 'react-dom';

import FilterLink from '../containers/filterLink'

const Footer = () => {
  return (
    <p>
      <FilterLink filter={'SHOW_ALL'}>
        Show All
      </FilterLink>
      <FilterLink filter={'SHOW_ACTIVE'}>
        Show Active
      </FilterLink>
      <FilterLink filter={'SHOW_COMPLETED'}>
        Show Completed
      </FilterLink>
    </p>
  )
}

export default Footer
