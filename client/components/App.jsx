import React from 'react'
import Nav from './Nav'
import { theme } from '../style/muiStyles'

import { ThemeProvider } from '@material-ui/styles';



const App = () => {
  return (
    <ThemeProvider theme={theme}>
    <Nav />
    </ThemeProvider>
  )
}

export default App
