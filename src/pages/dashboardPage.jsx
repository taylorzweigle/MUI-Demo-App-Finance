//Taylor Zweigle, 2023
import React, { useState } from "react";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

import BarChart from "../components/core/barChart";
import PieChart from "../components/core/pieChart";
import Card from "../components/core/card";
import InfoCard from "../components/core/infoCard";
import TransactionHistoryTable from "../components/pattern/tables/transactionHistoryTable";

import DropdownMenu from "../components/pattern/menus/dropdownMenu";

import {
  getNetWorth,
  getTotalIncome,
  getTotalExpenses,
  currencyFormatter,
} from "../utility/utility";

const DashboardPage = ({ theme }) => {
  const [barYear, setBarYear] = useState("2022");
  const [pieYear, setPieYear] = useState("2022");

  const handleBarYear = (selectedYear) => setBarYear(selectedYear);
  const handlePieYear = (selectedYear) => setPieYear(selectedYear);

  return (
    <Box>
      <Stack direction="row" spacing={2} m={2}>
        <InfoCard
          icon={<AccountBalanceIcon />}
          title="Net Worth"
          color="primary.dark"
          backgroundColor="primary.light"
          amount={currencyFormatter.format(getNetWorth())}
        ></InfoCard>
        <InfoCard
          icon={<TrendingUpIcon />}
          title="Income"
          color="secondary.dark"
          backgroundColor="secondary.light"
          amount={currencyFormatter.format(getTotalIncome())}
        ></InfoCard>
        <InfoCard
          icon={<TrendingDownIcon />}
          title="Expenses"
          color="tertiary.dark"
          backgroundColor="tertiary.light"
          amount={currencyFormatter.format(getTotalExpenses())}
        ></InfoCard>
      </Stack>
      <Stack direction="row" spacing={2} m={2}>
        <Card
          title="Monthly Balance"
          action={<DropdownMenu value="2022" setYear={handleBarYear} />}
        >
          <BarChart theme={theme} year={barYear} />
        </Card>
        <Card
          title="Spending Categories"
          action={<DropdownMenu value="2022" setYear={handlePieYear} />}
        >
          <PieChart theme={theme} year={pieYear} />
        </Card>
      </Stack>
      <Stack direction="row" spacing={2} m={2}>
        <Card title="Transaction History">
          <TransactionHistoryTable length={10} />
        </Card>
      </Stack>
    </Box>
  );
};

export default DashboardPage;
