//Taylor Zweigle, 2023
import React, { useState } from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ListItemText from "@mui/material/ListItemText";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const DropdownMenu = ({ value, setYear }) => {
  const [menuAnchor, setMenuAnchor] = useState(null);
  const [selectedValue, setSelectedValue] = useState(value);

  const menuOpen = Boolean(menuAnchor);

  const handleMenuClick = (event) => setMenuAnchor(event.currentTarget);
  const handleMenuClose = () => setMenuAnchor(null);

  const handleSelect = (value) => {
    setSelectedValue(value);
    setYear(value);
    handleMenuClose();
  };

  const dropdownMenuStyle = { width: 128, maxWidth: 128 };

  return (
    <>
      <Button onClick={handleMenuClick} endIcon={<ArrowDropDownIcon />}>
        {selectedValue}
      </Button>
      <Menu anchorEl={menuAnchor} open={menuOpen} onClose={handleMenuClose}>
        <Box sx={dropdownMenuStyle}>
          <MenuItem onClick={() => handleSelect("2021")}>
            <ListItemText>2021</ListItemText>
          </MenuItem>
          <MenuItem onClick={() => handleSelect("2022")}>
            <ListItemText>2022</ListItemText>
          </MenuItem>
        </Box>
      </Menu>
    </>
  );
};

export default DropdownMenu;
