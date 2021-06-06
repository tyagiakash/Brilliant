import React from "react";
import parse from "html-react-parser";

function RenderQuestion({ htmlData }) {
  return <div className="p-5">{renderElements(htmlData)}</div>;
}

function renderElements(data) {
  const elements = data ? data.join(" ") : "";
  return parse(elements);
}

export default RenderQuestion;
