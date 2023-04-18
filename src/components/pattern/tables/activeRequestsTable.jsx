//Taylor Zweigle, 2023
import React, { useState } from "react";

import Button from "@mui/material/Button";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";

import ContactAvatar from "../../core/contactAvatar";

import { paymentsData } from "../../../data/paymentsData";

import { formatCurrency, currencyFormatter, getAvatar } from "../../../utility/utility";

const ActiveRequestsTable = ({ onClickRequest, type }) => {
  const [data] = useState(paymentsData);

  const cellWidthXS = { width: 0 };
  const cellWidthMD = { width: 16 };
  const cellWidthLG = { width: 24 };
  const boldStyle = { fontWeight: "bold" };
  const tableHeaderStyle = { backgroundColor: "grey.100" };

  return (
    <Table size="small">
      <TableHead>
        <TableRow sx={tableHeaderStyle}>
          <TableCell sx={cellWidthLG} />
          <TableCell sx={boldStyle}>Contact</TableCell>
          <TableCell sx={boldStyle}>Date</TableCell>
          <TableCell sx={boldStyle}>Comment</TableCell>
          <TableCell sx={boldStyle}>Amount</TableCell>
          <TableCell sx={cellWidthMD} />
        </TableRow>
      </TableHead>
      <TableBody>
        {data
          .filter((item) => item.type === type)
          .map((item) => (
            <TableRow key={item.id}>
              <TableCell sx={cellWidthXS}>
                <ContactAvatar contact={getAvatar(item.contact)} size={32} />
              </TableCell>
              <TableCell>
                <Typography variant="body2">{item.contact}</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="body2">{item.date}</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="body2">{item.comment}</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="body2">{currencyFormatter.format(formatCurrency(item.amount))}</Typography>
              </TableCell>
              <TableCell>
                {type === "payment" ? <Button onClick={() => onClickRequest(item)}>Pay</Button> : null}
                {type === "income" ? <Button onClick={() => onClickRequest(item)}>Delete</Button> : null}
              </TableCell>
            </TableRow>
          ))}
      </TableBody>
    </Table>
  );
};

export default ActiveRequestsTable;
