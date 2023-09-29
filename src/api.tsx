import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000";

import { Students, UseStudents } from "@/hooks/types";
import { cache } from "react";

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
//   return res.data?.studentsList;
// };

export const getStudents = cache(
  async ({ signal }: { signal: AbortSignal | undefined }) => {
    let url = "/admin";

    const res = await axios.get(url, { signal: signal });
    console.log("dataApi:", res.data);
    return res.data?.students;
  }
);
