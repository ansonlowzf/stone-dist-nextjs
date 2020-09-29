import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  h2Styles: {
    marginBottom: theme.spacing(6),
    fontWeight: 500,
  },
}));

export const H2 = ({ children, path }) => {
  const classes = useStyles();

  return (
    <Typography
      component="h2"
      variant="h3"
      align="center"
      color="primary"
      id={path}
      className={classes.h2Styles}
    >
      {children}
    </Typography>
  );
};
