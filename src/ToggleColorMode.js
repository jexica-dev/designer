import React, { useContext } from "react";
import { useState, useMemo } from "react";
import { ColorModeContext } from "./utilities/ColorModeContext";
import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles";
import App from "./App";

export default function ToggleColorMode() {
  const ColorContext = ColorModeContext;
  const [mode, setMode] = useState("light");
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
        typography: {
          fontFamily: [
            "Space Mono",
            "Satoshi",
            "Roboto",
            '"Helvetica Neue"',
            "Arial",
            "sans-serif",
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
          ].join(","),
        },
      }),
    [mode]
  );
  return (
    <ColorContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </ColorContext.Provider>
  );
}
