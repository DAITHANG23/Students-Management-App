import StudentDetail from "@/components/StudentDetail/StudentDetailMain";
import React from "react";

const Student = ({ params }: { params: { student: string } }) => {
  const id = params?.student;
  return (
    <div>
      <StudentDetail id={id} />
    </div>
  );
};

export default Student;
