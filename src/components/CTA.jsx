import { Avatar, Box, Typography } from "@material-ui/core";
import { H2 } from "../elements";

export const CTA = () => {
  return (
    <Box align="center" py={4} px={3}>
      <H2>Quotation &amp; Inquiries</H2>
      <Avatar
        alt="Anson Low Profile"
        src="/ansonlowzf.jpg"
        style={{ width: 150, height: 150, marginBottom: 40 }}
      />
      <Typography component="p" variant="h6" align="center" paragraph>
        {`Call / WhatsApp - Anson Low`}
      </Typography>
      <Typography component="p" variant="h6" align="center" paragraph>
        <a href="tel:+60168262314">016-8262 314</a>
      </Typography>

      <Typography component="p" variant="body1" paragraph align="center">
        Warehouse Location: Kampung Baru Sungai Buloh, Selangor
      </Typography>
    </Box>
  );
};
