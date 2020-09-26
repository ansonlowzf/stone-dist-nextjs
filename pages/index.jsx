import { Grid, Typography } from "@material-ui/core";
import { Hero } from "../src/components";
import { H2 } from "../src/elements";

const Home = () => {
  return (
    <>
      <Hero
        image="/factory-entrance.jpg"
        imageText="factory entrance"
        title="Stone Surfacing Distributor"
        description="We import &amp; distribute stone surfacing in Malaysia"
      />

      <H2>About Us</H2>
    </>
  );
};

export default Home;
