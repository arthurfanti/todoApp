import React from 'react';
import ReactDOM from 'react-dom';

import FilterLink from './filterLink'

class Footer extends React.Component {
  render() {
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
}

export default Footer
