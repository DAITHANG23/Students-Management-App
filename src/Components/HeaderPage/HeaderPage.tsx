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
import { useContext, useState } from "react";
import { AppContext, AppContextType } from "@/contexts/AppContext";

const HeaderPage = () => {
  const { imageHeader, titleHeader } = useContext(AppContext) as AppContextType;

  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
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
