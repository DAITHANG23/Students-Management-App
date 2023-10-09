"use client";
import { useContext, useEffect, useState } from "react";
import { Table, TableRow, TableSortLabel, TableCell, Box } from "@mui/material";

import {
  StyledTitleRow,
  StyledTableBody,
  StyledTableHead,
  StyledTableContainer,
  StyledTitleRowName,
  StyledTitleRowStatus,
  StyledTablePagination,
  StyledButton,
  StyledBoxButton,
  StyledBoxInfo,
  StyledTableCellClass,
} from "@/components/TableStudentsContainer/TableStudentsContainerItem.styles";
import dynamic from "next/dynamic";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

import { ApexOptions } from "apexcharts";
//import ReactApexChart from "react-apexcharts";
import { useSortingTable } from "@/hooks/useSorting";
import { usePaging } from "@/hooks/usePagination";

import { AppContext, AppContextType } from "@/contexts/AppContext";

import { Students, Class } from "@/hooks/types";
import { useRouter } from "next/navigation";
import StudentItem from "@/components/StudentItem/StudentItemMain";
import TableHeader from "@/components/TableHeader/TableHeaderMain";

import useQuantityStudents from "@/hooks/useQuantityStudents";
import HeaderPage from "@/components/HeaderPage/HeaderPageMain";

const TableStudentsContainer = () => {
  const [studentClass, setStudentClass] = useState<Students[]>([]);

  const [open, setOpen] = useState(false);

  const router = useRouter();

  const { studentsList, onStudentsList } = useContext(
    AppContext
  ) as AppContextType;

  let studentsListSearch: Students[] = [];

  const [
    quantityNganhChiencon,
    quantityNganhAunhi,
    quantityNganhThieunhi,
    quantityNganhNghia,
    quantityNganhDutruong,
  ] = useQuantityStudents({ studentsList });

  const series = [
    quantityNganhChiencon,
    quantityNganhAunhi,
    quantityNganhThieunhi,
    quantityNganhNghia,
    quantityNganhDutruong,
  ];

  const options: ApexOptions = {
    chart: {
      width: 300,
      type: "donut",
    },

    labels: [
      "Ngành Chiên con",
      "Ngành Ấu",
      "Ngành Thiếu",
      "Ngành Nghĩa",
      "Ngành Dự trưởng",
    ],

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
              fontSize: "16px",
              color: "#f90000",
              fontWeight: "600",
            },
          },
        },
      },
    },
    colors: ["#FF6699", "#22C55E", "#00B8D9", "#FFAB00", "#FF3333"],

    tooltip: {
      fillSeriesColor: false,
      theme: "",
    },

    dataLabels: {
      enabled: true,
      style: { fontSize: "14px" },
    },
    fill: {
      type: "gradient",
      colors: ["#FF6699", "#22C55E", "#00B8D9", "#FFAB00", "#FF3333"],
    },
    legend: {
      markers: {
        fillColors: ["#FF6699", "#22C55E", "#00B8D9", "#FFAB00", "#FF3333"],
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

  useEffect(() => {
    if (studentsList) {
      setStudentClass(studentsList);
    }
  }, [studentsList]);

  // Paging Table

  const [page, rowsPerPage, handleChangePage, handleChangeRowsPerPage] =
    usePaging();

  //Sorting Table

  const [
    createSortHandle,
    sortedTableRow,
    getComparator,
    oneOderDirection,
    valueToOrderBy,
  ] = useSortingTable();

  // Modal create student

  const onOpenModal = () => {
    setOpen(true);

    router.push("/admin/newstudent");
  };

  const onSearch = (value: string) => {
    if (value === null) {
      studentsListSearch = studentsList;
    }

    if (value) {
      const filteredUsersList = studentsList?.filter((student) => {
        const searchableText = `${student.name} ${student.classItem} ${student.id}`;
        return searchableText.toLowerCase().includes(value.toLowerCase());
      });

      studentsListSearch = filteredUsersList;
    }

    return setStudentClass(studentsListSearch);
  };

  const onSelectClass = (value: Class | "") => {
    const listUsers = studentsList?.filter((student) => {
      return student.classItem === value;
    });

    setStudentClass(listUsers);

    if (value === "All") {
      setStudentClass(studentsList);
    }
  };

  // const TableListUsers = sortedTableRow(
  //   studentClass,

  //   getComparator(oneOderDirection, valueToOrderBy)
  // )
  //   ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
  //   .map((student) => {
  //     return <StudentItem {...student} key={student.id} />;
  //   });

  return (
    <StyledTableContainer>
      <HeaderPage />
      <StyledBoxInfo>
        <Box>
          <ReactApexChart
            options={options}
            series={series}
            type="donut"
            width={380}
          />
        </Box>

        <StyledBoxButton>
          <StyledButton onClick={onOpenModal}>Create Student</StyledButton>
        </StyledBoxButton>
      </StyledBoxInfo>

      <TableHeader onSelectClass={onSelectClass} onSearch={onSearch} />
      <Table>
        <StyledTableHead>
          <TableRow>
            <TableCell onClick={() => createSortHandle("id")}>
              <TableSortLabel>ID</TableSortLabel>
            </TableCell>
            <StyledTitleRowName onClick={() => createSortHandle("name")}>
              <TableSortLabel>Student</TableSortLabel>
            </StyledTitleRowName>

            <StyledTableCellClass onClick={() => createSortHandle("classItem")}>
              <TableSortLabel>Class</TableSortLabel>
            </StyledTableCellClass>
            <StyledTitleRow>Phone Parent</StyledTitleRow>

            <StyledTitleRowStatus>Address</StyledTitleRowStatus>
            <StyledTitleRow>Last active</StyledTitleRow>
            <StyledTitleRow sx={{ width: "32px" }}></StyledTitleRow>
          </TableRow>
        </StyledTableHead>
        <StyledTableBody>
          {studentClass &&
            sortedTableRow(
              studentClass,

              getComparator(oneOderDirection, valueToOrderBy)
            )
              ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((student) => {
                return <StudentItem {...student} key={student.id} />;
              })}
        </StyledTableBody>
      </Table>
      <StyledTablePagination
        rowsPerPageOptions={[5, 10, 20]}
        count={studentClass?.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        labelRowsPerPage="Show"
        labelDisplayedRows={({ from, to, count }) =>
          `From ${from}-${to} of  ${count} items`
        }
      />
    </StyledTableContainer>
  );
};

export default TableStudentsContainer;
