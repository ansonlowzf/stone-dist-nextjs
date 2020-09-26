import { Box, Typography } from "@material-ui/core";

export const Footer = () => {
  return (
    <Box
      component="footer"
      py={5}
      mt={{ xs: 10, sm: 13, md: 15 }}
      bgcolor="primary.main"
    >
      <Box color="background.paper">
        <Typography align="center">
          © 2013 - {new Date().getFullYear()}, Stone Innovations Enterprise
        </Typography>
      </Box>
    </Box>
  );
};
