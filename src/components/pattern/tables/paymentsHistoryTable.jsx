//Taylor Zweigle, 2023
import React from "react";

import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Tooltip from "@mui/material/Tooltip";

import LoopIcon from "@mui/icons-material/Loop";

import ContactAvatar from "../../core/contactAvatar";

import { data } from "../../../data/data";

import {
  formatCurrency,
  formatCurrencyColor,
  currencyFormatter,
  getAvatar,
} from "../../../utility/utility";

const PaymentsHistoryTable = () => {
  const filteredData = data ? data.filter((item) => item.contact !== "") : data;

  const cellWidthXS = { width: 0 };
  const cellWidthMD = { width: 16 };
  const cellWidthLG = { width: 24 };
  const boldStyle = { fontWeight: "bold" };
  const tableHeaderStyle = { backgroundColor: "grey.100" };
  const iconStyle = { width: 18, height: 18 };
  const textAlignStyle = { textAlign: "right" };

  return (
    <Box>
      <Divider />
      <Table size="small">
        <TableHead>
          <TableRow sx={tableHeaderStyle}>
            <TableCell sx={cellWidthLG} />
            <TableCell sx={boldStyle}>Contact</TableCell>
            <TableCell sx={boldStyle}>Comment</TableCell>
            <TableCell sx={boldStyle}>Date</TableCell>
            <TableCell sx={boldStyle}>Time</TableCell>
            <TableCell sx={boldStyle} align="right">
              Amount
            </TableCell>
            <TableCell sx={cellWidthMD} />
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredData.slice(0, 10).map((item) => (
            <TableRow key={item.id}>
              <TableCell sx={cellWidthXS}>
                <ContactAvatar contact={getAvatar(item.contact)} size={32} />
              </TableCell>
              <TableCell>{item.contact}</TableCell>
              <TableCell>{item.comment}</TableCell>
              <TableCell>{item.date}</TableCell>
              <TableCell>{item.time}</TableCell>
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
                  <Tooltip title="Recurring" placement="top">
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

export default PaymentsHistoryTable;
