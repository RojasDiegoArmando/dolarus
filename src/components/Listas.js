import React from "react"
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@material-ui/core"
import HomeIcon from "@material-ui/icons/Home"
import RestaurantMenuIcon from "@material-ui/icons/RestaurantMenu"
import InfoIcon from "@material-ui/icons/Info"

const Listas = () => {
  return (
    <div>
      <List component="nav">
        <Divider />
        <ListItem button>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Inicio" />
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemIcon>
            <RestaurantMenuIcon />
          </ListItemIcon>
          <ListItemText primary="Pure" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <InfoIcon />
          </ListItemIcon>
          <ListItemText primary="Info" />
        </ListItem>
        <Divider />
      </List>
    </div>
  )
}

export default Listas
