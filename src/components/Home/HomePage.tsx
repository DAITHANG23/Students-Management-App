import React from "react";
import SlideBar from "@/components/SlideBar/SlideBarHome";
import { Container } from "@mui/material";

const HomePage = () => {
  return (
    <>
      <Container fixed>
        <SlideBar />
      </Container>
    </>
  );
};

export default HomePage;
