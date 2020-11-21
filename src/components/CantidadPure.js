import React from 'react'
import 
const CantidadDolar = () => {
    return (
        <div>
            
        </div>
    )
}

const CantidadPeso = () => {
    return (
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
    )
}

export { CantidadDolar , CantidadPeso }