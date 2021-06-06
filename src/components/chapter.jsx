import React from "react";
import Card from "./card";
import { useHistory } from "react-router-dom";

function Chapter({ data, chapterNo }) {
  let history = useHistory();
  const handleOnClick = (id) => {
    const url = `/puzzle/${data.title.toLowerCase()}/${id}`;
    if (!data.isPremium) history.push(url);
  };

  return (
    <div className="ps-sm-2 ps-md-5">
      <div className="d-flex align-items-center mt-5">
        <span
          style={{ fontSize: "1.2rem" }}
          className="badge rounded-pill bg-info text-dark d-inline-block ms-2"
        >
          {chapterNo}
        </span>
        <div className="ms-4">
          <h3 className="mb-0">{data.title}</h3>
          <small className="text-muted fs-6">{data.subtitle}</small>
        </div>
      </div>
      <div
        className="d-flex flex-row flex-nowrap hide-scrol-bar"
        style={{ height: "400px", width: "100%", overflowX: "scroll" }}
      >
        {data.cardData.map((item) => (
          <Card
            key={item.id}
            image={item.imageUri}
            title={item.title}
            subtitle={item.subtitle}
            locked={data.isPremium}
            onClick={() => handleOnClick(item.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default Chapter;
