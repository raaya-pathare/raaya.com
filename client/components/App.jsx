import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import { CssBaseline } from '@material-ui/core'
import Nav from './Nav'
import Home from './Home'
import About from './About'
import { theme } from '../style/muiStyles'

import { ThemeProvider } from '@material-ui/styles';

const App = () => {

  return (
    <ThemeProvider theme={theme}>
          <CssBaseline />
            <Router>
                <Route path="/" component={Nav} />
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
            </Router>
    </ThemeProvider>
  )
}

export default App
