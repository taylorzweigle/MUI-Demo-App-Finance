//Taylor Zweigle, 2023
import React from "react";

import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Tooltip from "@mui/material/Tooltip";

import CircleIcon from "@mui/icons-material/Circle";
import LoopIcon from "@mui/icons-material/Loop";

import { data } from "../../../data/data";

import { formatCurrency, formatCurrencyColor, convertType, currencyFormatter } from "../../../utility/utility";

const TransactionHistoryTable = ({ month, length, account, reverse }) => {
  const _filteredDataByAccount = account ? data.filter((item) => item.account === account) : data;

  const _filteredDataByMonth = month
    ? _filteredDataByAccount.filter((item) => item.date.slice(0, 3) === month)
    : _filteredDataByAccount;

  const filteredData = reverse ? [..._filteredDataByMonth].reverse() : _filteredDataByMonth;

  const cellWidthXS = { width: 0 };
  const cellWidthMD = { width: 16 };
  const cellWidthLG = { width: 24 };
  const boldStyle = { fontWeight: "bold" };
  const tableHeaderStyle = { backgroundColor: "grey.100" };
  const iconStyle = { width: 18, height: 18 };
  const textAlignStyle = { textAlign: "right" };
  const accountStyle = { width: 12, height: 12 };
  const avatarStyle = { backgroundColor: "grey.100", width: 32, height: 32 };
  const tooltipStyle = { color: "grey.50" };

  return (
    <Box>
      <Divider />
      <Table size="small">
        <TableHead>
          <TableRow sx={tableHeaderStyle}>
            <TableCell sx={cellWidthXS} />
            <TableCell sx={{ fontWeight: "bold", width: 24 }}>Type</TableCell>
            <TableCell sx={boldStyle}>Item</TableCell>
            <TableCell sx={boldStyle}>Date</TableCell>
            <TableCell sx={boldStyle}>Time</TableCell>
            {account ? "" : <TableCell sx={boldStyle}>Account</TableCell>}
            <TableCell sx={boldStyle} align="right">
              Amount
            </TableCell>
            <TableCell sx={cellWidthMD} />
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredData.slice(0, length).map((item) => (
            <TableRow key={item.id}>
              <TableCell sx={cellWidthXS}>
                <CircleIcon sx={{ ...accountStyle, color: convertType(item.type).color }} />
              </TableCell>
              <TableCell sx={cellWidthLG}>
                <Avatar sx={avatarStyle}>{convertType(item.type).icon}</Avatar>
              </TableCell>
              <TableCell>{item.item || item.contact}</TableCell>
              <TableCell>{item.date}</TableCell>
              <TableCell>{item.time}</TableCell>
              {account ? "" : <TableCell>{item.account}</TableCell>}
              <TableCell
                sx={{
                  color: formatCurrencyColor(item.amount),
                  ...textAlignStyle,
                }}
              >
                {currencyFormatter.format(formatCurrency(item.amount))}
              </TableCell>
              <TableCell sx={cellWidthMD}>
                {item.recurring ? (
                  <Tooltip title={<Box sx={tooltipStyle}>Recurring</Box>} placement="top">
                    <LoopIcon color="action" sx={iconStyle} />
                  </Tooltip>
                ) : null}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
};

export default TransactionHistoryTable;
