import { Hero } from "../src/components";
import { MediumWrapper, H2 } from "../src/elements";
import { makeStyles, Paper, Grid } from "@material-ui/core";

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
      <Hero
        image="/blue-pearl1.jpg"
        imageText="Granite Blue Pearl Kitchen Top"
        title="Granite Slab Wholesales"
        description="Supply Granite Slab in Malaysia"
        CTA1="Explore"
        CTA2="Contact Us"
      />
      <MediumWrapper>
        <H2 idPath="colour">Colour Shades</H2>
        <Grid container spacing={2} justify="center">
          <Grid item xs={12} sm={8}>
            <Paper
              className={classes.imageStyles}
              style={{
                backgroundImage: `url(/granite/black-galaxy.JPEG)`,
                height: 250,
              }}
            />
          </Grid>
        </Grid>
      </MediumWrapper>
    </>
  );
};

export default graniteSlab;
