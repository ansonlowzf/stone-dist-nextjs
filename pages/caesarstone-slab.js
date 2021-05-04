import { Grid } from "@material-ui/core";
import * as React from "react";
import { ContainterLgMt, H2Subtitle, H2Title } from "../elements";
import { HeroNext, ProductDisplay } from "../src/components";

const CaesarstoneSlab = () => {
  return (
    <>
      <HeroNext
        imgSrc="/calacatta-nuvo.jpg"
        imgText="Caesarstone Calacatta Nuvo Island Top"
        title="Caesarstone Distributor"
        subtitle="Distribute Caesarstone Slab"
      />

      <ContainterLgMt>
        <H2Title idPath="colour">Caesarstone Colour</H2Title>
        <H2Subtitle>All 32 Colours Available In Malaysia</H2Subtitle>
      </ContainterLgMt>

      <ContainterLgMt maxWidth="lg">
        <Grid container spacing={2} justify="center">
          <ProductDisplay
            imgSrc="/classico/cs1141.jpg"
            stoneName="1141 Pure White (Polished)"
          />

          <ProductDisplay
            imgSrc="/classico/cs2141.jpg"
            stoneName="2141 Snow (Polished)"
          />

          <ProductDisplay
            imgSrc="/classico/cs3100.jpg"
            stoneName="3100 Jet Black (Polished)"
          />

          <ProductDisplay
            imgSrc="/classico/cs3101.jpg"
            stoneName="3101 Piatto Black (Natural)"
          />

          <ProductDisplay
            imgSrc="/classico/cs4001.jpg"
            stoneName="4001 Fresh Concrete (Matt)"
          />

          <ProductDisplay
            imgSrc="/classico/cs4011.jpg"
            stoneName="4011 Cloudburst Concrete (Rough)"
          />

          <ProductDisplay
            imgSrc="/classico/cs4023.jpg"
            stoneName="4023 Topus Concrete (Rough)"
          />

          <ProductDisplay
            imgSrc="/classico/cs4030.jpg"
            stoneName="4030 Oyster (Polished)"
          />

          <ProductDisplay
            imgSrc="/classico/cs4033.jpg"
            stoneName="4033 Rugged Concrete (Rough)"
          />

          <ProductDisplay
            imgSrc="/classico/cs4044.jpg"
            stoneName="4044 Airy Concrete (Rough)"
          />

          <ProductDisplay
            imgSrc="/classico/cs4120.jpg"
            stoneName="4120 Raven (Polished)"
          />

          <ProductDisplay
            imgSrc="/classico/cs4130.jpg"
            stoneName="4130 Clamshell (Polished)"
          />

          <ProductDisplay
            imgSrc="/classico/cs4220.jpg"
            stoneName="4220 Buttermilk (Polished)"
          />

          <ProductDisplay
            imgSrc="/classico/cs4230.jpg"
            stoneName="4230 Shitake (Polished)"
          />

          <ProductDisplay
            imgSrc="/classico/cs4330.jpg"
            stoneName="4330 Ginger (Polished)"
          />

          <ProductDisplay
            imgSrc="/classico/cs4350.jpg"
            stoneName="4350 Mink (Polished)"
          />

          <ProductDisplay
            imgSrc="/classico/cs4600.jpg"
            stoneName="4600 Organic White (Polished)"
          />

          <ProductDisplay
            imgSrc="/classico/cs4601.jpg"
            stoneName="4601 Frozen Terra (Matt)"
          />

          <ProductDisplay
            imgSrc="/classico/cs4735.jpg"
            stoneName="4735 Oxidian (Natural)"
          />

          <ProductDisplay
            imgSrc="/classico/cs5003.jpg"
            stoneName="5003 Piatra Grey (Polished)"
          />

          <ProductDisplay
            imgSrc="/classico/cs5031.jpg"
            stoneName="5031 Statuario Maximus (Polished)"
          />

          <ProductDisplay
            imgSrc="/classico/cs5100.jpg"
            stoneName="5100 Vanilla Noir (Polished)"
          />

          <ProductDisplay
            imgSrc="/classico/cs5101.jpg"
            stoneName="5101 Empira Black (Polished/Natural)"
          />

          <ProductDisplay
            imgSrc="/classico/cs5131.jpg"
            stoneName="5131 Calacatta Nuvo (Polished)"
          />

          <ProductDisplay
            imgSrc="/classico/cs5133.jpg"
            stoneName="5133 Symphony Grey (Polished)"
          />

          <ProductDisplay
            imgSrc="/classico/cs5141.jpg"
            stoneName="5141 Frosty Carrina (Polished)"
          />

          <ProductDisplay
            imgSrc="/classico/cs5143.jpg"
            stoneName="5143 White Attica (Polished)"
          />

          <ProductDisplay
            imgSrc="/classico/cs5151.jpg"
            stoneName="5151 Empira White (Polished)"
          />

          <ProductDisplay
            imgSrc="/classico/cs5810.jpg"
            stoneName="5810 Black Tempal (Natural)"
          />

          <ProductDisplay
            imgSrc="/classico/cs6046.jpg"
            stoneName="6046 Moorland Fog (Polished)"
          />

          <ProductDisplay
            imgSrc="/classico/cs6011.jpg"
            stoneName="6011 Intense White (Polished)"
          />

          <ProductDisplay
            imgSrc="/classico/cs6131.jpg"
            stoneName="6131 Bianco Drift (Polished)"
          />

          <ProductDisplay
            imgSrc="/classico/cs6313.jpg"
            stoneName="6313 Turbine Grey (Polished)"
          />

          <ProductDisplay
            imgSrc="/classico/cs6338.jpg"
            stoneName="6338 Woodlands (Polished)"
          />
        </Grid>
      </ContainterLgMt>
    </>
  );
};

export default CaesarstoneSlab;
