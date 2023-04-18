//Taylor Zweigle, 2023
import React, { useState } from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ListItemText from "@mui/material/ListItemText";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const DropdownMenu = ({ value, values, setValue }) => {
  const [menuAnchor, setMenuAnchor] = useState(null);

  const menuOpen = Boolean(menuAnchor);

  const handleMenuClick = (event) => setMenuAnchor(event.currentTarget);
  const handleMenuClose = () => setMenuAnchor(null);

  const handleSelect = (value) => {
    setValue(value);
    handleMenuClose();
  };

  const dropdownMenuStyle = { width: 128, maxWidth: 128 };

  return (
    <>
      <Button onClick={handleMenuClick} endIcon={<ArrowDropDownIcon />}>
        {value}
      </Button>
      <Menu anchorEl={menuAnchor} open={menuOpen} onClose={handleMenuClose}>
        <Box sx={dropdownMenuStyle}>
          {values.map((item) => (
            <MenuItem key={item} onClick={() => handleSelect(item)}>
              <ListItemText>{item}</ListItemText>
            </MenuItem>
          ))}
        </Box>
      </Menu>
    </>
  );
};

export default DropdownMenu;
