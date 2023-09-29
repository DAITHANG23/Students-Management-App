"use client";
import { useState } from "react";
import SideBar from "../SideBar/SideBar";
import {
  Avatar,
  Box,
  Button,
  Container,
  Typography,
  FormControl,
  TextField,
} from "@mui/material";

import {
  StyledModal,
  StyledBoxModal,
} from "@/components/StudentDetail/StudentDetail.styles";
import { useForm, Controller } from "react-hook-form";

import {
  StyledForm,
  StyledContentError,
  StyledBoxDes,
  StyleInputNumberPhone,
  StyledBoxButtonModal,
  StyledBtnCreate,
} from "@/components/StudentDetail/StudentDetail.styles";
import { Students } from "@/hooks/types";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { BsDot } from "react-icons/bs";

interface StudentDetailProps {
  id: string;
}

const StudentDetail = ({ id }: StudentDetailProps) => {
  const [isDeleting, setIsDeleting] = useState(false);
  const [isChoosePage, setIsChoosePage] = useState(false);
  const route = useRouter();

  const [studentDetail, setStudentDetail] = useState<Students>({
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
  });

  const onRemoveStudent = (id: string) => {
    setIsDeleting(true);
  };

  const handleStopDelete = () => {
    setIsDeleting(false);
  };

  const { register, handleSubmit, formState, reset, control } = useForm({
    defaultValues: {
      id: studentDetail.id,
      saintName: studentDetail.saintName,
      name: studentDetail.name,
      lastName: studentDetail.lastName,
      classItem: studentDetail.classItem,
      saintNameFather: studentDetail.saintNameFather,
      nameFather: studentDetail.nameFather,
      phoneFather: studentDetail.phoneFather,
      image: studentDetail.image,
      saintNameMother: studentDetail.saintNameMother,
      nameMother: studentDetail.nameMother,
      phoneMother: studentDetail.phoneMother,
      note: studentDetail.note,
      placeOfBirth: studentDetail.placeOfBirth,
      dayOfBirth: studentDetail.dayOfBirth,
    },
  });

  const { errors } = formState;

  const onFormSubmitUpdateUserHandle = handleSubmit((data) => {
    route.push("/admin");
  });

  const onChoose = () => {
    setIsChoosePage(!isChoosePage);
  };

  return (
    <Box sx={{ display: "flex" }}>
      {isDeleting && (
        <StyledModal
          open={isDeleting}
          onClose={handleStopDelete}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <StyledBoxModal>
            <Typography sx={{ fontSize: "24px" }}>Are you sure?</Typography>
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
      <Container sx={{ width: "81%" }}>
        <Typography
          sx={{
            fontSize: "24px",
            margin: "20px 0px 8px 0px",
            lineHeight: 1.5,
            fontFamily: "Public Sans, sans-serif",
            fontWeight: 700,
          }}
        >
          Student Detail
        </Typography>
        <Box sx={{ display: "flex", gap: "8px", alignItems: "center" }}>
          <Link
            href={"/admin"}
            style={{
              textDecoration: "none",
              fontSize: "14px",
              color: "#121212",
            }}
          >
            Admin
          </Link>
          <BsDot />
          <Typography sx={{ fontSize: "14px", color: "#121212" }}>
            Student
          </Typography>
          <BsDot />
          <Typography sx={{ fontSize: "14px", color: "#94999C" }}>
            Detail
          </Typography>
        </Box>

        <Box sx={{ marginTop: "40px", display: "flex", gap: "15px" }}>
          <Button
            sx={{
              color: "#121212",
              textTransform: "none",
            }}
            onClick={onChoose}
          >
            General
          </Button>
          <Button onClick={onChoose}>Score</Button>
        </Box>
        {isChoosePage && <Box>Score</Box>}
        {!isChoosePage && (
          <Box sx={{ display: "flex", gap: "20px", marginTop: "40px" }}>
            <Box
              sx={{
                width: "31.5%",
                height: "462px",
                backgroundColor: "rgb(255, 255, 255)",
                color: "rgb(33, 43, 54)",
                transition: "boxShadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
                backgroundImage: " none",
                overflow: "hidden",
                position: "relative",
                boxShadow: "rgba(145, 158, 171, 0.16) 0px 4px 8px 0px",
                borderRadius: "16px",
                zIndex: 0,
                padding: "80px 24px 40px",
                textAlign: "center",
              }}
            >
              <Box
                sx={{
                  textAlign: "center",
                  width: "144px",
                  height: "144px",
                  marginLeft: "25%",
                }}
              >
                <Avatar
                  src={`/images/avatar_2.jpg`}
                  sx={{ width: "100%", height: "100%" }}
                />
              </Box>
              <span
                style={{
                  margin: "24px auto 0px",
                  lineHeight: "1.5",
                  fontSize: "0.75rem",

                  fontWeight: 400,
                  color: "rgb(145, 158, 171)",
                  display: "block",
                  textAlign: "center",
                }}
              >
                Allowed *.jpeg, *.jpg, *.png, *.gif
                <br />
                max size of 3.1MB
              </span>

              <Button
                sx={{
                  padding: "6px 12px",
                  border: "none",
                  borderRadius: "8px",
                  margin: "50px 0 0",
                  fontWeight: "700",
                  fontSize: "14px",
                  color: "rgb(183, 29, 24)",
                  backgroundColor: "rgba(255, 86, 48, 0.16)",

                  "&:hover": {
                    backgroundColor: "rgba(255,86, 48, 0.29)",
                  },
                }}
                onClick={() => onRemoveStudent(id)}
              >
                Delete Student
              </Button>
            </Box>
            <Box
              sx={{
                width: "69.5%",
                height: "800px",
                backgroundColor: "rgb(255, 255, 255)",
                color: "rgb(33, 43, 54)",
                transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
                backgroundImage: "none",
                overflow: "hidden",
                position: "relative",
                boxShadow: "rgba(145, 158, 171, 0.16) 0px 4px 8px 0px",
                borderRadius: "16px",
                zIndex: 0,
                padding: "24px",
              }}
            >
              <StyledForm onSubmit={onFormSubmitUpdateUserHandle}>
                <FormControl sx={{ width: "100%" }}>
                  <Box sx={{ display: "flex", gap: "40px" }}>
                    <Box>
                      <TextField
                        required
                        label="Mã số"
                        type="text"
                        id="id"
                        sx={{ width: "315px" }}
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
                      <TextField
                        required
                        label="Tên thánh"
                        type="text"
                        id="saintName"
                        sx={{ width: "315px" }}
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
                  </Box>

                  <Box sx={{ display: "flex", gap: "40px" }}>
                    <StyledBoxDes>
                      <TextField
                        required
                        label="Họ"
                        type="text"
                        id="lastName"
                        sx={{ width: "315px" }}
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
                      <TextField
                        required
                        label="Tên"
                        type="text"
                        id="name"
                        sx={{ width: "315px" }}
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
                  </Box>

                  <Box sx={{ display: "flex", gap: "40px" }}>
                    <StyledBoxDes>
                      <TextField
                        required
                        label="Lớp"
                        type="text"
                        id="classItem"
                        sx={{ width: "315px" }}
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
                      <TextField
                        required
                        label="Avatar"
                        type="text"
                        id="avatar"
                        sx={{ width: "315px" }}
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
                  </Box>

                  <Box sx={{ display: "flex", gap: "40px" }}>
                    <StyledBoxDes>
                      <TextField
                        required
                        label="Nơi sinh"
                        type="text"
                        id="placeOfBirth"
                        sx={{ width: "315px" }}
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
                      <TextField
                        required
                        type="date"
                        id="dayOfBirth"
                        sx={{ width: "315px" }}
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
                  </Box>

                  <Box sx={{ display: "flex", gap: "40px" }}>
                    <StyledBoxDes>
                      <TextField
                        required
                        label="Tên Thánh của cha"
                        type="text"
                        id="saintNameFather"
                        sx={{ width: "315px" }}
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
                      <TextField
                        required
                        label="Họ tên cha"
                        type="text"
                        id="nameFather"
                        sx={{ width: "315px" }}
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
                  </Box>

                  <StyledBoxDes sx={{ marginTop: "20px", marginLeft: "20%" }}>
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
                  </StyledBoxDes>

                  <Box sx={{ display: "flex", gap: "40px" }}>
                    <StyledBoxDes>
                      <TextField
                        required
                        label="Tên Thánh của mẹ"
                        type="text"
                        id="saintNameMother"
                        sx={{ width: "315px" }}
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
                      <TextField
                        required
                        label="Họ tên mẹ"
                        type="text"
                        id="nameMother"
                        sx={{ width: "315px" }}
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
                  </Box>

                  <StyledBoxDes sx={{ marginTop: "20px", marginLeft: "20%" }}>
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
                  </StyledBoxDes>

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

                  <Box
                    sx={{
                      textAlign: "end",
                    }}
                  >
                    <StyledBtnCreate type="submit">
                      Save Changes
                    </StyledBtnCreate>
                  </Box>
                </FormControl>
              </StyledForm>
            </Box>
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default StudentDetail;
