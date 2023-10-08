import { Box, Typography, styled } from "@mui/material";
import Link from "next/link";

export const StyledBoxNav = styled(Box)(() => ({
  display: "flex",
  gap: "8px",
  alignItems: "center",
}));

export const StyledLink = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  fontSize: "14px",
  color: theme.palette.primary.dark,
  "&:hover": {
    borderBottom: `1px solid ${theme.palette.primary.dark}`,
  },
}));

export const StyledLinkPage = styled(Typography)(({ theme }) => ({
  fontSize: "14px",
  color: theme.palette.primary.dark,
}));

export const StyledLinkPageExist = styled(Typography)(({ theme }) => ({
  fontSize: "14px",
  color: theme.palette.primary.light,
}));

export const StyledBoxBtnItem = styled(Box)(() => ({
  display: "flex",
  gap: "10px",
}));
