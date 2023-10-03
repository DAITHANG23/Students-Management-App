"use client";
import { useContext, useState } from "react";

import {
  StyledSideBar,
  StyledImage,
  StyledBox,
  StyledImageUser,
  StyledButton,
  StyledButtonUser,
  StyledDirectionIcon,
  StyledTypography,
  StyledDotIcon,
} from "@/components/SideBar/SideBar.styles";
import { useRouter } from "next/navigation";
import { AppContext, AppContextType } from "@/contexts/AppContext";
import { Collapse } from "@mui/material";

const SideBar = () => {
  const { onChoosePage } = useContext(AppContext) as AppContextType;

  const [isChooseChienconPage, setIsChooseChienconPage] =
    useState<boolean>(false);

  const [isChooseAunhiPage, setIsChooseAunhiPage] = useState<boolean>(false);

  const [isChooseThieunhiPage, setIsChooseThieunhiPage] =
    useState<boolean>(false);

  const [isChooseNghiasiPage, setIsChooseNghiasiPage] =
    useState<boolean>(false);

  const [isChooseDutruongPage, setIsChooseDutruongPage] =
    useState<boolean>(false);

  const [open, setOpen] = useState(false);
  const route = useRouter();

  const onClick = () => {
    setOpen(!open);
  };

  const onChooseChienconPage = () => {
    setIsChooseChienconPage(true);

    setIsChooseAunhiPage(false);

    setIsChooseThieunhiPage(false);

    setIsChooseNghiasiPage(false);

    setIsChooseDutruongPage(false);

    setOpen(true);

    route.push("/admin/chiencon");
    onChoosePage("chiencon");
  };

  const onChooseAunhiPage = () => {
    setIsChooseChienconPage(false);

    setIsChooseAunhiPage(true);

    setIsChooseThieunhiPage(false);

    setIsChooseNghiasiPage(false);

    setIsChooseDutruongPage(false);

    setOpen(true);

    route.push("/admin/aunhi");
    onChoosePage("aunhi");
  };

  const onChooseThieunhiPage = () => {
    setIsChooseChienconPage(false);
    setIsChooseThieunhiPage(true);

    setIsChooseAunhiPage(false);

    setIsChooseNghiasiPage(false);

    setIsChooseDutruongPage(false);

    route.push("/admin/thieunhi");
    onChoosePage("thieunhi");
  };

  const onChooseNghiasiPage = () => {
    setIsChooseNghiasiPage(true);

    setIsChooseChienconPage(false);

    setIsChooseAunhiPage(false);

    setIsChooseThieunhiPage(false);

    setIsChooseDutruongPage(false);

    route.push("/admin/nghiasi");
    onChoosePage("nghiasi");
  };

  const onChooseDutruongPage = () => {
    setIsChooseDutruongPage(true);

    setIsChooseChienconPage(false);

    setIsChooseAunhiPage(false);

    setIsChooseNghiasiPage(false);

    setIsChooseThieunhiPage(false);

    route.push("/admin/dutruong");
    onChoosePage("dutruong");
  };

  return (
    <StyledSideBar>
      <StyledBox>
        <StyledButton styleActive={open}>
          <StyledImageUser src="/images/user-1.png" alt="user" />
          <StyledTypography onClick={onClick} aria-label="expand row">
            Thông tin Quản lý
          </StyledTypography>
          {open && <StyledDirectionIcon />}
        </StyledButton>

        <Collapse in={open} timeout="auto" unmountOnExit>
          <StyledButtonUser
            styleActive={isChooseChienconPage}
            onClick={onChooseChienconPage}
          >
            <StyledDotIcon />
            <StyledTypography>Chiên con</StyledTypography>
            {open && <StyledDirectionIcon />}
          </StyledButtonUser>
          <StyledButtonUser
            styleActive={isChooseAunhiPage}
            onClick={onChooseAunhiPage}
          >
            <StyledDotIcon />
            <StyledTypography>Ấu Nhi</StyledTypography>
            {open && <StyledDirectionIcon />}
          </StyledButtonUser>
          <StyledButtonUser
            styleActive={isChooseThieunhiPage}
            onClick={onChooseThieunhiPage}
          >
            <StyledDotIcon />
            <StyledTypography>Thiếu Nhi</StyledTypography>
            {open && <StyledDirectionIcon />}
          </StyledButtonUser>
          <StyledButtonUser
            styleActive={isChooseNghiasiPage}
            onClick={onChooseNghiasiPage}
          >
            <StyledDotIcon />
            <StyledTypography>Nghĩa sĩ</StyledTypography>
            {open && <StyledDirectionIcon />}
          </StyledButtonUser>
          <StyledButtonUser
            styleActive={isChooseDutruongPage}
            onClick={onChooseDutruongPage}
          >
            <StyledDotIcon />
            <StyledTypography>Dự trưởng</StyledTypography>
            {open && <StyledDirectionIcon />}
          </StyledButtonUser>
        </Collapse>
      </StyledBox>
    </StyledSideBar>
  );
};

export default SideBar;
