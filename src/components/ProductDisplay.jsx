import { Grid, Paper, Typography } from "@material-ui/core";
import Image from "next/image";

export const ProductDisplay = ({ imgSrc, stoneName }) => {
  return (
    <Grid item xs={12} md={6}>
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
