"use client";

import { Students, Page, User, NewPost } from "@/hooks/types";
import { students, users } from "@/mocks/handler";
import { createContext, useState } from "react";

interface IProps {
  children: React.ReactNode;
}

export type AppContextType = {
  onChoosePage: (value: Page) => void;

  titleHeader: string;

  imageHeader: string;

  onStudentDetail: (studentId: number) => void;

  studentDetail: Students | undefined;

  studentsList: Students[];

  onStudentsList: (data: Students[]) => void;

  onRemoveStudent: (id: string) => void;

  onCreateStudent: (student: Students) => void;

  onStudentUpdate: (
    data: Students,
    id: string | undefined,
    studentImage: string
  ) => void;

  onScoreStudent: (
    id: string | undefined,
    score15pHk1: number,
    score1TietpHk1: number,
    scoreExamHk1: number,
    averageHk1: number,
    score15pHk2: number,
    score1TietpHk2: number,
    scoreExamHk2: number,
    averageHk2: number,
    scoreAverageTotal: number,
    classification: string,
    resultTotal: string,
    noteResult: string,
    ranking: number | undefined
  ) => void;

  onChooseClassItem: (data: Students[]) => void;

  usersList: User[];

  userItem: User;

  onCreateNewPost: (post: NewPost, id: string) => void;

  createCommentPost: (value: string, id: string, idPost: number) => void;
};

export const AppContext = createContext<AppContextType | null>(null);

