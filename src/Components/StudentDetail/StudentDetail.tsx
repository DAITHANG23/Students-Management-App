"use client";
import { useContext, useEffect, useState } from "react";
import SideBar from "../SideBar/SideBar";
import { Box, Typography, TextField } from "@mui/material";

import {
  StyledModal,
  StyledBoxModal,
} from "@/components/StudentDetail/StudentDetail.styles";
import { useForm, Controller } from "react-hook-form";

import {
  StyledBoxContainer,
  StyledForm,
  StyledContentError,
  StyledBoxDes,
  StyleInputNumberPhone,
  StyledBoxButtonModal,
  StyledBtnCreate,
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
  StyledBoxFormDetail,
  StyledFormControl,
  StyledBoxInput,
  StyledBoxButtonForm,
  StyledBoxInputTel,
  StyledTextField,
} from "@/components/StudentDetail/StudentDetail.styles";
import { Students } from "@/hooks/types";
import { useRouter } from "next/navigation";

import { BsDot } from "react-icons/bs";
import { Icon } from "@iconify/react";
import StudentUpdate from "../StudentUpdate/StudentUpdate";
import { AppContext, AppContextType } from "@/contexts/AppContext";

interface StudentDetailProps {
  id: string;
}

type Page = "General" | "Score";

const StudentDetail = ({ id }: StudentDetailProps) => {
  const [isDeleting, setIsDeleting] = useState(false);

  const [chooseGeneralPage, setChooseGeneralPage] = useState(true);

  const [chooseScorePage, setChooseScorePage] = useState(false);

  const { onStudentDetail } = useContext(AppContext) as AppContextType;

  const route = useRouter();

  const studentDetail: Students = {
    id: "TD00230012",
    name: "Nam",
    lastName: "Nguyễn Đại ",
    saintName: "Đaminh",
    placeOfBirth: "HCM",
    dayOfBirth: "1997-06-23",
    image: "/images/avatar_4.jpg",
    saintNameFather: "Đaminh",
    nameFather: "Nguyễn Văn Hồng",
    phoneFather: "0772757220",
    saintNameMother: "Anna",
    nameMother: "Nguyễn Thị Nguyệt",
    phoneMother: "0772757335",
    address: "778/22/22, Thong Nhat, p.15, Go Vap, TpHCM",
    note: "Good",
    classItem: "Ấu 3B",
  };

  // useEffect(() => {
  //   if (studentDetail) {
  //     onStudentDetail(studentDetail);
  //   }
  // }, [onStudentDetail]);

  const onRemoveStudent = (id: string) => {
    setIsDeleting(true);
  };

  const handleStopDelete = () => {
    setIsDeleting(false);
  };

  // const { register, handleSubmit, formState, control } = useForm({
  //   defaultValues: {
  //     id: studentDetail.id,
  //     saintName: studentDetail.saintName,
  //     name: studentDetail.name,
  //     lastName: studentDetail.lastName,
  //     classItem: studentDetail.classItem,
  //     saintNameFather: studentDetail.saintNameFather,
  //     nameFather: studentDetail.nameFather,
  //     phoneFather: studentDetail.phoneFather,
  //     image: studentDetail.image,
  //     saintNameMother: studentDetail.saintNameMother,
  //     nameMother: studentDetail.nameMother,
  //     phoneMother: studentDetail.phoneMother,
  //     note: studentDetail.note,
  //     placeOfBirth: studentDetail.placeOfBirth,
  //     dayOfBirth: studentDetail.dayOfBirth,
  //   },
  // });

  // const { errors } = formState;

  // const onFormSubmitUpdateUserHandle = handleSubmit((data) => {
  //   route.push("/admin");
  // });

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
              Do you really want to delete this event? This action cannot be
              undone.
            </Typography>
            {/* <StyledBoxButton>
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
            </StyledBoxButton> */}
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

        {chooseScorePage && <Box>Score</Box>}

        {chooseGeneralPage && (
          <StyledBoxInfoContainer>
            <StyledBoxAvatarContainer>
              <StyledBoxAvatar>
                <StyledAvatar src={`/images/avatar_2.jpg`} />
              </StyledBoxAvatar>
              <StyledSpanAvatar>
                Allowed *.jpeg, *.jpg, *.png, *.gif
                <br />
                max size of 3.1MB
              </StyledSpanAvatar>

              <StyledButtonDelAvatar onClick={() => onRemoveStudent(id)}>
                Delete Student
              </StyledButtonDelAvatar>
            </StyledBoxAvatarContainer>

            <StudentUpdate />

            {/* <StyledBoxFormDetail>
              <StyledForm onSubmit={onFormSubmitUpdateUserHandle}>
                <StyledFormControl>
                  <StyledBoxInput>
                    <Box>
                      <StyledTextField
                        required
                        label="Mã số"
                        type="text"
                        id="id"
                        {...register("id", {
                          required: {
                            value: true,
                            message: "Please enter a id.",
                          },
                        })}
                      />
                      <StyledContentError>
                        {errors.id?.message}
                      </StyledContentError>
                    </Box>
                    <Box>
                      <StyledTextField
                        required
                        label="Tên thánh"
                        type="text"
                        id="saintName"
                        {...register("saintName", {
                          required: {
                            value: true,
                            message: "Please enter a saint name.",
                          },
                        })}
                      />
                      <StyledContentError>
                        {errors.saintName?.message}
                      </StyledContentError>
                    </Box>
                  </StyledBoxInput>

                  <StyledBoxInput>
                    <StyledBoxDes>
                      <StyledTextField
                        required
                        label="Họ"
                        type="text"
                        id="lastName"
                        {...register("lastName", {
                          required: {
                            value: true,
                            message: "Please enter a last name.",
                          },
                        })}
                      />
                      <StyledContentError>
                        {errors.lastName?.message}
                      </StyledContentError>
                    </StyledBoxDes>

                    <StyledBoxDes>
                      <StyledTextField
                        required
                        label="Tên"
                        type="text"
                        id="name"
                        {...register("name", {
                          required: {
                            value: true,
                            message: "Please enter a name.",
                          },
                        })}
                      />
                      <StyledContentError>
                        {errors.name?.message}
                      </StyledContentError>
                    </StyledBoxDes>
                  </StyledBoxInput>

                  <StyledBoxInput>
                    <StyledBoxDes>
                      <StyledTextField
                        required
                        label="Lớp"
                        type="text"
                        id="classItem"
                        {...register("classItem", {
                          required: {
                            value: true,
                            message: "Please enter a class.",
                          },
                        })}
                      />

                      <StyledContentError>
                        {errors.classItem?.message}
                      </StyledContentError>
                    </StyledBoxDes>

                    <StyledBoxDes>
                      <StyledTextField
                        required
                        label="Avatar"
                        type="text"
                        id="avatar"
                        {...register("image", {
                          required: {
                            value: true,
                            message: "Please enter a avatar.",
                          },
                        })}
                      />

                      <StyledContentError>
                        {errors.image?.message}
                      </StyledContentError>
                    </StyledBoxDes>
                  </StyledBoxInput>

                  <StyledBoxInput>
                    <StyledBoxDes>
                      <StyledTextField
                        required
                        label="Nơi sinh"
                        type="text"
                        id="placeOfBirth"
                        {...register("placeOfBirth", {
                          required: {
                            value: true,
                            message: "Please enter a  place of birth.",
                          },
                        })}
                      />

                      <StyledContentError>
                        {errors.nameMother?.message}
                      </StyledContentError>
                    </StyledBoxDes>

                    <StyledBoxDes>
                      <StyledTextField
                        required
                        type="date"
                        id="dayOfBirth"
                        {...register("dayOfBirth", {
                          required: {
                            value: true,
                            message: "Please enter a  place of birth.",
                          },
                        })}
                      />

                      <StyledContentError>
                        {errors.nameMother?.message}
                      </StyledContentError>
                    </StyledBoxDes>
                  </StyledBoxInput>

                  <StyledBoxInput>
                    <StyledBoxDes>
                      <StyledTextField
                        required
                        label="Tên Thánh của cha"
                        type="text"
                        id="saintNameFather"
                        {...register("saintNameFather", {
                          required: {
                            value: true,
                            message: "Please enter a saint name father.",
                          },
                        })}
                      />
                      <StyledContentError>
                        {errors.saintNameFather?.message}
                      </StyledContentError>
                    </StyledBoxDes>

                    <StyledBoxDes>
                      <StyledTextField
                        required
                        label="Họ tên cha"
                        type="text"
                        id="nameFather"
                        {...register("nameFather", {
                          required: {
                            value: true,
                            message: "Please enter a  name father.",
                          },
                        })}
                      />
                      <StyledContentError>
                        {errors.nameFather?.message}
                      </StyledContentError>
                    </StyledBoxDes>
                  </StyledBoxInput>

                  <StyledBoxInputTel>
                    <label htmlFor="phoneFather">Sđt Cha *</label>
                    <Controller
                      name="phoneFather"
                      control={control}
                      rules={{
                        required: true,
                      }}
                      render={({ field, fieldState }) => (
                        <StyleInputNumberPhone
                          {...field}
                          defaultCountry={"VN"}
                          helperText={
                            fieldState.invalid ? "Tel is invalid" : ""
                          }
                          error={fieldState.invalid}
                        />
                      )}
                    />
                  </StyledBoxInputTel>

                  <StyledBoxInput>
                    <StyledBoxDes>
                      <StyledTextField
                        required
                        label="Tên Thánh của mẹ"
                        type="text"
                        id="saintNameMother"
                        {...register("saintNameMother", {
                          required: {
                            value: true,
                            message: "Please enter a saint name mother.",
                          },
                        })}
                      />
                      <StyledContentError>
                        {errors.saintNameMother?.message}
                      </StyledContentError>
                    </StyledBoxDes>

                    <StyledBoxDes>
                      <StyledTextField
                        required
                        label="Họ tên mẹ"
                        type="text"
                        id="nameMother"
                        {...register("nameMother", {
                          required: {
                            value: true,
                            message: "Please enter a name mother.",
                          },
                        })}
                      />

                      <StyledContentError>
                        {errors.nameMother?.message}
                      </StyledContentError>
                    </StyledBoxDes>
                  </StyledBoxInput>

                  <StyledBoxInputTel>
                    <label htmlFor="phoneMother">Sđt Mẹ *</label>
                    <Controller
                      name="phoneMother"
                      control={control}
                      rules={{
                        required: true,
                      }}
                      render={({ field, fieldState }) => (
                        <StyleInputNumberPhone
                          {...field}
                          defaultCountry={"VN"}
                          helperText={
                            fieldState.invalid ? "Tel is invalid" : ""
                          }
                          error={fieldState.invalid}
                        />
                      )}
                    />
                  </StyledBoxInputTel>

                  <StyledBoxDes>
                    <TextField
                      required
                      label="Ghi chú"
                      fullWidth
                      rows={4}
                      type="text"
                      id="note"
                      {...register("note", {
                        required: {
                          value: true,
                          message: "Please enter a note.",
                        },
                      })}
                    />

                    <StyledContentError>
                      {errors.nameMother?.message}
                    </StyledContentError>
                  </StyledBoxDes>

                  <StyledBoxButtonForm>
                    <StyledBtnCreate type="submit">
                      Save Changes
                    </StyledBtnCreate>
                  </StyledBoxButtonForm>
                </StyledFormControl>
              </StyledForm>
            </StyledBoxFormDetail> */}
          </StyledBoxInfoContainer>
        )}
      </StyledContainer>
    </StyledBoxContainer>
  );
};

export default StudentDetail;
