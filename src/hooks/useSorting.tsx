import { useState } from "react";
import { Students } from "@/hooks/types";
export type Order = "asc" | "desc";

export const useSortingTable = (): [
  (property: keyof Students) => void,
  <T>(
    array: Students[] | undefined,
    comparator: (a: T, b: T) => number
  ) => T[] | undefined,
  <Key extends string | number | symbol>(
    order: Order,
    orderBy: Key
  ) => (a: { [key in Key]: number }, b: { [key in Key]: number }) => number,
  Order,
  keyof Students
] => {
  const [oneOderDirection, setOneOderDirection] = useState<Order>("desc");
  const [valueToOrderBy, setvalueToOrderBy] = useState<keyof Students>("id");

  const createSortHandle = (property: keyof Students) => {
    handleRequestSort(property);
  };

  function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
    if (a[orderBy] < b[orderBy]) {
      return -1;
    }
    if (a[orderBy] > b[orderBy]) {
      return 1;
    }
    return 0;
  }

  function getComparator<Key extends keyof any>(
    order: Order,
    orderBy: Key
  ): (a: { [key in Key]: number }, b: { [key in Key]: number }) => number {
    return order === "desc"
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
  }

  function sortedTableRow<T>(
    array: Students[] | undefined,
    comparator: (a: T, b: T) => number
  ) {
    const stabilizedThis = array?.map(
      (el, index) => [el, index] as [T, number]
    );

    stabilizedThis?.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) {
        return order;
      }
      return a[1] - b[1];
    });
    return stabilizedThis?.map((el) => el[0]);
  }
  const handleRequestSort = (property: keyof Students) => {
    const isAscending =
      valueToOrderBy === property && oneOderDirection === "asc";
    setvalueToOrderBy(property);
    setOneOderDirection(isAscending ? "desc" : "asc");
  };
  return [
    createSortHandle,
    sortedTableRow,
    getComparator,
    oneOderDirection,
    valueToOrderBy,
  ];
};
