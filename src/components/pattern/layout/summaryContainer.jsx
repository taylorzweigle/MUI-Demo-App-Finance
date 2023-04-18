//Taylor Zweigle, 2023
import React from "react";

import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";

import SummaryContainerItem from "../../subComponents/summaryContainerItem";

import { getTabNetTotal, getTabGrossTotal, getTabDebitTotal, currencyFormatter } from "../../../utility/utility";

const SummaryContainer = ({ account, value }) => {
  return (
    <Stack direction="row" justifyContent="space-around" divider={<Divider orientation="vertical" flexItem />} spacing={0}>
      <SummaryContainerItem label="Net" value={currencyFormatter.format(getTabNetTotal(account, value))} />
      <SummaryContainerItem label="Gross" value={currencyFormatter.format(getTabGrossTotal(account, value))} />
      <SummaryContainerItem label="Debit" value={currencyFormatter.format(getTabDebitTotal(account, value))} />
    </Stack>
  );
};

export default SummaryContainer;
