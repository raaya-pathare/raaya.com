import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { CssBaseline } from '@material-ui/core'
import Nav from './Nav'
import Home from './Home'
import { theme } from '../style/muiStyles'

import { ThemeProvider } from '@material-ui/styles';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
          <CssBaseline />
            <Router>
                <Route path="/" component={Nav} />
                <Route exact path="/" component={Home} />
            </Router>
    </ThemeProvider>
  )
}

export default App
