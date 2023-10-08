import { styled, Box, Typography } from "@mui/material";
import Link from "next/link";

export const StyledBoxContainer = styled(Box)(() => ({
  //paddingTop: "100px",
}));

export const StyledBoxFooterFirst = styled(Box)(({ theme }) => ({
  backgroundColor: "#2B2B39",
  color: theme.palette.background.paper,
  display: "flex",
  justifyContent: "space-around",
  gap: "230px",
  padding: "50px 135px",
}));

export const StyledBoxContent = styled(Box)(() => ({
  width: "50%",
}));

export const StyledTitle = styled(Typography)(() => ({
  fontSize: "20px",
  fontWeight: "600",
  paddingTop: "20px",
}));

export const StyledTitleName = styled(Typography)(() => ({
  fontSize: "14px",
  fontStyle: "italic",
  paddingTop: "10px",
}));

export const StyledTitleNameGroup = styled(Typography)(() => ({
  fontSize: "18px",
  fontWeight: "700",
}));

export const StyledBoxLink = styled(Box)(() => ({
  display: "flex",
  gap: "6px",
  flexWrap: "wrap",
  marginTop: "15px",
}));

export const StyledLinkGroup = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.primary.dark,
  padding: "5px",
  border: "none",
  borderRadius: "12px",
  fontSize: "12px",
}));

export const StyledBoxFooterSecond = styled(Box)(({ theme }) => ({
  backgroundColor: "#20202D",
  display: "flex",
  justifyContent: "space-around",
  textAlign: "center",
  alignItems: "center",
  color: theme.palette.background.paper,
}));

export const StyledBoxLinkContact = styled(Box)(() => ({
  display: "flex",
  gap: "10px",
}));
