"use client";

import { useContext, useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Avatar,
  Tooltip,
  MenuItem,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";

import Link from "next/link";

import {
  StyledImageLogo,
  StyledLinkMenu,
  StyledLinkNav,
  StyledBoxAvatar,
  StyledButtonLink,
  StyledBadge,
} from "@/components/Header/Header.styles";
import { AppContext, AppContextType } from "@/contexts/AppContext";
import { Page } from "@/hooks/types";
import { useRouter } from "next/navigation";

const pages = ["Admin", "Document", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function ResponsiveAppBar() {
  const { onChoosePage } = useContext(AppContext) as AppContextType;

  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const route = useRouter();

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const onChoosePageLink = (page: Page) => {
    onChoosePage(page);
    route.push(`/${page}`);
  };

  return (
    <AppBar
      position="static"
      sx={{
        position: "fixed",
        top: "0",
        left: "0",
        zIndex: "10",
        backgroundColor: "rgba(66, 165, 245, 0.7)",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link href="/">
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <StyledImageLogo
                src="/images/logo.jpg"
                alt="logo"
                width={80}
                height={80}
              />
            </Box>
          </Link>

          <Box sx={{ display: { xs: "flex", md: "none" }, flexGrow: 1 }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <StyledLinkMenu
                    // href={`/${page.toLowerCase()}`}
                    onClick={() => onChoosePageLink(page.toLowerCase() as Page)}
                  >
                    {page}
                  </StyledLinkMenu>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
            }}
          >
            <Link href={"/"}>
              <StyledImageLogo
                src="/images/logo.jpg"
                alt="logo"
                width={80}
                height={80}
              />
            </Link>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              ml: "100px",
            }}
          >
            {pages.map((page) => (
              <StyledButtonLink key={page} onClick={handleCloseNavMenu}>
                <StyledLinkNav
                  // href={`/${page.toLowerCase()}`}
                  onClick={() => onChoosePageLink(page.toLowerCase() as Page)}
                >
                  {page}
                </StyledLinkNav>
              </StyledButtonLink>
            ))}
          </Box>

          <StyledBoxAvatar>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu}>
                <StyledBadge
                  overlap="circular"
                  anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                  variant="dot"
                >
                  <Avatar src={`/images/avatar_6.jpg`} />
                </StyledBadge>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "55px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </StyledBoxAvatar>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
