//Taylor Zweigle, 2023
import React, { useState } from "react";

import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import ClearIcon from "@mui/icons-material/Clear";
import SendIcon from "@mui/icons-material/Send";

import ContactAvatar from "../../core/contactAvatar";

import { paymentsData } from "../../../data/paymentsData";

import {
  formatCurrency,
  currencyFormatter,
  getAvatar,
} from "../../../utility/utility";

const ActiveRequestsList = ({ type }) => {
  const [data, setData] = useState(paymentsData);

  const textAlignStyle = { textAlign: "right" };

  const handleIconButonClick = (item) => {
    setData(data.filter((payment) => payment.id !== item.id));
  };

  return (
    <>
      <Stack direction="column-reverse" justifyContent="space-between">
        <List>
          {data
            .filter((item) => item.type === type)
            .map((item) => (
              <Box key={item.id}>
                <ListItem sx={{ padding: "8px 0px 8px 0px" }} disablePadding>
                  <ListItemIcon>
                    <ContactAvatar
                      contact={getAvatar(item.contact)}
                      size={32}
                    />
                  </ListItemIcon>
                  <Stack direction="column" spacing={-1}>
                    <ListItemText>
                      <Typography variant="body2">{item.contact}</Typography>
                    </ListItemText>
                    <ListItemText>
                      <Typography variant="caption">{item.date}</Typography>
                    </ListItemText>
                  </Stack>
                  <ListItemText sx={textAlignStyle}>
                    <Typography variant="body2">{item.comment}</Typography>
                  </ListItemText>
                  <ListItemText sx={textAlignStyle}>
                    <Typography variant="body2">
                      {currencyFormatter.format(formatCurrency(item.amount))}
                    </Typography>
                  </ListItemText>
                  <Box pl={4}>
                    {type === "payment" ? (
                      <IconButton
                        color="primary"
                        onClick={() => handleIconButonClick(item)}
                      >
                        <SendIcon />
                      </IconButton>
                    ) : null}
                    <IconButton
                      color="primary"
                      onClick={() => handleIconButonClick(item)}
                    >
                      <ClearIcon />
                    </IconButton>
                  </Box>
                </ListItem>
                <Divider />
              </Box>
            ))}
        </List>
      </Stack>
    </>
  );
};

export default ActiveRequestsList;
