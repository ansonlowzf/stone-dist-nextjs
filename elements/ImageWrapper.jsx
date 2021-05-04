import { Paper, makeStyles, Grid, Typography } from "@material-ui/core";
import * as React from "react";
import Image from "next/image";

const useStyles = makeStyles((theme) => ({
  paperStyles: {
    margin: theme.spacing(0, 0, 2),
  },
}));

export const ImageContainer = ({ children }) => {
  const classes = useStyles();

  return (
    <Paper elevation={4} className={classes.paperStyles}>
      {children}
    </Paper>
  );
};

export const ZenstoneDisplay = ({ imgSrc, stoneName }) => {
  return (
    <Grid item xs={6} md={3}>
      <Paper
        component={Image}
        src={imgSrc}
        alt={stoneName}
        width={800}
        height={450}
      />
      <Grid container justify="center">
        <Grid item xs={12}>
          <Typography align="center">{stoneName}</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};
