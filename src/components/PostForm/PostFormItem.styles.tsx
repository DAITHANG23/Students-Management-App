import { Popover, styled } from "@mui/material";

export const StyledPopover = styled(Popover)(({ theme }) => ({
  border: "none",
  borderRadius: theme.spacing(2),
}));
