import React, { useState, useEffect } from "react"
import getBlue from "../services/dolarBlue"
import getOficial from "../services/dolarOficial"
import { ValorBlue, ValorOficial } from "./Value"
import Typography from "@material-ui/core/Typography"
import { Grid, Box } from "@material-ui/core"

const Home = () => {
  const [dolarBlue, setDolarBlue] = useState([])
  const [dolarOficial, setDolarOficial] = useState({})

  useEffect(() => {
    getBlue().then((response) => setDolarBlue(response))
    getOficial().then((response) => setDolarOficial(response))
  }, [])
  return (
    <div>
      <Grid container>
        <Grid item xs={12}>
          <Box px={1} mx={5}>
            <Typography variant="h2" color="inherit" align="center">
              Dolar en Argentina
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box mt={2}>
            <ValorBlue valor={dolarBlue} nombre="Blue" />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box mt={2}>
            <ValorOficial valor={dolarOficial} nombre="Oficial" />
          </Box>
        </Grid>
      </Grid>
    </div>
  )
}

export default Home
