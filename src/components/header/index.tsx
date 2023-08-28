import React from "react";
import { Typography, Box, useTheme } from "@mui/material";
import { tokens } from "theme";

interface HeaderProps {
  title: string;
  subtitle: string;
}

const Header = ({ title, subtitle }: HeaderProps) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box>
      <Typography
        variant="h2"
        color={colors.greenAccent[100]}
        fontWeight="bold"
        sx={{ mb: "5px" }}
      >
        {title}
      </Typography>
      <Typography variant="h5" color={colors.greenAccent[200]}>
        {subtitle}
      </Typography>
    </Box>
  );
};

export default Header;
