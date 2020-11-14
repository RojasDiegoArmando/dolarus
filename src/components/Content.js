import React, { useState } from "react"
import Navbar from "./Navbar"
import Cajon from "./Cajon"
import Home from "./Home"

import { makeStyles, Hidden } from "@material-ui/core"

const estilos = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}))

const Content = () => {
  const classes = estilos()
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  return (
    <div className={classes.root}>
      <Navbar handleDrawerToggle={handleDrawerToggle}/>
      <Hidden smUp>
        <Cajon
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
        />
      </Hidden>
      <Hidden xsDown>
        <Cajon variant="permanent" open={true} />
      </Hidden>
      <div className={classes.content}>
        <div className={classes.toolbar}></div>
        <Home />
      </div>
    </div>
  )
}

export default Content
