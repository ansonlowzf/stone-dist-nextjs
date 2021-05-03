import { Grid, makeStyles, Typography } from "@material-ui/core";
import Image from "next/image";
import { ArrowDownward } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  heroBgContainer: {
    position: `relative`,
    height: `100vh`,
    width: `100vw`,
    overflow: `hidden`,
    zIndex: -1,
  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,.7)",
  },
  titleStyles: {
    fontWeight: 400,
  },
  subtitleStyles: {
    color: theme.palette.common.white,
    marginBottom: theme.spacing(10),
  },
  arrowMargin: {
    marginTop: theme.spacing(1),
  },
}));

export const HeroNext = ({ imgSrc, imgText, title, subtitle }) => {
  const classes = useStyles();

  return (
    <Grid container className={classes.heroBgContainer}>
      <Image
        src={imgSrc}
        alt={imgText}
        layout="fill"
        objectFit="cover"
        quality={100}
      />
      <Grid
        container
        item
        direction="column"
        justify="center"
        alignItems="center"
        className={classes.overlay}
      >
        <Grid item className={classes.textContainer}>
          <Typography
            variant="h1"
            color="secondary"
            align="center"
            gutterBottom
            className={classes.titleStyles}
          >
            {title}
          </Typography>
          <Typography
            variant="h3"
            color="inherit"
            align="center"
            gutterBottom
            className={classes.subtitleStyles}
          >
            {subtitle}
          </Typography>
        </Grid>
        <Typography component="span" variant="h5" color="secondary">
          Scroll
        </Typography>
        <ArrowDownward
          fontSize="large"
          color="secondary"
          className={classes.arrowMargin}
        />
      </Grid>
    </Grid>
  );
};
