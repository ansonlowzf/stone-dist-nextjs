import { makeStyles, Container } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  sectionWrapperStyles: {
    marginTop: theme.spacing(13),
    marginBottom: theme.spacing(13),
  },
}));

export const SectionWrapper = ({ children }) => {
  const classes = useStyles();

  return (
    <Container maxWidth="sm" className={classes.sectionWrapperStyles}>
      {children}
    </Container>
  );
};

export const MediumWrapper = ({ children }) => {
  const classes = useStyles();

  return (
    <Container maxWidth="md" className={classes.sectionWrapperStyles}>
      {children}
    </Container>
  );
};
