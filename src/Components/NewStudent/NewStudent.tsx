"use client";
import { useState, useEffect, useContext } from "react";
import {
  Box,
  Container,
  FormControl,
  FormControlLabel,
  Radio,
} from "@mui/material";
import {
  StyledModalHeaderContainer,
  StyledBoxHeader,
  StyledTitleModal,
  StyledButtonClose,
  StyledForm,
  StyledBoxFormInfo,
  StyledContentError,
  StyledBoxDes,
  StyledInputName,
  StyleInputNumberPhone,
  StyledBoxButton,
  StyledBoxButtonModal,
  StyledBtnCancel,
  StyledBtnCreate,
  StyledBoxNumberPhone,
  StyledBoxAvatarContainer,
  StyledBoxAvatar,
  StyledLabel,
  StyledInputUpdate,
  StyledBoxImageContainer,
  StyledImage,
  StyledAvatar,
  StyledBoxIcon,
  StyledTitleIcon,
  StyledSpanAvatar,
  StyledBoxNav,
  StyledLink,
  StyledLinkPage,
  StyledLinkPageExist,
} from "@/components/NewStudent/NewStudent.styles";
import { Icon } from "@iconify/react";
import { useForm, Controller } from "react-hook-form";
import { BsDot } from "react-icons/bs";
import { AppContext, AppContextType } from "@/contexts/AppContext";
import { Students } from "@/hooks/types";
import { useRouter } from "next/navigation";

const NewStudent = () => {
  const route = useRouter();

  const [valueImage, setValueImage] = useState<any>();

  //console.log("image:", valueImage);

  const [imageItem, setImageItem] = useState<string>("");

  const { onCreateStudent } = useContext(AppContext) as AppContextType;

  const { register, handleSubmit, formState, reset, control } = useForm({
    defaultValues: {
      id: "",
      saintName: "",
      name: "",
      lastName: "",
      classItem: "",
      saintNameFather: "",
      nameFather: "",
      phoneFather: "",
      image: "",
      saintNameMother: "",
      nameMother: "",
      phoneMother: "",
      note: "",
      placeOfBirth: "",
      dayOfBirth: "",
      address: "",
    },
  });
  const { errors } = formState;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValueImage(e.target.value);
  };

  const handleClose = () => {
    route.push("/admin");
  };

  const onFormSubmitCreateUserHandle = handleSubmit((studentItem) => {
    const day = new Date();
    console.log("image:", studentItem.image);

    const newStudent = {
      ...studentItem,

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

    onCreateStudent(newStudent);
    route.push("/admin");
    reset();
  });

  return (
    <Box sx={{ width: "81%", marginTop: "20px" }}>
      <StyledTitleModal>Create a student</StyledTitleModal>
      <StyledBoxNav>
        <StyledLink href={"/admin"}>Admin</StyledLink>
        <BsDot />
        <StyledLinkPage>Student</StyledLinkPage>
        <BsDot />
        <StyledLinkPageExist>New Student</StyledLinkPageExist>
      </StyledBoxNav>
      <Container>
        <StyledForm onSubmit={onFormSubmitCreateUserHandle}>
          <StyledBoxAvatarContainer>
            <StyledBoxAvatar>
              <StyledLabel>
                <StyledInputUpdate
                  type="file"
                  id="image"
                  {...register("image", {
                    required: {
                      value: true,
                      message: "Please enter a image.",
                    },
                  })}
                  // onChange={onChange}
                />

                <StyledContentError>
                  {errors.address?.message}
                </StyledContentError>
                <StyledBoxImageContainer>
                  <StyledImage>
                    <StyledAvatar src={""} />
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
          </StyledBoxAvatarContainer>
          <StyledModalHeaderContainer>
            <StyledBoxHeader>
              <StyledButtonClose onClick={handleClose}>x</StyledButtonClose>
            </StyledBoxHeader>
            <StyledBoxFormInfo>
              <FormControl>
                <StyledBoxButton>
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
                    <StyledContentError>
                      {errors.id?.message}
                    </StyledContentError>
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
                </StyledBoxButton>

                <StyledBoxButton>
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
                    <StyledContentError>
                      {errors.name?.message}
                    </StyledContentError>
                  </StyledBoxDes>
                </StyledBoxButton>

                <StyledBoxButton>
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
                    <label htmlFor="address">Address</label>
                    <StyledInputName
                      type="text"
                      id="address"
                      placeholder="778/22/22 Thống Nhất Gò Vấp"
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
                </StyledBoxButton>

                <StyledBoxButton>
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
                </StyledBoxButton>

                <StyledBoxButton>
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
                </StyledBoxButton>

                <StyledBoxNumberPhone>
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
                </StyledBoxNumberPhone>

                <StyledBoxButton>
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
                          message: "Please enter a name mother.",
                        },
                      })}
                    />

                    <StyledContentError>
                      {errors.nameMother?.message}
                    </StyledContentError>
                  </StyledBoxDes>
                </StyledBoxButton>

                <StyledBoxNumberPhone>
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
                </StyledBoxNumberPhone>

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
                  <StyledBtnCancel onClick={handleClose}>
                    CANCEL
                  </StyledBtnCancel>
                  <StyledBtnCreate type="submit">CREATE</StyledBtnCreate>
                </StyledBoxButtonModal>
              </FormControl>
            </StyledBoxFormInfo>
          </StyledModalHeaderContainer>
        </StyledForm>
      </Container>
    </Box>
  );
};

export default NewStudent;
