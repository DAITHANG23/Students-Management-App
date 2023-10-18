import {
  Box,
  Typography,
  styled,
  Popover,
  Avatar,
  Tabs,
  Tab,
  Button,
  Input,
} from "@mui/material";
import Link from "next/link";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import MailIcon from "@mui/icons-material/Mail";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import MoreVertIcon from "@mui/icons-material/MoreVert";

export const StyledBoxNav = styled(Box)(() => ({
  display: "flex",
  gap: "8px",
  alignItems: "center",
}));

export const StyledLink = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  fontSize: "14px",
  color: theme.palette.primary.dark,
  "&:hover": {
    borderBottom: `1px solid ${theme.palette.primary.dark}`,
  },
}));

export const StyledLinkPage = styled(Typography)(({ theme }) => ({
  fontSize: "14px",
  color: theme.palette.primary.dark,
}));

export const StyledLinkPageExist = styled(Typography)(({ theme }) => ({
  fontSize: "14px",
  color: theme.palette.primary.light,
}));

export const StyledBoxBtnItem = styled(Box)(() => ({
  display: "flex",
  gap: "10px",
}));

export const StyledPopover = styled(Popover)(({ theme }) => ({
  border: "none",
  borderRadius: theme.spacing(2),
}));

export const StyledEditIcon = styled(EditIcon)(() => ({
  width: "20px",
  height: "20px",
  marginRight: "5px",
}));

export const StyledDeleteIcon = styled(DeleteIcon)(() => ({
  width: "20px",
  height: "20px",
  marginRight: "5px",
}));

export const StyledContainerUser = styled(Box)(() => ({
  width: "100%",
  paddingTop: "60px",
}));

export const StyledHeaderProfile = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.primary.main,
  transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
  backgroundImage: "none",
  overflow: "hidden",
  position: "relative",
  boxShadow:
    "rgba(145, 158, 171, 0.2) 0px 0px 2px 0px, rgba(145, 158, 171, 0.12) 0px 12px 24px -4px",
  borderRadius: "16px",
  zIndex: 0,
  marginBottom: theme.spacing(4),
  height: "290px",
  width: "100%",
}));

export const StyledBoxImageHeaderProfile = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "100%",
  color: theme.palette.background.paper,
  background: `linear-gradient(rgba(0, 75, 80, 0.8), rgba(0, 75, 80, 0.8)) center center / cover no-repeat, url(https://api-prod-minimal-v510.vercel.app/assets/images/cover/cover_4.jpg)`,
}));

export const StyledBoxAvatarContainer = styled(Box)(() => ({
  display: "flex",
  gap: "25px",
  position: "absolute",
  bottom: "24px",
  left: "24px",
  textAlign: "center",
  alignItems: "center",
}));

export const StyledBoxAvatar = styled(Box)(() => ({
  width: "128px",
  height: "128px",
  zIndex: "20",
}));

export const StyledAvatar = styled(Avatar)(() => ({
  width: "100%",
  height: "100%",
}));

export const StyledTitleName = styled(Typography)(() => ({
  fontSize: "24px",
  fontWeight: "700",
}));

export const StyledTitleJob = styled(Typography)(() => ({
  fontSize: "14px",
  fontWeight: 400,
  opacity: 0.7,
  paddingTop: "5px",
}));

export const StyledBoxNavProfile = styled(Box)(({ theme }) => ({
  overflow: "hidden",
  minHeight: theme.spacing(6),
  display: "flex",
  width: "100%",
  bottom: "0px",
  zIndex: 9,
  position: "absolute",
  backgroundColor: theme.palette.background.paper,
}));

export const StyledNavList = styled(Box)(() => ({
  position: "relative",
}));

export const StyledTabs = styled(Tabs)(() => ({
  position: "absolute",
  bottom: "0px",
  right: "-1050px",
  "& button": {
    minHeight: "52px",
  },
}));

export const StyledTab = styled(Tab)(({ theme }) => ({
  padding: 0,
  marginRight: theme.spacing(4),
}));

