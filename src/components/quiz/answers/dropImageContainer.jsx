import React from "react";
import { useDrop } from "react-dnd";

function DropImageContainer({
  image,
  boxTitle,
  title,
  setDroppedImage,
  isCorrectAnswer,
}) {
  const [dropRef] = useDrop({
    accept: "DIV",
    drop: (item) => setDroppedImage(boxTitle, item.id),
  });

  return (
    <div
      ref={dropRef}
      className={
        isCorrectAnswer
          ? "border border-2 border-success m-2 text-center"
          : "m-2 text-center"
      }
      style={{
        border: "2px dotted lightgray",
        borderRadius: 5,
        minHeight: 150,
        width: 130,
      }}
    >
      {image ? (
        <div>
          {" "}
          <h5>{title}</h5>
          <img src={image} alt="answer" style={{ width: 100 }} />{" "}
        </div>
      ) : (
        <h6 className="text-muted mt-5">{boxTitle}</h6>
      )}
    </div>
  );
}

export default DropImageContainer;
