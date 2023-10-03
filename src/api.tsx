// import axios from "axios";

// axios.defaults.baseURL = "http://localhost:3000";

// import { Students, UseStudents } from "@/hooks/types";
// import { cache, useContext } from "react";
// import { students } from "./mocks/handler";
// import { studentsListTotal } from "./contexts/AppContext";

// export const getStudents = async ({
//   signal,
//   page,
//   rowPerPage,
//   oneOderDirection,
// }: UseStudents) => {
//   let url = "/admin";

//   if (page > 0 || rowPerPage !== 10 || oneOderDirection) {
//     url +=
//       "?page=" +
//       page +
//       "?rowPerPage=" +
//       rowPerPage +
//       "?sort=" +
//       oneOderDirection;
//   }

//   const res = await axios.get(url, { signal: signal });
//   res.data = studentsListTotal;
//   console.log("data:", res.data);
//   return res.data;
// };
