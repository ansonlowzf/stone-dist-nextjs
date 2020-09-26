import {
  AppBar,
  Container,
  Hidden,
  IconButton,
  makeStyles,
  SwipeableDrawer,
  Toolbar,
  Typography,
  useScrollTrigger,
} from "@material-ui/core";
import { Home, Menu } from "@material-ui/icons";
import { useState } from "react";
import { ActiveLink } from "./ActiveLink";

const useStyles = makeStyles((theme) => ({
  toolbarContainer: {
    ...theme.mixins.toolbar,
  },
  navContainer: {
    marginLeft: "auto",
  },
  linkStyle: {
    marginLeft: theme.spacing(5),
    textDecoration: `none`,
    textTransform: `Capitalize`,
    color: theme.palette.common.white,
    opacity: 0.7,
    "&.active": {
      opacity: 1,
    },
  },
  sideDrawerLinkContainer: {
    marginTop: theme.spacing(5),
  },
  sideDrawerLink: {
    marginLeft: theme.spacing(5),
    color: theme.palette.text.primary,
    textDecoration: `none`,
    textTransform: `Capitalize`,
    opacity: 0.7,
    "&.active": {
      opacity: 1,
    },
  },

  sideDrawerStyles: {
    width: 250,
  },
  menuStyle: {
    color: theme.palette.common.white,
  },
}));

const routes = [
  { name: "home", link: "/" },
  { name: "about us", link: "/about-us" },
  { name: "quartz stone", link: "/quartz-stone" },
  { name: "granite", link: "/granite" },
  { name: "contact us", link: "/contact-us" },
];

export const Header = () => {
  const classes = useStyles();

  return (
    <>
      <ElevationScroll>
        <AppBar>
          <Container maxWidth="lg">
            <Toolbar>
              <IconButton>
                <ActiveLink activeClassName="active" href="/">
                  <a className={classes.linkStyle}>
                    <Home fontSize="large" style={{ color: `white` }} />
                  </a>
                </ActiveLink>
              </IconButton>
              <Hidden smDown>
                <Toolbar component="nav" className={classes.navContainer}>
                  {routes.map(({ name, link }) => (
                    <Typography variant="button" key={name}>
                      <ActiveLink activeClassName="active" href={link}>
                        <a className={classes.linkStyle}>{name}</a>
                      </ActiveLink>
                    </Typography>
                  ))}
                </Toolbar>
              </Hidden>
              <Hidden mdUp>
                <SideDrawer routes={routes} />
              </Hidden>
            </Toolbar>
          </Container>
        </AppBar>
      </ElevationScroll>
      <Toolbar id="back-to-top-anchor" className={classes.toolbarContainer} />
    </>
  );
};
const ElevationScroll = ({ children }) => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });
  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
};
const SideDrawer = () => {
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
