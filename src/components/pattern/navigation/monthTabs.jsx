//Taylor Zweigle, 2023
import React from "react";

import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";

const MonthTabs = ({ months, tab, handleTab }) => {
  return (
    <Box>
      <Divider />
      <Tabs value={tab} onChange={handleTab} variant="fullWidth">
        {months.map((month) => (
          <Tab key={month} label={month} />
        ))}
      </Tabs>
      <Divider />
    </Box>
  );
};

export default MonthTabs;
