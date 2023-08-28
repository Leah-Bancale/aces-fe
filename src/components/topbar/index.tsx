import React, { useState } from "react";
import {
  Box,
  IconButton,
  useTheme,
  AppBar,
  Toolbar,
  Button,
  Typography,
  Menu,
  MenuItem,
} from "@mui/material";
import { useContext } from "react";
import { InputBase } from "@mui/material";
import { ColorModeContext, tokens } from "theme";
import {
  LightModeOutlined,
  DarkModeOutlined,
  Menu as MenuIcon,
  Search,
  NotificationsOutlined,
  ArrowDropDownOutlined,
} from "@mui/icons-material";
import placeholder from "../../assets/placeholder.webp";

interface TopbarProps {
  isSidebarOpen: boolean;
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Topbar: React.FC<TopbarProps> = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const isOpen = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) =>
    setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  return (
    <AppBar
      sx={{
        position: "static",
        background: "none",
        boxShadow: "none",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
            <MenuIcon />
          </IconButton>
          <Box
            sx={{
              backgroundColor: colors.primary[400],
              borderRadius: "9px",
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              padding: "0.1rem 1.5rem",
            }}
          >
            <InputBase placeholder="Search.." />
            <IconButton>
              <Search />
            </IconButton>
          </Box>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
          <IconButton onClick={colorMode.toggleColorMode}>
            {theme.palette.mode === "light" ? (
              <LightModeOutlined />
            ) : (
              <DarkModeOutlined />
            )}
          </IconButton>
          <IconButton>
            <NotificationsOutlined />
          </IconButton>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Button
              onClick={handleClick}
              sx={{
                display: "flex",
                alignItems: "center",
                textTransform: "none",
                gap: "1rem",
              }}
            >
              <img
                alt="profile"
                src={placeholder}
                height="32px"
                width="32px"
                style={{ borderRadius: "50%", objectFit: "cover" }}
              />
              <Box>
                <Typography
                  fontWeight="bold"
                  fontSize="0.85rem"
                  sx={{ color: colors.primary[100] }}
                >
                  Natsu Dragneel
                </Typography>
                <Typography
                  fontSize="0.75rem"
                  sx={{ color: colors.primary[200] }}
                >
                  Chairman
                </Typography>
              </Box>
              <ArrowDropDownOutlined
                sx={{ color: colors.primary[300], fontSize: "25px" }}
              />
            </Button>
            <Menu
              anchorEl={anchorEl}
              open={isOpen}
              onClose={handleClose}
              anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            >
              <MenuItem onClick={handleClose}>Log Out</MenuItem>
            </Menu>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;
