"use client";
import { useContext, useEffect, useState } from "react";
import { Table, TableRow, TableSortLabel, TableCell, Box } from "@mui/material";
import ApexCharts from "apexcharts";
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
  StyledModal,
  StyledBoxInfo,
  StyledTableCellClass,
} from "@/components/TableStudentsContainer/TableStudentsContainer.styles";

import { useSortingTable } from "@/hooks/useSorting";
import { usePaging } from "@/hooks/usePagination";

import NewStudent from "@/components/NewStudent/NewStudent";
import { AppContext, AppContextType } from "@/contexts/AppContext";

import { Students, Class } from "@/hooks/types";
import { useRouter } from "next/navigation";
import StudentItem from "@/components/StudentItem/StudentItem";
import TableHeader from "../TableHeader/TableHeader";
import { students } from "@/mocks/handler";
import { ApexOptions } from "apexcharts";
import ReactApexChart from "react-apexcharts";
import useQuatityStudents from "@/hooks/useQuatityStudents";
import HeaderPage from "../HeaderPage/HeaderPage";

const TableStudentsContainer = () => {
  //const [studentsList, setStudentsList] = useState<Students[]>([]);

  const [studentClass, setStudentClass] = useState<Students[]>([]);

  const [open, setOpen] = useState(false);

  const router = useRouter();

  const { studentsList, onStudentsList } = useContext(
    AppContext
  ) as AppContextType;

  let studentsListSearch: Students[] = [];

  const [
    quatityNganhThieunhi,
    quatityNganhAunhi,
    quatityNganhNghia,
    quatityNganhChiencon,
    quatityNganhDutruong,
  ] = useQuatityStudents({ students });

  const series = [
    quatityNganhAunhi,
    quatityNganhThieunhi,
    quatityNganhNghia,
    quatityNganhChiencon,
    quatityNganhDutruong,
  ];

  const options: ApexOptions = {
    chart: {
      width: 300,
      type: "donut",
    },
    labels: [
      "Ngành Ấu",
      "Ngành Thiếu",
      "Ngành Nghĩa",
      "Ngành Chiên con",
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

    dataLabels: {
      enabled: true,
      style: { fontSize: "14px" },
    },
    fill: {
      type: "gradient",
      colors: ["#22C55E", "#00B8D9", "#FFAB00", "#FF6699", "#FF3333"],
    },
    legend: {
      markers: {
        fillColors: ["#22C55E", "#00B8D9", "#FFAB00", "#FF6699", "#FF3333"],
      },
    },
    // title: {
    //   text: "Thống kê số lượng thiếu nhi",
    // },

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
    if (studentsList) setStudentClass(studentsList);
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

  const TableListUsers = sortedTableRow(
    studentClass,

    getComparator(oneOderDirection, valueToOrderBy)
  )
    ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
    .map((student) => {
      return <StudentItem {...student} key={student.id} />;
    });

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
        <StyledTableBody>{TableListUsers}</StyledTableBody>
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
