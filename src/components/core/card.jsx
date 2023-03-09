//Taylor Zweigle, 2023
import React from "react";

import Box from "@mui/material/Box";
import MUICard from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const Card = ({ children, title, action, width }) => {
  const cardStyle = { width: width ? width : "100%" };
  const boldStyle = { fontWeight: "bold" };

  return (
    <MUICard sx={cardStyle}>
      <Box p={2}>
        <Stack direction="column" spacing={1}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="subtitle1" sx={boldStyle}>
              {title}
            </Typography>
            {action}
          </Stack>
          {children}
        </Stack>
      </Box>
    </MUICard>
  );
};

export default Card;
