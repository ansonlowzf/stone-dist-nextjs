import { makeStyles, Grid, Typography, Paper } from "@material-ui/core";
import { Hero, StoneCard, CTA } from "../src/components";
import { H2, SectionWrapper, MediumWrapper } from "../src/elements";

const useStyles = makeStyles((theme) => ({
  videoStyle: {
    position: `relative`,
    width: `100%`,
    height: 500,
    [theme.breakpoints.down("sm")]: {
      height: 390,
    },
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <>
      <Hero
        image="/factory-entrance.jpg"
        imageText="factory entrance"
        title="Stone Surfacing Distributor"
        description="We import &amp; distribute stone surfacing in Malaysia"
        CTA1="Explore"
        CTA2="Contact Us"
      />

      <SectionWrapper>
        <H2>About Us</H2>
        <Typography paragraph>
          {`We import and distribute natural stone and engineered stone`}
        </Typography>
        <Typography paragraph>
          1. Natural Stone - Granite, Marble, Agate Stone
        </Typography>
        <Typography paragraph>
          2. Engineered Stone - Quartz Stone, Porcelain Slab, Ultra-Compact
          Stone
        </Typography>
        <Typography paragraph>
          3. Fabrication Tools - Polisher, Marble Glue
        </Typography>
        <Typography paragraph>4. Machines Tools - Cutter Blade</Typography>
        <Typography paragraph>
          With more than 800 stone slabs ready-stock in our Klang Valley's
          warehouse. Check out factory video to see our ready-stock stone
          material.
        </Typography>
        <Typography component="p" variant="h6">
          Grow Your Stone Business With Us
        </Typography>
      </SectionWrapper>

      <MediumWrapper>
        <H2>Warehouse</H2>
        <Paper elevation={4}>
          <Grid container justify="center">
            <iframe
              title="stone distributor warehouse walkthrough"
              className={classes.videoStyle}
              src="https://www.youtube.com/embed/n_aPfgbuSDA"
              scrolling="no"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </Grid>
        </Paper>
      </MediumWrapper>

      <MediumWrapper>
        <H2>Stone Types</H2>
        <Grid container justify="center" spacing={2}>
          <Grid item xs={12} sm={6} md={4}>
            <StoneCard
              stone="Granite"
              linkURL="/granite-slab"
              stoneDescription="7 popular shades to choose from"
              imgSource="/granite/blue-pearl.JPG"
              altText="Granite Blue Pearl"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <StoneCard
              stone="Quartz Stone"
              linkURL="/quartz-stone-slab"
              stoneDescription="More than 60 colour to choose from"
              imgSource="/Q3015.jpg"
              altText="Quartz Stone"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <StoneCard
              stone="Caesarstone"
              linkURL="/caesarstone-slab"
              stoneDescription="More than 32 colour to choose from"
              imgSource="/cs5031.jpg"
              altText="Caesarstone"
            />
          </Grid>
        </Grid>
      </MediumWrapper>

      <MediumWrapper>
        <CTA />
      </MediumWrapper>
    </>
  );
};

export default Home;
