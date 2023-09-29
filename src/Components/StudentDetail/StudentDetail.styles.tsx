import { Modal, styled, Box, Typography, Button } from "@mui/material";
import { MuiTelInput } from "mui-tel-input";

export const StyledModal = styled(Modal)(() => ({
  position: "fixed",
  top: "30vh",
  left: "calc(50% - 15rem)",
}));

export const StyledBoxModal = styled(Box)(() => ({
  width: "30rem",
  height: "40vh",
  background: "white",
  border: "none",
  borderRadius: "6px",
  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.26)",
  display: "flex",
  flexDirection: "column",
  alignItems: "space-between",
  justifyContent: "space-around",
  textAlign: "center",
  animation: "slide-down-fade-in 300ms ease-out forwards",
  margin: 0,
  padding: "2rem",
}));

export const StyledForm = styled("form")(({ theme }) => ({
  width: "100%",
  paddingTop: theme.spacing(3),
}));

export const StyledContentError = styled(Typography)(({ theme }) => ({
  fontSize: "16px",
  color: theme.palette.error.main,
  textAlign: "center",
}));

export const StyledBoxDes = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(4),
}));

export const StyleInputNumberPhone = styled(MuiTelInput)(({ theme }) => ({
  "& .MuiInputBase-root": {
    marginTop: "5px",
    border: `1px solid ${theme.palette.primary.contrastText}`,
  },

  "& .MuiInputBase-input": {
    padding: theme.spacing(0, 2),
    fontSize: "14px",
  },

  "& .MuiFormHelperText-root.Mui-error": {
    fontSize: "16px",
    textAlign: "center",
  },
  width: "315px",
}));

export const StyledBoxButtonModal = styled(Box)(() => ({
  position: "absolute",
  top: "650px",
  right: "0px",
  display: "flex",
  gap: "16px",
}));

export const StyledBtnCreate = styled(Button)(({ theme }) => ({
  border: "none",
  fontSize: "12px",
  fontWeight: "700",
  textAlign: "center",
  backgroundColor: theme.palette.primary.dark,
  color: theme.palette.background.paper,
  padding: "6px 12px",
  borderRadius: "8px",
  marginTop: "50px",
}));
