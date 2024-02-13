import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext } from "";
import Home from "./screens/Home";

function App() {
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
