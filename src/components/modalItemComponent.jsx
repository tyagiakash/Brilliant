import React from "react";
import Footer from "./footer";
import { courses } from "../config/coursesData.json";

function modalItemComponent(props) {
  return (
    <div className="ps-4 pe-4">
      <h3 className="mb-3 mt-3">No previous knowledge required!</h3>
      <p className="text-muted fs-6">
        You don’t need any previous logic experience! This course is enjoyed by
        anyone excited about actively learning through riddles, puzzles, and
        thought experiments!
      </p>
      <Footer courses={courses} fullWidth={true} />
    </div>
  );
}

export default modalItemComponent;
