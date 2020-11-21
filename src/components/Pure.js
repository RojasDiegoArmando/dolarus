import React, { useState, useEffect } from "react"
import { Grid, Box, Typography, TextField } from "@material-ui/core"
import getBlue from "../services/dolarBlue"
import getOficial from "../services/dolarOficial"

const Pure = ({ valor, nuevoValor }) => {
  const [cantDolar, setCantDolar] = useState(0)
  const [cantPeso, setCantPeso] = useState(0)
  const [dolarBlue, setDolarBlue] = useState(0)
  const [dolarOficial, setDolarOficial] = useState(0)

  useEffect(() => {
    getBlue().then((response) => setDolarBlue(response.compra))
    getOficial().then((response) => setDolarOficial(response.compra))
    
  }, [])
  const handleDolarChange = (response) => {
    const cantidad = response.target.value
    setCantDolar(cantidad)
    const cambio = cantidad * parseInt(dolarBlue)
    setCantPeso(cambio)
  }

  const handlePesoChange = (response) => {
    const cantidad = response.target.value
    setCantPeso(cantidad)
    const cambio = cantidad / parseInt(dolarBlue)
    setCantDolar(cambio)
  }
  return (
    <div>
      <Grid container>
        <Grid item xs={12}>
          <Box px={1} mb={5}>
            <Typography variant="h2" color="inherit" align="center">
              Calculador de Pure
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box align="center">
            <TextField
              id="cantDolar"
              label="Cantidad de Dolares"
              variant="outlined"
              value={cantDolar}
              onChange={handleDolarChange}
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box align="center">
            <TextField
              id="cantPesos"
              label="Cantidad de Pesos"
              variant="outlined"
              value={cantPeso}
              onChange={handlePesoChange}
            />
          </Box>
        </Grid>
      </Grid>
    </div>
  )
}

export default Pure
