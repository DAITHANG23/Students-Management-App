"use client";

import { Students, User } from "@/hooks/types";

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
    score: {
      hk1: {
        test15p: 9,
        test1Tiet: 9,
        exam: 9,
        averageScore: 9,
      },
      hk2: {
        test15p: 9,
        test1Tiet: 9,
        exam: 9,
        averageScore: 9,
      },
      averageScoreTotal: 9,
      rank: 1,
      classification: "Giỏi",
      result: "Lên lớp",
      noteResult: "Good",
    },
  },
  {
    id: "TD00230002",
    name: "Châu",
    lastName: " Vũ Ái Minh ",
    saintName: "Maria",
    placeOfBirth: "HCM",
    dayOfBirth: "2009-10-20",
    image: "/images/avatar_3.jpg",
    saintNameFather: "Phero",
    nameFather: "Nguyễn Văn Dũng",
    phoneFather: "0772757220",
    saintNameMother: "Anna",
    nameMother: "Nguyễn Thị Nguyệt",
    phoneMother: "0937081216",
    address: "627/41 Phạm Văn Chiêu, Phường 13, Quận Gò Vấp",
    note: "...",
    classItem: "Thiếu 2 Nữ",
    date: "20 Sep 23",
    time: "22:45",
    score: {
      hk1: {
        test15p: 6,
        test1Tiet: 7,
        exam: 8,
        averageScore: 7.5,
      },
      hk2: {
        test15p: 7,
        test1Tiet: 7,
        exam: 7,
        averageScore: 7,
      },
      averageScoreTotal: 7.3,
      rank: 12,
      classification: "Khá",
      result: "Lên lớp",
      noteResult: "Good",
    },
  },
  {
    id: "TD00230003",
    name: " Hà",
    lastName: "Vũ Thanh ",
    saintName: "Anna",
    placeOfBirth: "HCM",
    dayOfBirth: "2009-3-1",
    image: "/images/avatar_4.jpg",
    saintNameFather: "Phero",
    nameFather: "Vũ Minh Đức ",
    phoneFather: "0772757220",
    saintNameMother: "Maria",
    nameMother: "Đặng Nguyễn Kim Nhật Liên",
    phoneMother: "0772757335",
    address: "25/84/16, KP3B, P. Thạnh Lộc, Quận 12",
    note: "...",
    classItem: "Nghĩa 1",
    date: "20 Sep 23",
    time: "22:45",
    score: {
      hk1: {
        test15p: 9,
        test1Tiet: 9,
        exam: 8,
        averageScore: 9,
      },
      hk2: {
        test15p: 9,
        test1Tiet: 9,
        exam: 8,
        averageScore: 9,
      },
      averageScoreTotal: 8.8,
      rank: 2,
      classification: "Giỏi",
      result: "Lên lớp",
      noteResult: "Good",
    },
  },
  {
    id: "TD00230004",
    name: "Hiền",
    lastName: "Trần Ngọc Thanh  ",
    saintName: "Anna",
    placeOfBirth: "HCM",
    dayOfBirth: "2007-06-23",
    image: "/images/avatar_5.jpg",
    saintNameFather: "Gioan",
    nameFather: "Trần Vương Quốc Thanh",
    phoneFather: "0903248743",
    saintNameMother: "Anna",
    nameMother: " Nguyễn Thị Thu Liễu",
    phoneMother: "0383809973",
    address: "778/38/1 Thống Nhất P.15 Gò Vấp",
    note: "...",
    classItem: "Nghĩa 1",
    date: "20 Sep 23",
    time: "22:45",
    score: {
      hk1: {
        test15p: 9,
        test1Tiet: 9,
        exam: 9,
        averageScore: 9,
      },
      hk2: {
        test15p: 9,
        test1Tiet: 9,
        exam: 9,
        averageScore: 9,
      },
      averageScoreTotal: 9,
      rank: 1,
      classification: "Giỏi",
      result: "Lên lớp",
      noteResult: "Good",
    },
  },
  {
    id: "TD00230005",
    name: "Nam",
    lastName: "Nguyễn ",
    saintName: "GioanB",
    placeOfBirth: "HCM",
    dayOfBirth: "2009-11-16",
    image: "/images/avatar_2.jpg",
    saintNameFather: "GioanB",
    nameFather: "Nguyễn Quốc Việt",
    phoneFather: "0772757220",
    saintNameMother: "Anna",
    nameMother: "Nguyễn Thị Hằng",
    phoneMother: "0772757323",
    address: "778/35 Thống Nhất, Phường 15, Quận Gò Vấp",
    note: "...",
    classItem: "Nghĩa 2",
    date: "20 Sep 23",
    time: "22:45",
    score: {
      hk1: {
        test15p: 7,
        test1Tiet: 9,
        exam: 9,
        averageScore: 9,
      },
      hk2: {
        test15p: 9,
        test1Tiet: 8,
        exam: 9,
        averageScore: 8,
      },
      averageScoreTotal: 8.5,
      rank: 5,
      classification: "Giỏi",
      result: "Lên lớp",
      noteResult: "Good",
    },
  },
  {
    id: "TD00230006",
    name: "Nhi",
    lastName: " Nguyễn Huỳnh Xuân ",
    saintName: "Anna",
    placeOfBirth: "HCM",
    dayOfBirth: "2008-03-12",
    image: "/images/avatar_6.jpg",
    saintNameFather: "Giu",
    nameFather: "Nguyễn Văn Hiếu",
    phoneFather: "0986940035",
    saintNameMother: "Teresa",
    nameMother: "Huỳnh Thị Hiền",
    phoneMother: "0966891507",
    address: "778/35 Thống Nhất, Phường 15, Quận Gò Vấp",
    note: "...",
    classItem: "Nghĩa 2",
    date: "20 Sep 23",
    time: "22:45",
    score: {
      hk1: {
        test15p: 9,
        test1Tiet: 9,
        exam: 9,
        averageScore: 9,
      },
      hk2: {
        test15p: 9,
        test1Tiet: 9,
        exam: 9,
        averageScore: 9,
      },
      averageScoreTotal: 9,
      rank: 1,
      classification: "Giỏi",
      result: "Lên lớp",
      noteResult: "Good",
    },
  },
  {
    id: "TD00230007",
    name: "Thư",
    lastName: "Trịnh Hoàng Minh ",
    saintName: "Anna",
    placeOfBirth: "HCM",
    dayOfBirth: "1997-06-23",
    image: "/images/avatar_5.jpg",
    saintNameFather: "Phero",
    nameFather: " Trịnh Thanh Tùng",
    phoneFather: "0703355118",
    saintNameMother: "Anna",
    nameMother: "Võ Thị Kim Oanh",
    phoneMother: "0787593761",
    address: "778/32/27T Thống Nhất, Phường 15, Quận Gò Vấp",
    note: "...",
    classItem: "Chiên con",
    date: "20 Sep 23",
    time: "22:45",
    score: {
      hk1: {
        test15p: 10,
        test1Tiet: 10,
        exam: 9,
        averageScore: 9,
      },
      hk2: {
        test15p: 10,
        test1Tiet: 9,
        exam: 8,
        averageScore: 10,
      },
      averageScoreTotal: 9.6,
      rank: 8,
      classification: "Khá",
      result: "Lên lớp",
      noteResult: "Khá",
    },
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
    score: {
      hk1: {
        test15p: 9,
        test1Tiet: 9,
        exam: 9,
        averageScore: 9,
      },
      hk2: {
        test15p: 9,
        test1Tiet: 9,
        exam: 9,
        averageScore: 9,
      },
      averageScoreTotal: 9,
      rank: 1,
      classification: "Giỏi",
      result: "Lên lớp",
      noteResult: "Good",
    },
  },
  {
    id: "TD00230009",
    name: "Việt",
    lastName: "Nguyễn Quốc ",
    saintName: "Đaminh",
    placeOfBirth: "HCM",
    dayOfBirth: "2007-06-23",
    image: "/images/avatar_4.jpg",
    saintNameFather: "Đaminh",
    nameFather: "Nguyễn Văn Tùng",
    phoneFather: "0772753323",
    saintNameMother: "Anna",
    nameMother: "Nguyễn Thị Tươi",
    phoneMother: "0772757335",
    address: "779/32/12 Thống Nhất, Quận Gò Vấp",
    note: "...",
    classItem: "Thiếu 2 Nam",
    date: "20 Sep 23",
    time: "22:45",
    score: {
      hk1: {
        test15p: 5,
        test1Tiet: 5,
        exam: 7,
        averageScore: 5,
      },
      hk2: {
        test15p: 4,
        test1Tiet: 6,
        exam: 7,
        averageScore: 6,
      },
      averageScoreTotal: 5.6,
      rank: 35,
      classification: "Trung Bình",
      result: "Lên lớp",
      noteResult: "Khá",
    },
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
    classItem: "Thiếu 2 Nam",
    date: "20 Sep 23",
    time: "22:45",
    score: {
      hk1: {
        test15p: 9,
        test1Tiet: 9,
        exam: 9,
        averageScore: 9,
      },
      hk2: {
        test15p: 9,
        test1Tiet: 6,
        exam: 9,
        averageScore: 7,
      },
      averageScoreTotal: 8.0,
      rank: 10,
      classification: "Giỏi",
      result: "Lên lớp",
      noteResult: "Good",
    },
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
    nameFather: "Nguyễn Hồ",
    phoneFather: "0772752414",
    saintNameMother: "Anna",
    nameMother: "Nguyễn Thị Tuyết",
    phoneMother: "0772757335",
    address: "778/22/22, Thong Nhat, p.15, Go Vap, TpHCM",
    note: "...",
    classItem: "Thiếu 1 Nam",
    date: "20 Sep 23",
    time: "22:45",
    score: {
      hk1: {
        test15p: 9,
        test1Tiet: 6.3,
        exam: 10,
        averageScore: 9,
      },
      hk2: {
        test15p: 9,
        test1Tiet: 9,
        exam: 7.5,
        averageScore: 9,
      },
      averageScoreTotal: 9,
      rank: 4,
      classification: "Giỏi",
      result: "Lên lớp",
      noteResult: "Good",
    },
  },
  {
    id: "TD00230012",
    name: "Tiến",
    lastName: "Nguyễn Đại ",
    saintName: "Phaolo",
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
    classItem: "Thiếu 1 Nam",
    date: "20 Sep 23",
    time: "22:45",
    score: {
      hk1: {
        test15p: 9,
        test1Tiet: 9,
        exam: 9,
        averageScore: 9,
      },
      hk2: {
        test15p: 9,
        test1Tiet: 9,
        exam: 9,
        averageScore: 9,
      },
      averageScoreTotal: 9,
      rank: 1,
      classification: "Giỏi",
      result: "Lên lớp",
      noteResult: "Good",
    },
  },
  {
    id: "TD00230013",
    name: "Nam",
    lastName: "Nguyễn Đại ",
    saintName: "Matheu",
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
    score: {
      hk1: {
        test15p: 9,
        test1Tiet: 9,
        exam: 9,
        averageScore: 9,
      },
      hk2: {
        test15p: 9,
        test1Tiet: 9,
        exam: 9,
        averageScore: 9,
      },
      averageScoreTotal: 9,
      rank: 1,
      classification: "Giỏi",
      result: "Lên lớp",
      noteResult: "Good",
    },
  },
  {
    id: "TD00230014",
    name: "Danh",
    lastName: "Nguyễn Viết ",
    saintName: "Gioan",
    placeOfBirth: "HCM",
    dayOfBirth: "2006-06-23",
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
    score: {
      hk1: {
        test15p: 9.5,
        test1Tiet: 7.5,
        exam: 8,
        averageScore: 8.3,
      },
      hk2: {
        test15p: 6.5,
        test1Tiet: 9,
        exam: 9,
        averageScore: 8.5,
      },
      averageScoreTotal: 8.3,
      rank: 12,
      classification: "Giỏi",
      result: "Lên lớp",
      noteResult: "Good",
    },
  },
  {
    id: "TD00230015",
    name: "Nam",
    lastName: "Nguyễn Việt ",
    saintName: "Anre",
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
    classItem: "Dự trưởng 2",
    date: "20 Sep 23",
    time: "22:45",
    score: {
      hk1: {
        test15p: 9,
        test1Tiet: 9,
        exam: 9,
        averageScore: 9,
      },
      hk2: {
        test15p: 9,
        test1Tiet: 9,
        exam: 9,
        averageScore: 9,
      },
      averageScoreTotal: 9,
      rank: 1,
      classification: "Giỏi",
      result: "Lên lớp",
      noteResult: "Good",
    },
  },
  {
    id: "TD00230016",
    name: "Hảo",
    lastName: "Nguyễn Xuân ",
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
    classItem: "Dự trưởng 2",
    date: "20 Sep 23",
    time: "22:45",
    score: {
      hk1: {
        test15p: 9,
        test1Tiet: 9,
        exam: 9,
        averageScore: 9,
      },
      hk2: {
        test15p: 9,
        test1Tiet: 9,
        exam: 9,
        averageScore: 9,
      },
      averageScoreTotal: 9,
      rank: 1,
      classification: "Giỏi",
      result: "Lên lớp",
      noteResult: "Good",
    },
  },
  {
    id: "TD00230017",
    name: "Cương",
    lastName: "Đinh Đồng",
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
    classItem: "Nghĩa 3",
    date: "20 Sep 23",
    time: "22:45",
    score: {
      hk1: {
        test15p: 9,
        test1Tiet: 9,
        exam: 9,
        averageScore: 9,
      },
      hk2: {
        test15p: 9,
        test1Tiet: 9,
        exam: 9,
        averageScore: 9,
      },
      averageScoreTotal: 9,
      rank: 1,
      classification: "Giỏi",
      result: "Lên lớp",
      noteResult: "Good",
    },
  },
  {
    id: "TD00230018",
    name: "Thảo",
    lastName: "Nguyễn Kim ",
    saintName: "Anna",
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
    classItem: "Nghĩa 3",
    date: "20 Sep 23",
    time: "22:45",
    score: {
      hk1: {
        test15p: 9,
        test1Tiet: 9,
        exam: 9,
        averageScore: 9,
      },
      hk2: {
        test15p: 9,
        test1Tiet: 9,
        exam: 9,
        averageScore: 9,
      },
      averageScoreTotal: 9,
      rank: 1,
      classification: "Giỏi",
      result: "Lên lớp",
      noteResult: "Good",
    },
  },
  {
    id: "TD00230019",
    name: "Anh",
    lastName: "Nguyễn Vân ",
    saintName: "Maria",
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
    classItem: "Ấu 1A",
    date: "20 Sep 23",
    time: "22:45",
    score: {
      hk1: {
        test15p: 9,
        test1Tiet: 9,
        exam: 9,
        averageScore: 9,
      },
      hk2: {
        test15p: 9,
        test1Tiet: 9,
        exam: 9,
        averageScore: 9,
      },
      averageScoreTotal: 9,
      rank: 1,
      classification: "Giỏi",
      result: "Lên lớp",
      noteResult: "Good",
    },
  },
  {
    id: "TD00230020",
    name: "Lan",
    lastName: "Nguyễn Tuyết ",
    saintName: "Anna",
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
    classItem: "Ấu 1A",
    date: "20 Sep 23",
    time: "22:45",
    score: {
      hk1: {
        test15p: 9,
        test1Tiet: 9,
        exam: 9,
        averageScore: 9,
      },
      hk2: {
        test15p: 9,
        test1Tiet: 9,
        exam: 9,
        averageScore: 9,
      },
      averageScoreTotal: 9,
      rank: 1,
      classification: "Giỏi",
      result: "Lên lớp",
      noteResult: "Good",
    },
  },
  {
    id: "TD00230021",
    name: "Bình",
    lastName: "Phạm Văn ",
    saintName: "Luca",
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
    classItem: "Ấu 1B",
    date: "20 Sep 23",
    time: "22:45",
    score: {
      hk1: {
        test15p: 9,
        test1Tiet: 9,
        exam: 9,
        averageScore: 9,
      },
      hk2: {
        test15p: 9,
        test1Tiet: 9,
        exam: 9,
        averageScore: 9,
      },
      averageScoreTotal: 9,
      rank: 1,
      classification: "Giỏi",
      result: "Lên lớp",
      noteResult: "Good",
    },
  },
  {
    id: "TD00230022",
    name: "Thiên",
    lastName: "Nguyễn Văn ",
    saintName: "Phero",
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
    classItem: "Ấu 1B",
    date: "20 Sep 23",
    time: "22:45",
    score: {
      hk1: {
        test15p: 9,
        test1Tiet: 9,
        exam: 9,
        averageScore: 9,
      },
      hk2: {
        test15p: 9,
        test1Tiet: 9,
        exam: 9,
        averageScore: 9,
      },
      averageScoreTotal: 9,
      rank: 1,
      classification: "Giỏi",
      result: "Lên lớp",
      noteResult: "Good",
    },
  },
  {
    id: "TD00230023",
    name: "Toàn",
    lastName: "Nguyễn Thiên ",
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
    classItem: "Ấu 2A",
    date: "20 Sep 23",
    time: "22:45",
    score: {
      hk1: {
        test15p: 9,
        test1Tiet: 9,
        exam: 9,
        averageScore: 9,
      },
      hk2: {
        test15p: 9,
        test1Tiet: 9,
        exam: 9,
        averageScore: 9,
      },
      averageScoreTotal: 9,
      rank: 1,
      classification: "Giỏi",
      result: "Lên lớp",
      noteResult: "Good",
    },
  },
  {
    id: "TD00230024",
    name: "Tuyết",
    lastName: "Nguyễn Ngọc ",
    saintName: "Maria",
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
    classItem: "Ấu 2A",
    date: "20 Sep 23",
    time: "22:45",
    score: {
      hk1: {
        test15p: 9,
        test1Tiet: 9,
        exam: 9,
        averageScore: 9,
      },
      hk2: {
        test15p: 9,
        test1Tiet: 9,
        exam: 9,
        averageScore: 9,
      },
      averageScoreTotal: 9,
      rank: 2,
      classification: "Giỏi",
      result: "Lên lớp",
      noteResult: "Good",
    },
  },
  {
    id: "TD00230025",
    name: "Nhi",
    lastName: "Nguyễn Tuyết ",
    saintName: "Teresa",
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
    classItem: "Ấu 2B",
    date: "20 Sep 23",
    time: "22:45",
    score: {
      hk1: {
        test15p: 9,
        test1Tiet: 9,
        exam: 9,
        averageScore: 9,
      },
      hk2: {
        test15p: 9,
        test1Tiet: 9,
        exam: 9,
        averageScore: 9,
      },
      averageScoreTotal: 9,
      rank: 2,
      classification: "Giỏi",
      result: "Lên lớp",
      noteResult: "Good",
    },
  },
  {
    id: "TD00230026",
    name: "Nam",
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
    classItem: "Ấu 2B",
    date: "20 Sep 23",
    time: "22:45",
    score: {
      hk1: {
        test15p: 9,
        test1Tiet: 9,
        exam: 9,
        averageScore: 9,
      },
      hk2: {
        test15p: 9,
        test1Tiet: 9,
        exam: 9,
        averageScore: 9,
      },
      averageScoreTotal: 9,
      rank: 2,
      classification: "Giỏi",
      result: "Lên lớp",
      noteResult: "Good",
    },
  },
  {
    id: "TD00230027",
    name: "Nam",
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
    classItem: "Ấu 3A",
    date: "20 Sep 23",
    time: "22:45",
    score: {
      hk1: {
        test15p: 9,
        test1Tiet: 9,
        exam: 9,
        averageScore: 9,
      },
      hk2: {
        test15p: 9,
        test1Tiet: 9,
        exam: 9,
        averageScore: 9,
      },
      averageScoreTotal: 9,
      rank: 2,
      classification: "Giỏi",
      result: "Lên lớp",
      noteResult: "Good",
    },
  },
  {
    id: "TD00230028",
    name: "Phương",
    lastName: "Nguyễn Vũ ",
    saintName: "Ceselia",
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
    classItem: "Ấu 3A",
    date: "20 Sep 23",
    time: "22:45",
    score: {
      hk1: {
        test15p: 9,
        test1Tiet: 9,
        exam: 9,
        averageScore: 9,
      },
      hk2: {
        test15p: 9,
        test1Tiet: 9,
        exam: 9,
        averageScore: 9,
      },
      averageScoreTotal: 9,
      rank: 2,
      classification: "Giỏi",
      result: "Lên lớp",
      noteResult: "Good",
    },
  },
  {
    id: "TD00230029",
    name: "Ngân",
    lastName: "Nguyễn Kim ",
    saintName: "Maria",
    placeOfBirth: "HCM",
    dayOfBirth: "1997-06-23",
    image: "/images/avatar_6.jpg",
    saintNameFather: "Đaminh",
    nameFather: "Nguyễn Văn Việt",
    phoneFather: "0772757220",
    saintNameMother: "Anna",
    nameMother: "Nguyễn Thị Nguyệt",
    phoneMother: "0772757335",
    address: "778/22/22, Thong Nhat, p.15, Go Vap, TpHCM",
    note: "...",
    classItem: "Thiếu 1 Nữ",
    date: "20 Sep 23",
    time: "22:45",
    score: {
      hk1: {
        test15p: 9,
        test1Tiet: 9,
        exam: 9,
        averageScore: 9,
      },
      hk2: {
        test15p: 9,
        test1Tiet: 9,
        exam: 9,
        averageScore: 9,
      },
      averageScoreTotal: 9,
      rank: 2,
      classification: "Giỏi",
      result: "Lên lớp",
      noteResult: "Good",
    },
  },
  {
    id: "TD00230030",
    name: "Thương",
    lastName: "Nguyễn Mỹ ",
    saintName: "Anna",
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
    classItem: "Thiếu 1 Nữ",
    date: "20 Sep 23",
    time: "22:45",
    score: {
      hk1: {
        test15p: 9,
        test1Tiet: 9,
        exam: 9,
        averageScore: 9,
      },
      hk2: {
        test15p: 9,
        test1Tiet: 9,
        exam: 9,
        averageScore: 9,
      },
      averageScoreTotal: 9,
      rank: 2,
      classification: "Giỏi",
      result: "Lên lớp",
      noteResult: "Good",
    },
  },
  {
    id: "TD00230031",
    name: "Hương",
    lastName: "Nguyễn Thị ",
    saintName: "Maria",
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
    classItem: "Thiếu 3 Nữ",
    date: "20 Sep 23",
    time: "22:45",
    score: {
      hk1: {
        test15p: 9,
        test1Tiet: 9,
        exam: 9,
        averageScore: 9,
      },
      hk2: {
        test15p: 9,
        test1Tiet: 9,
        exam: 9,
        averageScore: 9,
      },
      averageScoreTotal: 9,
      rank: 2,
      classification: "Giỏi",
      result: "Lên lớp",
      noteResult: "Good",
    },
  },
  {
    id: "TD00230038",
    name: "My",
    lastName: "Nguyễn Ngọc ",
    saintName: "Teresa",
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
    classItem: "Thiếu 3 Nữ",
    date: "20 Sep 23",
    time: "22:45",
    score: {
      hk1: {
        test15p: 9,
        test1Tiet: 9,
        exam: 9,
        averageScore: 9,
      },
      hk2: {
        test15p: 9,
        test1Tiet: 9,
        exam: 9,
        averageScore: 9,
      },
      averageScoreTotal: 9,
      rank: 2,
      classification: "Giỏi",
      result: "Lên lớp",
      noteResult: "Good",
    },
  },
  {
    id: "TD00230032",
    name: "Khang",
    lastName: "Nguyễn Tuấn ",
    saintName: "Đaminh",
    placeOfBirth: "HCM",
    dayOfBirth: "1997-06-23",
    image: "/images/avatar_3.jpg",
    saintNameFather: "Đaminh",
    nameFather: "Nguyễn Văn Dũng",
    phoneFather: "0772757220",
    saintNameMother: "Anna",
    nameMother: "Nguyễn Thị Nguyệt",
    phoneMother: "0772757335",
    address: " Thong Nhat, p.15, Go Vap, TpHCM",
    note: "...",
    classItem: "Thiếu 3 Nam",
    date: "20 Sep 23",
    time: "22:45",
    score: {
      hk1: {
        test15p: 9,
        test1Tiet: 9,
        exam: 9,
        averageScore: 9,
      },
      hk2: {
        test15p: 9,
        test1Tiet: 9,
        exam: 9,
        averageScore: 9,
      },
      averageScoreTotal: 9,
      rank: 2,
      classification: "Giỏi",
      result: "Lên lớp",
      noteResult: "Good",
    },
  },
  {
    id: "TD00230033",
    name: "hoàng",
    lastName: "Vũ Viết ",
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
    classItem: "Thiếu 3 Nam",
    date: "20 Sep 23",
    time: "22:45",
    score: {
      hk1: {
        test15p: 9,
        test1Tiet: 9,
        exam: 9,
        averageScore: 9,
      },
      hk2: {
        test15p: 9,
        test1Tiet: 9,
        exam: 9,
        averageScore: 9,
      },
      averageScoreTotal: 9,
      rank: 2,
      classification: "Giỏi",
      result: "Lên lớp",
      noteResult: "Good",
    },
  },
  {
    id: "TD00230034",
    name: "Tuấn",
    lastName: "Hoàng ",
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
    score: {
      hk1: {
        test15p: 9,
        test1Tiet: 9,
        exam: 9,
        averageScore: 9,
      },
      hk2: {
        test15p: 9,
        test1Tiet: 9,
        exam: 9,
        averageScore: 9,
      },
      averageScoreTotal: 9,
      rank: 2,
      classification: "Giỏi",
      result: "Lên lớp",
      noteResult: "Good",
    },
  },
  {
    id: "TD00230035",
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
    classItem: "Ấu 3B",
    date: "20 Sep 23",
    time: "22:45",
    score: {
      hk1: {
        test15p: 9,
        test1Tiet: 9,
        exam: 9,
        averageScore: 9,
      },
      hk2: {
        test15p: 9,
        test1Tiet: 9,
        exam: 9,
        averageScore: 9,
      },
      averageScoreTotal: 9,
      rank: 2,
      classification: "Giỏi",
      result: "Lên lớp",
      noteResult: "Good",
    },
  },
];

