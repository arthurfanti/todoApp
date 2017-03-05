import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

const HelloReact = () => {
  return (
    <MuiThemeProvider>
      <AppBar
        title="Title"
        iconClassNameRight="muidocs-icon-navigation-expand-more"
      />
    </MuiThemeProvider>
  )
}

ReactDOM.render(<HelloReact />, document.getElementById('app'))
