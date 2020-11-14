import React from "react"
import "./App.css"
import { ThemeProvider } from "@material-ui/core/styles"
import theme from "./themeConfig"
import Content from "./components/Content"

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

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
