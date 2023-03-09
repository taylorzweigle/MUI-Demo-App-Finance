//Taylor Zweigle, 2023
import React from "react";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const InfoCard = ({ icon, title, color, backgroundColor, amount }) => {
  const cardStyle = { backgroundColor, width: "100%" };
  const boldStyle = { fontWeight: "bold" };
  const amountStyle = { ...boldStyle, color: color };

  return (
    <Card sx={cardStyle}>
      <Box p={2}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Stack direction="row" alignItems="center" spacing={1}>
            <Box>{icon}</Box>
            <Typography variant="subtitle1" sx={boldStyle}>
              {title}
            </Typography>
          </Stack>
          <Typography variant="h5" sx={amountStyle}>
            {amount}
          </Typography>
        </Stack>
      </Box>
    </Card>
  );
};

export default InfoCard;
