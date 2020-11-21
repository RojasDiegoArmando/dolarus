import React from "react"
import Typography from "@material-ui/core/Typography"

const CompraPure = ({ cantDolar, cantPeso, dolarBlue, dolarOficial }) => {
  let dolarSolidario = parseInt(dolarOficial) * 1.65
  return (
    <div>
      <Typography variant="body1" color="inherit">
        Compraste
      </Typography>
      <Typography variant="body1" color="primary">
        {cantDolar ? cantDolar : 0} USD
      </Typography>
      <Typography variant="body1" color="inherit">
        por
      </Typography>
      <Typography variant="body1" color="primary">
        {dolarSolidario * cantDolar} ARS
      </Typography>
    </div>
  )
}

const VentaPure = ({ cantDolar, cantPeso, dolarOficial }) => {
  let dolarSolidario = parseInt(dolarOficial) * 1.65
  let diferencia = cantPeso - dolarSolidario * cantDolar

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
