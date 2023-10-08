import { Collapse, styled, Table, TableCell, TableRow } from "@mui/material";

export const StyledTableInput = styled("input")(({ theme }) => ({
  width: "60px",
  padding: "5px",
  border: `1px solid ${theme.palette.primary.contrastText}`,
  borderRadius: "8px",
  textAlign: "center",
}));

export const StyledTableCellName = styled(TableCell)(() => ({
  display: "flex",
  flexDirection: "column",
}));

export const StyledTableCellAverage = styled(TableCell)(() => ({
  width: "80px",
}));

export const StyledTableCellCollapse = styled(TableCell)(({ theme }) => ({
  padding: "0px",
  border: "none",
}));

export const StyledCollapse = styled(Collapse)(({ theme }) => ({
  padding: theme.spacing(2),
  backgroundColor: theme.palette.background.default,
}));

export const StyledTableUpdate = styled(Table)(({ theme }) => ({
  borderRadius: "16px",
  backgroundColor: theme.palette.background.paper,
}));

export const StyledTableRowTitle = styled(TableRow)(({ theme }) => ({
  "&:last-child th,&:last-child td": { border: 0 },
  "& td, & th": {
    borderBottom: `1px solid ${theme.palette.primary.contrastText}`,
  },
}));

export const StyledTableCellTitleExpanse = styled(TableCell)(() => ({
  fontWeight: 600,
  textAlign: "center",
}));

export const StyledTableCellScore = styled(TableCell)(() => ({
  textAlign: "center",
}));

export const StyledInputText = styled("input")(({ theme }) => ({
  padding: theme.spacing(3),
  border: `1px solid ${theme.palette.primary.light}`,
  borderRadius: "12px",
  width: "100%",
}));
