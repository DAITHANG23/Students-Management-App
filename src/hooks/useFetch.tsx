// "use client";

// import { getStudents } from "@/api";
// import { useQuery } from "react-query";

// import { Order, Students } from "@/hooks/types";

// const QUERY_KEY = {
//   useGetStudents: ["fetchDataStudents"],
// };

// export const useStudents = (
//   page: number,

//   rowPerPage: number,

//   oneOderDirection: Order
// ) => {
//   const { data, isLoading, error, isFetching, refetch } = useQuery<Students[]>(
//     [
//       (QUERY_KEY.useGetStudents,
//       {
//         page: page,

//         rowPerPage: rowPerPage,

//         oneOderDirection: oneOderDirection,
//       }),
//     ],

//     ({ signal }) => getStudents({ signal, page, rowPerPage, oneOderDirection }),

//     {
//       keepPreviousData: true,
//     }
//   );

//   return { data, isLoading, error, isFetching, refetch };
// };
