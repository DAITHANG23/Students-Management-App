import NewStudent from "@/components/NewStudent/NewStudentMain";
import SideBar from "@/components/SideBar/SideBarMain";
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
