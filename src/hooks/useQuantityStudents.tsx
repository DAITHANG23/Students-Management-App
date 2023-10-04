import { Students } from "./types";
import React from "react";

interface UseQuantityStudentsProps {
  studentsList: Students[];
}

const useQuantityStudents = ({
  studentsList,
}: UseQuantityStudentsProps): [number, number, number, number, number] => {
  const quantityChiencon = studentsList.filter(
    (student) => student.classItem === "Chiên con"
  ).length;

  const quantityAu1A = studentsList.filter(
    (student) => student.classItem === "Ấu 1A"
  ).length;

  const quantityAu1B = studentsList.filter(
    (student) => student.classItem === "Ấu 1B"
  ).length;

  const quantityAu2A = studentsList.filter(
    (student) => student.classItem === "Ấu 2A"
  ).length;

  const quantityAu2B = studentsList.filter(
    (student) => student.classItem === "Ấu 2B"
  ).length;

  const quantityAu3A = studentsList.filter(
    (student) => student.classItem === "Ấu 3A"
  ).length;

  const quantityAu3B = studentsList.filter(
    (student) => student.classItem === "Ấu 3B"
  ).length;

  const quantityThieu1Nam = studentsList.filter(
    (student) => student.classItem === "Thiếu 1 Nam"
  ).length;

  const quantityThieu1Nu = studentsList.filter(
    (student) => student.classItem === "Thiếu 1 Nữ"
  ).length;

  const quantityThieu2Nam = studentsList.filter(
    (student) => student.classItem === "Thiếu 2 Nam"
  ).length;

  const quantityThieu2Nu = studentsList.filter(
    (student) => student.classItem === "Thiếu 2 Nữ"
  ).length;

  const quantityThieu3Nam = studentsList.filter(
    (student) => student.classItem === "Thiếu 3 Nam"
  ).length;

  const quantityThieu3Nữ = studentsList.filter(
    (student) => student.classItem === "Thiếu 3 Nữ"
  ).length;

  const quantityNghia1 = studentsList.filter(
    (student) => student.classItem === "Nghĩa 1"
  ).length;

  const quantityNghia2 = studentsList.filter(
    (student) => student.classItem === "Nghĩa 2"
  ).length;

  const quantityNghia3 = studentsList.filter(
    (student) => student.classItem === "Nghĩa 3"
  ).length;

  const quantityDutruong1 = studentsList.filter(
    (student) => student.classItem === "Dự trưởng 1"
  ).length;

  const quantityDutruong2 = studentsList.filter(
    (student) => student.classItem === "Dự trưởng 2"
  ).length;

  const quantityNganhChiencon = quantityChiencon + quantityAu1A + quantityAu1B;

  const quantityNganhAunhi =
    quantityAu2A + quantityAu2B + quantityAu3A + quantityAu3B;

  const quantityNganhThieunhi =
    quantityThieu1Nam +
    quantityThieu1Nu +
    quantityThieu2Nam +
    quantityThieu2Nu +
    quantityThieu3Nam +
    quantityThieu3Nữ;

  const quantityNganhNghia = quantityNghia1 + quantityNghia2 + quantityNghia3;

  const quantityNganhDutruong = quantityDutruong1 + quantityDutruong2;

  return [
    quantityNganhChiencon,
    quantityNganhAunhi,
    quantityNganhThieunhi,
    quantityNganhNghia,
    quantityNganhDutruong,
  ];
};

export default useQuantityStudents;
