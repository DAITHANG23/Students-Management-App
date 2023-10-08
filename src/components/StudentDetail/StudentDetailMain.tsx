"use client";
import { useState } from "react";
import SideBar from "@/components/SideBar/SideBarMain";

import {
  StyledBoxContainer,
  StyledSpan,
  StyledButtonGeneral,
  StyledBoxButton,
  StyledButtonScore,
  StyledTitleBoxDel,
  StyledContainer,
  StyledTitlePage,
  StyledBoxNav,
  StyledLink,
  StyledLinkPage,
  StyledLinkPageExist,
  StyledBoxInfoContainer,
} from "@/components/StudentDetail/StudentDetailItem.styles";

import { useRouter } from "next/navigation";
import { Icon } from "@iconify/react";
import { BsDot } from "react-icons/bs";

import StudentUpdate from "@/components/StudentUpdate/StudentUpdateItem";

import TableScore from "@/components/TableScore/TableScoreMain";

interface StudentDetailProps {
  id: string;
}

type Page = "General" | "Score";

const StudentDetail = ({ id }: StudentDetailProps) => {
  const [chooseGeneralPage, setChooseGeneralPage] = useState(true);

  const [chooseScorePage, setChooseScorePage] = useState(false);

  const route = useRouter();

  const onChoose = (value: Page) => {
    if (value === "General") {
      setChooseGeneralPage(true);
      setChooseScorePage(false);
    }

    if (value === "Score") {
      setChooseGeneralPage(false);
      setChooseScorePage(true);
    }
  };

  return (
    <StyledBoxContainer>
      <SideBar />

      <StyledContainer>
        <StyledTitlePage>Student Detail</StyledTitlePage>
        <StyledBoxNav>
          <StyledLink href={"/admin"}>Admin</StyledLink>
          <BsDot />
          <StyledLinkPage>Student</StyledLinkPage>
          <BsDot />
          <StyledLinkPageExist>Detail</StyledLinkPageExist>
        </StyledBoxNav>

        <StyledBoxButton>
          <StyledButtonGeneral
            onClick={() => onChoose("General")}
            styleactive={chooseGeneralPage}
          >
            <Icon icon="fa-solid:address-card" width={"20px"} height={"20px"} />
            General
          </StyledButtonGeneral>
          <StyledButtonScore
            onClick={() => onChoose("Score")}
            styleactive={chooseScorePage}
          >
            <Icon icon="solar:bill-list-bold" width={"20px"} height={"20px"} />
            Score
          </StyledButtonScore>

          <StyledSpan styleactive={chooseScorePage}></StyledSpan>
        </StyledBoxButton>

        {chooseScorePage && <TableScore />}

        {chooseGeneralPage && (
          <StyledBoxInfoContainer>
            <StudentUpdate id={id} />
          </StyledBoxInfoContainer>
        )}
      </StyledContainer>
    </StyledBoxContainer>
  );
};

export default StudentDetail;
