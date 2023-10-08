"use client";
import React, { useContext, useState } from "react";
import {
  StyledBoxNav,
  StyledLink,
  StyledLinkPage,
  StyledLinkPageExist,
} from "@/components/User/UserItem.styles";
import { BsDot } from "react-icons/bs";
import { AppContext, AppContextType } from "@/contexts/AppContext";
import { Avatar, Box, Container, Tab, Tabs, Typography } from "@mui/material";
import { Icon } from "@iconify/react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PeopleIcon from "@mui/icons-material/People";
import Followers from "../Followers/Followers";
import Friends from "../Friends/Friends";
import { ValueTab } from "@/hooks/types";

const User = () => {
  const { onChoosePage, titleHeader } = useContext(
    AppContext
  ) as AppContextType;

  const [valueTab, setValueTab] = useState<ValueTab>("Profile");

  const handleChange = (event: React.SyntheticEvent, newValue: ValueTab) => {
    setValueTab(newValue);
  };

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

      <Box sx={{ width: "100%", paddingTop: "60px" }}>
        <Box
          sx={{
            backgroundColor: "rgb(255, 255, 255)",
            color: "rgb(33, 43, 54)",
            transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
            backgroundImage: "none",
            overflow: "hidden",
            position: "relative",
            boxShadow:
              "rgba(145, 158, 171, 0.2) 0px 0px 2px 0px, rgba(145, 158, 171, 0.12) 0px 12px 24px -4px",
            borderRadius: "16px",
            zIndex: 0,
            marginBottom: "24px",
            height: "290px",
            width: "100%",
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "100%",
              color: "#FFF",
              background: `linear-gradient(rgba(0, 75, 80, 0.8), rgba(0, 75, 80, 0.8)) center center / cover no-repeat, url(https://api-prod-minimal-v510.vercel.app/assets/images/cover/cover_4.jpg)`,
            }}
          >
            <Box
              sx={{
                display: "flex",
                gap: "25px",
                position: "absolute",
                bottom: "24px",
                left: "24px",
                textAlign: "center",
                alignItems: "center",
              }}
            >
              <Box sx={{ width: "128px", height: "128px", zIndex: "20" }}>
                <Avatar
                  src="/images/avatar_6.jpg"
                  sx={{ width: "100%", height: "100%" }}
                />
              </Box>
              <Box>
                <Typography sx={{ fontSize: "24px", fontWeight: "700" }}>
                  Dom Nguyen
                </Typography>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: 400,
                    opacity: 0.7,
                    paddingTop: "5px",
                  }}
                >
                  Frontend Developer
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              overflow: "hidden",
              minHeight: " 48px",
              display: "flex",
              width: "100%",
              bottom: "0px",
              zIndex: 9,
              position: "absolute",
              backgroundColor: "rgb(255, 255, 255)",
            }}
          >
            <Box
              sx={{
                position: "relative",
              }}
            >
              <Tabs
                value={valueTab}
                onChange={handleChange}
                textColor="primary"
                indicatorColor="primary"
                aria-label="secondary tabs example"
                sx={{
                  position: "absolute",
                  bottom: "0px",
                  right: "-1050px",
                  "& button": {
                    minHeight: "52px",
                  },
                }}
              >
                <Tab
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
                  sx={{ padding: 0, marginRight: "24px" }}
                />
                <Tab
                  icon={<FavoriteIcon />}
                  iconPosition="start"
                  value="Followers"
                  label="Followers"
                  sx={{ padding: 0, marginRight: "24px" }}
                />
                <Tab
                  icon={<PeopleIcon />}
                  iconPosition="start"
                  value="Friends"
                  label="Friends"
                  sx={{ padding: 0, marginRight: "24px" }}
                />
              </Tabs>
            </Box>
          </Box>
        </Box>

        {valueTab === "Profile" && <Box>asdsadad</Box>}

        {valueTab === "Followers" && <Followers />}

        {valueTab === "Friends" && <Friends />}
      </Box>
    </Container>
  );
};

export default User;
