import NewStudent from "@/components/NewStudent/NewStudent";
import SideBar from "@/components/SideBar/SideBar";
import { Box } from "@mui/material";
import React from "react";

const NewStudentPage = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <SideBar />
      <NewStudent />
    </Box>
  );
};

export default NewStudentPage;
