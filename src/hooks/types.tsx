export interface Students {
  id?: string;
  lastName?: string;
  name?: string;
  saintName?: string;
  placeOfBirth?: string;
  dayOfBirth?: string;
  saintNameFather?: string;
  nameFather?: string;
  phoneFather?: string;
  saintNameMother?: string;
  nameMother?: string;
  phoneMother?: string;
  address?: string;
  note?: string;
  classItem?: string;
  date?: string;
  time?: string;
  image?: string;
  score?: {
    hk1?: {
      test15p?: number;
      test1Tiet?: number;
      exam?: number;
      averageScore?: number;
    };
    hk2?: {
      test15p?: number;
      test1Tiet?: number;
      exam?: number;
      averageScore?: number;
    };
    averageScoreTotal?: number;
    rank?: number;
    classification?: string;
    result?: string;
    noteResult?: string;
  };
}

export interface User {
  id: string;
  name: string;
  lastName: string;
  avatar: string;
  job: string;
  numberFollowers: number;
  numberFriends: number;
  about: {
    content: string;
    mail: string;
    live: string;
    company: string;
  };
  social: {
    facebook: string;
    instagram: string;
  };
  post: {
    id: number;
    avatar?: string;
    name?: string;
    lastName?: string;
    date?: string;
    content?: string;
    image?: string;
    comment?: {
      id?: string;
      name?: string;
      lastName?: string;
      avatar?: string;
      content?: string;
      date?: string;
    }[];
  }[];
}

export type Order = "asc" | "desc";

export interface UseStudents {
  signal?: AbortSignal;

  page: number;

  rowPerPage: number;

  oneOderDirection: Order;
}

export type Class =
  | "All"
  | "Chiên con"
  | "Ấu 1A"
  | "Ấu 1B"
  | "Ấu 2A"
  | "Ấu 2B"
  | "Ấu 3A"
  | "Ấu 3B"
  | "Thiếu 1 Nam"
  | "Thiếu 1 Nữ"
  | "Thiếu 2 Nam"
  | "Thiếu 2 Nữ"
  | "Thiếu 3 Nam"
  | "Thiếu 3 Nữ"
  | "Nghĩa 1"
  | "Nghĩa 2"
  | "Nghĩa 3"
  | "Dự trưởng 1"
  | "Dự trưởng 2";

export type Page =
  | "admin"
  | "chiencon"
  | "aunhi"
  | "thieunhi"
  | "nghiasi"
  | "dutruong"
  | "document"
  | "blog"
  | "Profile";

export type NganhChiencon = "Chiên con" | "Ấu 1A" | "Ấu 1B";

export type NganhAu = "Ấu 2A" | "Ấu 2B" | "Ấu 3A" | "Ấu 3B";

export type NganhNghia = "Nghĩa 1" | "Nghĩa 2" | "Nghĩa 3";

export type NganhThieu =
  | "Thiếu 1 Nam"
  | "Thiếu 1 Nữ"
  | "Thiếu 2 Nam"
  | "Thiếu 2 Nữ"
  | "Thiếu 3 Nam"
  | "Thiếu 3 Nữ";

export type NganhDutruong = "Dự trưởng 1" | "Dự trưởng 2";

export type NameClassList =
  | NganhChiencon[]
  | NganhAu[]
  | NganhNghia[]
  | NganhThieu[]
  | NganhDutruong[];

export type ValueTab = "Profile" | "Followers" | "Friends";

export interface NewPost {
  id: number;
  content: string;
  date: string;
  time: string;
  image?: string;
}
