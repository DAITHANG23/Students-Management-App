"use client";

import { Students } from "@/hooks/types";
import { createContext, useState } from "react";

interface IProps {
  children: React.ReactNode;
}

export type AppContextType = {
  onChoosePage: (value: string) => void;

  titleHeader: string;

  imageHeader: string;

  onStudentDetail: (value: Students) => void;
  studentDetail: Students;
};

export const AppContext = createContext<AppContextType | null>(null);

const AppProvider = ({ children }: IProps) => {
  const [onPage, setOnPage] = useState("users");

  const onChoosePage = (value: string) => {
    setOnPage(value);
  };

  const [studentDetail, setStudentDetail] = useState<Students>({
    id: "TD00230012",
    name: "Nam",
    lastName: "Nguyễn Đại ",
    saintName: "Đaminh",
    placeOfBirth: "HCM",
    dayOfBirth: "1997-06-23",
    image: "/images/avatar_4.jpg",
    saintNameFather: "Đaminh",
    nameFather: "Nguyễn Văn Hồng",
    phoneFather: "0772757220",
    saintNameMother: "Anna",
    nameMother: "Nguyễn Thị Nguyệt",
    phoneMother: "0772757335",
    address: "778/22/22, Thong Nhat, p.15, Go Vap, TpHCM",
    note: "Good",
    classItem: "Ấu 3B",
  });

  let titleHeader = "Users";

  let imageHeader = "./images/user.png";

  if (onPage === "user") {
    titleHeader = "Users";

    imageHeader = "./images/user.png";
  } else if (onPage === "role") {
    titleHeader = "Role & Permission";

    imageHeader = "../images/privacy.png";
  }

  const onStudentDetail = (value: Students) => {
    setStudentDetail(value);
  };

  return (
    <AppContext.Provider
      value={{
        onChoosePage,
        imageHeader,
        titleHeader,
        onStudentDetail,
        studentDetail,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
