import React from "react"
import "./App.css"
import { ThemeProvider } from "@material-ui/core/styles"
import theme from "./themeConfig"
import Content from "./components/Content"

import { HashRouter as Router } from "react-router-dom"

const App = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Content />
      </ThemeProvider>
    </Router>
  )
}

export default App
