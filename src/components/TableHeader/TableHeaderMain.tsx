"use client";

import { Box, InputLabel, MenuItem, FormControl } from "@mui/material";
import { useState, useEffect } from "react";
import {
  StyleTableHeaderContainer,
  StyledButtonHeader,
  StyledBoxButton,
  StyledInputSearch,
  StyledIconGlassBold,
} from "@/components/TableHeader/TableHeaderItem.styles";
import { useSearching } from "@/hooks/useSearch";
import { Class } from "@/hooks/types";

import Select, { SelectChangeEvent } from "@mui/material/Select";

interface TableHeaderProps {
  onSelectClass: (value: Class | "") => void;
  onSearch: (value: string) => void;
}

const TableHeader = ({ onSelectClass, onSearch }: TableHeaderProps) => {
  const [search, onSearchHandler] = useSearching();

  const [classItem, setClassItem] = useState<Class | "">("");

  const handleChange = (event: SelectChangeEvent) => {
    setClassItem(event.target.value as Class);
  };

  useEffect(() => {
    if (search) {
      onSearch(search);
    }
  }, [search, onSearch]);

  useEffect(() => {
    if (classItem) {
      onSelectClass(classItem);
    }
  }, [classItem, onSelectClass]);

  return (
    <StyleTableHeaderContainer>
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel id="demo-select-small-label">Class</InputLabel>
        <Select
          labelId="demo-select-small-label"
          id="demo-select-small"
          value={classItem}
          label="Class"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="All">All</MenuItem>
          <MenuItem value={"Chiên con"}>Chiên con</MenuItem>
          <MenuItem value={"Ấu 1A"}>Ấu 1A</MenuItem>
          <MenuItem value={"Ấu 1B"}>Ấu 1B</MenuItem>
          <MenuItem value={"Ấu 2A"}>Ấu 2A</MenuItem>
          <MenuItem value={"Ấu 2B"}>Ấu 2B</MenuItem>
          <MenuItem value={"Ấu 3A"}>Ấu 3A</MenuItem>
          <MenuItem value={"Ấu 3B"}>Ấu 3B</MenuItem>
          <MenuItem value={"Thiếu 1 Nam"}>Thiếu 1 Nam</MenuItem>
          <MenuItem value={"Thiếu 1 Nữ"}>Thiếu 1 Nữ</MenuItem>
          <MenuItem value={"Thiếu 2 Nam"}>Thiếu 2 Nam</MenuItem>
          <MenuItem value={"Thiếu 2 Nữ"}>Thiếu 2 Nữ</MenuItem>
          <MenuItem value={"Thiếu 3 Nam"}>Thiếu 3 Nam</MenuItem>
          <MenuItem value={"Thiếu 3 Nữ"}>Thiếu 3 Nữ</MenuItem>
          <MenuItem value={"Nghĩa 1"}>Nghĩa 1</MenuItem>
          <MenuItem value={"Nghĩa 2"}>Nghĩa 2</MenuItem>
          <MenuItem value={"Nghĩa 3"}>Nghĩa 3</MenuItem>
          <MenuItem value={"Dự trưởng 1"}>Dự trưởng 1</MenuItem>
          <MenuItem value={"Dự trưởng 2"}>Dự trưởng 2</MenuItem>
        </Select>
      </FormControl>

      <Box sx={{ position: "relative", marginTop: "15px" }}>
        <StyledIconGlassBold />
        <StyledInputSearch
          type="text"
          placeholder="Search"
          value={search}
          onChange={onSearchHandler}
        />
      </Box>
    </StyleTableHeaderContainer>
  );
};

export default TableHeader;
