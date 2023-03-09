//Taylor Zweigle, 2023
import React, { useState } from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

import AddIcon from "@mui/icons-material/Add";

import Card from "../components/core/card";

import ActiveRequestsList from "../components/pattern/lists/activeRequestsList";
import ContactChipBar from "../components/pattern/chips/contactChipBar";
import CreateContactDialog from "../components/pattern/dialogs/createContactDialog";
import PaymentsHistoryTable from "../components/pattern/tables/paymentsHistoryTable";

import { contacts } from "../data/contacts";

const PaymentsPage = () => {
  let [createDialogOpen, setCreateDialogOpen] = useState(false);

  const handleCreateDialogOpen = () => setCreateDialogOpen(true);
  const handleCreateDialogClose = () => setCreateDialogOpen(false);

  return (
    <>
      <Box>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          m={2}
        >
          <ContactChipBar contacts={contacts} />
          <Button startIcon={<AddIcon />} onClick={handleCreateDialogOpen}>
            Add Contact
          </Button>
        </Stack>
        <Stack direction="row" spacing={2} m={2}>
          <Card title="Your Active Payments" width="50%">
            <ActiveRequestsList type="payment" />
          </Card>
          <Card
            title="Your Active Requests"
            width="50%"
            action={<Button variant="outlined">Request</Button>}
          >
            <ActiveRequestsList type="income" />
          </Card>
        </Stack>
        <Stack direction="row" spacing={2} m={2}>
          <Card title="Payments History">
            <PaymentsHistoryTable />
          </Card>
        </Stack>
      </Box>
      <CreateContactDialog
        open={createDialogOpen}
        onClose={handleCreateDialogClose}
      />
    </>
  );
};

export default PaymentsPage;
