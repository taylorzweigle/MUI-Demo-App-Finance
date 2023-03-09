//Taylor Zweigle, 2023
import React, { useState } from "react";

import Stack from "@mui/material/Stack";

import ContactChip from "../../core/contactChip";

import ContactDetailsDialog from "../dialogs/contactDetailsDialog";

const ContactChipBar = ({ contacts }) => {
  let [contactDialogOpen, setContactDialogOpen] = useState(false);
  let [contactDetails, setContactDetails] = useState();

  const handleContactDialogOpen = (contact) => {
    setContactDialogOpen(true);
    setContactDetails(contact);
  };
  const handleContactDialogClose = () => setContactDialogOpen(false);

  return (
    <>
      <Stack direction="row" spacing={2}>
        {contacts.map((contact) => (
          <ContactChip
            key={contact.id}
            contact={contact}
            onContactChipClick={() => handleContactDialogOpen(contact)}
          />
        ))}
      </Stack>
      <ContactDetailsDialog
        open={contactDialogOpen}
        onClose={handleContactDialogClose}
        contact={contactDetails}
      />
    </>
  );
};

export default ContactChipBar;
