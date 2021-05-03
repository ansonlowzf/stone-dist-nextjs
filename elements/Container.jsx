import { Container, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  containerMt: {
    marginTop: theme.spacing(15),
    [theme.breakpoints.down("md")]: {
      marginTop: theme.spacing(10),
    },
  },
}));

export const ContainterLgMt = ({ children }) => {
  const classes = useStyles();

  return (
    <Container maxWidth="lg" className={classes.containerMt}>
      {children}
    </Container>
  );
};

export const ContainterMdMt = ({ children, noMarginTop }) => {
  const classes = useStyles();

  return (
    <Container
      maxWidth="md"
      className={noMarginTop ? null : classes.containerMt}
    >
      {children}
    </Container>
  );
};

export const ContainterSmMt = ({ children }) => {
  const classes = useStyles();

  return (
    <Container maxWidth="sm" className={classes.containerMt}>
      {children}
    </Container>
  );
};
