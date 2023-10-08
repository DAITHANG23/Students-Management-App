import SideBar from "@/components/SideBar/SideBarMain";
import TableStudentsContainer from "@/components/TableStudentsContainer/TableStudentsContainerMain";
import { Box } from "@mui/material";

const AdminPage = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <SideBar />
      <TableStudentsContainer />
    </Box>
  );
};

export default AdminPage;