export const StyledBoxProfileBoard = styled(Box)(() => ({
  display: "flex",
  gap: "10px",
  width: "100%",
}));

export const StyledBoxInfoUser = styled(Box)(() => ({
  width: "31%",
}));

export const StyledBoxInfoFollower = styled(Box)(({ theme }) => ({
  border: "none",
  borderRadius: "16px",
  boxShadow:
    "rgba(145, 158, 171, 0.2) 0px 0px 2px 0px, rgba(145, 158, 171, 0.12) 0px 12px 24px -4px",
  padding: "24px 0px",
  display: "flex",
  backgroundColor: theme.palette.background.paper,
}));

export const StyledTitleFollower = styled(Box)(({ theme }) => ({
  width: "50%",
  textAlign: "center",
  borderRight: `1px dashed ${theme.palette.primary.contrastText}`,
}));

export const StyledNumberFlo = styled(Box)(() => ({
  fontSize: "20px",
  fontWeight: 600,
}));

export const StyledTitleFlo = styled(Typography)(({ theme }) => ({
  fontSize: "14px",
  fontWeight: 400,
  color: theme.palette.primary.light,
}));

export const StyledBoxAbout = styled(Box)(({ theme }) => ({
  width: "100%",
  border: "none",
  borderRadius: "16px",
  backgroundColor: theme.palette.background.paper,
  boxShadow:
    "rgba(145, 158, 171, 0.2) 0px 0px 2px 0px, rgba(145, 158, 171, 0.12) 0px 12px 24px -4px",
  padding: "24px ",
  marginTop: theme.spacing(3),
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  fontSize: "14px",
  fontWeight: 400,
}));

export const StyledTitleAbout = styled(Typography)(() => ({
  fontSize: "18px",
  fontWeight: 600,
  paddingBottom: "10px",
}));

export const StyledContentAbout = styled(Typography)(() => ({
  fontSize: "14px",
  fontWeight: 400,
}));

export const StyledBoxLiving = styled(Box)(({ theme }) => ({
  fontSize: "14px",
  fontWeight: 400,
  color: theme.palette.primary.dark,
  display: "flex",
  gap: "15px",
  textAlign: "left",
  alignItems: "start",
  wordBreak: "break-all",
}));

export const StyledLiving = styled(Typography)(({ theme }) => ({
  fontSize: "14px",
  fontWeight: 400,
  color: theme.palette.primary.dark,
}));

export const StyledIconLocation = styled(MailIcon)(() => ({
  width: "20px",
  height: "20px",
}));

export const StyledSpanTitle = styled("span")(() => ({
  fontWeight: 600,
}));

export const StyledBoxFaceBook = styled(Box)(() => ({
  display: "flex",
  textAlign: "left",
  alignItems: "start",
  wordBreak: "break-all",
  gap: "15px",
}));

export const StyledIconFacebook = styled(FacebookIcon)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.primary.main,
  "&:hover a": {
    textDecoration: "underline",
  },
}));

export const StyledLinkAbout = styled(Link)(() => ({
  textDecoration: "none",
}));

export const StyledTitleLink = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.dark,
  fontSize: "14px",
  fontWeight: 400,
}));

export const StyledIconInstagram = styled(InstagramIcon)(({ theme }) => ({
  color: theme.palette.error.main,
}));

export const StyledBoxPostContainer = styled(Box)(() => ({
  width: "69%",
}));

export const StyledBoxFieldPost = styled("form")(({ theme }) => ({
  width: "100%",
  backgroundColor: theme.palette.background.paper,
  border: "none",
  borderRadius: "16px",
  padding: theme.spacing(4),
  boxShadow:
    "rgba(145, 158, 171, 0.2) 0px 0px 2px 0px, rgba(145, 158, 171, 0.12) 0px 12px 24px -4px",
}));

export const StyledBoxBtnPost = styled(Box)(({ theme }) => ({
  paddingTop: theme.spacing(4),
  display: "flex",
  justifyContent: "space-between",
}));

