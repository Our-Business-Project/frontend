"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { Divider } from "@mui/material";


export default function Header() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    <AppBar position="fixed">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              display: { xs: "none", md: "flex" },
              fontWeight: 800,
              letterSpacing: ".3rem",
              textDecoration: "none",
              color: "text.primary",
            }}
          >
            YBS
            <Divider
              orientation="horizontal"
              variant="middle"
              sx={{
                color: "text.primary",
                margin: '0 17px',
                padding: '0',
                borderColor: "white",
                borderWidth: "1px",
              }}
            />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }}}>
            <Button
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={handleClick}
              sx={{ color: "text.primary" }}
            >
              Головна стрінка
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem sx={{ color: "primary.main" }} onClick={handleClose}>
                Profile
              </MenuItem>
              <MenuItem sx={{ color: "primary.main" }} onClick={handleClose}>
                My account
              </MenuItem>
              <MenuItem sx={{ color: "primary.main" }} onClick={handleClose}>
                Logout
              </MenuItem>
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <IconButton sx={{ p: 0 }}>
              <PersonOutlineIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
