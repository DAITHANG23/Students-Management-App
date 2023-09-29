import { styled, TableCell, Typography, Modal, Box } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const nganhChiencon = ["Chiên con", "Ấu 1A", "Ấu 1B"];
const nganhAu = ["Ấu 2A", "Ấu 2B", "Ấu 3A", "Ấu 3B"];
const nganhThieu = [
  "Thiếu 1 Nam",
  "Thiếu 1 Nữ",
  "Thiếu 2 Nam",
  "Thiếu 2 Nữ",
  "Thiếu 3 Nam",
  "Thiếu 3 Nữ",
];
const nganhNghia = ["Nghĩa 1", " Nghĩa 2", "Nghĩa 3"];
const nganhDutruong = ["Dự trưởng 1", "Dự trưởng 2"];

export const StyledTableCellName = styled(TableCell)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(2),
}));

export const StyledTableRowContent = styled(Typography)(() => ({
  fontSize: "14px",
}));

export const StyledTitleNumberPhone = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.light,
  fontSize: "14px",
}));

export const StyledTableCellStatus = styled(TableCell)(() => ({
  width: "150px",
}));

export const StyledTitleStatus = styled(Typography)<{ styleActive: string }>(
  ({ theme, styleActive }) => ({
    border: "none",
    color: theme.palette.background.paper,
    backgroundColor:
      styleActive === nganhChiencon[0] ||
      styleActive === nganhChiencon[1] ||
      styleActive === nganhChiencon[2]
        ? "#ec407a"
        : styleActive === nganhAu[0] ||
          styleActive === nganhAu[1] ||
          styleActive === nganhAu[2] ||
          styleActive === nganhAu[3]
        ? "#76ff03"
        : styleActive === nganhThieu[0] ||
          styleActive === nganhThieu[1] ||
          styleActive === nganhThieu[2] ||
          styleActive === nganhThieu[3] ||
          styleActive === nganhThieu[4] ||
          styleActive === nganhThieu[5]
        ? "#0d47a1"
        : styleActive === nganhNghia[0] || styleActive === nganhNghia[1]
        ? "#ffeb3b"
        : styleActive === nganhDutruong[0] || styleActive === nganhDutruong[1]
        ? "#d50000"
        : "",
    textAlign: "center",
    padding: "4px 8px",
    borderRadius: "100px",

    fontSize: "14px",
    fontWeight: 400,
  })
);

export const StyledButtonEdit = styled("button")(({ theme }) => ({
  border: "none",
  cursor: "pointer",
  backgroundColor: theme.palette.background.paper,
}));

export const StyleIcon = styled(MoreVertIcon)(({ theme }) => ({
  color: theme.palette.primary.light,
}));

export const StyledEditIcon = styled(EditIcon)(() => ({
  width: "20px",
  height: "20px",
  marginRight: "5px",
}));

export const StyledDeleteIcon = styled(DeleteIcon)(() => ({
  width: "20px",
  height: "20px",
  marginRight: "5px",
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

export const StyledModalEdit = styled(Modal)(() => ({
  position: "fixed",
  top: "7vh",
  left: "calc(50% - 15rem)",
}));

export const StyledBoxButton = styled(Box)(() => ({
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  gap: "2rem",
}));
export const StyledButtonCancel = styled(Box)(({ theme }) => ({
  font: "inherit",
  cursor: "pointer",
  border: "none",
  backgroundColor: "transparent",
  color: "#3f0c26",
  borderRadius: "4px",
  fontWeight: "bold",
  textDecoration: "none",
}));

export const StyledButtonDelete = styled(Box)(({ theme }) => ({
  font: "inherit",
  cursor: "pointer",
  padding: "0.5rem 1.5rem",
  border: "none",
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.background.paper,
  borderRadius: "4px",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.26)",
  fontWeight: "bold",
  textDecoration: "none",
}));
