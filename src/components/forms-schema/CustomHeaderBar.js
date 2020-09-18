import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const CustomHeaderBar = ({ classes }) => (
  <AppBar style={{ background: "purple" }} position="static">
    <Toolbar>
      <IconButton
        edge="start"
        className={classes.menuButton}
        color="inherit"
        aria-label="menu"
      />
      <Typography variant="h6" className={classes.title}>
        Dashboard
      </Typography>
      <Button color="inherit">Login</Button>
    </Toolbar>
  </AppBar>
);

export default CustomHeaderBar;
