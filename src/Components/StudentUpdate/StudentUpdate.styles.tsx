import {
  styled,
  Typography,
  Box,
  TextField,
  Button,
  FormControl,
} from "@mui/material";
import { MuiTelInput } from "mui-tel-input";

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

export const StyledBoxFormDetail = styled(Box)(({ theme }) => ({
  width: "80%",
  height: "800px",
  backgroundColor: theme.palette.background.paper,
  color: "#212b36",
  transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
  // overflow: "auto",
  position: "relative",
  boxShadow: "rgba(145, 158, 171, 0.16) 0px 4px 8px 0px",
  borderRadius: "16px",
  zIndex: 0,
  padding: theme.spacing(3, 4),
}));

export const StyledTitleForm = styled(Typography)(({ theme }) => ({
  fontSize: "20px",
  fontWeight: "700",
  paddingBottom: theme.spacing(3),
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
