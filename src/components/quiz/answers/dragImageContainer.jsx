import React from "react";
import { useDrag } from "react-dnd";

function DragImageContainer({ imageTitle, image, id, isDrag }) {
  const [dragRef] = useDrag({
    type: "DIV",
    item: { id },
  });

  return (
    <>
      <div
        ref={!isDrag ? dragRef : null}
        className="m-2 text-center"
        style={{
          width: 130,
          minHeight: 150,
          opacity: isDrag ? 0.2 : 1,
        }}
      >
        <h5>{imageTitle}</h5>
        <img src={image} alt="answer" style={{ width: 100 }} />
      </div>
    </>
  );
}

export default DragImageContainer;
