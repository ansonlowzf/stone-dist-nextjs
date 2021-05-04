import {
  AppBar,
  Container,
  Hidden,
  IconButton,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { Home } from "@material-ui/icons";
import { ActiveLink, HideOnScroll, SideDrawer } from "../components";

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
  { name: "caesarstone", link: "/caesarstone-slab" },
  { name: "quartz stone", link: "/quartz-stone-slab" },
  { name: "granite", link: "/granite-slab" },
  { name: "contact us", link: "/contact-us" },
];

export const Header = () => {
  const classes = useStyles();

  return (
    <>
      <HideOnScroll>
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
      </HideOnScroll>
      <Toolbar id="back-to-top-anchor" className={classes.toolbarContainer} />
    </>
  );
};
