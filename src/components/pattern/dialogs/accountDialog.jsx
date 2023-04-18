//Taylor Zweigle, 2023
import React, { useState } from "react";

import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import Dialog from "../../core/dialog";

const AccountDialog = ({ open, onClose }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  return (
    <Dialog
      open={open}
      onClose={onClose}
      title="Account"
      primaryButton="Save"
      secondaryButton="Close"
    >
      <Stack direction="column" spacing={2}>
        <Stack direction="column" spacing={1}>
          <Typography variant="body2" color="text.secondary">
            First Name
          </Typography>
          <TextField defaultValue="Taylor"></TextField>
        </Stack>
        <Stack direction="column" spacing={1}>
          <Typography variant="body2" color="text.secondary">
            Last Name
          </Typography>
          <TextField defaultValue="Zweigle"></TextField>
        </Stack>
        <Stack direction="column" spacing={1}>
          <Typography variant="body2" color="text.secondary">
            Email
          </Typography>
          <TextField defaultValue="taylorzweigle@email.com"></TextField>
        </Stack>
        <Stack direction="column" spacing={1}>
          <Typography variant="body2" color="text.secondary">
            Phone Number
          </Typography>
          <TextField defaultValue="(000) 000-0000"></TextField>
        </Stack>
        <Stack direction="column" spacing={1}>
          <Typography variant="body2" color="text.secondary">
            Password
          </Typography>
          <TextField
            defaultValue="Password"
            type={showPassword ? "text" : "password"}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleClickShowPassword} edge="end">
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          ></TextField>
        </Stack>
      </Stack>
    </Dialog>
  );
};

export default AccountDialog;
