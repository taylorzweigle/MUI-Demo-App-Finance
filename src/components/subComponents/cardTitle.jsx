//Taylor Zweigle, 2023
import React from "react";

import Typography from "@mui/material/Typography";

const CardTitle = ({ title }) => {
  const boldStyle = { fontWeight: "bold" };

  return (
    <Typography variant="subtitle1" sx={boldStyle}>
      {title}
    </Typography>
  );
};

export default CardTitle;
