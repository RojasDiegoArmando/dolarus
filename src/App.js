import React from "react"
import "./App.css"
import { ThemeProvider } from "@material-ui/core/styles"
import theme from "./themeConfig"
import Content from "./components/Content"

const App = () => {  

  return (
    <ThemeProvider theme={theme}>
      <Content />
    </ThemeProvider>
  )
}

export default App
