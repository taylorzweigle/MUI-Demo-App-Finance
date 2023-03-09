//Taylor Zweigle, 2023
import React from "react";

import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

import ContactAvatar from "./contactAvatar";

const ContactChip = ({ contact, onContactChipClick }) => {
  const chipStyle = {
    height: "48px",
    padding: "8px",
    borderRadius: "24px",
    backgroundColor: "background.paper",
    boxShadow: 1,
  };

  return (
    <Stack direction="row" spacing={1}>
      <Chip
        avatar={<ContactAvatar contact={contact.avatar} size={32} />}
        label={contact.name}
        sx={chipStyle}
        onClick={onContactChipClick}
      />
    </Stack>
  );
};

export default ContactChip;
