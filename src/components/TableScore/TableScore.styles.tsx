import {
  styled,
  TableHead,
  TableCell,
  TableBody,
  TableRow,
  Typography,
  TableContainer,
  Box,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import EditIcon from "@mui/icons-material/Edit";

export const StyledTableCont = styled(TableContainer)(() => ({
  marginTop: "40px",
  boxShadow: "rgba(145, 158, 171, 0.16) 0px 4px 8px 0px",
  "&:last-child td, &:last-child th": { border: 0 },
  borderRadius: "16px",
}));

export const StyledBoxTitleHead = styled(Box)(({ theme }) => ({
  borderStartEndRadius: theme.spacing(2),
  borderStartStartRadius: theme.spacing(2),
  border: "none",
  backgroundColor: theme.palette.background.paper,
  display: "flex",
  justifyContent: "space-between",
  padding: "20px 10px",
}));

export const StyledTableHead = styled(TableHead)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  border: "none",
  "& .css-1smula1-MuiTableCell-root": {
    border: "none",
  },
}));

export const StyledTitleRowName = styled(TableCell)(({ theme }) => ({
  fontSize: "14px",
  fontWeight: 400,
  color: theme.palette.text.primary,
  border: "none",
  width: "300px",
}));

export const StyledTableCellClass = styled(TableCell)(() => ({
  textAlign: "center",
  width: "170px",
}));

export const StyledTitleRow = styled(TableCell)(({ theme }) => ({
  fontSize: "14px",
  fontWeight: 400,
  color: theme.palette.text.primary,
  border: "none",
  width: "181px",
}));

export const StyledTitleRowStatus = styled(TableCell)(({ theme }) => ({
  fontSize: "14px",
  fontWeight: 400,
  color: theme.palette.text.primary,
  border: "none",
  width: "300px",
  textAlign: "center",
}));

export const StyledTableBody = styled(TableBody)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

export const StyledTableRowContainer = styled(TableRow)(({ theme }) => ({
  borderBottom: `1px solid ${theme.palette.primary.contrastText}`,
}));

export const StyledTableCellName = styled(TableCell)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(2),
}));

export const StyledTitleNumberPhone = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.light,
  fontSize: "14px",
}));

export const StyledTableCellStatus = styled(TableCell)(() => ({
  width: "150px",
}));

export const StyleIcon = styled(MoreVertIcon)(({ theme }) => ({
  color: theme.palette.primary.light,
}));

export const StyledButtonEdit = styled("button")(({ theme }) => ({
  border: "none",
  cursor: "pointer",
  backgroundColor: theme.palette.background.paper,
}));

export const StyledEditIcon = styled(EditIcon)(() => ({
  width: "20px",
  height: "20px",
  marginRight: "5px",
}));

export const StyledTableCellScore = styled(TableCell)(() => ({
  textAlign: "center",
}));

export const StyledTableCellTitle = styled(TableCell)(() => ({
  textAlign: "center",
  fontWeight: 700,
  border: "none",
  fontSize: "16px",
}));

export const StyledTableRowBody = styled(TableRow)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

export const StyledTableCellTitleHead = styled(TableCell)(() => ({
  textAlign: "center",
  fontWeight: "600",
}));
