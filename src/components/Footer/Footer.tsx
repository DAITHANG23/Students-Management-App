"use client";
import { Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  StyledBoxContainer,
  StyledBoxFooterFirst,
  StyledBoxContent,
  StyledTitle,
  StyledTitleName,
  StyledTitleNameGroup,
  StyledBoxLink,
  StyledLinkGroup,
  StyledBoxFooterSecond,
  StyledBoxLinkContact,
} from "@/components/Footer/Footer.styles";

const Footer = () => {
  return (
    <StyledBoxContainer>
      <StyledBoxFooterFirst>
        <StyledBoxContent>
          <Typography>Về xứ đoàn</Typography>
          <StyledTitle>XỨ ĐOÀN MÌNH MÁU THÁNH CHÚA</StyledTitle>
          <StyledTitleName>
            Thiếu nhi Thánh Thể Giáo xứ Tử Đình, Giáo hạt Xóm Mới, Tổng giáo
            phận Sài Gòn
          </StyledTitleName>
        </StyledBoxContent>

        <StyledBoxContent>
          <StyledTitleNameGroup>
            Các cấp tổ chức trực thuộc Xứ đoàn
          </StyledTitleNameGroup>
          <StyledBoxLink>
            <StyledLinkGroup href={"/"}>Ban Chấp Hành</StyledLinkGroup>
            <StyledLinkGroup href={"/"}>Ban Truyền Thông</StyledLinkGroup>
            <StyledLinkGroup href={"/"}>Ban Đọc Sách</StyledLinkGroup>
            <StyledLinkGroup href={"/"}>Ban Lễ sinh</StyledLinkGroup>
            <StyledLinkGroup href={"/"}>Ngành Chiên Con</StyledLinkGroup>
            <StyledLinkGroup href={"/"}>Ngành Ấu nhi</StyledLinkGroup>
            <StyledLinkGroup href={"/"}>Ngành Thiếu nhi</StyledLinkGroup>
            <StyledLinkGroup href={"/"}>Ngành Nghĩa sĩ</StyledLinkGroup>
            <StyledLinkGroup href={"/"}>Dự trưởng</StyledLinkGroup>
            <StyledLinkGroup href={"/"}>Huynh trưởng</StyledLinkGroup>
          </StyledBoxLink>
        </StyledBoxContent>
      </StyledBoxFooterFirst>

      <StyledBoxFooterSecond>
        <Typography>TNTT Gx Tử Đình</Typography>

        <Image
          src="/images/logo.jpg"
          alt="logo"
          width={80}
          height={80}
          style={{ borderRadius: "1000px", border: "none", margin: "10px 0px" }}
        />
        <StyledBoxLinkContact>
          <Link href={"https://www.facebook.com/tnttgxtudinh"} target="_blank">
            <Image
              src="/images/facebook.png"
              alt="facebook"
              width={36}
              height={36}
            />
          </Link>
          <Link href={"/"}>
            <Image
              src="/images/instagram.png"
              alt="instagram"
              width={36}
              height={36}
            />
          </Link>
          <Link href={"https://www.youtube.com/@tnttgxtudinh"} target="_blank">
            <Image
              src="/images/youtube.png"
              alt="youtube"
              width={36}
              height={36}
            />
          </Link>

          <Link href={"/"}>
            <Image
              src="/images/Linkedin.png"
              alt="Linkedin"
              width={36}
              height={36}
            />
          </Link>
        </StyledBoxLinkContact>
      </StyledBoxFooterSecond>
    </StyledBoxContainer>
  );
};

export default Footer;
