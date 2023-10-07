import React, { useContext, useState } from "react";
import {
  StyledTableHead,
  StyledTableBody,
  StyledTableCellScore,
  StyledTableCont,
  StyledBoxTitleHead,
  StyledTableCellTitle,
  StyledTableRowBody,
  StyledTableCellTitleHead,
} from "@/components/TableScore/TableScore.styles";
import {
  Table,
  TableRow,
  Typography,
  TableHead,
  TableBody,
} from "@mui/material";

import { AppContext, AppContextType } from "@/contexts/AppContext";

const TableScore = () => {
  const { studentDetail } = useContext(AppContext) as AppContextType;

  return (
    <StyledTableCont>
      <StyledBoxTitleHead>
        <Typography>Lớp: {studentDetail?.classItem}</Typography>
        <Typography>Năm học: 2023-2024</Typography>
      </StyledBoxTitleHead>
      <Table>
        <StyledTableHead>
          <TableRow>
            <StyledTableCellTitle colSpan={4}>Học KỲ 1</StyledTableCellTitle>
            <StyledTableCellTitle colSpan={4}>Học KỲ 2</StyledTableCellTitle>
            <StyledTableCellTitle>Tổng kết</StyledTableCellTitle>
          </TableRow>

          <TableRow>
            {[
              "15p",
              "1 Tiết",
              "Thi",
              "TB Học kỳ",
              "15p",
              "1 Tiết",
              "Thi",
              "TB Học kỳ",
            ].map((item) => {
              return (
                <>
                  <StyledTableCellScore>{item}</StyledTableCellScore>
                </>
              );
            })}

            <StyledTableCellScore>TB Cả năm</StyledTableCellScore>
          </TableRow>
        </StyledTableHead>

        <StyledTableBody>
          <TableRow key={studentDetail?.id}>
            <StyledTableCellScore>
              {studentDetail?.score?.hk1?.test15p}
            </StyledTableCellScore>

            <StyledTableCellScore>
              {studentDetail?.score?.hk1?.test1Tiet}
            </StyledTableCellScore>
            <StyledTableCellScore>
              {studentDetail?.score?.hk1?.exam}
            </StyledTableCellScore>

            <StyledTableCellScore>
              {studentDetail?.score?.hk1?.averageScore}
            </StyledTableCellScore>

            <StyledTableCellScore>
              {studentDetail?.score?.hk2?.test15p}
            </StyledTableCellScore>

            <StyledTableCellScore>
              {studentDetail?.score?.hk2?.test1Tiet}
            </StyledTableCellScore>
            <StyledTableCellScore>
              {studentDetail?.score?.hk2?.exam}
            </StyledTableCellScore>

            <StyledTableCellScore>
              {studentDetail?.score?.hk2?.averageScore}
            </StyledTableCellScore>
            <StyledTableCellScore>
              {studentDetail?.score?.averageScoreTotal}
            </StyledTableCellScore>
          </TableRow>
        </StyledTableBody>
      </Table>

      <Table>
        <TableHead>
          <TableRow>
            <StyledTableCellTitleHead colSpan={5}>
              XẾP HẠNG - XẾP LOẠI - NHẬN XÉT
            </StyledTableCellTitleHead>
          </TableRow>
          <TableRow>
            <StyledTableCellScore>Xếp loại</StyledTableCellScore>
            <StyledTableCellScore>Kết quả</StyledTableCellScore>
            <StyledTableCellScore>Hạng</StyledTableCellScore>
            <StyledTableCellScore>Ghi chú</StyledTableCellScore>
          </TableRow>
        </TableHead>
        <TableBody>
          <StyledTableRowBody>
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
          </StyledTableRowBody>
        </TableBody>
      </Table>
    </StyledTableCont>
  );
};

export default TableScore;
