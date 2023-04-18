//Taylor Zweigle, 2023
import React from "react";

import Typography from "@mui/material/Typography";

import Dialog from "../../core/dialog";

const PaymentRequestCancelDialog = ({ open, onClose, contact, amount }) => {
  const onDialogClose = () => {
    onClose();
  };

  return (
    <Dialog
      open={open}
      onClose={onDialogClose}
      title="Payment Request Cancellation"
      primaryButton="Confirm"
      secondaryButton="Cancel"
    >
      <Typography variant="body2">
        Are you sure you want to cancel your request to {contact} for {amount}?
      </Typography>
    </Dialog>
  );
};

export default PaymentRequestCancelDialog;
