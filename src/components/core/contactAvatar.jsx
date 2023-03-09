//Taylor Zweigle, 2023
import React from "react";

import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const ContactAvatar = ({ contact, size, image }) => {
  const avatarStyle = {
    backgroundColor: "grey.300",
    width: size,
    height: size,
  };

  return (
    <Avatar sx={avatarStyle}>
      <Typography variant={size < 128 ? "body2" : "h4"} color="text.secondary">
        {contact ? contact : null}
      </Typography>
      <Box>{image}</Box>
    </Avatar>
  );
};

export default ContactAvatar;
