import React from "react"
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  makeStyles,
} from "@material-ui/core"
import HomeIcon from "@material-ui/icons/Home"
import RestaurantMenuIcon from "@material-ui/icons/RestaurantMenu"
import InfoIcon from "@material-ui/icons/Info"
import { Link } from "react-router-dom"

const useStyle = makeStyles((theme) => ({
  link: {
    textDecoration: "none",
    color: theme.palette.text.primary,
  },
}))

const Listas = () => {
  const classes = useStyle()
  return (
    <div>
      <List component="nav">
        <Divider />
        <Link to="/" className={classes.link}>
          <ListItem button>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Inicio" />
          </ListItem>
        </Link>
        <Divider />
        <Link to="/pure" className={classes.link}>
          <ListItem button>
            <ListItemIcon>
              <RestaurantMenuIcon />
            </ListItemIcon>
            <ListItemText primary="Pure" />
          </ListItem>
        </Link>
        <Divider />
        <Link to="/about" className={classes.link}>
          <ListItem button>
            <ListItemIcon>
              <InfoIcon />
            </ListItemIcon>
            <ListItemText primary="Info" />
          </ListItem>
        </Link>
        <Divider />
      </List>
    </div>
  )
}

export default Listas
