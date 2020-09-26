import { Paper, makeStyles, Grid, Typography, Button } from "@material-ui/core";
// import Link from "next/link";

const useStyles = makeStyles((theme) => ({
  heroStyle: {
    position: `relative`,
    width: `100%`,
    height: `90vh`,
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,.7)",
  },
  buttonStyles: {
    marginRight: theme.spacing(2),
  },
  textContainer: {
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    [theme.breakpoints.down(`sm`)]: {
      textAlign: `center`,
    },
  },
}));

export const Hero = ({ image, imageText, title, description }) => {
  const classes = useStyles();

  return (
    <Paper
      className={classes.heroStyle}
      style={{
        backgroundImage: `url(${image})`,
        height: `90vh`,
      }}
    >
      {/* Increase the priority of the hero background image */}
      {<img style={{ display: "none" }} src={image} alt={imageText} />}

      <Grid
        container
        justify="center"
        alignItems="center"
        className={classes.overlay}
      >
        <Grid item className={classes.textContainer}>
          <Typography variant="h1" color="secondary" gutterBottom>
            {title}
          </Typography>
          <Typography
            variant="h3"
            color="inherit"
            gutterBottom
            style={{ marginBottom: `48px` }}
          >
            {description}
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            className={classes.buttonStyles}
          >
            Main CTA
          </Button>
          <Button variant="outlined" color="secondary" size="large">
            secondary CTA
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};
