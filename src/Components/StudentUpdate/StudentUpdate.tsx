import React, { useContext, useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";

import {
  StyledForm,
  StyledContentError,
  StyledBoxDes,
  StyleInputNumberPhone,
  StyledBtnCreate,
  StyledBoxFormDetail,
  StyledFormControl,
  StyledBoxInput,
  StyledBoxButtonForm,
  StyledBoxInputTel,
  StyledTextField,
  StyledTitleForm,
} from "@/components/StudentUpdate/StudentUpdate.styles";
import { Students } from "@/hooks/types";
import { useRouter } from "next/navigation";
import { Box, TextField, Typography } from "@mui/material";

import { AppContext, AppContextType } from "@/contexts/AppContext";

const StudentUpdate = () => {
  const route = useRouter();

  const { studentDetail, onStudentUpdate } = useContext(
    AppContext
  ) as AppContextType;

  const { register, handleSubmit, formState, control } = useForm({
    defaultValues: {
      id: studentDetail?.id,
      saintName: studentDetail?.saintName,
      name: studentDetail?.name,
      lastName: studentDetail?.lastName,
      classItem: studentDetail?.classItem,
      saintNameFather: studentDetail?.saintNameFather,
      nameFather: studentDetail?.nameFather,
      phoneFather: studentDetail?.phoneFather,
      image: studentDetail?.image,
      saintNameMother: studentDetail?.saintNameMother,
      nameMother: studentDetail?.nameMother,
      phoneMother: studentDetail?.phoneMother,
      note: studentDetail?.note,
      placeOfBirth: studentDetail?.placeOfBirth,
      dayOfBirth: studentDetail?.dayOfBirth,
      address: studentDetail?.address,
    },
  });

  const { errors } = formState;

  const onFormSubmitUpdateUserHandle = handleSubmit((data) => {
    const studentId = data.id;
    onStudentUpdate(data, studentId);
    route.push("/admin");
  });

  return (
    <StyledBoxFormDetail>
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
              <StyledContentError>{errors.id?.message}</StyledContentError>
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
              <StyledContentError>{errors.name?.message}</StyledContentError>
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
                label="Address"
                type="text"
                id="address"
                {...register("address", {
                  required: {
                    value: true,
                    message: "Please enter a address.",
                  },
                })}
              />

              <StyledContentError>{errors.address?.message}</StyledContentError>
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
                  helperText={fieldState.invalid ? "Tel is invalid" : ""}
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
                  helperText={fieldState.invalid ? "Tel is invalid" : ""}
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
            <StyledBtnCreate type="submit">Save Changes</StyledBtnCreate>
          </StyledBoxButtonForm>
        </StyledFormControl>
      </StyledForm>
    </StyledBoxFormDetail>
  );
};

export default StudentUpdate;
