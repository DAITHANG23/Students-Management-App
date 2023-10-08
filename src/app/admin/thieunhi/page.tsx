import HeaderPage from "@/components/HeaderPage/HeaderPageMain";
import SideBar from "@/components/SideBar/SideBarMain";
import TableClass from "@/components/TableClass/TableClassMain";
import { Box } from "@mui/material";
import React from "react";

const ThieuNhi = () => {
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

export default ThieuNhi;