const AppProvider = ({ children }: IProps) => {
  const [onPage, setOnPage] = useState("Admin");

  const onChoosePage = (value: Page) => {
    setOnPage(value);
  };

  const [studentsList, setStudentsList] = useState<Students[]>(students);

  const [studentDetail, setStudentDetail] = useState<Students | undefined>();

  const [studentClass, setStudentClass] = useState<Students[]>([]);

  const [usersList, setUsersList] = useState<User[]>(users);

  const [userItem, setUserItem] = useState<User>(usersList[0]);

  let titleHeader = "Admin";

  let imageHeader = "/images/users.png";

  if (onPage === "admin") {
    titleHeader = "Admin";

    imageHeader = "/images/users.png";
  } else if (onPage === "document") {
    titleHeader = "Document";

    imageHeader = "/images/users.png";
  } else if (onPage === "blog") {
    titleHeader = "Blog";

    imageHeader = "/images/users.png";
  } else if (onPage === "chiencon") {
    titleHeader = "Chiên Con";

    imageHeader = "/images/logo_chiencon.png";
  } else if (onPage === "aunhi") {
    titleHeader = "Ấu Nhi";

    imageHeader = "/images/logo_aunhi.png";
  } else if (onPage === "thieunhi") {
    titleHeader = "Thiếu Nhi";

    imageHeader = "/images/logo_thieu.png";
  } else if (onPage === "nghiasi") {
    titleHeader = "Nghĩa sĩ";

    imageHeader = "/images/logo_nghia.png";
  } else if (onPage === "dutruong") {
    titleHeader = "Dự Trưởng";

    imageHeader = "/images/logo_dutruong.png";
  } else if (onPage === "Profile") {
    titleHeader = "Profile";

    // imageHeader = "";
  }

  const onStudentDetail = (studentId: number) => {
    const id = String(studentId);
    const studentItem = studentsList?.find((student) => student.id === id);
    if (studentItem) {
      setStudentDetail(studentItem);
    }
  };

  const onStudentsList = (data: Students[]) => {
    setStudentsList(data);
  };

  const onCreateStudent = (student: Students) => {
    setStudentsList([...studentsList, student]);
  };

  const onRemoveStudent = (studentId: string) => {
    const deleteStudent = studentsList.filter(
      (student) => student.id !== studentId
    );

    setStudentsList(deleteStudent);
  };

  const onStudentUpdate = (
    student: Students,
    id: string | undefined,
    studentImage: string
  ) => {
    const studentItem = studentsList.find((student) => student.id === id);

    const studentIndex = studentsList.findIndex((student) => student.id === id);

    const day = new Date();

    const newStudent = {
      ...student,

      image: studentImage || studentItem?.image,
      id: id,
      date: [
        day.getDate(),
        day.toLocaleString("en-US", { month: "short" }),
        day.toLocaleString("en-US", { year: "2-digit" }),
      ].join(" "),
      time: [
        ("0" + day.getHours()).substr(-2),
        ("0" + day.getMinutes()).substr(-2),
      ].join(":"),
      score: {
        hk1: {
          test15p: studentItem?.score?.hk1?.test15p,
          test1Tiet: studentItem?.score?.hk2?.test1Tiet,
          exam: studentItem?.score?.hk1?.exam,
          averageScore: studentItem?.score?.hk1?.averageScore,
        },
        hk2: {
          test15p: studentItem?.score?.hk2?.test15p,
          test1Tiet: studentItem?.score?.hk2?.test1Tiet,
          exam: studentItem?.score?.hk2?.exam,
          averageScore: studentItem?.score?.hk2?.averageScore,
        },
        averageScoreTotal: studentItem?.score?.averageScoreTotal,
        classification: studentItem?.score?.classification,
        result: studentItem?.score?.result,
        noteResult: studentItem?.score?.noteResult,
        rank: studentItem?.score?.rank,
      },
    };

    studentsList[studentIndex] = newStudent;
  };

  const onScoreStudent = (
    id: string | undefined,
    score15pHk1: number,
    score1TietpHk1: number,
    scoreExamHk1: number,
    averageHk1: number,
    score15pHk2: number,
    score1TietpHk2: number,
    scoreExamHk2: number,
    averageHk2: number,
    scoreAverageTotal: number,
    classification: string,
    resultTotal: string,
    noteResult: string,
    ranking: number | undefined
  ) => {
    const studentIndex = studentsList.findIndex((student) => student.id === id);

    const nextStudentList = [...studentsList];

    nextStudentList[studentIndex] = {
      ...nextStudentList[studentIndex],
      score: {
        hk1: {
          test15p: score15pHk1,
          test1Tiet: score1TietpHk1,
          exam: scoreExamHk1,
          averageScore: averageHk1,
        },
        hk2: {
          test15p: score15pHk2,
          test1Tiet: score1TietpHk2,
          exam: scoreExamHk2,
          averageScore: averageHk2,
        },
        averageScoreTotal: scoreAverageTotal,
        classification: classification,
        result: resultTotal,
        noteResult: noteResult,
        rank: ranking,
      },
    };

    setStudentsList(nextStudentList);
  };

  const onChooseClassItem = (data: Students[]) => {
    setStudentClass(data);
  };

  const onCreateNewPost = (post: NewPost, id: string) => {
    const userIndex = usersList.findIndex((user) => user.id === id);

    const userItem = usersList.find((user) => user.id === id);

    const postItem = userItem?.post.find((postItem) => postItem.id === post.id);

    const newPost = {
      id: post.id,

      date: post.date,

      content: post.content,

      avatar: userItem?.avatar,

      name: userItem?.name,

      lastName: userItem?.lastName,

      image: post.image,

      comment: [],
    };

    const nextUser = [...usersList];

    if (newPost) {
      nextUser[userIndex].post.splice(0, 0, newPost);
    }

    setUsersList(nextUser);
  };

  const createCommentPost = (value: string, id: string, idPost: number) => {
    const userIndex = usersList.findIndex((user) => user.id === id);

    const userItem = usersList.find((user) => user.id === id);

    const day = new Date();

    const newComment = {
      id: id,
      name: userItem?.name,
      lastName: userItem?.lastName,
      avatar: userItem?.avatar,
      content: value,
      date: [
        day.getDate(),

        day.toLocaleString("en-US", { month: "short" }),

        day.toLocaleString("en-US", { year: "2-digit" }),
      ].join(" "),
    };

    const nextUser = [...usersList];

    const postItem = nextUser[userIndex].post.find(
      (postItem) => postItem.id === idPost
    );

    if (newComment) {
      postItem?.comment?.splice(0, 0, newComment);
    }

    setUsersList(nextUser);
  };

  return (
    <AppContext.Provider
      value={{
        onChoosePage,
        imageHeader,
        titleHeader,
        onStudentDetail,
        studentDetail,
        onStudentsList,
        studentsList: studentsList,
        onRemoveStudent,
        onCreateStudent,
        onStudentUpdate,
        onScoreStudent,
        onChooseClassItem,
        usersList,
        userItem,
        onCreateNewPost,
        createCommentPost,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
