import React from "react"
import { TextField } from "@material-ui/core"

const CantidadDolar = ({ cantDolar, handleDolarChange }) => {
  return (
    <TextField
      id="cantDolar"
      label="USD a vender"
      variant="outlined"
      value={cantDolar}
      onChange={handleDolarChange}
      onClick={(event) => (event.target.value = "")}
      on
    />
  )
}

const CantidadPeso = ({ cantPeso, handlePesoChange }) => {
  return (
    <TextField
      id="cantPesos"
      label="ARS a recibir"
      variant="outlined"
      value={cantPeso}
      onChange={handlePesoChange}
      onClick={(event) => (event.target.value = "")}
    />
  )
}

export { CantidadDolar, CantidadPeso }
