//Taylor Zweigle, 2023
import React from "react";

import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import Dialog from "../../core/dialog";

const PaymentConfirmationDialog = ({ open, onClose, contact, amount }) => {
  const onDialogClose = () => {
    onClose();
  };

  return (
    <Dialog
      open={open}
      onClose={onDialogClose}
      title="Payment Confirmation"
      primaryButton="Pay"
      secondaryButton="Cancel"
      tertiaryButton="Deny"
    >
      <Stack direction="column" spacing={2}>
        <Typography variant="body2">
          {contact} is requesting {amount}.
        </Typography>
        <Typography variant="body2">Select "Pay" or "Deny" to close the request.</Typography>
      </Stack>
    </Dialog>
  );
};

export default PaymentConfirmationDialog;
