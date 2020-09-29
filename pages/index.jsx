import { makeStyles, Grid, Typography, Paper } from "@material-ui/core";
import { Hero } from "../src/components";
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
              allowFullFcreen
            ></iframe>
          </Grid>
        </Paper>
      </MediumWrapper>
    </>
  );
};

export default Home;
