import React, { useState, useEffect } from "react"
import { Grid, Box, Typography } from "@material-ui/core"
import getBlue from "../services/dolarBlue"
import getOficial from "../services/dolarOficial"
import { CompraPure, VentaPure } from "./ValoresPure"
import { CantidadDolar, CantidadPeso } from "./CantidadPure"

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
    if (!Number(cantidad)) {      
      return
    } else {
      setCantDolar(cantidad)
      const cambio = cantidad * parseInt(dolarBlue)
      setCantPeso(cambio)
    }
  }

  const handlePesoChange = (response) => {
    const cantidad = response.target.value
    if (!Number(cantidad)) {
      return
    } else {
      setCantPeso(cantidad)
      const cambio = cantidad / parseInt(dolarBlue)
      setCantDolar(cambio)
    }    
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
          <Box align="center" mb={3}>
            <CantidadDolar
              cantDolar={cantDolar}
              handleDolarChange={handleDolarChange}
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box align="center" mb={3}>
            <CantidadPeso
              cantPeso={cantPeso}
              handlePesoChange={handlePesoChange}
            />
          </Box>
        </Grid>
        <Grid item xs={6} sm={6}>
          <Box align="center" px={5} mb={2}>
            <CompraPure
              cantDolar={cantDolar}
              cantPeso={cantPeso}
              dolarBlue={dolarBlue}
              dolarOficial={dolarOficial}
            />
          </Box>
        </Grid>
        <Grid item xs={6} sm={6}>
          <Box align="center" px={5}>
            <VentaPure
              cantDolar={cantDolar}
              cantPeso={cantPeso}
              dolarOficial={dolarOficial}
            />
          </Box>
        </Grid>
      </Grid>
    </div>
  )
}

export default Pure
