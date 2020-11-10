import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import { Typography } from '@material-ui/core'

const Header = () => {
    return (
        <AppBar position="sticky">
            <Toolbar>
            <IconButton>
                <MenuIcon />
            </IconButton>
            <Typography variant="h5" color="initial">
                DolarUs
            </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Header