"use client";
import { Typography, Popover } from "@mui/material";

import {
  StyledHeaderContainer,
  StyledUserContainer,
  StyledTitle,
  StyledLogin,
  StyledSearch,
  StyledIconGlass,
  StyledButtonBell,
  StyledButtonLogin,
  StyledImgAvatar,
  StyledContainerContent,
  StyledNameLogin,
  StyledRoleLogin,
  StyledExpandMoreIcon,
} from "@/components/HeaderPage/HeaderPage.styles";
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
