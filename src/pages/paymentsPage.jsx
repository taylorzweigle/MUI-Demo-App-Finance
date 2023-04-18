//Taylor Zweigle, 2023
import React, { useState } from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

import AddIcon from "@mui/icons-material/Add";

import Card from "../components/core/card";

import ActiveRequestsTable from "../components/pattern/tables/activeRequestsTable";
import ContactChipBar from "../components/pattern/chips/contactChipBar";
import CreateContactDialog from "../components/pattern/dialogs/createContactDialog";
import PaymentsHistoryTable from "../components/pattern/tables/paymentsHistoryTable";
import PaymentConfirmationDialog from "../components/pattern/dialogs/paymentConfirmationDialog";
import PaymentRequestCancelDialog from "../components/pattern/dialogs/paymentRequestCancelDialog";
import RequestDialog from "../components/pattern/dialogs/requestDialog";

import { contacts } from "../data/contacts";

import { formatCurrency, currencyFormatter } from "../utility/utility";

const PaymentsPage = () => {
  const [createDialogOpen, setCreateDialogOpen] = useState(false);
  const [paymentDialogOpen, setPaymentDialogOpen] = useState(false);
  const [paymentRequestDialogOpen, setPaymentRequestDialogOpen] = useState(false);
  const [requestDialogOpen, setRequestDialogOpen] = useState(false);
  const [paymentData, setPaymentData] = useState({});
  const [requestData, setRequestData] = useState({});

  const handleCreateDialogOpen = () => setCreateDialogOpen(true);
  const handleCreateDialogClose = () => setCreateDialogOpen(false);
  const handlePaymentDialogOpen = (item) => {
    setPaymentData(item);
    setPaymentDialogOpen(true);
  };
  const handlePaymentDialogClose = () => setPaymentDialogOpen(false);
  const handlePaymentRequestDialogOpen = (item) => {
    setRequestData(item);
    setPaymentRequestDialogOpen(true);
  };
  const handlePaymentRequestDialogClose = () => setPaymentRequestDialogOpen(false);
  const handleRequestDialogOpen = () => setRequestDialogOpen(true);
  const handleRequestDialogClose = () => setRequestDialogOpen(false);

  return (
    <>
      <Box>
        <Stack direction="row" justifyContent="space-between" alignItems="center" m={2}>
          <ContactChipBar contacts={contacts} />
          <Button startIcon={<AddIcon />} onClick={handleCreateDialogOpen}>
            Add Contact
          </Button>
        </Stack>
        <Stack direction="row" spacing={2} m={2}>
          <Card title="Your Active Payments" width="50%">
            <ActiveRequestsTable type="payment" onClickRequest={handlePaymentDialogOpen} />
          </Card>
          <Card
            title="Your Active Requests"
            width="50%"
            action={
              <Button variant="outlined" onClick={handleRequestDialogOpen}>
                Request
              </Button>
            }
          >
            <ActiveRequestsTable type="income" onClickRequest={handlePaymentRequestDialogOpen} />
          </Card>
        </Stack>
        <Stack direction="row" spacing={2} m={2}>
          <Card title="Payments History">
            <PaymentsHistoryTable />
          </Card>
        </Stack>
      </Box>
      <CreateContactDialog open={createDialogOpen} onClose={handleCreateDialogClose} />
      <PaymentConfirmationDialog
        open={paymentDialogOpen}
        contact={paymentData.contact}
        amount={currencyFormatter.format(formatCurrency(paymentData.amount))}
        onClose={handlePaymentDialogClose}
      />
      <PaymentRequestCancelDialog
        open={paymentRequestDialogOpen}
        contact={requestData.contact}
        amount={currencyFormatter.format(formatCurrency(requestData.amount))}
        onClose={handlePaymentRequestDialogClose}
      />
      <RequestDialog open={requestDialogOpen} onClose={handleRequestDialogClose} contacts={contacts} />
    </>
  );
};

export default PaymentsPage;
