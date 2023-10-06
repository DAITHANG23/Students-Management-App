"use client";

import {
  TableRow,
  Box,
  TableCell,
  Button,
  TableBody,
  TableHead,
} from "@mui/material";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import {
  StyledTableCellName,
  StyledTableInput,
  StyledTableCellAverage,
  StyledTableCellCollapse,
  StyledCollapse,
  StyledTableUpdate,
  StyledTableRowTitle,
  StyledTableCellTitleExpanse,
  StyledTableCellScore,
  StyledInputText,
} from "@/components/TableScoreForm/TableScoreForm.styles";
import SaveIcon from "@mui/icons-material/Save";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import IconButton from "@mui/material/IconButton";
import { VariantType, useSnackbar } from "notistack";
import { AppContext, AppContextType } from "@/contexts/AppContext";

interface TableScoreFormProps {
  id?: string;
  saintName?: string;
  lastName?: string;
  name?: string;
  score?: {
    hk1?: {
      test15p?: number;
      test1Tiet?: number;
      exam?: number;
      averageScore?: number;
    };
    hk2?: {
      test15p?: number;
      test1Tiet?: number;
      exam?: number;
      averageScore?: number;
    };
    averageScoreTotal?: number;
    rank?: number;
    classification?: string;
    result?: string;
    noteResult?: string;
  };
  ranking?: number;
}

