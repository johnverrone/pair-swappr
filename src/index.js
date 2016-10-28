import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import { grey700 } from 'material-ui/styles/colors'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import App from './containers/App'

const store = createStore(reducer);

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: grey700,
  }
})

const Application = () => (
  <Provider store={store}>
    <MuiThemeProvider muiTheme={muiTheme}>
      <App />
    </MuiThemeProvider>
  </Provider>
)

ReactDOM.render(
  <Application />,
  document.getElementById('root')
)