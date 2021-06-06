import React from "react";
import { Button } from "react-bootstrap";

function AnswerButtonGroup({ onClickAnswer, onClickExplain }) {
  return (
    <div className="row mt-3">
      <div className="col-sm-8 col-md-5 m-auto mt-2">
        <Button
          style={{ width: "100%" }}
          onClick={onClickExplain}
          variant="outline-secondary"
        >
          {" "}
          Show Explanation
        </Button>
      </div>
      <div className="col-sm-8 col-md-5 m-auto mt-2">
        <Button
          style={{ width: "100%" }}
          onClick={onClickAnswer}
          variant="secondary"
        >
          Check answer
        </Button>
      </div>
    </div>
  );
}

export default AnswerButtonGroup;
