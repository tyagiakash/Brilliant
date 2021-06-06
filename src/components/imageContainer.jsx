import React, { useState } from "react";
import { useDrag, useDrop } from "react-dnd";

function ImageContainer({ imageTitle, image, boxTitle }) {
  const [dropData, setDropData] = useState([]);
  const [dragItemOpacity, setDragItemOPacity] = useState(1);

  const [{}, dropRef] = useDrop({
    accept: "DIV",
    drop: (item) => handleDrop(item),
  });

  const handleDrop = (item) => {
    setDragItemOPacity(0.2);
    setDropData(item);
  };

  return (
    <div className="d-flex flex-column">
      <div
        ref={dropRef}
        className="m-2 text-center"
        style={{ border: "2px dotted lightgray", minHeight: 150, width: 130 }}
      >
        {dropData.image ? (
          <div>
            {" "}
            <h5>{dropData.title}</h5>
            <img
              src={dropData.image}
              alt="answer image"
              style={{ width: 100 }}
            />{" "}
          </div>
        ) : (
          <h6 className="text-muted mt-5">{boxTitle}</h6>
        )}
      </div>
      <DragImage
        imageTitle={imageTitle}
        image={image}
        opacity={dragItemOpacity}
      />
    </div>
  );
}

function DragImage({ imageTitle, image, opacity }) {
  const [{}, dragRef] = useDrag({
    type: "DIV",
    item: { image, title: imageTitle },
  });

  return (
    <>
      <div
        ref={dragRef}
        className="m-2 text-center"
        style={{ width: 100, opacity: opacity }}
      >
        <h5>{imageTitle}</h5>
        <img src={image} alt="answer image" style={{ width: 100 }} />
      </div>
    </>
  );
}

export default ImageContainer;
