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
  StyledBoxAvatarContainer,
  StyledBoxAvatar,
  StyledLabel,
  StyledInputUpdate,
  StyledBoxImageContainer,
  StyledImage,
  StyledBoxIcon,
  StyledAvatar,
  StyledTitleIcon,
  StyledSpanAvatar,
  StyledButtonDelAvatar,
  StyledModal,
  StyledBoxModal,
  StyledTitleBoxDel,
  StyledBoxButtonDelete,
  StyledButtonCancel,
  StyledButtonDelete,
  StyledBoxFormUpdate,
} from "@/components/StudentUpdate/StudentUpdateMain.styles";

import { useRouter } from "next/navigation";
import { Box, TextField, Typography } from "@mui/material";
import { Icon } from "@iconify/react";
import { AppContext, AppContextType } from "@/contexts/AppContext";
import { VariantType, useSnackbar } from "notistack";

interface StudentUpdateProps {
  id: string;
}

const StudentUpdate = ({ id }: StudentUpdateProps) => {
  const route = useRouter();

  const [selectedImage, setSelectedImage] = useState("");

  const [selectedFile, setSelectedFile] = useState<File>();

  const [isLoadingDeletion, setIsLoadingDeletion] = useState(false);

  const [isDeleting, setIsDeleting] = useState(false);

  const { enqueueSnackbar } = useSnackbar();

  const { studentDetail, onStudentUpdate, onRemoveStudent } = useContext(
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

    const studentImage = selectedImage;

    onStudentUpdate(data, studentId, studentImage);

    route.push("/admin");
  });

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

  const handleClick = (variant: VariantType) => {
    enqueueSnackbar("Tạo mới thành công!", {
      variant,
      anchorOrigin: {
        vertical: "top",
        horizontal: "right",
      },
    });
  };
  return (
    <Box>
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
      <StyledForm onSubmit={onFormSubmitUpdateUserHandle}>
        <StyledBoxFormUpdate>
          <StyledBoxAvatarContainer>
            <StyledBoxAvatar>
              <StyledLabel>
                <StyledInputUpdate
                  id="image"
                  {...register("image")}
                  type="file"
                  name="file"
                  onChange={({ target }) => {
                    if (target.files) {
                      const file = target.files[0];
                      setSelectedImage(URL.createObjectURL(file));
                      setSelectedFile(file);
                    }
                  }}
                />
                <StyledBoxImageContainer>
                  <StyledImage>
                    <StyledAvatar
                      src={
                        selectedImage !== studentDetail?.image && selectedImage
                          ? selectedImage
                          : studentDetail?.image
                      }
                    />
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

          <StyledBoxFormDetail>
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

                  <StyledContentError>
                    {errors.address?.message}
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
                <StyledBtnCreate
                  type="submit"
                  onClick={() => handleClick("success")}
                >
                  Save Changes
                </StyledBtnCreate>
              </StyledBoxButtonForm>
            </StyledFormControl>
          </StyledBoxFormDetail>
        </StyledBoxFormUpdate>
      </StyledForm>
    </Box>
  );
};

export default StudentUpdate;
