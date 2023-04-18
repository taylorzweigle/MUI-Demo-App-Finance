//Taylor Zweigle, 2023
import { createTheme } from "@mui/material";

import * as ThemeTokens from "./systemTokens";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    common: {
      black: ThemeTokens.SYS_COMMON_BLACK,
      white: ThemeTokens.SYS_COMMON_WHITE,
    },
    primary: {
      main: ThemeTokens.SYS_LIGHT_THEME_PRIMARY_MAIN,
      light: ThemeTokens.SYS_LIGHT_THEME_PRIMARY_LIGHT,
      dark: ThemeTokens.SYS_LIGHT_THEME_PRIMARY_DARK,
    },
    secondary: {
      main: ThemeTokens.SYS_LIGHT_THEME_SECONDARY_MAIN,
      light: ThemeTokens.SYS_LIGHT_THEME_SECONDARY_LIGHT,
      dark: ThemeTokens.SYS_LIGHT_THEME_SECONDARY_DARK,
    },
    tertiary: {
      main: ThemeTokens.SYS_LIGHT_THEME_TERTIARY_MAIN,
      light: ThemeTokens.SYS_LIGHT_THEME_TERTIARY_LIGHT,
      dark: ThemeTokens.SYS_LIGHT_THEME_TERTIARY_DARK,
    },
    error: {
      main: ThemeTokens.SYS_LIGHT_THEME_ERROR_MAIN,
      light: ThemeTokens.SYS_LIGHT_THEME_ERROR_LIGHT,
      dark: ThemeTokens.SYS_LIGHT_THEME_ERROR_DARK,
    },
    warning: {
      main: ThemeTokens.SYS_LIGHT_THEME_WARNING_MAIN,
      light: ThemeTokens.SYS_LIGHT_THEME_WARNING_LIGHT,
      dark: ThemeTokens.SYS_LIGHT_THEME_WARNING_DARK,
    },
    info: {
      main: ThemeTokens.SYS_LIGHT_THEME_INFO_MAIN,
      light: ThemeTokens.SYS_LIGHT_THEME_INFO_LIGHT,
      dark: ThemeTokens.SYS_LIGHT_THEME_INFO_DARK,
    },
    success: {
      main: ThemeTokens.SYS_LIGHT_THEME_SUCCESS_MAIN,
      light: ThemeTokens.SYS_LIGHT_THEME_SUCCESS_LIGHT,
      dark: ThemeTokens.SYS_LIGHT_THEME_SUCCESS_DARK,
    },
    grey: {
      50: ThemeTokens.SYS_GRAY_50,
      100: ThemeTokens.SYS_GRAY_100,
      200: ThemeTokens.SYS_GRAY_200,
      300: ThemeTokens.SYS_GRAY_300,
      400: ThemeTokens.SYS_GRAY_400,
      500: ThemeTokens.SYS_GRAY_500,
      600: ThemeTokens.SYS_GRAY_600,
      700: ThemeTokens.SYS_GRAY_700,
      800: ThemeTokens.SYS_GRAY_800,
      900: ThemeTokens.SYS_GRAY_900,
    },
    chart: {
      50: ThemeTokens.SYS_LIGHT_THEME_CHART_50,
      100: ThemeTokens.SYS_LIGHT_THEME_CHART_100,
      200: ThemeTokens.SYS_LIGHT_THEME_CHART_200,
      300: ThemeTokens.SYS_LIGHT_THEME_CHART_300,
      400: ThemeTokens.SYS_LIGHT_THEME_CHART_400,
      500: ThemeTokens.SYS_LIGHT_THEME_CHART_500,
      600: ThemeTokens.SYS_LIGHT_THEME_CHART_600,
      700: ThemeTokens.SYS_LIGHT_THEME_CHART_700,
      800: ThemeTokens.SYS_LIGHT_THEME_CHART_800,
      900: ThemeTokens.SYS_LIGHT_THEME_CHART_900,
    },
    text: {
      primary: ThemeTokens.SYS_LIGHT_THEME_TEXT_PRIMARY,
      secondary: ThemeTokens.SYS_LIGHT_THEME_TEXT_SECONDARY,
      disabled: ThemeTokens.SYS_LIGHT_THEME_TEXT_DISABLED,
    },
    background: {
      paper: ThemeTokens.SYS_LIGHT_THEME_BACKGROUND_PAPER,
      default: ThemeTokens.SYS_LIGHT_THEME_BACKGROUND_DEFAULT,
      page: ThemeTokens.SYS_GRAY_200,
    },
    action: {
      active: ThemeTokens.SYS_LIGHT_THEME_TEXT_PRIMARY,
    },
  },
  shape: {
    borderRadius: 0,
  },
  typography: {
    button: {
      textTransform: ThemeTokens.SYS_TEXT_TRANSFORM,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: ThemeTokens.SYS_GRAY_200,
        },
      },
    },
  },
});
