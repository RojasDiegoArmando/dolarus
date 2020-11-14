import React, { useState } from "react"
import Navbar from "./Navbar"
import Cajon from "./Cajon"
import Home from "./Home"
import { Switch, Route, Link } from "react-router-dom"
import { makeStyles, Hidden } from "@material-ui/core"
import About from "./About"
import Pure from "./Pure"

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
      <Navbar handleDrawerToggle={handleDrawerToggle} />
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
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/pure">
            <Pure />
          </Route>
        </Switch>
      </div>
    </div>
  )
}

export default Content