const TableScoreForm = (props: TableScoreFormProps) => {
  const { id, saintName, lastName, name, score, ranking } = props;

  const { enqueueSnackbar } = useSnackbar();

  const [open, setOpen] = useState(false);

  const [rowOpen, setRowOpen] = useState<string | undefined>("");

  const { register, handleSubmit } = useForm();

  const { onScoreStudent } = useContext(AppContext) as AppContextType;

  const [scoreAverage, setScoreAverage] = useState<{
    averageHk1: number | undefined;
    averageHk2: number | undefined;
    scoreAverageTotal: number | undefined;
    classification: string | undefined;
    resultTotal: string | undefined;
    noteResult: string | undefined;
    rank: number | undefined;
  }>({
    averageHk1: score?.hk1?.averageScore,
    averageHk2: score?.hk2?.averageScore,
    scoreAverageTotal: score?.averageScoreTotal,
    classification: score?.classification,
    resultTotal: score?.result,
    noteResult: score?.noteResult,
    rank: score?.rank,
  });

  const onFormScoreSubmit = handleSubmit((data) => {
    const score15pHk1 = +data.test15PHk1;
    const score1TietpHk1 = +data.test1TietHk1;
    const scoreExamHk1 = +data.examHk1;
    const averageHk1 = Number(
      ((score15pHk1 + score1TietpHk1 * 2 + scoreExamHk1 * 3) / 6).toFixed(1)
    );

    const score15pHk2 = +data.test15PHk2;
    const score1TietpHk2 = +data.test1TietHk2;
    const scoreExamHk2 = +data.examHk2;
    const averageHk2 = Number(
      ((score15pHk2 + score1TietpHk2 * 2 + scoreExamHk2 * 3) / 6).toFixed(1)
    );

    const scoreAverageTotal = Number(
      ((averageHk1 + averageHk2) / 2).toFixed(1)
    );

    let classification = "";
    let resultTotal = "";
    if (scoreAverageTotal >= 8.0) {
      classification = "Giỏi";
      resultTotal = "Lên lớp";
    } else if (scoreAverageTotal >= 6.5) {
      classification = "Khá";
      resultTotal = "Lên lớp";
    } else if (scoreAverageTotal >= 5) {
      classification = "Trung bình";
      resultTotal = "Lên lớp";
    } else {
      classification = "Yếu";
      resultTotal = "Ở lại lớp";
    }

    const note = data.noteResult;

    setScoreAverage({
      averageHk1: averageHk1,
      averageHk2: averageHk2,
      scoreAverageTotal: scoreAverageTotal,
      classification: classification,
      resultTotal: resultTotal,
      noteResult: note,
      rank: ranking,
    });

    onScoreStudent(
      id,
      score15pHk1,
      score1TietpHk1,
      scoreExamHk1,
      averageHk1,
      score15pHk2,
      score1TietpHk2,
      scoreExamHk2,
      averageHk2,
      scoreAverageTotal,
      classification,
      resultTotal,
      note,
      ranking
    );
  });

  const onClick = (id: string | undefined) => {
    setRowOpen(id);
    setOpen(!open);
  };

  const handleClick = (variant: VariantType) => {
    enqueueSnackbar("Cập nhật thành công!", {
      variant,
      anchorOrigin: {
        vertical: "top",
        horizontal: "right",
      },
    });
  };

  return (
    <>
      <TableRow
        key={id}
        sx={{
          "&:nth-child() td, &:last-child th,&:last-child td": { border: 0 },
          border: "none",
        }}
      >
        <StyledTableCellName sx={{ border: "none" }}>
          <Box style={{ color: "#94999C" }}>{saintName}</Box>
          <Box>
            {lastName}
            {name}
          </Box>
        </StyledTableCellName>

        <TableCell sx={{ border: "none" }}>
          <form id={id} onSubmit={onFormScoreSubmit}>
            <StyledTableInput
              type="number"
              id="test15PHk1"
              defaultValue={score?.hk1?.test15p}
              {...register("test15PHk1")}
              min={0}
              max={10}
            />
          </form>
        </TableCell>
        <TableCell sx={{ border: "none" }}>
          <StyledTableInput
            form={id}
            type="number"
            id="test1TietHk1"
            defaultValue={score?.hk1?.test1Tiet}
            {...register("test1TietHk1")}
            min={0}
            max={10}
          />
        </TableCell>
        <TableCell sx={{ border: "none" }}>
          <StyledTableInput
            form={id}
            type="number"
            id="examHk1"
            defaultValue={score?.hk1?.exam}
            {...register("examHk1")}
            min={0}
            max={10}
          />
        </TableCell>
        <StyledTableCellAverage sx={{ border: "none" }}>
          {scoreAverage.averageHk1}
        </StyledTableCellAverage>
        <TableCell sx={{ border: "none" }}>
          <StyledTableInput
            form={id}
            type="number"
            id="test15PHk2"
            defaultValue={score?.hk2?.test15p}
            {...register("test15PHk2")}
            min={0}
            max={10}
          />
        </TableCell>
        <TableCell sx={{ border: "none" }}>
          <StyledTableInput
            form={id}
            type="number"
            id="test1TietHk2"
            defaultValue={score?.hk2?.test1Tiet}
            {...register("test1TietHk2")}
            min={0}
            max={10}
          />
        </TableCell>
        <TableCell sx={{ border: "none" }}>
          <StyledTableInput
            form={id}
            type="number"
            id="examHk2"
            defaultValue={score?.hk2?.exam}
            {...register("examHk2")}
            min={0}
            max={10}
          />
        </TableCell>
        <StyledTableCellAverage sx={{ border: "none" }}>
          {scoreAverage.averageHk2}
        </StyledTableCellAverage>
        <TableCell
          sx={{
            display: "flex",
            width: "120px",
            border: "none",
            textAlign: "center",
            paddingsTop: "10px",
          }}
        >
          <Button
            form={id}
            type="submit"
            onClick={() => handleClick("success")}
          >
            <SaveIcon />
          </Button>

          <IconButton onClick={() => onClick(id)}>
            {rowOpen === id && open ? (
              <KeyboardArrowUpIcon />
            ) : (
              <KeyboardArrowDownIcon />
            )}
          </IconButton>
        </TableCell>
      </TableRow>
      <TableRow aria-label="purchases">
        <StyledTableCellCollapse colSpan={10}>
          <StyledCollapse
            key={id}
            in={rowOpen === id ? open : undefined}
            timeout="auto"
            unmountOnExit
          >
            <StyledTableUpdate>
              <TableHead>
                <TableRow>
                  <StyledTableCellTitleExpanse>
                    TB Cả năm
                  </StyledTableCellTitleExpanse>
                  <StyledTableCellTitleExpanse>
                    Kết Quả
                  </StyledTableCellTitleExpanse>
                  <StyledTableCellTitleExpanse>
                    Học Lực
                  </StyledTableCellTitleExpanse>
                  <StyledTableCellTitleExpanse>
                    Hạng
                  </StyledTableCellTitleExpanse>
                  <StyledTableCellTitleExpanse>
                    Ghi Chú
                  </StyledTableCellTitleExpanse>
                </TableRow>
              </TableHead>
              <TableBody>
                <StyledTableRowTitle>
                  <StyledTableCellScore>
                    {scoreAverage.scoreAverageTotal}
                  </StyledTableCellScore>
                  <StyledTableCellScore>
                    {scoreAverage.resultTotal}
                  </StyledTableCellScore>
                  <StyledTableCellScore>
                    {scoreAverage.classification}
                  </StyledTableCellScore>
                  <StyledTableCellScore>
                    {scoreAverage.rank}
                  </StyledTableCellScore>
                  <StyledTableCellScore>
                    <StyledInputText
                      form={id}
                      type="text"
                      id="noteResult"
                      defaultValue={score?.noteResult}
                      {...register("noteResult")}
                    />
                  </StyledTableCellScore>
                </StyledTableRowTitle>
              </TableBody>
            </StyledTableUpdate>
          </StyledCollapse>
        </StyledTableCellCollapse>
      </TableRow>
    </>
  );
};

export default TableScoreForm;
