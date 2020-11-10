import React from 'react'
import { Typography } from '@material-ui/core'

const ValorBlue = ({ valor, nombre }) => {
    const compra = valor.compra
    const venta = valor.venta    
    const intermedio = ((parseFloat(compra) + parseFloat(venta)) / 2)
    return (
        <div>
            <Typography variant="h3" color="inherit" align="center">{nombre}</Typography>
            <Typography variant="body1" color="textSecondary" align="center">
            Compra: {compra} <br/>
            Intermedio: {intermedio} <br/>
            Venta: {venta}
            </Typography>
        </div>
    )
}

const ValorOficial = ({ valor, nombre }) => {
    const compra = valor.compra
    const venta = parseInt(valor.venta) * 1.65
    return (
        <div>
            <Typography variant="h3" color="inherit" align="center">{nombre}</Typography>
            <Typography variant="body1" color="textSecondary" align="center">
            Compra: {compra} <br/>
            Venta: {venta} (+65%)
            </Typography>
        </div>
    )
}

export {ValorBlue, ValorOficial}