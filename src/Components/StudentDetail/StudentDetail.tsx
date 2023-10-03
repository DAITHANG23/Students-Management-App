"use client";
import { useContext, useEffect, useState } from "react";
import SideBar from "@/components/SideBar/SideBar";
import { Box, Typography, TextField, Input } from "@mui/material";

import {
  StyledModal,
  StyledBoxModal,
} from "@/components/StudentDetail/StudentDetail.styles";

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
  StyledBoxAvatarContainer,
  StyledBoxAvatar,
  StyledAvatar,
  StyledSpanAvatar,
  StyledButtonDelAvatar,
  StyledButtonCancel,
  StyledButtonDelete,
  StyledBoxButtonDelete,
  StyledLabel,
  StyledInputUpdate,
  StyledBoxImageContainer,
  StyledImage,
  StyledBoxIcon,
  StyledTitleIcon,
} from "@/components/StudentDetail/StudentDetail.styles";
import { Students } from "@/hooks/types";
import { useRouter } from "next/navigation";
import { Icon } from "@iconify/react";
import { BsDot } from "react-icons/bs";

import StudentUpdate from "../StudentUpdate/StudentUpdate";
import { AppContext, AppContextType } from "@/contexts/AppContext";
import TableScore from "../TableScore/TableScore";

interface StudentDetailProps {
  id: string;
}

type Page = "General" | "Score";

const StudentDetail = ({ id }: StudentDetailProps) => {
  const [isDeleting, setIsDeleting] = useState(false);

  const [chooseGeneralPage, setChooseGeneralPage] = useState(true);

  const [chooseScorePage, setChooseScorePage] = useState(false);

  const [isLoadingDeletion, setIsLoadingDeletion] = useState(false);

  const { studentDetail, onRemoveStudent } = useContext(
    AppContext
  ) as AppContextType;

  const route = useRouter();

  const onRemoveStudentItem = () => {
    setIsDeleting(true);
  };

  const handleDelete = (id: string) => {
    onRemoveStudent(id);
    setIsLoadingDeletion(true);
    route.push("/admin");
  };

  const handleStopDelete = () => {
    setIsDeleting(false);
  };

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
      {isDeleting && (
        <StyledModal
          open={isDeleting}
          onClose={handleStopDelete}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <StyledBoxModal>
            <StyledTitleBoxDel>Are you sure?</StyledTitleBoxDel>
            <Typography>
              Do you really want to delete this student? This action cannot be
              undone.
            </Typography>
            <StyledBoxButtonDelete sx={{ textAlign: "end" }}>
              {isLoadingDeletion && <p>Deleting, please wait...</p>}
              {!isLoadingDeletion && (
                <>
                  <StyledButtonCancel onClick={handleStopDelete}>
                    Cancel
                  </StyledButtonCancel>
                  <StyledButtonDelete onClick={() => handleDelete(id)}>
                    Delete
                  </StyledButtonDelete>
                </>
              )}
            </StyledBoxButtonDelete>
          </StyledBoxModal>
        </StyledModal>
      )}

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
            <StyledBoxAvatarContainer>
              <StyledBoxAvatar>
                <StyledLabel>
                  <StyledInputUpdate type="file" />
                  <StyledBoxImageContainer>
                    <StyledImage>
                      <StyledAvatar src={studentDetail?.image} />
                    </StyledImage>

                    <StyledBoxIcon>
                      <Icon
                        icon="material-symbols:add-a-photo"
                        color="white"
                        width={"32px"}
                        height={"32px"}
                      />
                      <StyledTitleIcon>Photo Update</StyledTitleIcon>
                    </StyledBoxIcon>
                  </StyledBoxImageContainer>
                </StyledLabel>
              </StyledBoxAvatar>
              <StyledSpanAvatar>
                Allowed *.jpeg, *.jpg, *.png, *.gif
                <br />
                max size of 3.1MB
              </StyledSpanAvatar>

              <StyledButtonDelAvatar onClick={onRemoveStudentItem}>
                Delete Student
              </StyledButtonDelAvatar>
            </StyledBoxAvatarContainer>

            <StudentUpdate />
          </StyledBoxInfoContainer>
        )}
      </StyledContainer>
    </StyledBoxContainer>
  );
};

export default StudentDetail;
