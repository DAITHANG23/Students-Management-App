"use client";
import React, { useContext, useState } from "react";
import {
  StyledBoxNav,
  StyledLink,
  StyledLinkPage,
  StyledLinkPageExist,
  StyledDeleteIcon,
  StyledPopover,
  StyledEditIcon,
  StyledContainerUser,
  StyledHeaderProfile,
  StyledBoxImageHeaderProfile,
  StyledBoxAvatarContainer,
  StyledBoxAvatar,
  StyledAvatar,
  StyledTitleName,
  StyledTitleJob,
  StyledBoxNavProfile,
  StyledNavList,
  StyledTabs,
  StyledTab,
  StyledBoxProfileBoard,
  StyledBoxInfoFollower,
  StyledTitleFollower,
  StyledNumberFlo,
  StyledTitleFlo,
  StyledBoxAbout,
  StyledTitleAbout,
  StyledContentAbout,
  StyledBoxLiving,
  StyledLiving,
  StyledIconLocation,
  StyledSpanTitle,
  StyledBoxFaceBook,
  StyledIconFacebook,
  StyledLinkAbout,
  StyledTitleLink,
  StyledIconInstagram,
  StyledBoxPostContainer,
  StyledBoxFieldPost,
  StyledBoxBtnPost,
  StyledBtnPost,
  StyledBtnImage,
  StyledBoxPost,
  StyledBoxHeaderPost,
  StyledBoxAvatarContainerPost,
  StyledAvatarPost,
  StyledTitleNameUser,
  StyledTitleDateUser,
  StyledMoreVertIcon,
  StyledBtnPop,
  StyledBoxImgPost,
  StyledContentPost,
  StyledImgPost,
  StyledBoxIconComment,
  StyledBoxPostComment,
  StyledBoxAvatarUserComment,
  StyledBoxContentCmtPost,
  StyledBoxNameUserCmt,
  StyledTitleNameUserCmt,
  StyledTitleDateUserCmt,
  StyledTitleContentUserCmt,
  StyledBoxInputCmt,
  StyledBoxInputCmtContainer,
  StyledInputCmt,
} from "@/components/User/UserItem.styles";
import { BsDot } from "react-icons/bs";
import { AppContext, AppContextType } from "@/contexts/AppContext";
import {
  Avatar,
  Box,
  Button,
  Container,
  Input,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import { Icon } from "@iconify/react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PeopleIcon from "@mui/icons-material/People";
import Followers from "@/components/Followers/FollowersMain";
import Friends from "@/components/Friends/FriendsMain";
import { ValueTab } from "@/hooks/types";
import { useForm } from "react-hook-form";

import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";

import PostForm from "@/components/PostForm/PostForm";
import InputEmoji from "react-input-emoji";

const User = () => {
  const {
    onChoosePage,
    titleHeader,
    userItem,
    onCreateNewPost,
    createCommentPost,
  } = useContext(AppContext) as AppContextType;

  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const [isDeleting, setIsDeleting] = useState(false);

  const [isEditing, setIsEditing] = useState(false);

  const [valueTab, setValueTab] = useState<ValueTab>("Profile");

  const [isOpenFormPost, setIsOpenFormPost] = useState(false);

  const [text, setText] = useState("");

  const handleChange = (event: React.SyntheticEvent, newValue: ValueTab) => {
    setValueTab(newValue);
  };

  const onEditStudentItem = (studentId: number) => {
    // setIsEditing(true);
    // onStudentDetail(studentId);
    // router.push(`/admin/student/${id}`);
  };

  // remove student
  const onRemoveStudentItem = () => {
    setIsDeleting(true);
  };

  // popover item
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClosePopover = () => {
    setAnchorEl(null);
  };

  const openPop = Boolean(anchorEl);

  const idPopItem = openPop ? "simple-popover" : undefined;

  // popover emoji
  function handleOnEnter(id: number, text: string) {
    const idUser = userItem.id;
    createCommentPost(text, idUser, id);
  }

  // Post

  const { register, handleSubmit, reset } = useForm();

  const onFormPostSubmit = handleSubmit((post) => {
    const id = userItem.post.length + 1;

    const day = new Date();

    const newPost = {
      id: id,
      content: String(post.content),
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

    console.log("post:", post);

    onCreateNewPost(newPost, userItem.id);
    reset();
  });

  const onClickPostImage = () => {
    setIsOpenFormPost(true);
  };

  const handleStopOpen = () => {
    setIsOpenFormPost(false);
  };

  const onCloseFormPost = (value: boolean) => {
    setIsOpenFormPost(value);
  };

  console.log("user:", userItem.post);
  return (
    <Container>
      <StyledBoxNav>
        <StyledLink href={"/admin"} onClick={() => onChoosePage("admin")}>
          Admin
        </StyledLink>
        <BsDot />
        <StyledLinkPage>{titleHeader}</StyledLinkPage>
        <BsDot />
        <StyledLinkPageExist>
          {userItem.name} {userItem.lastName}
        </StyledLinkPageExist>
      </StyledBoxNav>

      {isOpenFormPost && (
        <Modal
          open={isOpenFormPost}
          onClose={handleStopOpen}
          aria-labelledby="modal-modal-update"
          aria-describedby="modal-modal-update"
        >
          <PostForm onCloseFormPost={onCloseFormPost} />
        </Modal>
      )}

      <StyledContainerUser>
        <StyledHeaderProfile>
          <StyledBoxImageHeaderProfile>
            <StyledBoxAvatarContainer>
              <StyledBoxAvatar>
                <StyledAvatar src={userItem.avatar} />
              </StyledBoxAvatar>
              <Box>
                <StyledTitleName>
                  {userItem.name} {userItem.lastName}
                </StyledTitleName>
                <StyledTitleJob>{userItem.job}</StyledTitleJob>
              </Box>
            </StyledBoxAvatarContainer>
          </StyledBoxImageHeaderProfile>
          <StyledBoxNavProfile>
            <StyledNavList>
              <StyledTabs
                value={valueTab}
                onChange={handleChange}
                textColor="primary"
                indicatorColor="primary"
                aria-label="secondary tabs example"
              >
                <StyledTab
                  icon={
                    <Icon
                      icon="fa-solid:address-card"
                      width={"20px"}
                      height={"20px"}
                    />
                  }
                  iconPosition="start"
                  value="Profile"
                  label="Profile"
                />
                <StyledTab
                  icon={<FavoriteIcon />}
                  iconPosition="start"
                  value="Followers"
                  label="Followers"
                />
                <StyledTab
                  icon={<PeopleIcon />}
                  iconPosition="start"
                  value="Friends"
                  label="Friends"
                />
              </StyledTabs>
            </StyledNavList>
          </StyledBoxNavProfile>
        </StyledHeaderProfile>

        {valueTab === "Profile" && (
          <StyledBoxProfileBoard>
            <Box>
              <StyledBoxInfoFollower>
                <StyledTitleFollower>
                  <StyledNumberFlo>{userItem.numberFollowers}</StyledNumberFlo>
                  <StyledTitleFlo>Followers</StyledTitleFlo>
                </StyledTitleFollower>
                <Box sx={{ width: "50%", textAlign: "center" }}>
                  <StyledNumberFlo>{userItem.numberFriends}</StyledNumberFlo>
                  <StyledTitleFlo>Following</StyledTitleFlo>
                </Box>
              </StyledBoxInfoFollower>

              <StyledBoxAbout>
                <StyledTitleAbout>About</StyledTitleAbout>
                <StyledContentAbout>
                  {userItem.about.content}
                </StyledContentAbout>
                <StyledBoxLiving>
                  <Icon
                    icon="material-symbols:location-on"
                    style={{ width: "20px", height: "20px" }}
                  />
                  <StyledLiving>
                    Live at
                    <StyledSpanTitle> {userItem.about.live}</StyledSpanTitle>
                  </StyledLiving>
                </StyledBoxLiving>
                <StyledBoxLiving>
                  <StyledIconLocation />
                  {userItem.about.mail}
                </StyledBoxLiving>
                <StyledBoxLiving>
                  <BusinessCenterIcon
                    style={{ width: "20px", height: "20px" }}
                  />
                  <StyledLiving>
                    {userItem.job} at
                    <StyledSpanTitle> {userItem.about.company}</StyledSpanTitle>
                  </StyledLiving>
                </StyledBoxLiving>
              </StyledBoxAbout>

              <StyledBoxAbout>
                <StyledTitleAbout>Social</StyledTitleAbout>

                <StyledBoxFaceBook>
                  <StyledIconFacebook />

                  <StyledLinkAbout href={userItem.social.facebook}>
                    <StyledTitleLink>
                      {userItem.social.facebook}
                    </StyledTitleLink>
                  </StyledLinkAbout>
                </StyledBoxFaceBook>
                <StyledBoxFaceBook>
                  <StyledIconInstagram />
                  <StyledLinkAbout href={userItem.social.instagram}>
                    <StyledTitleLink>
                      {userItem.social.instagram}
                    </StyledTitleLink>
                  </StyledLinkAbout>
                </StyledBoxFaceBook>
              </StyledBoxAbout>
            </Box>

            <StyledBoxPostContainer>
              <StyledBoxFieldPost onSubmit={onFormPostSubmit}>
                <TextField
                  {...register("content")}
                  multiline={true}
                  rows={4}
                  sx={{ width: "100%" }}
                  placeholder="
                  Share what you are thinking here..."
                ></TextField>
                <StyledBoxBtnPost>
                  <StyledBtnImage onClick={onClickPostImage}>
                    <Icon
                      icon="fa6-regular:image"
                      color="green"
                      style={{
                        backgroundColor: "#FFF",
                        marginRight: "10px",
                        width: "24px",
                        height: "24px",
                      }}
                    />
                    Image/Video
                  </StyledBtnImage>
                  <StyledBtnPost type="submit">Post</StyledBtnPost>
                </StyledBoxBtnPost>
              </StyledBoxFieldPost>

              {userItem.post.map((postItem) => {
                return (
                  <>
                    <StyledBoxPost key={postItem.id}>
                      <StyledBoxHeaderPost>
                        <StyledBoxAvatarContainerPost>
                          <StyledAvatarPost src={postItem.avatar} />
                          <Box>
                            <StyledTitleNameUser>
                              {postItem.name} {postItem.lastName}
                            </StyledTitleNameUser>
                            <StyledTitleDateUser>
                              {postItem.date}
                            </StyledTitleDateUser>
                          </Box>
                        </StyledBoxAvatarContainerPost>
                        <Box>
                          <Button onClick={handleClick}>
                            <StyledMoreVertIcon />
                          </Button>

                          <StyledPopover
                            id={idPopItem}
                            open={openPop}
                            anchorEl={anchorEl}
                            onClose={handleClosePopover}
                            anchorOrigin={{
                              vertical: "center",
                              horizontal: "left",
                            }}
                            transformOrigin={{
                              vertical: "center",
                              horizontal: "right",
                            }}
                          >
                            <Box>
                              <StyledBtnPop
                                onClick={() => onEditStudentItem(1)}
                              >
                                <StyledEditIcon />
                                Edit
                              </StyledBtnPop>
                            </Box>

                            <Box>
                              <StyledBtnPop onClick={onRemoveStudentItem}>
                                <StyledDeleteIcon />
                                Remove
                              </StyledBtnPop>
                            </Box>
                          </StyledPopover>
                        </Box>
                      </StyledBoxHeaderPost>

                      <Box>
                        <StyledContentPost>
                          {postItem.content}
                        </StyledContentPost>
                      </Box>

                      {postItem.image && (
                        <StyledBoxImgPost>
                          <StyledImgPost
                            src={postItem.image}
                            width={"100%"}
                            height={"100%"}
                            alt="img-blog"
                          />
                        </StyledBoxImgPost>
                      )}

                      <StyledBoxIconComment>
                        <Icon
                          icon="iconamoon:comment-dots-fill"
                          color="#637381"
                          width={"20px"}
                          height={"20px"}
                        />
                      </StyledBoxIconComment>

                      <Box>
                        {postItem.comment?.map((item) => {
                          const { avatar, id, name, lastName, content, date } =
                            item;
                          return (
                            <>
                              <StyledBoxPostComment key={id}>
                                <StyledBoxAvatarUserComment>
                                  <Avatar
                                    src={avatar}
                                    sx={{ width: "100%", height: "100%" }}
                                  />
                                </StyledBoxAvatarUserComment>
                                <StyledBoxContentCmtPost>
                                  <StyledBoxNameUserCmt>
                                    <StyledTitleNameUserCmt>
                                      {name} {lastName}
                                    </StyledTitleNameUserCmt>
                                    <StyledTitleDateUserCmt>
                                      {date}
                                    </StyledTitleDateUserCmt>
                                  </StyledBoxNameUserCmt>

                                  <Box>
                                    <StyledTitleContentUserCmt>
                                      {content}
                                    </StyledTitleContentUserCmt>
                                  </Box>
                                </StyledBoxContentCmtPost>
                              </StyledBoxPostComment>
                            </>
                          );
                        })}
                      </Box>

                      <StyledBoxInputCmtContainer>
                        <Box>
                          <Avatar
                            src={userItem.avatar}
                            sx={{ width: "40px", height: "40px" }}
                          />
                        </Box>

                        <InputEmoji
                          value={text}
                          onChange={setText}
                          cleanOnEnter
                          onEnter={() => handleOnEnter(postItem.id, text)}
                          placeholder="Share what you are thinking here..."
                          borderRadius={7}
                        />
                      </StyledBoxInputCmtContainer>
                    </StyledBoxPost>
                  </>
                );
              })}
            </StyledBoxPostContainer>
          </StyledBoxProfileBoard>
        )}

        {valueTab === "Followers" && <Followers />}

        {valueTab === "Friends" && <Friends />}
      </StyledContainerUser>
    </Container>
  );
};

export default User;
