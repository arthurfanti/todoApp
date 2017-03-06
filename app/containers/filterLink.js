import React from 'react'
import { connect } from 'react-redux'

import Link from '../components/link'

const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.filter === state.visibilityFilter
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch({
        type: 'SET_VISIBILITY_FILTER',
        filter: ownProps.filter
      })
    }
  }
}

const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)
// class FilterLink extends React.Component {
//   componentDidMount() {
//     this.unsubscribe = appStore.subscribe(() => this.forceUpdate())
//   }
//
//   componentWillUnmount() {
//     this.unsubscribe()
//   }
//   render() {
//     const props = this.props
//     const { visibilityFilter } = appStore.getState()
//
//     return (
//       <Link active={
//           props.filter === visibilityFilter
//         }
//         onClick={() =>
//           appStore.dispatch({
//             type: 'SET_VISIBILITY_FILTER',
//             filter: props.filter
//           })
//         }>
//       {props.children}
//     </Link>
//     )
//   }
// }

export default FilterLink
