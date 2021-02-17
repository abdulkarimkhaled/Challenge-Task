import { Platform } from 'react-native';

/*
 * Provides universal color configs used in the app.
 * Provides universal fonts used in the app.
 */

const AppStyles = {
  Color: {
    THEME_APP_DARK: "#004E6F",
    THEME_APP_LIGHT: "#009CDE",
    THEME_APP_GRADIENT: ["#009CDE", "#004E6F"],
    WHITE: "#ffffff",
    BACKGROUND_COLOR: "#F5F6F8",
    TEXT_GRAY: "#ABABAB",
    HEADER_TEXT: "#29304D",
    BALANCE_TEXT: '#F7F6FB',
    LIGHT_GRAY: '#9DC7DB',
    rgba: (r, g, b, a) => 'rgba(' + r + "," + g + "," + b + "," + a + ")",
  },
  Fonts:
  {
    Regular: "Roboto-Regular",
    Bold: "Roboto-Bold",
    BoldItalic: "Roboto-BoldItalic",
    Thin: "Roboto-Thin",
    ThinItalic: "Roboto-ThinItalic",
    Light: "Roboto-Light",
    Medium: "Roboto-Medium"
  }
};
export default AppStyles;
