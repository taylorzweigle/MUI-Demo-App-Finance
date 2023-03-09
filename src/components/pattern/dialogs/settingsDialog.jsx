//Taylor Zweigle, 2023
import React, { useState } from "react";

import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

import Dialog from "../../core/dialog";

const SettingsDialog = ({ open, onClose, onThemeChange }) => {
  let [lightMode, setLightMode] = useState("contained");
  let [darkMode, setDarkMode] = useState("outlined");

  const handleLightThemeClick = () => {
    setLightMode("contained");
    setDarkMode("outlined");

    onThemeChange("light");
  };

  const handleDarkThemeClick = () => {
    setLightMode("outlined");
    setDarkMode("contained");

    onThemeChange("dark");
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      title="Account"
      secondaryButton="Close"
    >
      <Stack direction="column" spacing={1}>
        <Typography variant="body2" color="text.secondary">
          Theme
        </Typography>
        <ButtonGroup color="primary">
          <Button
            variant={lightMode}
            startIcon={<LightModeIcon />}
            onClick={handleLightThemeClick}
          >
            Light
          </Button>
          <Button
            variant={darkMode}
            startIcon={<DarkModeIcon />}
            onClick={handleDarkThemeClick}
          >
            Dark
          </Button>
        </ButtonGroup>
      </Stack>
    </Dialog>
  );
};

export default SettingsDialog;
