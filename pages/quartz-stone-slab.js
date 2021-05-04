import { Grid } from "@material-ui/core";
import * as React from "react";
import { ContainterLgMt, H2Title, ZenstoneDisplay } from "../elements";
import { HeroNext, ZenstoneSlabDisplay } from "../src/components";

const QuartzStoneSlab = () => {
  return (
    <>
      <HeroNext
        imgSrc="/calacatta-zen.jpg"
        imgText="Zenstone Calacatta Zen Island Top"
        title="Genuine Quartz Stone Distribution"
        subtitle="More Than 60 Colours &amp; Ready Stock"
      />

      <ContainterLgMt>
        <H2Title idPath="colour">Colour &amp; Shades</H2Title>
        <Grid container spacing={2} justify="center">
          <ZenstoneDisplay imgSrc="/qs/Q3015.jpg" stoneName="Q3015" />
          <ZenstoneDisplay imgSrc="/qs/Q4015.jpg" stoneName="Q4015" />
          <ZenstoneDisplay imgSrc="/qs/Q101503.jpg" stoneName="Q101503" />
          <ZenstoneDisplay imgSrc="/qs/Q101506.JPEG" stoneName="Q101506" />
          <ZenstoneDisplay imgSrc="/qs/Q101508.JPEG" stoneName="Q101508" />
          <ZenstoneDisplay imgSrc="/qs/Q101509.jpg" stoneName="Q101509" />
          <ZenstoneDisplay imgSrc="/qs/Q101510.jpg" stoneName="Q101510" />
          <ZenstoneDisplay imgSrc="/qs/Q101511.jpg" stoneName="Q101511" />
          <ZenstoneDisplay imgSrc="/qs/Q101521.JPEG" stoneName="Q101521" />
          <ZenstoneDisplay imgSrc="/qs/Q101522.JPEG" stoneName="Q101522" />
          <ZenstoneDisplay imgSrc="/qs/Q101523.jpg" stoneName="Q101523" />
          <ZenstoneDisplay imgSrc="/qs/Q101524.JPEG" stoneName="Q101524" />
          <ZenstoneDisplay imgSrc="/qs/Q101525.jpg" stoneName="Q101525" />
          <ZenstoneDisplay imgSrc="/qs/Q101526.JPEG" stoneName="Q101526" />
          <ZenstoneDisplay imgSrc="/qs/Q101528.JPEG" stoneName="Q101528" />
          <ZenstoneDisplay imgSrc="/qs/Q201501.jpg" stoneName="Q201501" />
          <ZenstoneDisplay imgSrc="/qs/Q201504.jpg" stoneName="Q201504" />
          <ZenstoneDisplay imgSrc="/qs/Q201505.jpg" stoneName="Q201505" />
          <ZenstoneDisplay imgSrc="/qs/Q201506.jpg" stoneName="Q201506" />
          <ZenstoneDisplay imgSrc="/qs/Q201541.jpg" stoneName="Q201541" />
          <ZenstoneDisplay imgSrc="/qs/Q202032.jpg" stoneName="Q202032" />
          <ZenstoneDisplay imgSrc="/qs/Q401501.jpg" stoneName="Q401501" />
          <ZenstoneDisplay imgSrc="/qs/Q601501.jpg" stoneName="Q601501" />
          <ZenstoneDisplay imgSrc="/qs/Q601502.JPEG" stoneName="Q601502" />
          <ZenstoneDisplay imgSrc="/qs/Q601503.jpg" stoneName="Q601503" />
          <ZenstoneDisplay imgSrc="/qs/Q601504.jpg" stoneName="Q601504" />
          <ZenstoneDisplay imgSrc="/qs/Q601505.jpg" stoneName="Q601505" />
          <ZenstoneDisplay imgSrc="/qs/Q601507.JPEG" stoneName="Q601507" />
          <ZenstoneDisplay imgSrc="/qs/Q601509.jpg" stoneName="Q601509" />
          <ZenstoneDisplay imgSrc="/qs/Q702001.JPEG" stoneName="Q702001" />
          <ZenstoneDisplay imgSrc="/qs/Q702003.JPEG" stoneName="Q702003" />
          <ZenstoneDisplay imgSrc="/qs/Q702005.JPEG" stoneName="Q702005" />
          <ZenstoneDisplay imgSrc="/qs/Q702011.JPEG" stoneName="Q702011" />
          <ZenstoneDisplay imgSrc="/qs/Q802003.jpg" stoneName="Q802003" />
          <ZenstoneDisplay imgSrc="/qs/Q802008.jpg" stoneName="Q802008" />
        </Grid>
      </ContainterLgMt>

      <ContainterLgMt>
        <Grid container spacing={2}>
          <ZenstoneSlabDisplay imgSrc="/qs/Q801501.jpg" stoneName="Q801501" />
          <ZenstoneSlabDisplay imgSrc="/qs/Q801534.jpg" stoneName="Q801534" />
          <ZenstoneSlabDisplay imgSrc="/qs/Q802021.jpg" stoneName="Q802021" />
          <ZenstoneSlabDisplay imgSrc="/qs/Q802023.jpg" stoneName="Q802023" />
          <ZenstoneSlabDisplay imgSrc="/qs/Q802025.jpeg" stoneName="Q802025" />
          <ZenstoneSlabDisplay imgSrc="/qs/Q802026.jpg" stoneName="Q802026" />
          <ZenstoneSlabDisplay imgSrc="/qs/Q802027.jpg" stoneName="Q802027" />
          <ZenstoneSlabDisplay imgSrc="/qs/Q802031.jpg" stoneName="Q80202631" />
        </Grid>
      </ContainterLgMt>
    </>
  );
};

export default QuartzStoneSlab;