export const users: User[] = [
  {
    id: "1",
    name: "Dom",
    lastName: "Nguyen",
    avatar: "/images/avatar_6.jpg",
    job: "Frontend Developer",
    numberFollowers: 20,
    numberFriends: 20,
    about: {
      content: "I love Information Technology",
      mail: "Nguyendaithang23061997@gmail.com",
      live: "HCM",
      company: "freelancer",
    },
    social: {
      facebook: "https://www.facebook.com/DomNguyen2306",
      instagram: "https://www.instagram.com/nguyen_dai_thang/",
    },
    post: [
      {
        id: 1,
        name: "Dom",
        lastName: "Nguyen",
        avatar: "/images/avatar_6.jpg",
        date: "11 Oct 2023",
        content:
          "The sun slowly set over the horizon, painting the sky in vibrant hues of orange and pink.",
        image:
          "https://api-prod-minimal-v510.vercel.app/assets/images/travel/travel_2.jpg",
        comment: [
          {
            id: "2",
            name: "Anna",
            lastName: "Nguyen",
            avatar: "/images/avatar_3.jpg",
            content: "Wow, so beautiful !!",
            date: "12 Oct 2023",
          },
          {
            id: "3",
            name: "Marry",
            lastName: "Nguyen",
            avatar: "/images/avatar_4.jpg",
            content: "Wow, so beautiful !!",
            date: "12 Oct 2023",
          },
        ],
      },
      {
        id: 2,
        name: "Dom",
        lastName: "Nguyen",
        avatar: "/images/avatar_6.jpg",
        date: "11 Oct 2023",
        content:
          "The old oak tree stood tall and majestic, its branches swaying gently in the breeze.",
        image:
          "https://api-prod-minimal-v510.vercel.app/assets/images/travel/travel_3.jpg",
        comment: [
          {
            id: "2",
            name: "Anna",
            lastName: "Nguyen",
            avatar: "/images/avatar_2.jpg",
            content: "Wow, so beautiful !!",
            date: "12 Oct 2023",
          },
          {
            id: "3",
            name: "Marry",
            lastName: "Nguyen",
            avatar: "/images/avatar_5.jpg",
            content: "Wow, so beautiful !!",
            date: "12 Oct 2023",
          },
        ],
      },
      {
        id: 3,
        name: "Dom",
        lastName: "Nguyen",
        avatar: "/images/avatar_6.jpg",
        date: "10 Oct 2023",
        content:
          "She eagerly opened the gift, her eyes sparkling with excitement.",
        image:
          "https://api-prod-minimal-v510.vercel.app/assets/images/travel/travel_4.jpg",
        comment: [
          {
            id: "2",
            name: "Anna",
            lastName: "Nguyen",
            avatar: "/images/avatar_3.jpg",
            content: "Wow, so beautiful !!",
            date: "12 Oct 2023",
          },
          {
            id: "3",
            name: "Marry",
            lastName: "Nguyen",
            avatar: "/images/avatar_4.jpg",
            content: "Wow, so beautiful !!",
            date: "12 Oct 2023",
          },
        ],
      },
    ],
  },
];
