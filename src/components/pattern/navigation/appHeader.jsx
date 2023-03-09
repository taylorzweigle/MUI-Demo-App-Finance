//Taylor Zweigle, 2023
import React, { useState } from "react";

import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";

import AccountDialog from "../dialogs/accountDialog";
import SettingsDialog from "../dialogs/settingsDialog";

const AppHeader = ({ title, onThemeChange }) => {
  const [menuAnchor, setMenuAnchor] = useState(null);
  const [accountOpen, setAccountOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);

  const menuOpen = Boolean(menuAnchor);

  const handleMenuClick = (event) => setMenuAnchor(event.currentTarget);
  const handleClose = () => setMenuAnchor(null);

  const handleAccountOpen = () => {
    setAccountOpen(true);
    handleClose();
  };
  const handleAccountClose = () => setAccountOpen(false);

  const handleSettingsOpen = () => {
    setSettingsOpen(true);
    handleClose();
  };
  const handleSettingsClose = () => setSettingsOpen(false);

  const handleThemeChange = (theme) => {
    onThemeChange(theme);
  };

  const dropdownMenuStyle = { width: 216, maxWidth: 216 };

  return (
    <>
      <Box>
        <Paper variant="outlined" square>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box ml={2}>
              <Stack direction="row" spacing={2}>
                <Typography variant="h5" color="textPrimary">
                  {title}
                </Typography>
              </Stack>
            </Box>
            <Box></Box>
            <Box mr={2}>
              <List>
                <ListItem onClick={handleMenuClick} disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <Avatar>TZ</Avatar>
                    </ListItemIcon>
                    <ListItemText>Taylor Zweigle</ListItemText>
                    <ArrowDropDownIcon />
                  </ListItemButton>
                </ListItem>
              </List>
              <Menu anchorEl={menuAnchor} open={menuOpen} onClose={handleClose}>
                <Box sx={dropdownMenuStyle}>
                  <MenuItem onClick={handleAccountOpen}>
                    <ListItemIcon>
                      <PersonIcon />
                    </ListItemIcon>
                    <ListItemText>Account</ListItemText>
                  </MenuItem>
                  <MenuItem onClick={handleSettingsOpen}>
                    <ListItemIcon>
                      <SettingsIcon />
                    </ListItemIcon>
                    <ListItemText>Settings</ListItemText>
                  </MenuItem>
                </Box>
              </Menu>
            </Box>
          </Stack>
        </Paper>
      </Box>
      <AccountDialog open={accountOpen} onClose={handleAccountClose} />
      <SettingsDialog
        open={settingsOpen}
        onClose={handleSettingsClose}
        onThemeChange={(theme) => handleThemeChange(theme)}
      />
    </>
  );
};

export default AppHeader;
