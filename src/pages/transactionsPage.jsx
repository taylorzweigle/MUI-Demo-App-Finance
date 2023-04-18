//Taylor Zweigle, 2023
import React, { useState } from "react";

import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import MonthTabs from "../components/pattern/navigation/monthTabs";
import TransactionHistoryTable from "../components/pattern/tables/transactionHistoryTable";
import SummaryContainer from "../components/pattern/layout/summaryContainer";

import CardTitle from "../components/subComponents/cardTitle";

const TransactionsPage = () => {
  const [checkingTab, setCheckingTab] = useState(0);
  const [creditTab, setCreditTab] = useState(0);
  const [expanded, setExpanded] = useState("panel1");

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const handleCheckingTabChange = (event, newValue) => setCheckingTab(newValue);
  const handleCreditTabChange = (event, newValue) => setCreditTab(newValue);
  const handleChange = (panel) => (event, isExpanded) => setExpanded(isExpanded ? panel : false);

  const accordionStyle = { backgroundImage: "none" };

  return (
    <Box m={2}>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
        style={accordionStyle}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <CardTitle title="Checking" />
        </AccordionSummary>
        <AccordionDetails>
          <Stack direction="column" spacing={2}>
            <MonthTabs months={months} tab={checkingTab} handleTab={handleCheckingTabChange} />
            <SummaryContainer account="Checking" value={months[checkingTab]} />
            <TransactionHistoryTable month={months[checkingTab]} length={10} account="Checking" />
          </Stack>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
        style={accordionStyle}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <CardTitle title="Credit Card" />
        </AccordionSummary>
        <AccordionDetails>
          <Stack direction="column" spacing={2}>
            <MonthTabs months={months} tab={creditTab} handleTab={handleCreditTabChange} />
            <SummaryContainer account="Credit" value={months[creditTab]} />
            <TransactionHistoryTable month={months[creditTab]} account="Credit" />
          </Stack>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default TransactionsPage;
