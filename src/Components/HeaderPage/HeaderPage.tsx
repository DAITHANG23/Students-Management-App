"use client";

import {
  StyledHeaderContainer,
  StyledUserContainer,
  StyledTitle,
} from "@/components/HeaderPage/HeaderPageItem.styles";
import { useContext } from "react";
import { AppContext, AppContextType } from "@/contexts/AppContext";

const HeaderPage = () => {
  const { imageHeader, titleHeader } = useContext(AppContext) as AppContextType;

  return (
    <StyledHeaderContainer>
      <StyledUserContainer>
        <img src={imageHeader} alt="user" width={"36px"} height={"36px"} />
        <StyledTitle>{titleHeader}</StyledTitle>
      </StyledUserContainer>
    </StyledHeaderContainer>
  );
};

export default HeaderPage;
