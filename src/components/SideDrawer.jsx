import {
  Typography,
  Toolbar,
  IconButton,
  SwipeableDrawer,
} from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import { useState } from "react";
import { ActiveLink } from "../components";

export const SideDrawer = ({ routes }) => {
  const classes = useStyles();
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const [state, setState] = useState({ right: false });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const SideDrawerList = (anchor) => (
    <div
      className={classes.sideDrawerStyles}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      {routes.map(({ name, link }) => (
        <Typography
          display="block"
          variant="button"
          key={name}
          className={classes.sideDrawerLinkContainer}
        >
          <ActiveLink activeClassName="active" href={link}>
            <a className={classes.sideDrawerLink}>{name}</a>
          </ActiveLink>
        </Typography>
      ))}
    </div>
  );

  return (
    <Toolbar className={classes.navContainer}>
      <IconButton
        edge="start"
        aria-label="menu"
        onClick={toggleDrawer("right", true)}
      >
        <Menu fontSize="large" className={classes.menuStyle} />
      </IconButton>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        anchor="right"
        open={state.right}
        onOpen={toggleDrawer("right", true)}
        onClose={toggleDrawer("right", false)}
      >
        {SideDrawerList("right")}
      </SwipeableDrawer>
    </Toolbar>
  );
};
