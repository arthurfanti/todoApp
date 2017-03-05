import React from 'react';
import ReactDOM from 'react-dom';

const HelloReact = () => {
  return (
    <h1>Hello React!<small>don't forget the redux stuff...</small></h1>
  )
}

ReactDOM.render(<HelloReact />, document.getElementById('app'))
