import * as React from "react";
import { HeroNext, ProductDisplay } from "../src/components";
import { makeStyles, Paper, Grid } from "@material-ui/core";
import { ContainterLgMt, H2Title } from "../elements";

const useStyles = makeStyles((theme) => ({
  imageStyles: {
    width: `100%`,
    height: `100%`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
}));

const graniteSlab = () => {
  const classes = useStyles();

  return (
    <>
      <HeroNext
        imgSrc="/blue-pearl1.jpg"
        imgText="Granite Blue Pearl Kitchen Top"
        title="Granite Slab Wholesales"
      />

      <ContainterLgMt>
        <H2Title idPath="colour">Colour &amp; Shades</H2Title>
        <Grid container spacing={2} justify="center">
          <ProductDisplay
            imgSrc="/granite/black-galaxy.JPEG"
            stoneName="Black Galaxy"
          />
          <ProductDisplay
            imgSrc="/granite/blue-pearl.JPG"
            stoneName="Blue Pearl"
          />
          <ProductDisplay
            imgSrc="/granite/bourbon-grey.JPG"
            stoneName="Bourbon Grey"
          />
          <ProductDisplay
            imgSrc="/granite/emerald-pearl.JPG"
            stoneName="Bourbon Grey"
          />
          <ProductDisplay
            imgSrc="/granite/imperial-red.JPG"
            stoneName="Imperial Red"
          />
          <ProductDisplay
            imgSrc="/granite/white-wave.JPG"
            stoneName="White Wave"
          />
          <ProductDisplay
            imgSrc="/granite/xan-xi-black.JPEG"
            stoneName="Xan Xi Black"
          />
        </Grid>
      </ContainterLgMt>
    </>
  );
};

export default graniteSlab;
