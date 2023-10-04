import HeaderPage from "@/components/HeaderPage/HeaderPage";
import SideBar from "@/components/SideBar/SideBar";
import TableScoreForm from "@/components/TableScoreForm/TableScoreForm";
import { Box } from "@mui/material";
import React from "react";

const AuNhi = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <SideBar />
      <Box sx={{ width: "81%" }}>
        <HeaderPage />
        <TableScoreForm />
      </Box>
    </Box>
  );
};

export default AuNhi;
