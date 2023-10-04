import { Badge, Box, Button, Menu, Typography, styled } from "@mui/material";
import Image from "next/image";

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

export const StyledLinkMenu = styled(Typography)(({ theme }) => ({
  textDecoration: "none",
  color: theme.palette.primary.main,
}));

export const StyledLinkNav = styled(Typography)(({ theme }) => ({
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

export const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));
