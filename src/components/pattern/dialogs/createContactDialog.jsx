//Taylor Zweigle, 2023
import React from "react";

import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

import Dialog from "../../core/dialog";

const CreateContactDialog = ({ open, onClose }) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      title="Create Contact"
      primaryButton="Create"
      secondaryButton="Cancel"
    >
      <Stack direction="column" spacing={2}>
        <Stack direction="column" spacing={1}>
          <Typography variant="body2" color="text.secondary">
            First Name
          </Typography>
          <TextField></TextField>
        </Stack>
        <Stack direction="column" spacing={1}>
          <Typography variant="body2" color="text.secondary">
            Last Name
          </Typography>
          <TextField></TextField>
        </Stack>
        <Stack direction="column" spacing={1}>
          <Typography variant="body2" color="text.secondary">
            Email
          </Typography>
          <TextField></TextField>
        </Stack>
        <Stack direction="column" spacing={1}>
          <Typography variant="body2" color="text.secondary">
            Phone Number
          </Typography>
          <TextField></TextField>
        </Stack>
      </Stack>
    </Dialog>
  );
};

export default CreateContactDialog;
