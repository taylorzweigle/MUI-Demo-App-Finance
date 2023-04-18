//Taylor Zweigle, 2023
import React, { useState } from "react";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

import BarChart from "../components/core/barChart";
import PieChart from "../components/core/pieChart";
import Card from "../components/core/card";
import InfoCard from "../components/core/infoCard";
import TransactionHistoryTable from "../components/pattern/tables/transactionHistoryTable";

import DropdownMenu from "../components/pattern/menus/dropdownMenu";

import { getNetWorth, getTotalIncome, getTotalExpenses, currencyFormatter } from "../utility/utility";

const DashboardPage = ({ theme, year }) => {
  const pageSizes = [5, 10, 25, 50];

  const [pageSize, setPageSize] = useState(pageSizes[0]);

  const handlePageSize = (selectedSize) => setPageSize(selectedSize);

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
        <Card title="Monthly Balance">
          <BarChart theme={theme} year={year} />
        </Card>
        <Card title="Spending Categories">
          <PieChart theme={theme} year={year} />
        </Card>
      </Stack>
      <Stack direction="row" spacing={2} m={2}>
        <Card
          title="Transaction History"
          action={
            <Stack direction="row" justifyContent="center" alignItems="center" spacing={1}>
              <Typography variant="body2" color="text.secondary">
                Items
              </Typography>
              <DropdownMenu value={pageSize} values={pageSizes} setValue={handlePageSize} />
            </Stack>
          }
        >
          <TransactionHistoryTable length={pageSize} reverse={true} />
        </Card>
      </Stack>
    </Box>
  );
};

export default DashboardPage;