export const StyledBtnImage = styled(Button)(({ theme }) => ({
  textTransform: "none",
  padding: "0px 8px",
  border: "none",
  borderRadius: "17px",
  backgroundColor: theme.palette.primary.contrastText,
  color: theme.palette.primary.dark,
  fontSize: "14px",
  fontWeight: 700,
}));

export const StyledBtnPost = styled(Button)(({ theme }) => ({
  textTransform: "none",
  padding: theme.spacing(1, 3),
  border: "none",
  borderRadius: "12px",
  color: theme.palette.background.paper,
  fontWeight: 700,
  fontSize: "14px",
  backgroundColor: theme.palette.primary.dark,
}));

export const StyledBoxPost = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(4),
  border: "none",
  boxShadow:
    "rgba(145, 158, 171, 0.2) 0px 0px 2px 0px, rgba(145, 158, 171, 0.12) 0px 12px 24px -4px",
  backgroundColor: theme.palette.background.paper,
  width: "100%",
  padding: theme.spacing(4),
  borderRadius: "16px",
}));

export const StyledBoxHeaderPost = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
}));

export const StyledBoxAvatarContainerPost = styled(Box)(() => ({
  display: "flex",
  gap: "15px",
  textAlign: "left",
}));

export const StyledAvatarPost = styled(Avatar)(() => ({
  width: "40px",
  height: "40px",
}));

export const StyledTitleNameUser = styled(Typography)(() => ({
  fontSize: "16px",
  fontWeight: 600,
  fontFamily: "Public Sans, sans-serif",
}));

export const StyledTitleDateUser = styled(Typography)(({ theme }) => ({
  fontSize: "12px",
  fontWeight: 400,
  color: theme.palette.primary.light,
  marginTop: "4px",
}));

export const StyledMoreVertIcon = styled(MoreVertIcon)(({ theme }) => ({
  color: theme.palette.primary.light,
}));

export const StyledBtnPop = styled(Button)(() => ({
  textTransform: "none",
}));

export const StyledContentPost = styled(Typography)(({ theme }) => ({
  padding: theme.spacing(4, 4, 2),
  fontSize: "14px",
  fontWeight: 400,
}));

export const StyledBoxImgPost = styled(Box)(() => ({
  width: "100%",
  height: "auto",
  paddingTop: "10px",
}));

export const StyledImgPost = styled("img")(({ theme }) => ({
  border: "none",
  borderRadius: theme.spacing(1),
  objectFit: "cover",
  width: "100%",
  height: "100%",
}));

export const StyledBoxIconComment = styled(Box)(({ theme }) => ({
  textAlign: "end",
  padding: theme.spacing(2, 4, 4),
}));

export const StyledBoxPostComment = styled(Box)(() => ({
  width: "100%",
  display: "flex",
  gap: "10px",
}));

export const StyledBoxAvatarUserComment = styled(Box)(() => ({
  width: "40px",
  height: "40px",
}));

export const StyledBoxContentCmtPost = styled(Box)(({ theme }) => ({
  width: "100%",
  padding: theme.spacing(0, 1),
  height: "auto",
  border: "none",
  borderRadius: theme.spacing(1),
  backgroundColor: "#F4F6F8",
  marginBottom: "17px",
}));

export const StyledBoxNameUserCmt = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
}));

export const StyledTitleNameUserCmt = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.dark,
  fontSize: "14px",
  fontWeight: 600,
}));

export const StyledTitleDateUserCmt = styled(Typography)(({ theme }) => ({
  fontSize: "14px",
  color: theme.palette.primary.light,
}));

export const StyledTitleContentUserCmt = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.dark,
  fontSize: "14px",
  fontWeight: 400,
  paddingTop: "5px",
  wordBreak: "break-all",
}));

export const StyledBoxInputCmtContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "10px",
  marginTop: "10px",
}));

export const StyledBoxInputCmt = styled(Box)(({ theme }) => ({
  width: "100%",
  padding: "5px",
  border: `1px solid ${theme.palette.primary.contrastText}`,
  borderRadius: theme.spacing(1),
  display: "flex",
}));

export const StyledInputCmt = styled(Input)(({ theme }) => ({
  border: "none",
  width: "100%",
  paddingLeft: "5px",
}));
