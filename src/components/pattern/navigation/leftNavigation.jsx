//Taylor Zweigle, 2023
import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";

import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LogoutIcon from "@mui/icons-material/Logout";
import SavingsIcon from "@mui/icons-material/Savings";

import * as ThemeTokens from "../../../themes/systemTokens";

const LeftNavigation = () => {
  let [selectedIndex, setSelectedIndex] = useState(0);

  const primaryPages = [
    { id: 0, page: "Dashboard", icon: <DashboardIcon /> },
    { id: 1, page: "Transactions", icon: <AttachMoneyIcon /> },
    { id: 2, page: "Payments", icon: <CreditCardIcon /> },
  ];

  const handleListItemClick = (event, index) => setSelectedIndex(index);

  const leftNavigationStyle = {
    position: "fixed",
    height: "100vh",
    width: "100%",
    maxWidth: "256px",
    backgroundColor: "background.paper",
    borderRight: "1px solid",
    borderColor: "grey.400",
  };

  const mainIconStyle = { fontSize: ThemeTokens.SYS_ICON_XL };

  const linkStyle = {
    textDecoration: "none",
    color: "inherit",
  };

  return (
    <>
      <Paper variant="outlined">
        <Stack
          direction="column"
          justifyContent="space-between"
          sx={leftNavigationStyle}
        >
          <Box>
            <Stack
              direction="column"
              justifyContent="center"
              alignItems="center"
              m={2}
            >
              <SavingsIcon color="primary" sx={mainIconStyle} />
              <Typography variant="h5" color="textPrimary">
                FatWallet
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Mindful Money Management
              </Typography>
            </Stack>
            <Box>
              <List>
                {primaryPages.map((item) => (
                  <Link
                    key={item.id}
                    to={`/${item.page}`}
                    component={RouterLink}
                    style={linkStyle}
                  >
                    <ListItem disablePadding>
                      <ListItemButton
                        selected={selectedIndex === item.id}
                        onClick={(event) => handleListItemClick(event, item.id)}
                      >
                        <ListItemIcon>{item.icon}</ListItemIcon>
                        <ListItemText>{item.page}</ListItemText>
                      </ListItemButton>
                    </ListItem>
                  </Link>
                ))}
              </List>
            </Box>
          </Box>
          <Box mb={1}>
            <List>
              <Link to={`/`} component={RouterLink} style={linkStyle}>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <LogoutIcon />
                    </ListItemIcon>
                    <ListItemText>Log Out</ListItemText>
                  </ListItemButton>
                </ListItem>
              </Link>
            </List>
          </Box>
        </Stack>
      </Paper>
    </>
  );
};

export default LeftNavigation;
