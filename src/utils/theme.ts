import { createTheme } from "@mui/material/styles";

declare module "@mui/material/SvgIcon" {
  interface SvgIconPropsSizeOverrides {
    huge: true;
    veryHuge: true;
  }
}

export const theme = createTheme({
  palette: {
    primary: {
      main: "#eb5440",
      light: "#ec8a7c",
      contrastText: "white",
    },
    secondary: {
      main: "#626262",
      light: "#898989",
      contrastText: "white",
    },
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          // fontSize: "14px !important",
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          cursor: "pointer",
          color: "#eaeaea",
          "&:hover": {
            color: "black",
          },
        },
      },
    },
    MuiSvgIcon: {
      variants: [
        {
          props: { fontSize: "huge" },
          style: {
            fontSize: "4rem",
          },
        },
        {
          props: { fontSize: "veryHuge" },
          style: {
            fontSize: "8rem",
          },
        },
      ],
    },
  },
});
