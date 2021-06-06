import React from "react";
import CourseSlider from "./courseSlider";
import RenderQuestion from "./quiz/renderQuestion";
import Type1AnswerComponent from "./quiz/answers/type1AnswerComponent";
import QuizSlider from "./quiz/quizSlider";
import { QuestionsData } from "../config/questionsData.json";
const titles = ["Logic"];

function Puzzles(props) {
  return (
    <div className="fluid-container row ">
      <div className="col-md-2 p-0">
        <CourseSlider titles={titles} />
      </div>
      <div className="col-md-7 p-0">
        <RenderQuestion htmlData={QuestionsData[0].htmlData} />
        <Type1AnswerComponent
          imagesData={QuestionsData[0].imagesData}
          boxTitles={QuestionsData[0].boxTitles}
          answers={QuestionsData[0].answer}
        />
      </div>
      <div className="col-md-3 p-0">
        <QuizSlider />
      </div>
    </div>
  );
}

export default Puzzles;
