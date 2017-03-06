import React from 'react'

import appStore from '../stores/app'
import Link from '../components/link'

class FilterLink extends React.Component {
  render() {
    const props = this.props
    const { visibilityFilter } = appStore.getState()

    return (
      <Link active={
          props.filter === visibilityFilter
        }
        onClick={() =>
          appStore.dispatch({
            type: 'SET_VISIBILITY_FILTER',
            filter: props.filter
          })
        }>
      {props.children}
    </Link>
    )
  }
}

export default FilterLink
