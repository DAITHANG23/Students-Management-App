import { Students } from "./types";
import React from "react";

interface UseQuantityStudentsProps {
  students: Students[];
}

const useQuatityStudents = ({
  students,
}: UseQuantityStudentsProps): [number, number, number, number, number] => {
  const quantityChiencon = students.filter(
    (student) => student.classItem === "Chiên con"
  ).length;

  const quantityAu1A = students.filter(
    (student) => student.classItem === "Ấu 1A"
  ).length;

  const quantityAu1B = students.filter(
    (student) => student.classItem === "Ấu 1B"
  ).length;

  const quantityAu2A = students.filter(
    (student) => student.classItem === "Ấu 2A"
  ).length;

  const quantityAu2B = students.filter(
    (student) => student.classItem === "Ấu 2B"
  ).length;

  const quantityAu3A = students.filter(
    (student) => student.classItem === "Ấu 3A"
  ).length;

  const quantityAu3B = students.filter(
    (student) => student.classItem === "Ấu 3B"
  ).length;

  const quantityThieu1Nam = students.filter(
    (student) => student.classItem === "Thiếu 1 Nam"
  ).length;

  const quantityThieu1Nu = students.filter(
    (student) => student.classItem === "Thiếu 1 Nữ"
  ).length;

  const quantityThieu2Nam = students.filter(
    (student) => student.classItem === "Thiếu 2 Nam"
  ).length;

  const quantityThieu2Nu = students.filter(
    (student) => student.classItem === "Thiếu 2 Nữ"
  ).length;

  const quantityThieu3Nam = students.filter(
    (student) => student.classItem === "Thiếu 3 Nam"
  ).length;

  const quantityThieu3Nữ = students.filter(
    (student) => student.classItem === "Thiếu 3 Nữ"
  ).length;

  const quantityNghia1 = students.filter(
    (student) => student.classItem === "Nghĩa 1"
  ).length;

  const quantityNghia2 = students.filter(
    (student) => student.classItem === "Nghĩa 2"
  ).length;

  const quantityNghia3 = students.filter(
    (student) => student.classItem === "Nghĩa 3"
  ).length;

  const quantityDutruong1 = students.filter(
    (student) => student.classItem === "Dự trưởng 1"
  ).length;

  const quantityDutruong2 = students.filter(
    (student) => student.classItem === "Dự trưởng 2"
  ).length;

  const quatityNganhChiencon = quantityChiencon + quantityAu1A + quantityAu1B;

  const quatityNganhAunhi =
    quantityAu2A + quantityAu2B + quantityAu3A + quantityAu3B;

  const quatityNganhThieunhi =
    quantityThieu1Nam +
    quantityThieu1Nu +
    quantityThieu2Nam +
    quantityThieu2Nu +
    quantityThieu3Nam +
    quantityThieu3Nữ;

  const quatityNganhNghia = quantityNghia1 + quantityNghia2 + quantityNghia3;

  const quatityNganhDutruong = quantityDutruong1 + quantityDutruong2;

  return [
    quatityNganhChiencon,
    quatityNganhAunhi,
    quatityNganhThieunhi,
    quatityNganhNghia,
    quatityNganhDutruong,
  ];
};

export default useQuatityStudents;
