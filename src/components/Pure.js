import React from 'react'
import { Grid, Box, Typography } from '@material-ui/core'

const Pure = () => {
    return (
        <div>
            <Grid container>
                <Grid item xs={12}>
                    <Box px={1} mx={5}>
                        <Typography variant="h2" color="inherit" align="center">
                            Calculador de Pure
                        </Typography>
                    </Box>
                </Grid>
                <Grid item>
                    
                </Grid>
            </Grid>
        </div>
    )
}

export default Pure