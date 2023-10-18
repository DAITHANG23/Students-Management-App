import { Avatar, Box, Button, TextField, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { AppContext, AppContextType } from "@/contexts/AppContext";
import { useForm } from "react-hook-form";

import FilesDrop from "@/components/FilesDrop/FilesDropMain";
import InputEmoji from "react-input-emoji";
interface PostForm {
  onCloseFormPost: (value: boolean) => void;
}
const PostForm = ({ onCloseFormPost }: PostForm) => {
  const { userItem, onCreateNewPost } = useContext(
    AppContext
  ) as AppContextType;

  const [chosenImage, setChosenImage] = useState<string>();

  const [text, setText] = useState("");

  //const [isOpenFormPost, setIsOpenFormPost] = useState(false);

  // Post

  const onChooseImage = (value: string) => {
    setChosenImage(value);
  };

  const { register, handleSubmit, reset } = useForm();

  const onFormPostSubmit = handleSubmit((post) => {
    const id = userItem.post.length + 1;

    const day = new Date();

    const newPost = {
      id: id,
      content: text,
      date: [
        day.getDate(),

        day.toLocaleString("en-US", { month: "short" }),

        day.toLocaleString("en-US", { year: "2-digit" }),
      ].join(" "),

      time: [
        ("0" + day.getHours()).substr(-2),

        ("0" + day.getMinutes()).substr(-2),
      ].join(":"),

      image: chosenImage,
    };

    onCreateNewPost(newPost, userItem.id);
    reset();
    onCloseForm();
  });

  // Popover Icon

  const onCloseForm = () => {
    onCloseFormPost(false);
  };

  function handleOnEnter(text: string) {
    console.log("enter", text);
  }

  return (
    <Box
      sx={{
        position: "fixed",
        top: "100px",
        left: "25%",
        backgroundColor: "#FFF",
        border: "none",
        borderRadius: "16px",
        width: "50%",
        height: "auto",
        boxShadow:
          "rgba(145, 158, 171, 0.2) 0px 0px 2px 0px, rgba(145, 158, 171, 0.12) 0px 12px 24px -4px",
      }}
    >
      <Box
        sx={{
          position: "relative",
          borderBottom: "1px solid #E8ECEE",
          padding: "20px",
        }}
      >
        <Typography
          sx={{ fontSize: "20px", fontWeight: 600, textAlign: "center" }}
        >
          Tạo bài viết
        </Typography>
        <button
          style={{
            borderRadius: "1000px",
            border: "none",
            backgroundColor: "#F4F6F8",
            width: "32px",
            height: "32px",
            cursor: "pointer",
            position: "absolute",
            top: "20px",
            right: "10px",
          }}
          onClick={onCloseForm}
        >
          <CloseIcon />
        </button>
      </Box>

      <Box sx={{ padding: "10px 20px" }}>
        <Box sx={{ display: "flex", gap: "15px" }}>
          <Avatar src={userItem.avatar} />
          <Typography
            sx={{ color: "#121212", fontWeight: 600, fontSize: "14px" }}
          >
            {userItem.name} {userItem.lastName}
          </Typography>
        </Box>

        <form
          onSubmit={onFormPostSubmit}
          style={{
            padding: "20px 0px",
            width: "100%",
            height: "auto",
          }}
        >
          <Box sx={{ height: "230px", overflow: "hidden scroll" }}>
            {/* <Box
              sx={{
                display: "flex",
                width: "100%",
                justifyContent: "space-between",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <TextField
                style={{ border: "none" }}
                {...register("content")}
                multiline={true}
                rows={1}
                sx={{ width: "100%" }}
                placeholder="
                  Share what you are thinking here..."
                value={valueContent + chosenEmoji}
                onChange={(e) => setValueContent(e.target.value)}
              ></TextField>

              <Box>
                <Button onClick={handleClickEmoji}>
                  <Icon
                    icon="mdi:face-outline"
                    color="#637381"
                    width={"25px"}
                    height={"25px"}
                  />
                </Button>

                <StyledPopover
                  id={idPopEmojiItem}
                  open={openPopEmoji}
                  anchorEl={anchorElEmoji}
                  onClose={handleClosePopoverEmoji}
                  anchorOrigin={{
                    vertical: "center",
                    horizontal: "left",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                >
                  <Box sx={{ height: "250px" }}>
                    <Picker onEmojiClick={onEmojiClick} />
                  </Box>
                </StyledPopover>
              </Box>
            </Box> */}

            <InputEmoji
              value={text}
              onChange={setText}
              cleanOnEnter
              onEnter={handleOnEnter}
              placeholder="Share what you are thinking here..."
              borderRadius={7}
            />

            <Box>
              <FilesDrop onChooseImage={onChooseImage} />
            </Box>
          </Box>

          <Button
            sx={{
              width: "100%",
              border: "none",
              borderRadius: "7px",
              backgroundColor:
                text?.split("").length <= 0 ? "#E8ECEE" : "#42a5f5",
              color: "#FFF",
              marginTop: "20px",
            }}
            disabled={text?.split("").length <= 0 ? true : false}
            type="submit"
          >
            Đăng
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default PostForm;
