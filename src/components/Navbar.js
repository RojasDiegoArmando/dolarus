import React from "react"
import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core"
import Brightness4Icon from "@material-ui/icons/Brightness4"
import MenuIcon from "@material-ui/icons/Menu"

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  tittle: {
    flexGrow: 1,
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${150}px)`,
      marginLeft: 150,
    },
  },
}))

const Navbar = (props) => {
  const classes = useStyles()
  return (
    <AppBar className={classes.appBar}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="menu"
          className={classes.menuButton}
          onClick={() => props.handleDrawerToggle()}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h5" color="initial" className={classes.tittle}>
          DolarUs
        </Typography>
        <List>
          <ListItem button>
            <ListItemIcon>
              <Brightness4Icon />
            </ListItemIcon>
            <ListItemText>DarkMode</ListItemText>
          </ListItem>
        </List>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
