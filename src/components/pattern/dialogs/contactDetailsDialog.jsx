//Taylor Zweigle, 2023
import React from "react";

import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import ContactAvatar from "../../core/contactAvatar";
import Dialog from "../../core/dialog";

import {
  formatCurrency,
  formatCurrencyColor,
  currencyFormatter,
  getBalance,
} from "../../../utility/utility";

const ContactDetailsDialog = ({ open, onClose, contact }) => {
  return (
    <Dialog open={open} onClose={onClose} secondaryButton="Close">
      {contact ? (
        <Stack direction="column" spacing={2}>
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={1}
          >
            <ContactAvatar contact={contact.avatar} size={128} />
            <Typography variant="h6">{contact.name}</Typography>
            <Typography
              variant="subtitle1"
              sx={{ color: formatCurrencyColor(getBalance(contact.name)) }}
            >
              {currencyFormatter.format(
                formatCurrency(getBalance(contact.name))
              )}
            </Typography>
          </Stack>
          <Divider />
          <Stack direction="row" justifyContent="space-between">
            <Typography variant="body2">Email</Typography>
            <Typography variant="body2">{contact.email}</Typography>
          </Stack>
          <Stack direction="row" justifyContent="space-between">
            <Typography variant="body2">Phone Number</Typography>
            <Typography variant="body2">{contact.phone}</Typography>
          </Stack>
          <Stack direction="row" justifyContent="space-between">
            <Typography variant="body2">Friends Since</Typography>
            <Typography variant="body2">{contact.date}</Typography>
          </Stack>
        </Stack>
      ) : null}
    </Dialog>
  );
};

export default ContactDetailsDialog;
