import React, { useEffect, useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { ArrowClockwise } from "react-bootstrap-icons";
import DropImageContainer from "./dropImageContainer";
import DragImageContainer from "./dragImageContainer";
import AnswerButtonGroup from "../answerButtonGroup";

function Type1AnswerComponent({ imagesData, boxTitles, answers }) {
  const [droppedData, setDroppedData] = useState([]);
  const [draggedData, setDraggedData] = useState(imagesData);
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(false);
  useEffect(() => {
    mappingBoxTitles();
  }, []);

  const mappingBoxTitles = () => {
    const data = boxTitles.map((boxTitle) => objectToArrayMap(boxTitle));
    setDroppedData(data);
  };

  const objectToArrayMap = (boxTitle) => {
    return {
      image: "",
      title: "",
      boxTitle: boxTitle,
    };
  };

  const hanleSetDroppedImage = (boxTitle, itemId) => {
    const data = imagesData.find((ob) => ob.id === itemId);
    const dData = [...droppedData];
    const box = dData.find((ob) => ob.boxTitle === boxTitle);
    const index = dData.indexOf(box);
    dData[index] = { ...box };
    dData[index].image = data.image;
    dData[index].title = data.imageTitle;

    const ddData = [...draggedData];
    const ind = ddData.indexOf(data);
    ddData[ind] = { ...data, isDrag: null };
    ddData[ind].isDrag = true;
    setDraggedData(ddData);
    setDroppedData(dData);
  };

  const handleReset = () => {
    const droppedItems = [...droppedData];
    droppedData.forEach((element) => {
      element.image = "";
      element.title = "";
    });
    setDroppedData(droppedItems);
    setDraggedData(imagesData);
  };

  const handleCheckAnswer = () => {
    const myAnswer = [];
    droppedData.forEach((element) => {
      myAnswer.push(element.title);
    });

    const result = JSON.stringify(myAnswer) === JSON.stringify(answers);

    if (result) {
      setIsCorrectAnswer(true);
    }
  };

  return (
    <div className="ps-5 pe-5 pb-5">
      <DndProvider backend={HTML5Backend}>
        <div className="d-flex flex-row">
          <h6 className="flex-grow-1">
            Drag the characters into the dotted boxes
          </h6>
          <span onClick={handleReset} className="fs-6 text-black-50  pointer">
            <span style={{ marginRight: 2 }}>Reset</span>
            <ArrowClockwise size={16} />
          </span>
        </div>
        <div className="d-flex flex-row">
          {droppedData.map((item) => (
            <DropImageContainer
              key={item.boxTitle}
              boxTitle={item.boxTitle}
              image={item.image}
              title={item.title}
              setDroppedImage={hanleSetDroppedImage}
              isCorrectAnswer={isCorrectAnswer}
            />
          ))}
        </div>
        <div className="d-flex flex-row">
          {draggedData.map((data) => (
            <DragImageContainer
              key={data.id}
              imageTitle={data.imageTitle}
              image={data.image}
              id={data.id}
              isDrag={data.isDrag}
            />
          ))}
        </div>
      </DndProvider>
      <AnswerButtonGroup onClickAnswer={handleCheckAnswer} />
    </div>
  );
}

export default Type1AnswerComponent;
