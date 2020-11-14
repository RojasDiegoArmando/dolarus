import React, { useState, useEffect } from "react"
import getBlue from "../services/dolarBlue"
import getOficial from "../services/dolarOficial"
import { ValorBlue, ValorOficial } from "./Value"
import Typography from "@material-ui/core/Typography"
import Container from "@material-ui/core/Container"
import { Grid, Paper } from "@material-ui/core"
/*
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
        </div>
      </Container>
      */
const Home = () => {
  const [dolarBlue, setDolarBlue] = useState([])
  const [dolarOficial, setDolarOficial] = useState({})

  useEffect(() => {
    getBlue().then((response) => setDolarBlue(response))
    getOficial().then((response) => setDolarOficial(response))
  }, [])
  return (
    <div>
      <Typography variant="h2" color="inherit" align="center">
        Dolar en Argentina
      </Typography>
      <ValorBlue valor={dolarBlue} nombre="Blue" /> 
      <ValorOficial valor={dolarOficial} nombre="Oficial" />     
    </div>
  )
}

export default Home
