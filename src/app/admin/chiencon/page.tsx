import HeaderPage from "@/components/HeaderPage/HeaderPage";
import SideBar from "@/components/SideBar/SideBar";
import { Box } from "@mui/material";
import React from "react";

const ChienconPage = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <SideBar />
      <Box sx={{ width: "81%" }}>
        <HeaderPage />
      </Box>
    </Box>
  );
};

export default ChienconPage;