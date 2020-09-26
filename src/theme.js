import { createMuiTheme, responsiveFontSizes } from "@material-ui/core";
import { blue, orange } from "@material-ui/core/colors";

let theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: orange,
  },
});

theme = responsiveFontSizes(theme);

export default theme;
