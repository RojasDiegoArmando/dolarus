import React from "react"
import Typography from "@material-ui/core/Typography"

const CompraPure = ({ cantDolar, cantPeso, dolarBlue, dolarOficial }) => {
  dolarOficial = dolarOficial ? dolarOficial.replace(/,/g, ".") : dolarOficial
  let dolarSolidario = parseFloat(dolarOficial) * 1.65
  cantDolar = cantDolar ? cantDolar.replace(/,/g, ".") : cantDolar
  let comproUsd = parseFloat(cantDolar).toFixed(2)
  let comproArs = (dolarSolidario * cantDolar).toFixed(2)
  return (
    <div>
      <Typography variant="body1" color="inherit">
        Compraste
      </Typography>
      <Typography variant="body1" color="primary">
        {comproUsd} USD
      </Typography>
      <Typography variant="body1" color="inherit">
        por
      </Typography>
      <Typography variant="body1" color="primary">
        {comproArs} ARS
      </Typography>
    </div>
  )
}

const VentaPure = ({ cantDolar, cantPeso, dolarOficial }) => {
  dolarOficial = dolarOficial ? dolarOficial.replace(/,/g, ".") : dolarOficial
  let dolarSolidario = parseFloat(dolarOficial) * 1.65
  let diferencia = (cantPeso - dolarSolidario * cantDolar).toFixed(2)
  return (
    <div>
      <Typography variant="body1" color="initial">
        Tenes una ganancia de
      </Typography>
      <Typography variant="body1" color="primary">
        {diferencia} ARS
      </Typography>
    </div>
  )
}

export { CompraPure, VentaPure }
