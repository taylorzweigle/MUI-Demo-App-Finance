//Taylor Zweigle, 2023
import React from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Modal from "@mui/material/Modal";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const Dialog = ({ children, open, onClose, title, primaryButton, secondaryButton, tertiaryButton }) => {
  const dialogStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    backgroundColor: "background.paper",
    boxShadow: 24,
    p: 2,
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={dialogStyle}>
        <Stack direction="column" spacing={2}>
          {title ? (
            <>
              <Typography variant="h6" color="text.primary">
                {title}
              </Typography>
              <Divider />
            </>
          ) : null}
          <Box>{children}</Box>
          <Divider />
          <Stack direction="row-reverse" spacing={2} mt={2}>
            {primaryButton ? (
              <Button variant="contained" onClick={onClose}>
                {primaryButton}
              </Button>
            ) : null}
            {tertiaryButton ? (
              <Button variant="outlined" onClick={onClose}>
                {tertiaryButton}
              </Button>
            ) : null}
            {secondaryButton ? (
              <Button variant="text" onClick={onClose}>
                {secondaryButton}
              </Button>
            ) : null}
          </Stack>
        </Stack>
      </Box>
    </Modal>
  );
};

export default Dialog;
