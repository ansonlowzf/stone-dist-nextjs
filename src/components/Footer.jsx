import { makeStyles, Grid, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  footerStyles: {
    backgroundColor: theme.palette.primary.main,
    marginTop: theme.spacing(15),
    [theme.breakpoints.down("md")]: {
      marginTop: theme.spacing(10),
    },
  },
  textContainer: {
    height: 200,
  },
}));

export const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footerStyles}>
      <Grid
        container
        justify="center"
        alignItems="center"
        className={classes.textContainer}
      >
        <Grid item>
          <Typography align="center">
            © 2013 - {new Date().getFullYear()}, By Stone Innovations Enterprise
          </Typography>
        </Grid>
      </Grid>
    </footer>
  );
};
