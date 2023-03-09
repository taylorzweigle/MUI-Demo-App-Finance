//Taylor Zweigle, 2023
import React, { useState } from "react";

import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Typography from "@mui/material/Typography";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import TransactionHistoryTable from "../components/pattern/tables/transactionHistoryTable";

import {
  getTabNetTotal,
  getTabGrossTotal,
  getTabDebitTotal,
  currencyFormatter,
} from "../utility/utility";

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
  const handleChange = (panel) => (event, isExpanded) =>
    setExpanded(isExpanded ? panel : false);

  const boldStyle = { fontWeight: "bold" };

  return (
    <Box m={2}>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="subtitle1" sx={boldStyle}>
            Checking
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Divider />
          <Stack direction="column" spacing={2}>
            <Box>
              <Tabs
                value={checkingTab}
                onChange={handleCheckingTabChange}
                variant="fullWidth"
              >
                {months.map((month) => (
                  <Tab key={month} label={month} />
                ))}
              </Tabs>
              <Divider />
            </Box>
            <Stack
              direction="row"
              justifyContent="space-around"
              alignItems="center"
              spacing={4}
            >
              <Stack
                direction="column"
                justifyContent="center"
                alignItems="center"
              >
                <Typography variant="body2" color="textSecondary">
                  Net
                </Typography>
                <Typography
                  variant="h6"
                  color="textPrimary"
                  sx={{ fontWeight: "bold" }}
                >
                  {currencyFormatter.format(
                    getTabNetTotal("Checking", months[checkingTab])
                  )}
                </Typography>
              </Stack>
              <Divider orientation="vertical" flexItem />
              <Stack
                direction="column"
                justifyContent="center"
                alignItems="center"
              >
                <Typography variant="body2" color="textSecondary">
                  Gross
                </Typography>
                <Typography variant="h6" color="textPrimary">
                  {currencyFormatter.format(
                    getTabGrossTotal("Checking", months[checkingTab])
                  )}
                </Typography>
              </Stack>
              <Divider orientation="vertical" flexItem />
              <Stack
                direction="column"
                alignItems="center"
                justifyContent="center"
              >
                <Typography variant="body2" color="textSecondary">
                  Debit
                </Typography>
                <Typography variant="h6" color="textPrimary">
                  {currencyFormatter.format(
                    getTabDebitTotal("Checking", months[checkingTab])
                  )}
                </Typography>
              </Stack>
            </Stack>
            <TransactionHistoryTable
              month={months[checkingTab]}
              length={10}
              account="Checking"
            />
          </Stack>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="subtitle1" sx={boldStyle}>
            Credit Card
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Divider />
          <Stack direction="column" spacing={2}>
            <Box>
              <Tabs
                value={creditTab}
                onChange={handleCreditTabChange}
                variant="fullWidth"
              >
                {months.map((month) => (
                  <Tab key={month} label={month} />
                ))}
              </Tabs>
              <Divider />
            </Box>
            <Stack
              direction="row"
              justifyContent="space-around"
              alignItems="center"
              spacing={4}
            >
              <Stack
                direction="column"
                justifyContent="center"
                alignItems="center"
              >
                <Typography variant="body2" color="textSecondary">
                  Net
                </Typography>
                <Typography
                  variant="h6"
                  color="textPrimary"
                  sx={{ fontWeight: "bold" }}
                >
                  {currencyFormatter.format(
                    getTabNetTotal("Credit", months[creditTab])
                  )}
                </Typography>
              </Stack>
              <Divider orientation="vertical" flexItem />
              <Stack
                direction="column"
                justifyContent="center"
                alignItems="center"
              >
                <Typography variant="body2" color="textSecondary">
                  Gross
                </Typography>
                <Typography variant="h6" color="textPrimary">
                  {currencyFormatter.format(
                    getTabGrossTotal("Credit", months[creditTab])
                  )}
                </Typography>
              </Stack>
              <Divider orientation="vertical" flexItem />
              <Stack
                direction="column"
                justifyContent="center"
                alignItems="center"
              >
                <Typography variant="body2" color="textSecondary">
                  Debit
                </Typography>
                <Typography variant="h6" color="textPrimary">
                  {currencyFormatter.format(
                    getTabDebitTotal("Credit", months[creditTab])
                  )}
                </Typography>
              </Stack>
            </Stack>
            <TransactionHistoryTable
              month={months[creditTab]}
              account="Credit"
            />
          </Stack>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default TransactionsPage;
