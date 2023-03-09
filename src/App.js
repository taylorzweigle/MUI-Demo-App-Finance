//Taylor Zweigle, 2023
import React, { useState } from "react";
import { Route, Routes, Navigate } from "react-router";

import { ThemeProvider } from "@mui/material";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";

import AppHeader from "./components/pattern/navigation/appHeader";
import LeftNavigation from "./components/pattern/navigation/leftNavigation";

import DashboardPage from "./pages/dashboardPage";
import LoginPage from "./pages/loginPage";
import PaymentsPage from "./pages/paymentsPage";
import TransactionsPage from "./pages/transactionsPage";

import { lightTheme } from "./themes/lightTheme";
import { darkTheme } from "./themes/darkTheme";

import "./App.css";

function App() {
  let [theme, setTheme] = useState(lightTheme);

  const handleThemeChange = (theme) => {
    if (theme === "light") {
      setTheme(lightTheme);
    }
    if (theme === "dark") {
      setTheme(darkTheme);
    }
  };

  const pageStyle = {
    height: "100%",
    width: "100%",
    backgroundColor: "grey.50",
  };

  const leftNavigationStyle = {
    float: "left",
    width: "100%",
    maxWidth: "256px",
  };

  const overflowStyle = { overflow: "hidden" };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={pageStyle}>
        <Box sx={leftNavigationStyle}>
          <LeftNavigation />
        </Box>
        <Box sx={overflowStyle}>
          <AppHeader
            title="App Header"
            onThemeChange={(theme) => handleThemeChange(theme)}
          />
          <Routes>
            <Route
              path="/Dashboard"
              element={<DashboardPage theme={theme.palette.mode} />}
            />
            <Route path="/Transactions" element={<TransactionsPage />} />
            <Route path="/Payments" element={<PaymentsPage />} />
            <Route path="/" element={<LoginPage />} />
            <Route path="*" element={<Navigate to="/Dashboard" />} />
          </Routes>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
