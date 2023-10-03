import { useContext, useEffect, useState } from "react";
//import { useRemoveUser } from "@/hooks/useFetch";
import {
  TableRow,
  Box,
  TableCell,
  Button,
  Popover,
  Typography,
  Avatar,
} from "@mui/material";
import {
  StyledTableCellName,
  StyledTableRowContent,
  StyledTitleNumberPhone,
  StyledTableCellStatus,
  StyledTitleStatus,
  StyledButtonEdit,
  StyleIcon,
  StyledEditIcon,
  StyledDeleteIcon,
  StyledModal,
  StyledBoxModal,
  StyledModalEdit,
  StyledBoxButton,
  StyledButtonCancel,
  StyledButtonDelete,
  StyledTableRowContainer,
  StyledSpanPhone,
  StyledNamePhone,
} from "@/components/StudentItem/StudentItem.styles";
import StudentUpdate from "../StudentUpdate/StudentUpdate";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useRouter } from "next/navigation";
import { Students } from "@/hooks/types";
import { AppContext, AppContextType } from "@/contexts/AppContext";

interface UserItemProps {
  address: number;
  id: number;
  name: number;
  note: number;
  lastName: number;
  saintName: number;
  placeOfBirth: number;
  dayOfBirth: number;
  saintNameFather: number;
  nameFather: number;
  phoneFather: number;
  saintNameMother: number;
  nameMother: number;
  phoneMother: number;
  classItem: number;
  date: number;
  time: number;
  image: number;
}

const StudentItem = (props: UserItemProps) => {
  const {
    id,
    name,
    saintName,
    phoneFather,
    phoneMother,
    classItem,
    address,
    lastName,
    date,
    time,
    image,
  } = props;
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const [isDeleting, setIsDeleting] = useState(false);

  const [isEditing, setIsEditing] = useState(false);

  const [isLoadingDeletion, setIsLoadingDeletion] = useState(false);

  const { onRemoveStudent, onStudentDetail } = useContext(
    AppContext
  ) as AppContextType;

  const router = useRouter();

  // remove student
  const onRemoveStudentItem = () => {
    setIsDeleting(true);
  };

  const handleDelete = (id: number) => {
    const idStudent = String(id);

    onRemoveStudent(idStudent);

    setIsLoadingDeletion(true);

    //router.push("/admin");
  };

  const handleStopDelete = () => {
    setIsDeleting(false);
    setIsEditing(false);
  };

  // view student
  const onViewStudentItem = () => {
    onStudentDetail(id);
    router.push(`/admin/student/${id}`);
  };

  // edit student
  const onEditStudentItem = (studentId: number) => {
    setIsEditing(true);
    onStudentDetail(studentId);
    // router.push(`/admin/student/${id}`);
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

  const classNameItem = classItem.toString();

  return (
    <>
      {isEditing && (
        <StyledModalEdit
          open={isEditing}
          onClose={handleStopDelete}
          aria-labelledby="modal-modal-update"
          aria-describedby="modal-modal-update"
        >
          <StudentUpdate />
        </StyledModalEdit>
      )}
      {isDeleting && (
        <StyledModal
          open={isDeleting}
          onClose={handleStopDelete}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <StyledBoxModal>
            <Typography sx={{ fontSize: "24px" }}>Are you sure?</Typography>
            <Typography>
              Do you really want to delete this student {lastName}
              {name}? This action cannot be undone.
            </Typography>
            <StyledBoxButton>
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
            </StyledBoxButton>
          </StyledBoxModal>
        </StyledModal>
      )}

      <StyledTableRowContainer key={id}>
        <TableCell>{id}</TableCell>
        <StyledTableCellName>
          <Avatar alt={`${lastName}`} src={`${image}`} />
          <Box>
            <StyledTitleNumberPhone>{saintName}</StyledTitleNumberPhone>
            <StyledTableRowContent>
              {lastName}
              {name}
            </StyledTableRowContent>
          </Box>
        </StyledTableCellName>

        <StyledTableCellStatus>
          <StyledTitleStatus styleActive={classNameItem}>
            {classItem}
          </StyledTitleStatus>
        </StyledTableCellStatus>
        <TableCell>
          <Box>
            <StyledNamePhone>
              Cha:
              <StyledSpanPhone> {phoneFather}</StyledSpanPhone>
            </StyledNamePhone>
            <StyledNamePhone>
              Mẹ:
              <StyledSpanPhone> {phoneMother}</StyledSpanPhone>
            </StyledNamePhone>
          </Box>
        </TableCell>

        <TableCell>{address}</TableCell>
        <TableCell>
          <StyledTableRowContent>{date}</StyledTableRowContent>
          <StyledTableRowContent>{time}</StyledTableRowContent>
        </TableCell>

        <TableCell>
          <StyledButtonEdit onClick={handleClick}>
            <StyleIcon />
          </StyledButtonEdit>
          <Popover
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
            sx={{ border: "none", borderRadius: "16px" }}
          >
            <Box>
              <Button onClick={onViewStudentItem}>
                <VisibilityIcon
                  sx={{ width: "20px", height: "20px", marginRight: "5px" }}
                />
                View
              </Button>
            </Box>
            <Box>
              <Button onClick={() => onEditStudentItem(id)}>
                <StyledEditIcon />
                Edit
              </Button>
            </Box>
            <Box>
              <Button onClick={onRemoveStudentItem}>
                <StyledDeleteIcon />
                Remove
              </Button>
            </Box>
          </Popover>
        </TableCell>
      </StyledTableRowContainer>
    </>
  );
};
export default StudentItem;
