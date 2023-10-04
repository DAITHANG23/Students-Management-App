import React, { useContext, useState } from "react";
import {
  StyledTableHead,
  StyledTableBody,
  StyledButtonEdit,
  StyleIcon,
  StyledEditIcon,
  StyledTableCellScore,
} from "@/components/TableScore/TableScore.styles";
import {
  Table,
  TableRow,
  TableCell,
  Typography,
  Box,
  Popover,
  Button,
  TableHead,
  TableBody,
  TableContainer,
} from "@mui/material";

import { AppContext, AppContextType } from "@/contexts/AppContext";

const TableScore = () => {
  const { studentDetail } = useContext(AppContext) as AppContextType;

  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClosePopover = () => {
    setAnchorEl(null);
  };

  const openPop = Boolean(anchorEl);

  const idPopItem = openPop ? "simple-popover" : undefined;

  const onEditStudentItem = () => {};

  return (
    <TableContainer
      sx={{
        marginTop: "40px",
        boxShadow: "rgba(145, 158, 171, 0.16) 0px 4px 8px 0px",
        "&:last-child td, &:last-child th": { border: 0 },
        borderRadius: "16px",
      }}
    >
      <Box
        sx={{
          borderStartEndRadius: "16px",
          borderStartStartRadius: "16px",
          border: "none",
          backgroundColor: "#FFF",
          display: "flex",
          justifyContent: "space-between",
          padding: "20px 10px",
        }}
      >
        <Typography>Lớp: {studentDetail?.classItem}</Typography>
        <Typography>Năm học: 2023-2024</Typography>
      </Box>
      <Table>
        <StyledTableHead>
          <TableRow>
            <TableCell
              colSpan={4}
              sx={{
                textAlign: "center",
                fontWeight: 700,

                border: "none",
                fontSize: "16px",
              }}
            >
              Học KỲ 1
            </TableCell>
            <TableCell
              colSpan={4}
              sx={{
                textAlign: "center",
                fontWeight: 700,
                border: "none",
                fontSize: "16px",
              }}
            >
              Học KỲ 2
            </TableCell>
            <TableCell
              sx={{
                textAlign: "center",
                fontWeight: 700,
                border: "none",
                fontSize: "16px",
                width: "120px",
              }}
            >
              Tổng kết
            </TableCell>
            <TableCell sx={{ border: "none", width: "32px" }}></TableCell>
          </TableRow>

          <TableRow>
            <StyledTableCellScore>15p</StyledTableCellScore>
            <StyledTableCellScore>1 Tiết</StyledTableCellScore>
            <StyledTableCellScore>Thi</StyledTableCellScore>
            <StyledTableCellScore>TB Học kỳ</StyledTableCellScore>
            <StyledTableCellScore>15p</StyledTableCellScore>
            <StyledTableCellScore>1 Tiết</StyledTableCellScore>
            <StyledTableCellScore>Thi</StyledTableCellScore>
            <StyledTableCellScore>TB Học kỳ</StyledTableCellScore>
            <StyledTableCellScore>TB Cả năm</StyledTableCellScore>
            <StyledTableCellScore></StyledTableCellScore>
          </TableRow>
        </StyledTableHead>

        <StyledTableBody>
          <TableRow key={studentDetail?.id}>
            <StyledTableCellScore>
              {studentDetail?.score?.hk1.test15p}
            </StyledTableCellScore>

            <StyledTableCellScore>
              {studentDetail?.score?.hk1.test1Tiet}
            </StyledTableCellScore>
            <StyledTableCellScore>
              {studentDetail?.score?.hk1.exam}
            </StyledTableCellScore>

            <StyledTableCellScore>
              {studentDetail?.score?.hk1.averageScore}
            </StyledTableCellScore>

            <StyledTableCellScore>
              {studentDetail?.score?.hk2.test15p}
            </StyledTableCellScore>

            <StyledTableCellScore>
              {studentDetail?.score?.hk2.test1Tiet}
            </StyledTableCellScore>
            <StyledTableCellScore>
              {studentDetail?.score?.hk2.exam}
            </StyledTableCellScore>

            <StyledTableCellScore>
              {studentDetail?.score?.hk2.averageScore}
            </StyledTableCellScore>
            <StyledTableCellScore>
              {studentDetail?.score?.averageScoreTotal}
            </StyledTableCellScore>
            <StyledTableCellScore>
              <StyledButtonEdit onClick={handleClick}>
                <StyleIcon />
              </StyledButtonEdit>
              <Popover
                id={idPopItem}
                open={openPop}
                anchorEl={anchorEl}
                onClose={handleClosePopover}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                sx={{ marginRight: "200px" }}
              >
                <Box>
                  <Button onClick={() => onEditStudentItem()}>
                    <StyledEditIcon />
                    Edit
                  </Button>
                </Box>
              </Popover>
            </StyledTableCellScore>
          </TableRow>
        </StyledTableBody>
      </Table>

      <Table>
        <TableHead>
          <TableRow>
            <TableCell
              colSpan={5}
              sx={{ textAlign: "center", fontWeight: "600" }}
            >
              XẾP HẠNG - XẾP LOẠI - NHẬN XÉT
            </TableCell>
          </TableRow>
          <TableRow>
            <StyledTableCellScore>Xếp loại</StyledTableCellScore>
            <StyledTableCellScore>Kết quả</StyledTableCellScore>
            <StyledTableCellScore>Hạng</StyledTableCellScore>
            <StyledTableCellScore>Ghi chú</StyledTableCellScore>
          </TableRow>
        </TableHead>
        <TableBody sx={{ backgroundColor: "#FFF !important" }}>
          <TableRow sx={{ backgroundColor: "#FFF" }}>
            <StyledTableCellScore>
              {studentDetail?.score?.classification}
            </StyledTableCellScore>
            <StyledTableCellScore>
              {studentDetail?.score?.result}
            </StyledTableCellScore>
            <StyledTableCellScore>
              {studentDetail?.score?.rank}
            </StyledTableCellScore>
            <StyledTableCellScore>
              {studentDetail?.score?.noteResult}
            </StyledTableCellScore>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableScore;
