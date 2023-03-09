//Taylor Zweigle, 2023
import React from "react";

import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import Divider from "../core/divider";

const InfoCardItem = ({ account, amount }) => {
  return (
    <Stack direction="row" justifyContent="space-between" alignItems="center">
      <Typography variant="body2">{account}</Typography>
      <Divider />
      <Typography variant="body2">{amount}</Typography>
    </Stack>
  );
};

export default InfoCardItem;
