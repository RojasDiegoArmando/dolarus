import React from "react"
import { Typography } from "@material-ui/core"

const ValorBlue = ({ valor, nombre }) => {
  let compra = valor.compra
  let venta = valor.venta
  compra = (compra ? compra.replace(/,/g,'.') : compra)
  venta = (venta ? venta.replace(/,/g, '.') : venta)
  const intermedio = (parseFloat(compra) + parseFloat(venta)) / 2
  return (
    <div>
      <Typography variant="h3" color="inherit" align="center">
        {nombre}
      </Typography>
      <Typography variant="body1" color="textSecondary" align="center">
        Compra: {compra} <br />
        Intermedio: {intermedio.toFixed(2)} <br />
        Venta: {venta}
      </Typography>
    </div>
  )
}

const ValorOficial = ({ valor, nombre }) => {
  let compra = valor.compra
  compra = (compra ? compra.replace(/,/g, '.') : compra)
  let venta = valor.venta
  venta = (venta ? venta.replace(/,/g, ".") : venta)
  let solidario = venta
  solidario = (solidario ? solidario.replace(/,/g, '.') : solidario) * 1.65
  console.log(solidario)
  return (
    <div>
      <Typography variant="h3" color="inherit" align="center">
        {nombre}
      </Typography>
      <Typography variant="body1" color="textSecondary" align="center">
        Compra: {compra} <br />
        Venta: {venta} <br />
        Solidario: {solidario.toFixed(2)} (65% impuestos)
      </Typography>
    </div>
  )
}

export { ValorBlue, ValorOficial }
