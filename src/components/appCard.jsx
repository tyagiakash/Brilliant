import React from "react";
import { Button } from "react-bootstrap";

function AppCard({ data, onClick }) {
  return (
    <div className="border text-center p-5 bg-white">
      <img src={data.image} className="mb-2" alt="card" />
      <div className="d-flex flex-row justify-content-between">
        {data.content.map((item) => (
          <div className="m-2 text-center" key={item.title}>
            <h1>{item.title}</h1>
            <p>{item.subtitle}</p>
          </div>
        ))}
      </div>
      <div className="d-grid gap-2 mt-2">
        <Button onClick={onClick} size="lg" variant="dark">
          {data.buttonTitle}
        </Button>
      </div>
    </div>
  );
}

export default AppCard;
