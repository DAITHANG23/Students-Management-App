import {
  Modal,
  styled,
  Box,
  Typography,
  Button,
  Container,
  Avatar,
  FormControl,
  TextField,
} from "@mui/material";
import { MuiTelInput } from "mui-tel-input";
import Link from "next/link";

export const StyledBoxContainer = styled(Box)(() => ({
  display: "flex",
}));

export const StyledTitleBoxDel = styled(Typography)(() => ({
  fontSize: "24px",
}));

export const StyledContainer = styled(Container)(() => ({ width: "81%" }));

export const StyledTitlePage = styled(Typography)(({ theme }) => ({
  fontSize: "24px",
  margin: "20px 0px 8px 0px",
  lineHeight: 1.5,
  fontFamily: "Public Sans, sans-serif",
  fontWeight: 700,
}));

export const StyledBoxNav = styled(Box)(() => ({
  display: "flex",
  gap: "8px",
  alignItems: "center",
}));

export const StyledLink = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  fontSize: "14px",
  color: theme.palette.primary.dark,
}));

export const StyledLinkPage = styled(Typography)(({ theme }) => ({
  fontSize: "14px",
  color: theme.palette.primary.dark,
}));

export const StyledLinkPageExist = styled(Typography)(({ theme }) => ({
  fontSize: "14px",
  color: theme.palette.primary.light,
}));

export const StyledBoxInfoContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(3),
  marginTop: "40px",
}));

export const StyledBoxAvatarContainer = styled(Box)(() => ({
  width: "31.5%",
  height: "462px",
  backgroundColor: "rgb(255, 255, 255)",
  color: "rgb(33, 43, 54)",
  transition: "boxShadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
  backgroundImage: " none",
  overflow: "hidden",
  position: "relative",
  boxShadow: "rgba(145, 158, 171, 0.16) 0px 4px 8px 0px",
  borderRadius: "16px",
  zIndex: 0,
  padding: "80px 24px 40px",
  textAlign: "center",
}));

export const StyledBoxAvatar = styled(Box)(() => ({
  textAlign: "center",
  width: "144px",
  height: "144px",
  marginLeft: "25%",
}));

export const StyledAvatar = styled(Avatar)(() => ({
  width: "100%",
  height: "100%",
}));

export const StyledSpanAvatar = styled("span")(({ theme }) => ({
  margin: "24px auto 0px",
  lineHeight: "1.5",
  fontSize: "0.75rem",
  fontWeight: 400,
  color: theme.palette.primary.light,
  display: "block",
  textAlign: "center",
}));

export const StyledButtonDelAvatar = styled(Button)(({ theme }) => ({
  padding: theme.spacing(0, 1),
  border: "none",
  borderRadius: "8px",
  margin: "50px 0 0",
  fontWeight: "700",
  fontSize: "14px",
  color: "rgb(183, 29, 24)",
  backgroundColor: "rgba(255, 86, 48, 0.16)",

  "&:hover": {
    backgroundColor: "rgba(255,86, 48, 0.29)",
  },
}));

export const StyledBoxFormDetail = styled(Box)(({ theme }) => ({
  width: "69.5%",
  height: "800px",
  backgroundColor: theme.palette.background.paper,
  color: "#212b36",
  transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
  overflow: "hidden",
  position: "relative",
  boxShadow: "rgba(145, 158, 171, 0.16) 0px 4px 8px 0px",
  borderRadius: "16px",
  zIndex: 0,
  padding: theme.spacing(4),
}));

export const StyledFormControl = styled(FormControl)(() => ({
  width: "100%",
}));

export const StyledBoxInput = styled(Box)(() => ({
  display: "flex",
  gap: "40px",
}));

export const StyledBoxButtonForm = styled(Box)(() => ({
  textAlign: "end",
}));

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

export const StyledBoxInputTel = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(3),
  marginLeft: "20%",
}));

export const StyledTextField = styled(TextField)(() => ({
  width: "315px",
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

export const StyledBoxButton = styled(Box)(() => ({
  marginTop: "40px",
  display: "flex",
  gap: "15px",
  position: "relative",
}));

export const StyledButtonGeneral = styled(Button)<{ styleactive: boolean }>(
  ({ styleactive }) => ({
    color: "#121212",
    textTransform: "none",
    backgroundColor: "transparent",
    fontSize: "14px",
    display: "flex",
    gap: "5px",
    opacity: styleactive ? "1" : "0.5",
  })
);

export const StyledButtonScore = styled(Button)<{ styleactive: boolean }>(
  ({ styleactive }) => ({
    color: "#121212",
    textTransform: "none",
    backgroundColor: "transparent",
    fontSize: "14px",
    display: "flex",
    gap: "5px",
    opacity: styleactive ? "1" : "0.7",
  })
);

export const StyledSpan = styled(Typography)<{ styleactive: boolean }>(
  ({ styleactive }) => ({
    position: "absolute",
    height: "2px",
    left: styleactive ? "110px" : "0px",
    bottom: "0px",
    width: styleactive ? "7.5%" : "8.7%",
    transition: "all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
    backgroundColor: "rgb(33, 43, 54)",
  })
);
