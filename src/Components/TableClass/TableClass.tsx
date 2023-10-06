"use client";

import { AppContext, AppContextType } from "@/contexts/AppContext";
import {
  NameClassList,
  NganhAu,
  NganhChiencon,
  NganhDutruong,
  NganhNghia,
  NganhThieu,
  Students,
} from "@/hooks/types";
import {
  Box,
  Button,
  Container,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { ApexOptions } from "apexcharts";
import ReactApexChart from "react-apexcharts";
import React, { useContext, useEffect, useState } from "react";

import {
  StyledTableContainer,
  StyledTableCellTitle,
  StyledTableRowTitle,
  StyledTableCellTitleScore,
  StyledBoxButton,
  StyledButtonClass,
  StyledBoxNav,
  StyledLink,
  StyledLinkPage,
  StyledLinkPageExist,
} from "@/components/TableClass/TableClass.styles";
import TableScoreForm from "@/components/TableScoreForm/TableScoreForm";

import { BsDot } from "react-icons/bs";
const TableClass = () => {
  const nganhChiencon: NganhChiencon[] = ["Chiên con", "Ấu 1A", "Ấu 1B"];

  const nganhAu: NganhAu[] = ["Ấu 2A", "Ấu 2B", "Ấu 3A", "Ấu 3B"];

  const nganhThieu: NganhThieu[] = [
    "Thiếu 1 Nam",
    "Thiếu 1 Nữ",
    "Thiếu 2 Nam",
    "Thiếu 2 Nữ",
    "Thiếu 3 Nam",
    "Thiếu 3 Nữ",
  ];

  const nganhNghia: NganhNghia[] = ["Nghĩa 1", "Nghĩa 2", "Nghĩa 3"];

  const nganhDutruong: NganhDutruong[] = ["Dự trưởng 1", "Dự trưởng 2"];

  const { titleHeader, studentsList } = useContext(
    AppContext
  ) as AppContextType;

  const [studentsNganh, setStudentsNganh] = useState<Students[]>([]);

  const [nameClassList, setNameClassList] = useState<NameClassList>([]);

  const [studentsClass, setStudentsClass] = useState<Students[]>([]);

  const [chooseClass, setChooseClass] = useState<string>();

  useEffect(() => {
    let studentsNganhChiencon: Students[] = [];
    if (titleHeader === "Chiên Con") {
      const studentsChienconList = studentsList.filter(
        (student) => student.classItem === "Chiên con"
      );

      const studentsAu1AList = studentsList.filter(
        (student) => student.classItem === "Ấu 1A"
      );

      const studentsAu1BList = studentsList.filter(
        (student) => student.classItem === "Ấu 1B"
      );

      studentsNganhChiencon = studentsChienconList.concat(
        studentsAu1AList,
        studentsAu1BList
      );

      setStudentsNganh(studentsNganhChiencon);

      setNameClassList(nganhChiencon);
    } else if (titleHeader === "Ấu Nhi") {
      let studentsNganhAu: Students[] = [];

      const studentsAu2AList = studentsList.filter(
        (student) => student.classItem === "Ấu 2A"
      );

      const studentsAu2BList = studentsList.filter(
        (student) => student.classItem === "Ấu 2B"
      );

      const studentsAu3AList = studentsList.filter(
        (student) => student.classItem === "Ấu 3A"
      );

      const studentsAu3BList = studentsList.filter(
        (student) => student.classItem === "Ấu 3B"
      );

      studentsNganhAu = studentsAu2AList.concat(
        studentsAu2BList,
        studentsAu3AList,
        studentsAu3BList
      );

      setNameClassList(nganhAu);

      setStudentsNganh(studentsNganhAu);
    } else if (titleHeader === "Thiếu Nhi") {
      let studentsNganhThieu: Students[] = [];

      const studentsThieu1NamList = studentsList.filter(
        (student) => student.classItem === "Thiếu 1 Nam"
      );

      const studentsThieu1NuList = studentsList.filter(
        (student) => student.classItem === "Thiếu 1 Nữ"
      );

      const studentsThieu2NamList = studentsList.filter(
        (student) => student.classItem === "Thiếu 2 Nam"
      );

      const studentsThieu2NuList = studentsList.filter(
        (student) => student.classItem === "Thiếu 2 Nữ"
      );

      const studentsThieu3NamList = studentsList.filter(
        (student) => student.classItem === "Thiếu 3 Nam"
      );

      const studentsThieu3NuList = studentsList.filter(
        (student) => student.classItem === "Thiếu 3 Nữ"
      );

      studentsNganhThieu = studentsThieu1NamList.concat(
        studentsThieu1NuList,
        studentsThieu2NamList,
        studentsThieu2NuList,
        studentsThieu3NamList,
        studentsThieu3NuList
      );

      setNameClassList(nganhThieu);

      setStudentsNganh(studentsNganhThieu);
    } else if (titleHeader === "Nghĩa sĩ") {
      let studentsNganhNghia: Students[] = [];

      const studentsNghia1List = studentsList.filter(
        (student) => student.classItem === "Nghĩa 1"
      );

      const studentsNghia2List = studentsList.filter(
        (student) => student.classItem === "Nghĩa 2"
      );

      const studentsNghia3List = studentsList.filter(
        (student) => student.classItem === "Nghĩa 3"
      );

      studentsNganhNghia = studentsNghia1List.concat(
        studentsNghia2List,
        studentsNghia3List
      );
      setNameClassList(nganhNghia);

      setStudentsNganh(studentsNganhNghia);
    } else {
      let studentsNganhDutruong: Students[] = [];

      const studentsDutruong1List = studentsList.filter(
        (student) => student.classItem === "Dự trưởng 1"
      );

      const studentsDutruong2List = studentsList.filter(
        (student) => student.classItem === "Dự trưởng 2"
      );

      studentsNganhDutruong = studentsDutruong1List.concat(
        studentsDutruong2List
      );

      setNameClassList(nganhDutruong);

      setStudentsNganh(studentsNganhDutruong);
    }
  }, [titleHeader, studentsList]);

  const onChooseClass = (value: string) => {
    const studentsClassList = studentsNganh.filter(
      (student) => student.classItem === value
    );

    setStudentsClass(studentsClassList);
    setChooseClass(value);
  };

  const quantityGioi = studentsClass.filter(
    (student) => student.score?.classification === "Giỏi"
  ).length;
  const quantityKha = studentsClass.filter(
    (student) => student.score?.classification === "Khá"
  ).length;
  const quantityTb = studentsClass.filter(
    (student) => student.score?.classification === "Trung bình"
  ).length;
  const quantityYeu = studentsClass.filter(
    (student) => student.score?.classification === "Yếu"
  ).length;

  const series = [quantityGioi, quantityKha, quantityTb, quantityYeu];

  const options: ApexOptions = {
    chart: {
      width: 300,
      type: "donut",
    },

    labels: ["Giỏi", "Khá", "Trung Bình", "Yếu"],

    plotOptions: {
      pie: {
        startAngle: -90,
        endAngle: 270,

        donut: {
          size: "80%",
          labels: {
            show: true,

            total: {
              showAlways: false,
              show: true,
              fontSize: "12px",
              color: "#f90000",
              fontWeight: "600",
            },
          },
        },
      },
    },
    colors: ["#FF6699", "#22C55E", "#00B8D9", "#FFAB00"],

    tooltip: {
      fillSeriesColor: false,
      theme: "",
    },

    dataLabels: {
      enabled: true,
      style: { fontSize: "12px" },
    },
    fill: {
      type: "gradient",
      colors: ["#FF6699", "#22C55E", "#00B8D9", "#FFAB00"],
    },
    legend: {
      show: false,
      markers: {
        fillColors: ["#FF6699", "#22C55E", "#00B8D9", "#FFAB00"],
      },
    },

    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 250,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  };

  const arrStudentScore: number[] | undefined = [];

  const tableStudentForm = studentsClass.map((student, index) => {
    arrStudentScore.push(student.score?.averageScoreTotal as number);

    function rankings(arr: number[]) {
      var sorted = arr.slice().sort(function (a, b) {
        return b - a;
      });
      var ranks = arr.slice().map(function (v) {
        return sorted.indexOf(v) + 1;
      });
      return ranks;
    }
    const rank = rankings(arrStudentScore);

    console.log("arrStudentScore", arrStudentScore);
    console.log("rank", rank);
    //console.log("rankIndex", rank[index]);

    return (
      <TableScoreForm key={student.id} {...student} ranking={rank[index]} />
    );
  });

  return (
    <Container>
      <StyledBoxNav>
        <StyledLink href={"/admin"}>Admin</StyledLink>
        <BsDot />
        <StyledLinkPage>{titleHeader}</StyledLinkPage>
        <BsDot />
        <StyledLinkPageExist>Detail</StyledLinkPageExist>
      </StyledBoxNav>

      <StyledTableContainer>
        <StyledBoxButton>
          <Box sx={{ display: "flex", gap: "10px" }}>
            {nameClassList.map((item) => {
              return (
                <>
                  <StyledButtonClass
                    styleactive={item}
                    onClick={() => onChooseClass(item)}
                    stylechoose={chooseClass === item}
                    key={item}
                  >
                    {item.toLowerCase()}
                  </StyledButtonClass>
                </>
              );
            })}
          </Box>
          <Box>
            <ReactApexChart
              options={options}
              series={series}
              type="donut"
              width={150}
            />
          </Box>

          <Typography>
            Năm học:<span style={{ fontWeight: 600 }}> 2023-2024</span>
          </Typography>
        </StyledBoxButton>

        <Box>
          <TableHead>
            <TableRow>
              <StyledTableCellTitle>Họ Tên</StyledTableCellTitle>
              <StyledTableCellTitleScore colSpan={4}>
                Học Kỳ 1
              </StyledTableCellTitleScore>
              <StyledTableCellTitleScore colSpan={4}>
                Học Kỳ 2
              </StyledTableCellTitleScore>
              <StyledTableCellTitleScore
                sx={{ width: "20px" }}
              ></StyledTableCellTitleScore>
            </TableRow>

            <TableRow>
              <StyledTableRowTitle>Tên</StyledTableRowTitle>
              {[
                "15P",
                "1 Tiết",
                "Thi",
                "Trung bình",
                "15P",
                "1 Tiết",
                "Thi",
                "Trung bình",
              ].map((item) => {
                return (
                  <>
                    <StyledTableRowTitle sx={{ width: "100px" }} key={item}>
                      {item}
                    </StyledTableRowTitle>
                  </>
                );
              })}
              <StyledTableRowTitle></StyledTableRowTitle>
            </TableRow>
          </TableHead>

          <TableBody>{tableStudentForm}</TableBody>
        </Box>
      </StyledTableContainer>
    </Container>
  );
};

export default TableClass;
