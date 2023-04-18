//Taylor Zweigle, 2023
import React, { useState } from "react";

import InputAdornment from "@mui/material/InputAdornment";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

import Dialog from "../../core/dialog";

const RequestDialog = ({ open, onClose, contacts }) => {
  const [contact, setContact] = useState(null);

  const handleChange = (event) => setContact(event.target.value);

  const onDialogClose = () => {
    setContact(null);
    onClose();
  };

  return (
    <Dialog
      open={open}
      onClose={onDialogClose}
      title="Request Money"
      primaryButton="Request"
      secondaryButton="Cancel"
    >
      <Stack direction="column" spacing={2}>
        <Stack direction="column" spacing={1}>
          <Typography variant="body2" color="text.secondary">
            Contact
          </Typography>
          <Select value={contact} onChange={handleChange}>
            {contacts.map((contact) => (
              <MenuItem key={contacts.id} value={contact.name}>
                {contact.name}
              </MenuItem>
            ))}
          </Select>
        </Stack>
        <Stack direction="column" spacing={1}>
          <Typography variant="body2" color="text.secondary">
            Description
          </Typography>
          <TextField></TextField>
        </Stack>
        <Stack direction="column" spacing={1}>
          <Typography variant="body2" color="text.secondary">
            Amount
          </Typography>
          <TextField
            type="number"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AttachMoneyIcon />
                </InputAdornment>
              ),
            }}
          ></TextField>
        </Stack>
      </Stack>
    </Dialog>
  );
};

export default RequestDialog;
