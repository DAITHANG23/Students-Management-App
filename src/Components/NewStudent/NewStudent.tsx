"use client";
import { useState, useEffect, useContext } from "react";
import { Box, FormControl, FormControlLabel, Radio } from "@mui/material";
import {
  StyledModalHeaderContainer,
  StyledBoxHeader,
  StyledTitleModal,
  StyledButtonClose,
  StyledForm,
  StyledContentError,
  StyledBoxDes,
  StyledInputName,
  StyleInputNumberPhone,
  StyledRadioStatus,
  StyledBoxButtonModal,
  StyledBtnCancel,
  StyledBtnCreate,
} from "@/components/NewStudent/NewStudent.styles";

import { useForm, Controller } from "react-hook-form";

import { AppContext, AppContextType } from "@/contexts/AppContext";
import { Students } from "@/hooks/types";
import { useRouter } from "next/navigation";

const NewStudent = () => {
  // const { mutate: createUser } = useCreateUser();

  const [students, setStudents] = useState<Students[]>([]);

  const route = useRouter();

  //const { UsersData } = useContext(AppContext) as AppContextType;

  const { register, handleSubmit, formState, reset, control } = useForm({
    defaultValues: {
      id: "",
      saintName: "",
      name: "",
      lastName: "",
      classItem: "",
      saintNameFather: "",
      nameFather: "",
      status: "Active",
      phoneFather: "",
      image: "",
      saintNameMother: "",
      nameMother: "",
      phoneMother: "",
      note: "",
      placeOfBirth: "",
      dayOfBirth: "",
    },
  });
  const { errors } = formState;

  // useEffect(() => {
  //   if (UsersData) {
  //     setStudents(UsersData);
  //   }
  // }, [UsersData]);

  const handleClose = () => {
    route.push("/admin");
  };

  const onFormSubmitCreateUserHandle = handleSubmit((userItem) => {
    const day = new Date();

    const id = students.length + 1;

    const newUser = {
      ...userItem,

      id: id,

      date: [
        day.getDate(),

        day.toLocaleString("en-US", { month: "short" }),

        day.toLocaleString("en-US", { year: "2-digit" }),
      ].join(" "),

      time: [
        ("0" + day.getHours()).substr(-2),

        ("0" + day.getMinutes()).substr(-2),
      ].join(":"),
    };

    //createUser(newUser);
    route.push("/admin");
    reset();
  });

  return (
    <StyledModalHeaderContainer>
      <StyledBoxHeader>
        <StyledTitleModal>Create student</StyledTitleModal>
        <StyledButtonClose onClick={handleClose}>x</StyledButtonClose>
      </StyledBoxHeader>
      <StyledForm onSubmit={onFormSubmitCreateUserHandle}>
        <FormControl>
          <Box sx={{ display: "flex", gap: "40px" }}>
            <Box>
              <Box>
                <label htmlFor="id">Mã số</label>
              </Box>
              <StyledInputName
                type="text"
                id="id"
                placeholder="TD00230001"
                {...register("id", {
                  required: {
                    value: true,
                    message: "Please enter a id.",
                  },
                })}
              />
              <StyledContentError>{errors.id?.message}</StyledContentError>
            </Box>
            <Box>
              <Box>
                <label htmlFor="saintName">Tên Thánh</label>
              </Box>

              <StyledInputName
                type="text"
                id="saintName"
                placeholder="Đa Minh"
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
              <Box>
                <label htmlFor="lastName">Họ</label>
              </Box>

              <StyledInputName
                type="text"
                id="lastName"
                placeholder="Nguyễn Đại"
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
              <Box>
                <label htmlFor="name">Tên</label>
              </Box>

              <StyledInputName
                type="text"
                id="name"
                placeholder="Thắng"
                {...register("name", {
                  required: {
                    value: true,
                    message: "Please enter a name.",
                  },
                })}
              />
              <StyledContentError>{errors.name?.message}</StyledContentError>
            </StyledBoxDes>
          </Box>

          <Box sx={{ display: "flex", gap: "40px" }}>
            <StyledBoxDes>
              <label htmlFor="classItem">Lớp</label>
              <StyledInputName
                type="text"
                id="classItem"
                placeholder="Chiên con"
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
              <label htmlFor="avatar">Avatar User</label>
              <StyledInputName
                type="text"
                id="avatar"
                placeholder="avatar.png"
                {...register("image", {
                  required: {
                    value: true,
                    message: "Please enter a avatar.",
                  },
                })}
              />

              <StyledContentError>{errors.image?.message}</StyledContentError>
            </StyledBoxDes>
          </Box>

          <Box sx={{ display: "flex", gap: "40px" }}>
            <StyledBoxDes>
              <Box>
                <label htmlFor="placeOfBirth">Nơi sinh</label>
              </Box>

              <StyledInputName
                type="text"
                id="placeOfBirth"
                placeholder="..."
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
              <Box>
                <label htmlFor="dayOfBirth">Ngày sinh</label>
              </Box>

              <StyledInputName
                type="date"
                id="dayOfBirth"
                placeholder="..."
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
              <Box>
                <label htmlFor="saintNameFather">Tên Thánh cha</label>
              </Box>

              <StyledInputName
                type="text"
                id="saintNameFather"
                placeholder="Đa Minh"
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
              <Box>
                <label htmlFor="nameFather">Họ và tên cha</label>
              </Box>

              <StyledInputName
                type="text"
                id="nameFather"
                placeholder="Nguyễn Văn Hồng"
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

          <StyledBoxDes sx={{ marginTop: "20px", marginLeft: "100px" }}>
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
                  helperText={fieldState.invalid ? "Tel is invalid" : ""}
                  error={fieldState.invalid}
                />
              )}
            />
          </StyledBoxDes>

          <Box sx={{ display: "flex", gap: "40px" }}>
            <StyledBoxDes>
              <Box>
                <label htmlFor="saintNameMother">Tên Thánh mẹ</label>
              </Box>

              <StyledInputName
                type="text"
                id="saintNameMother"
                placeholder="Anna"
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
              <Box>
                <label htmlFor="nameMother">Họ và tên mẹ</label>
              </Box>

              <StyledInputName
                type="text"
                id="nameMother"
                placeholder="Nguyễn Thị Nguyệt"
                {...register("nameMother", {
                  required: {
                    value: true,
                    message: "Please enter a  name mother.",
                  },
                })}
              />

              <StyledContentError>
                {errors.nameMother?.message}
              </StyledContentError>
            </StyledBoxDes>
          </Box>

          <StyledBoxDes sx={{ marginTop: "20px", marginLeft: "100px" }}>
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
                  helperText={fieldState.invalid ? "Tel is invalid" : ""}
                  error={fieldState.invalid}
                />
              )}
            />
          </StyledBoxDes>

          <StyledBoxDes>
            <Box>
              <label htmlFor="note">Ghi chú</label>
            </Box>

            <StyledInputName
              sx={{
                width: "100%",
                height: "100px",
                borderRadius: "16px",
                textAlign: "start",
              }}
              type="text"
              id="note"
              placeholder="..."
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

          <StyledBoxButtonModal>
            <StyledBtnCancel onClick={handleClose}>CANCEL</StyledBtnCancel>
            <StyledBtnCreate type="submit">CREATE</StyledBtnCreate>
          </StyledBoxButtonModal>
        </FormControl>
      </StyledForm>
    </StyledModalHeaderContainer>
  );
};

export default NewStudent;
