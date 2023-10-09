"use client";

import {
  Box,
  Button,
  TableCell,
  TableContainer,
  Typography,
  styled,
} from "@mui/material";
import Link from "next/link";

const NganhChiencon: string[] = ["Chiên con", "Ấu 1A", "Ấu 1B"];
const NganhAu: string[] = ["Ấu 2A", "Ấu 2B", "Ấu 3A", "Ấu 3B"];
const NganhNghia: string[] = ["Nghĩa 1", "Nghĩa 2", "Nghĩa 3"];
const NganhThieu: string[] = [
  "Thiếu 1 Nam",
  "Thiếu 1 Nữ",
  "Thiếu 2 Nam",
  "Thiếu 2 Nữ",
  "Thiếu 3 Nam",
  "Thiếu 3 Nữ",
];

const NganhDutruong: string[] = ["Dự trưởng 1", "Dự trưởng 2"];

export const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
  background: theme.palette.background.paper,
  border: "none",
  borderRadius: theme.spacing(2),
  boxShadow: "rgba(145, 158, 171, 0.16) 0px 4px 8px 0px",
  marginTop: theme.spacing(6),
  //"&:last-child td, &:last-child th": { border: 0 },
}));

export const StyledTableCellTitle = styled(TableCell)(({ theme }) => ({
  width: "24%",
  textAlign: "center",
  fontSize: "18px",
  fontWeight: "700",
  border: "none",
  background: theme.palette.background.default,
}));

export const StyledTableCellTitleScore = styled(TableCell)(({ theme }) => ({
  width: "38%",
  textAlign: "center",
  fontSize: "18px",
  fontWeight: "700",
  border: "none",
  background: theme.palette.background.default,
}));

export const StyledTableRowTitle = styled(TableCell)(({ theme }) => ({
  border: "none",
  textAlign: "left",
  background: theme.palette.background.default,
  fontWeight: 600,
}));

export const StyledBoxButton = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
  padding: "20px 10px",
  alignItems: "center",
}));

export const StyledBtnSave = styled(Button)(({ theme }) => ({
  border: "none",
  borderRadius: "12px",
  padding: "10px 12px",
  background: theme.palette.primary.main,
  color: theme.palette.background.paper,
  fontSize: "14px",
}));

export const StyledButtonClass = styled(Button)<{
  styleactive: string;
  stylechoose: string | undefined;
}>(({ styleactive, stylechoose, theme }) => ({
  padding: "5px 10px",
  //border: "none",
  borderRadius: "12px",

  color: NganhChiencon.includes(styleactive)
    ? theme.palette.error.main
    : NganhAu.includes(styleactive)
    ? " rgb(17, 141, 87)"
    : NganhThieu.includes(styleactive)
    ? "rgb(0, 184, 217)"
    : NganhNghia.includes(styleactive)
    ? " rgb(183, 110, 0)"
    : NganhDutruong.includes(styleactive)
    ? "rgb(255, 86, 48)"
    : "",
  backgroundColor: NganhChiencon.includes(styleactive)
    ? "rgba(226, 19, 80, 0.16)"
    : NganhAu.includes(styleactive)
    ? "rgba(34, 197, 94, 0.16)"
    : NganhThieu.includes(styleactive)
    ? "rgba(0, 184, 217,0.16)"
    : NganhNghia.includes(styleactive)
    ? "rgba(255, 171, 0, 0.16)"
    : NganhDutruong.includes(styleactive)
    ? "rgba(255, 86, 48, 0.16)"
    : "",
  fontWeight: 600,

  //opacity: stylechoose === "true" ? 1 : 0.5,

  border: stylechoose === "true" ? "2px solid" : "none",
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
