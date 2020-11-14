import React, { useState, useEffect } from "react"
import getBlue from "./services/dolarBlue"
import getOficial from "./services/dolarOficial"
import "./App.css"
import { ValorBlue, ValorOficial } from "./components/Value"
import Container from "@material-ui/core/Container"
import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"
import { makeStyles, ThemeProvider } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"
import { Typography } from "@material-ui/core"
import theme from "./themeConfig"
import Navbar from "./components/Navbar"
import Listas from "./components/Listas"

const useStyle = makeStyles({
  PrimaryBtn: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    padding: "0 30px",
  },
})

const App = () => {
  const [dolarBlue, setDolarBlue] = useState([])
  const [dolarOficial, setDolarOficial] = useState({})

  const classes = useStyle()

  useEffect(() => {
    getBlue().then((response) => setDolarBlue(response))
    getOficial().then((response) => setDolarOficial(response))
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Typography variant="h2" color="inherit" align="center">
        Dolar en Argentina
      </Typography>
      <Container>
        <div>
          <Grid container spacing={1} justify="center">
            <Grid item>
              <Paper style={{ height: 130, width: 2000 }}>
                <ValorBlue valor={dolarBlue} nombre="Blue" />
              </Paper>
            </Grid>
            <Grid item>
              <Paper style={{ height: 110, width: 2000 }}>
                <ValorOficial valor={dolarOficial} nombre="Oficial" />
              </Paper>
            </Grid>
          </Grid>
          <Button className={classes.PrimaryBtn}>Button</Button>
        </div>
      </Container>
      <Listas />
    </ThemeProvider>
  )
}

export default App
