import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import { ColorModeContext } from "./utilities/ColorModeContext";

import Home from "./screens/Home";
import { useContext } from "react";

function App(props) {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <Home
              themeMode={theme.palette.mode}
              toggleColorMode={colorMode.toggleColorMode}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
