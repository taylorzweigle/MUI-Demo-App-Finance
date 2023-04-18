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
  const years = ["2022", "2023"];

  const [user] = useState("Taylor Zweigle");
  const [theme, setTheme] = useState(lightTheme);
  const [year, setYear] = useState(years[0]);

  const handleThemeChange = (theme) => {
    if (theme === "light") {
      setTheme(lightTheme);
    }
    if (theme === "dark") {
      setTheme(darkTheme);
    }
  };

  const handleYearChange = (year) => setYear(year);

  const pageStyle = { backgroundColor: "background.page" };
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
            user={user}
            title="Fat Wallet"
            year={year}
            years={years}
            onThemeChange={(theme) => handleThemeChange(theme)}
            onYearChange={(year) => handleYearChange(year)}
          />
          <Routes>
            <Route path="/Dashboard" element={<DashboardPage theme={theme.palette.mode} year={year} />} />
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
