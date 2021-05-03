import { Box, Grid, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  H2wMarginTop: {
    marginTop: theme.spacing(15),
    [theme.breakpoints.down("md")]: {
      marginTop: theme.spacing(10),
    },
  },
  H2TitleMB: {
    marginBottom: theme.spacing(6),
  },
  textUnderline: {
    borderBottom: `2px solid grey`,
    paddingBottom: theme.spacing(2),
  },
}));

export const H2Title = ({ children, useMarginTop, idPath }) => {
  const classes = useStyles();

  return (
    <Grid
      container
      item
      justify="center"
      className={`${useMarginTop ? classes.H2wMarginTop : null} ${
        classes.H2TitleMB
      }`}
    >
      <Typography
        variant="h2"
        align="center"
        id={idPath}
        gutterBottom
        className={classes.textUnderline}
      >
        {children}
      </Typography>
    </Grid>
  );
};

export const H2Subtitle = ({ children }) => {
  return (
    <Box mb={5} pb={3} align="center">
      <Typography
        component="h3"
        variant="h6"
        align="center"
        color="textSecondary"
      >
        {children}
      </Typography>
    </Box>
  );
};
