//Taylor Zweigle, 2023
import React from "react";

import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

import Dialog from "../../core/dialog";

const AccountDialog = ({ open, onClose }) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      title="Account"
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
          <TextField defaultValue="Password" type="password"></TextField>
        </Stack>
      </Stack>
    </Dialog>
  );
};

export default AccountDialog;
