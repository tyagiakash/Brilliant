import React from "react";
import ListItem from "./listItem";

function Footer({ courses, fullWidth = false }) {
  return (
    <div className="row mt-5 mb-5">
      <div className={fullWidth ? "col-sm-12 " : " col-sm-12 col-md-7 m-auto"}>
        <p className="text-muted ms-3">NEXT STEPS</p>
        <div
          className="mb-4"
          style={{ height: "1px", backgroundColor: "rgb(224 215 215)" }}
        ></div>
        <div className="row d-flex justify-content-center align-items-center">
          {courses.map((course) => (
            <ListItem
              key={course.id}
              image={course.image}
              title={course.title}
              subtitle={course.subtitle}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Footer;
