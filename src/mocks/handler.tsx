import { Students } from "@/hooks/types";

import { rest } from "msw";

export let students: Students[] = [
  {
    id: "TD00230001",
    name: "Thắng",
    lastName: "Nguyễn Đại ",
    saintName: "Đaminh",
    placeOfBirth: "HCM",
    dayOfBirth: "1997-06-23",
    image: "/images/avatar_2.jpg",
    saintNameFather: "Đaminh",
    nameFather: "Nguyễn Văn Hồng",
    phoneFather: "0772757220",
    saintNameMother: "Anna",
    nameMother: "Nguyễn Thị Nguyệt",
    phoneMother: "0772757335",
    address: "778/22/22, Thong Nhat, p.15, Go Vap, TpHCM",
    note: "...",
    classItem: "Thiếu 2 Nữ",
    date: "20 Sep 23",
    time: "22:45",
  },
  {
    id: "TD00230002",
    name: "Lệ",
    lastName: "Nguyễn Đại ",
    saintName: "Đaminh",
    placeOfBirth: "HCM",
    dayOfBirth: "1997-06-23",
    image: "/images/avatar_3.jpg",
    saintNameFather: "Đaminh",
    nameFather: "Nguyễn Văn Hồng",
    phoneFather: "0772757220",
    saintNameMother: "Anna",
    nameMother: "Nguyễn Thị Nguyệt",
    phoneMother: "0772757335",
    address: "778/22/22, Thong Nhat, p.15, Go Vap, TpHCM",
    note: "...",
    classItem: "Ấu 3B",
    date: "20 Sep 23",
    time: "22:45",
  },
  {
    id: "TD00230003",
    name: "Thắng",
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
    note: "...",
    classItem: "Nghĩa 1",
    date: "20 Sep 23",
    time: "22:45",
  },
  {
    id: "TD00230004",
    name: "Thắng",
    lastName: "Nguyễn Đại ",
    saintName: "Đaminh",
    placeOfBirth: "HCM",
    dayOfBirth: "1997-06-23",
    image: "/images/avatar_5.jpg",
    saintNameFather: "Đaminh",
    nameFather: "Nguyễn Văn Hồng",
    phoneFather: "0772757220",
    saintNameMother: "Anna",
    nameMother: "Nguyễn Thị Nguyệt",
    phoneMother: "0772757335",
    address: "778/22/22, Thong Nhat, p.15, Go Vap, TpHCM",
    note: "...",
    classItem: "Thiếu 2 Nữ",
    date: "20 Sep 23",
    time: "22:45",
  },
  {
    id: "TD00230005",
    name: "Thắng",
    lastName: "Nguyễn Đại ",
    saintName: "Đaminh",
    placeOfBirth: "HCM",
    dayOfBirth: "1997-06-23",
    image: "/images/avatar_2.jpg",
    saintNameFather: "Đaminh",
    nameFather: "Nguyễn Văn Hồng",
    phoneFather: "0772757220",
    saintNameMother: "Anna",
    nameMother: "Nguyễn Thị Nguyệt",
    phoneMother: "0772757335",
    address: "778/22/22, Thong Nhat, p.15, Go Vap, TpHCM",
    note: "...",
    classItem: "Ấu 3B",
    date: "20 Sep 23",
    time: "22:45",
  },
  {
    id: "TD00230006",
    name: "Thắng",
    lastName: "Nguyễn Đại ",
    saintName: "Đaminh",
    placeOfBirth: "HCM",
    dayOfBirth: "1997-06-23",
    image: "/images/avatar_6.jpg",
    saintNameFather: "Đaminh",
    nameFather: "Nguyễn Văn Hồng",
    phoneFather: "0772757220",
    saintNameMother: "Anna",
    nameMother: "Nguyễn Thị Nguyệt",
    phoneMother: "0772757335",
    address: "778/22/22, Thong Nhat, p.15, Go Vap, TpHCM",
    note: "...",
    classItem: "Ấu 1B",
    date: "20 Sep 23",
    time: "22:45",
  },
  {
    id: "TD00230007",
    name: "Thắng",
    lastName: "Nguyễn Đại ",
    saintName: "Đaminh",
    placeOfBirth: "HCM",
    dayOfBirth: "1997-06-23",
    image: "/images/avatar_5.jpg",
    saintNameFather: "Đaminh",
    nameFather: "Nguyễn Văn Hồng",
    phoneFather: "0772757220",
    saintNameMother: "Anna",
    nameMother: "Nguyễn Thị Nguyệt",
    phoneMother: "0772757335",
    address: "778/22/22, Thong Nhat, p.15, Go Vap, TpHCM",
    note: "...",
    classItem: "Chiên con",
    date: "20 Sep 23",
    time: "22:45",
  },
  {
    id: "TD00230008",
    name: "Thắng",
    lastName: "Nguyễn Đại ",
    saintName: "Đaminh",
    placeOfBirth: "HCM",
    dayOfBirth: "1997-06-23",
    image: "/images/avatar_3.jpg",
    saintNameFather: "Đaminh",
    nameFather: "Nguyễn Văn Hồng",
    phoneFather: "0772757220",
    saintNameMother: "Anna",
    nameMother: "Nguyễn Thị Nguyệt",
    phoneMother: "0772757335",
    address: "778/22/22, Thong Nhat, p.15, Go Vap, TpHCM",
    note: "...",
    classItem: "Chiên con",
    date: "20 Sep 23",
    time: "22:45",
  },
  {
    id: "TD00230009",
    name: "Thắng",
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
    note: "...",
    classItem: "Thiếu 2 Nam",
    date: "20 Sep 23",
    time: "22:45",
  },
  {
    id: "TD00230010",
    name: "Thắng",
    lastName: "Nguyễn Đại ",
    saintName: "Đaminh",
    placeOfBirth: "HCM",
    dayOfBirth: "1997-06-23",
    image: "/images/avatar_5.jpg",
    saintNameFather: "Đaminh",
    nameFather: "Nguyễn Văn Hồng",
    phoneFather: "0772757220",
    saintNameMother: "Anna",
    nameMother: "Nguyễn Thị Nguyệt",
    phoneMother: "0772757335",
    address: "778/22/22, Thong Nhat, p.15, Go Vap, TpHCM",
    note: "...",
    classItem: "Ấu 2A",
    date: "20 Sep 23",
    time: "22:45",
  },
  {
    id: "TD00230011",
    name: "Nam",
    lastName: "Nguyễn Đại ",
    saintName: "Đaminh",
    placeOfBirth: "HCM",
    dayOfBirth: "1997-06-23",
    image: "/images/avatar_3.jpg",
    saintNameFather: "Đaminh",
    nameFather: "Nguyễn Văn Hồng",
    phoneFather: "0772757220",
    saintNameMother: "Anna",
    nameMother: "Nguyễn Thị Nguyệt",
    phoneMother: "0772757335",
    address: "778/22/22, Thong Nhat, p.15, Go Vap, TpHCM",
    note: "...",
    classItem: "Ấu 1A",
    date: "20 Sep 23",
    time: "22:45",
  },
  {
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
    note: "...",
    classItem: "Ấu 3B",
    date: "20 Sep 23",
    time: "22:45",
  },
  {
    id: "TD00230013",
    name: "Nam",
    lastName: "Nguyễn Đại ",
    saintName: "Đaminh",
    placeOfBirth: "HCM",
    dayOfBirth: "1997-06-23",
    image: "/images/avatar_6.jpg",
    saintNameFather: "Đaminh",
    nameFather: "Nguyễn Văn Hồng",
    phoneFather: "0772757220",
    saintNameMother: "Anna",
    nameMother: "Nguyễn Thị Nguyệt",
    phoneMother: "0772757335",
    address: "778/22/22, Thong Nhat, p.15, Go Vap, TpHCM",
    note: "...",
    classItem: "Dự trưởng 1",
    date: "20 Sep 23",
    time: "22:45",
  },
];

export const handlers = [
  rest.get("/admin", (req, res, ctx) => {
    // let studentsList: Students[] = [];

    // const search = req.url.searchParams.get("search");

    // const page = Number(req.url.searchParams.get("page"));

    // const rowPerPage = Number(req.url.searchParams.get("rowPerPage"));

    // let pageItem = 0;

    // if (page || rowPerPage) {
    //   pageItem = page + 1;

    //   const firstPageIndex = (pageItem - 1) * rowPerPage;

    //   const lastPageIndex = firstPageIndex + rowPerPage;

    //   const studentsPerPage = students.slice(firstPageIndex, lastPageIndex);

    //   studentsList = studentsPerPage;
    // }

    // if (search === null) {
    //   studentsList = students;
    // }

    // if (search) {
    //   const filteredStudentsList = students.filter((student) => {
    //     const searchableText = `${student.name} `;

    //     return searchableText.toLowerCase().includes(search.toLowerCase());
    //   });

    //   studentsList = filteredStudentsList;
    // }
    console.log("students:", students);
    return res(
      ctx.status(200),
      ctx.json({
        students,
      })
    );
  }),
];
