import React from 'react';
import ReactDOM from 'react-dom';

import appStore from '../stores/app'

class FilterLink extends React.Component {
  render() {
    return (
      <a href='#'
        onClick={(e) => {
          e.preventDefault()
          appStore.dispatch({
            type: 'SET_VISIBILITY_FILTER',
            filter: this.props.filter
          })
        }}
        style={{
          padding: '2px 4px'
        }}>{this.props.children}</a>
    )
  }
}

export default FilterLink
