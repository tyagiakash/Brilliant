import React from "react";
import { ChevronLeft } from "react-bootstrap-icons";

function CourseSlider({ titles }) {
  return (
    <div className="bg-dark h-100 text-center p-5">
      <ChevronLeft color="white" size={13} />
      <span className="text-white-50"> Back</span>
      {titles.map((title) => (
        <h5 className="text-light mt-4">{title}</h5>
      ))}
    </div>
  );
}

export default CourseSlider;
