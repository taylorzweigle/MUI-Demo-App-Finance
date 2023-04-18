//Taylor Zweigle, 2023
import React from "react";

import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const SummaryContainerItem = ({ label, value }) => {
  const summaryContainerStyle = { fontWeight: "bold" };

  return (
    <Stack direction="column" justifyContent="center" alignItems="center">
      <Typography variant="body2" color="textSecondary">
        {label}
      </Typography>
      <Typography variant="h6" color="textPrimary" sx={summaryContainerStyle}>
        {value}
      </Typography>
    </Stack>
  );
};

export default SummaryContainerItem;
