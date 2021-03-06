import {
  makeStyles,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import Link from "next/link";

const useStyles = makeStyles((theme) => ({
  media: {
    height: 140,
    [theme.breakpoints.down("sm")]: {
      height: 180,
    },
  },
  linkStyle: {
    textDecoration: `none`,
  },
}));

export const StoneCard = ({
  stone,
  stoneDescription,
  imgSource,
  altText,
  linkURL,
}) => {
  const classes = useStyles();

  return (
    <Card>
      <CardActionArea>
        <CardMedia
          image={imgSource}
          title={altText}
          className={classes.media}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {stone}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {stoneDescription}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link href={linkURL}>
          <a className={classes.linkStyle}>
            <Button size="large" color="primary">
              See Colour
            </Button>
          </a>
        </Link>
      </CardActions>
    </Card>
  );
};
