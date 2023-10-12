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
  TextField,
  Typography,
} from "@mui/material";
import { Icon } from "@iconify/react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PeopleIcon from "@mui/icons-material/People";
import Followers from "@/components/Followers/FollowersMain";
import Friends from "@/components/Friends/FriendsMain";
import { ValueTab } from "@/hooks/types";

import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import Picker, { EmojiClickData } from "emoji-picker-react";

const User = () => {
  const { onChoosePage, titleHeader } = useContext(
    AppContext
  ) as AppContextType;

  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const [anchorElEmoji, setAnchorElEmoji] = useState<HTMLButtonElement | null>(
    null
  );

  const [isDeleting, setIsDeleting] = useState(false);

  const [isEditing, setIsEditing] = useState(false);

  const [valueTab, setValueTab] = useState<ValueTab>("Profile");

  const [chosenEmoji, setChosenEmoji] = useState<string>("");

  const [selectedEmoji, setSelectedEmoji] = useState<string>("");

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

  // popover emoiji
  const handleClosePopoverEmoji = () => {
    setAnchorElEmoji(null);
  };

  const onEmojiClick = (emojiObject: EmojiClickData) => {
    setChosenEmoji(
      (inputValue) =>
        inputValue +
        (emojiObject.isCustom ? emojiObject.unified : emojiObject.emoji)
    );
    setSelectedEmoji(emojiObject.unified);
  };

  const handleClickEmoji = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElEmoji(event.currentTarget);
  };

  const openPopEmoji = Boolean(anchorElEmoji);

  const idPopEmojiItem = openPopEmoji ? "simple-popover" : undefined;

  return (
    <Container>
      <StyledBoxNav>
        <StyledLink href={"/admin"} onClick={() => onChoosePage("admin")}>
          Admin
        </StyledLink>
        <BsDot />
        <StyledLinkPage>{titleHeader}</StyledLinkPage>
        <BsDot />
        <StyledLinkPageExist>Dom Nguyen</StyledLinkPageExist>
      </StyledBoxNav>

      <StyledContainerUser>
        <StyledHeaderProfile>
          <StyledBoxImageHeaderProfile>
            <StyledBoxAvatarContainer>
              <StyledBoxAvatar>
                <StyledAvatar src="/images/avatar_6.jpg" />
              </StyledBoxAvatar>
              <Box>
                <StyledTitleName>Dom Nguyen</StyledTitleName>
                <StyledTitleJob>Frontend Developer</StyledTitleJob>
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
                  <StyledNumberFlo>20</StyledNumberFlo>
                  <StyledTitleFlo>Followers</StyledTitleFlo>
                </StyledTitleFollower>
                <Box sx={{ width: "50%", textAlign: "center" }}>
                  <StyledNumberFlo>20</StyledNumberFlo>
                  <StyledTitleFlo>Following</StyledTitleFlo>
                </Box>
              </StyledBoxInfoFollower>

              <StyledBoxAbout>
                <StyledTitleAbout>About</StyledTitleAbout>
                <StyledContentAbout>
                  I love Information Technology
                </StyledContentAbout>
                <StyledBoxLiving>
                  <Icon
                    icon="material-symbols:location-on"
                    style={{ width: "20px", height: "20px" }}
                  />
                  <StyledLiving>
                    Live at <StyledSpanTitle> HCM</StyledSpanTitle>
                  </StyledLiving>
                </StyledBoxLiving>
                <StyledBoxLiving>
                  <StyledIconLocation />
                  Nguyendaithang23061997@gmail.com
                </StyledBoxLiving>
                <StyledBoxLiving>
                  <BusinessCenterIcon
                    style={{ width: "20px", height: "20px" }}
                  />
                  <StyledLiving>
                    Frontend Developer at
                    <StyledSpanTitle> Freelancer</StyledSpanTitle>
                  </StyledLiving>
                </StyledBoxLiving>
              </StyledBoxAbout>

              <StyledBoxAbout>
                <StyledTitleAbout>Social</StyledTitleAbout>

                <StyledBoxFaceBook>
                  <StyledIconFacebook />

                  <StyledLinkAbout
                    href={"https://www.facebook.com/DomNguyen2306"}
                  >
                    <StyledTitleLink>
                      https://www.facebook.com/DomNguyen2306
                    </StyledTitleLink>
                  </StyledLinkAbout>
                </StyledBoxFaceBook>
                <StyledBoxFaceBook>
                  <StyledIconInstagram />
                  <StyledLinkAbout
                    href={"https://www.instagram.com/nguyen_dai_thang/"}
                  >
                    <StyledTitleLink>
                      https://www.instagram.com/nguyen_dai_thang/
                    </StyledTitleLink>
                  </StyledLinkAbout>
                </StyledBoxFaceBook>
              </StyledBoxAbout>
            </Box>

            <StyledBoxPostContainer>
              <StyledBoxFieldPost>
                <TextField
                  multiline={true}
                  rows={4}
                  sx={{ width: "100%" }}
                  placeholder="
                  Share what you are thinking here..."
                ></TextField>
                <StyledBoxBtnPost>
                  <StyledBtnImage>
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
                  <StyledBtnPost>Post</StyledBtnPost>
                </StyledBoxBtnPost>
              </StyledBoxFieldPost>

              <StyledBoxPost>
                <StyledBoxHeaderPost>
                  <StyledBoxAvatarContainerPost>
                    <StyledAvatarPost src="/images/avatar_6.jpg" />
                    <Box>
                      <StyledTitleNameUser>Dom Nguyen</StyledTitleNameUser>
                      <StyledTitleDateUser>11 Oct 2023</StyledTitleDateUser>
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
                        <StyledBtnPop onClick={() => onEditStudentItem(1)}>
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
                    The sun slowly set over the horizon, painting the sky in
                    vibrant hues of orange and pink.
                  </StyledContentPost>
                </Box>

                <StyledBoxImgPost>
                  <StyledImgPost
                    src="https://api-prod-minimal-v510.vercel.app/assets/images/travel/travel_2.jpg"
                    width={"100%"}
                    height={"100%"}
                    alt="img-blog"
                  />
                </StyledBoxImgPost>

                <StyledBoxIconComment>
                  <Icon
                    icon="iconamoon:comment-dots-fill"
                    color="#637381"
                    width={"20px"}
                    height={"20px"}
                  />
                </StyledBoxIconComment>

                <Box>
                  <StyledBoxPostComment>
                    <StyledBoxAvatarUserComment>
                      <Avatar
                        src="/images/avatar_4.jpg"
                        sx={{ width: "100%", height: "100%" }}
                      />
                    </StyledBoxAvatarUserComment>
                    <StyledBoxContentCmtPost>
                      <StyledBoxNameUserCmt>
                        <StyledTitleNameUserCmt>
                          Anna Nguyen
                        </StyledTitleNameUserCmt>
                        <StyledTitleDateUserCmt>
                          11 Oct 2023
                        </StyledTitleDateUserCmt>
                      </StyledBoxNameUserCmt>

                      <Box>
                        <StyledTitleContentUserCmt>
                          So beautiful!!!
                        </StyledTitleContentUserCmt>
                      </Box>
                    </StyledBoxContentCmtPost>
                  </StyledBoxPostComment>
                </Box>

                <StyledBoxInputCmtContainer>
                  <Box>
                    <Avatar
                      src="/images/avatar_6.jpg"
                      sx={{ width: "40px", height: "40px" }}
                    />
                  </Box>

                  <StyledBoxInputCmt>
                    <Box sx={{ width: "100%" }}>
                      <StyledInputCmt
                        type="text"
                        disableUnderline={true}
                        placeholder="Write a comment..."
                        value={chosenEmoji}
                        onChange={(e) => setChosenEmoji(e.target.value)}
                      />
                    </Box>

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
                  </StyledBoxInputCmt>
                </StyledBoxInputCmtContainer>
              </StyledBoxPost>
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
