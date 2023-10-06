import HeaderPage from "@/components/HeaderPage/HeaderPage";
import SideBar from "@/components/SideBar/SideBar";
import TableClass from "@/components/TableClass/TableClass";
import { Box } from "@mui/material";
import React from "react";

const DuTruong = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <SideBar />
      <Box sx={{ width: "81%" }}>
        <HeaderPage />
        <TableClass />
      </Box>
    </Box>
  );
};

export default DuTruong;
