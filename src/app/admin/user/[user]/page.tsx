import HeaderPage from "@/components/HeaderPage/HeaderPageMain";
import SideBar from "@/components/SideBar/SideBarMain";
import User from "@/components/User/UserMain";
import { Box } from "@mui/material";
import React from "react";

const UserItemPage = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <SideBar />
      <Box sx={{ width: "81%", paddingBottom: "100px" }}>
        <HeaderPage />
        <User />
      </Box>
    </Box>
  );
};

export default UserItemPage;
