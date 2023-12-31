import {
  styled,
  Box,
  Typography,
  RadioGroup,
  Button,
  Input,
  Avatar,
} from "@mui/material";
import { MuiTelInput } from "mui-tel-input";
import Link from "next/link";

export const StyledModalHeaderContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.spacing(2),
  width: "720px",
  height: "900px",
  border: "none",
  padding: "26px 24px",
  boxShadow: "rgba(145, 158, 171, 0.16) 0px 4px 8px 0px",
}));

export const StyledBoxHeader = styled(Box)(() => ({
  display: "flex",
  justifyContent: "end",
}));

export const StyledTitleModal = styled(Typography)(({ theme }) => ({
  fontSize: "24px",
  fontWeight: "700",
  padding: theme.spacing(3),
  color: theme.palette.primary.main,
}));

export const StyledButtonClose = styled("button")(({ theme }) => ({
  borderRadius: "1000px",
  width: "32px",
  height: "32px",
  cursor: "pointer",
  border: "none",
  color: theme.palette.text.primary,
  fontSize: "16px",
}));

export const StyledForm = styled("form")(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(2),
}));

export const StyledBoxFormInfo = styled(Box)(({ theme }) => ({
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

export const StyledBoxNumberPhone = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(3),
  marginLeft: "100px",
}));

export const StyledInputName = styled("input")(({ theme }) => ({
  width: "300px",
  padding: theme.spacing(0, 2),
  borderRadius: "1000px",
  marginTop: "3px",
  border: `1px solid ${theme.palette.primary.contrastText}`,
}));

export const StyleInputNumberPhone = styled(MuiTelInput)(({ theme }) => ({
  "& .MuiInputBase-root": {
    borderRadius: "1000px",
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
}));

export const StyledRadioStatus = styled(RadioGroup)(({ theme }) => ({
  marginTop: theme.spacing(3),
  gap: theme.spacing(3),
}));

export const StyledBoxButtonModal = styled(Box)(() => ({
  position: "absolute",
  top: "750px",
  right: "0px",
  display: "flex",
  gap: "16px",
}));

export const StyledBtnCancel = styled(Button)(({ theme }) => ({
  width: "87px",
  height: "40",
  border: `1px solid ${theme.palette.primary.main}`,
  fontSize: "12px",
  fontWeight: "700",
  padding: theme.spacing(1, 3),
  textAlign: "center",
  borderRadius: "1000px",
}));

export const StyledBtnCreate = styled(Button)(({ theme }) => ({
  width: "87px",
  height: "40",
  border: "none",
  fontSize: "12px",
  fontWeight: "700",
  padding: theme.spacing(1, 3),
  textAlign: "center",
  borderRadius: "1000px",
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.background.paper,
}));

export const StyledBoxButton = styled(Box)(() => ({
  display: "flex",
  gap: "40px",
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
  cursor: "pointer",
  overflow: "hidden",
  marginLeft: "25%",
  padding: "8px",
  border: "1px dashed rgba(145, 158, 171, 0.2)",
  borderRadius: "50%",
  position: "relative",
}));

export const StyledLabel = styled("label")(() => ({
  cursor: "pointer",
}));

export const StyledInputUpdate = styled("input")(() => ({
  display: "none",
}));

export const StyledBoxImageContainer = styled(Box)(() => ({
  width: "100%",
  height: "100%",
  overflow: "hidden",
  borderRadius: "50%",
  position: "relative",
}));

export const StyledImage = styled(Box)(() => ({
  overflow: "hidden",
  position: "relative",
  verticalAlign: "bottom",
  display: "inline-block",
  width: "100%",
  height: "100%",
  borderRadius: "50%",
}));

export const StyledBoxIcon = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  alignItems: "center",
  justifyContent: "center",
  top: "0px",
  left: "0px",
  width: "100%",
  height: "100%",
  zIndex: " 9",
  borderRadius: "50%",
  position: "absolute",
  color: "rgb(255, 255, 255)",
  backgroundColor: "rgba(22, 28, 36, 0.64)",
  transition: "opacity 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
  opacity: 0,
  "&:hover": {
    opacity: 1,
  },
}));

export const StyledTitleIcon = styled("span")(() => ({
  margin: "0px",
  lineHeight: "1.5",
  fontSize: "0.75rem",
  fontFamily: "Public Sans, sans-serif",
  fontWeight: 400,
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

export const StyledBoxNav = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "8px",
  alignItems: "center",
  paddingLeft: theme.spacing(4),
  paddingBottom: theme.spacing(7),
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
