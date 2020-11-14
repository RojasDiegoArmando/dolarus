import React from "react"
import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  IconButton,
  Button
} from "@material-ui/core"
import MenuIcon from "@material-ui/icons/Menu"

const useStyles = makeStyles((theme) => ({
  offset: theme.mixins.toolbar,
  menuButton: {
    marginRight: theme.spacing(2),
  },
  tittle: {
      flexGrow: 1
  }
}))

const Navbar = () => {
  const classes = useStyles()
  return (
    <div>
      <AppBar position="sticky">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="menu"
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h5" color="initial" className={classes.tittle}>
            DolarUs
          </Typography>
        <Button 
        variant="text" 
        color="inherit"               
        >
          LOGIN
        </Button>
        </Toolbar>
      </AppBar>
      <div className={classes.offset}></div>
    </div>
  )
}

export default Navbar
