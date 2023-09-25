import { Box, Button, Menu, styled } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export const StyledBoxLogoDisplayMd = styled(Box)`
display: { xs: "none", md: "flex" },
`;

export const StyledImageLogo = styled(Image)(() => ({
  borderRadius: "1000px",
  border: "none",
  margin: "10px 0px",
}));

export const StyledBoxLogoDisplaySx = styled(Box)`
display: { xs: "flex", md: "none" },
`;

export const StyledMenu = styled(Menu)`
display: { xs: "block", md: "none" },
`;

export const StyledLinkMenu = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  color: theme.palette.primary.main,
}));

export const StyledLinkNav = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  color: theme.palette.background.paper,
}));

export const StyledButtonLink = styled(Button)(() => ({
  my: 2,
  display: "block",
}));

export const StyledBoxAvatar = styled(Box)(() => ({
  flexGrow: 0,
}));

export const StyledMenuAvatar = styled(Menu)(() => ({
  mt: "45px",
}));
