"use client";

import { createContext, useState } from "react";

interface IProps {
  children: React.ReactNode;
}

export type AppContextType = {
  onChoosePage: (value: string) => void;

  titleHeader: string;

  imageHeader: string;
};

export const AppContext = createContext<AppContextType | null>(null);

const AppProvider = ({ children }: IProps) => {
  const [onPage, setOnPage] = useState("users");

  const onChoosePage = (value: string) => {
    setOnPage(value);
  };

  let titleHeader = "Users";

  let imageHeader = "./images/user.png";

  if (onPage === "user") {
    titleHeader = "Users";

    imageHeader = "./images/user.png";
  } else if (onPage === "role") {
    titleHeader = "Role & Permission";

    imageHeader = "../images/privacy.png";
  }

  return (
    <AppContext.Provider
      value={{
        onChoosePage,
        imageHeader,
        titleHeader,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
