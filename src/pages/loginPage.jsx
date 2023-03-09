//Taylor Zweigle, 2023
import React from "react";
import { Link as RouterLink } from "react-router-dom";

import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

import SavingsIcon from "@mui/icons-material/Savings";

import * as ThemeTokens from "../themes/systemTokens";

const LoginPage = ({ onLogin }) => {
  const loginPageStyle = {
    position: "absolute",
    width: "100vw",
    height: "100vh",
    left: "0px",
    top: "0px",
    backgroundColor: "grey.50",
  };

  const iconSizeStyle = { fontSize: ThemeTokens.SYS_ICON_XL };
  const pageStyle = { width: "500px" };
  const textFieldStyle = { backgroundColor: "background.paper" };
  const linkStyle = { textDecoration: "none", color: "inherit" };
  const buttonStyle = { width: "100%" };

  return (
    <Paper sx={loginPageStyle}>
      <Stack direction="column" alignItems="center" spacing={2} m={8}>
        <Stack direction="column" alignItems="center" spacing={0}>
          <SavingsIcon color="primary" sx={iconSizeStyle} />
          <Typography variant="h5" color="textPrimary">
            Fat Wallet
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Mindful money management
          </Typography>
        </Stack>
        <Stack direction="column" spacing={2} sx={pageStyle}>
          <TextField
            placeholder="Username"
            defaultValue="taylorzweigle@email.com"
            sx={textFieldStyle}
          />
          <TextField
            placeholder="Password"
            defaultValue="Password"
            type="password"
            sx={textFieldStyle}
          />
          <Link to={`/dashboard`} component={RouterLink} style={linkStyle}>
            <Button
              variant="contained"
              color="primary"
              onClick={onLogin}
              sx={buttonStyle}
            >
              Login
            </Button>
          </Link>
        </Stack>
      </Stack>
    </Paper>
  );
};

export default LoginPage;
