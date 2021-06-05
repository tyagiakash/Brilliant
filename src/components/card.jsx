import React, { useEffect, useState } from "react";
import { ProgressBar } from "react-bootstrap";
import { LockFill } from "react-bootstrap-icons";

function Card({ image, title, subtitle, locked }) {
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  return (
    <div className="app-card">
      <div className="app-card-body">
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="position-relative"
        >
          <img
            className={locked ? "opac" : ""}
            src={image}
            alt="card"
            style={{ width: "100%" }}
          />
          {locked && (
            <div className="mt-neg w-100">
              <div className="text-center">
                {isHover ? (
                  <h6 className="text-white text-center w-50 m-auto">
                    Include with Brilliant Premium
                  </h6>
                ) : (
                  <LockFill className="mt-2" color="white" size={25} />
                )}
              </div>
            </div>
          )}
        </div>
        <h4 className="mt-4 fw-normal text-body">{title}</h4>
        <div className="mb-3" style={{ height: 50 }}>
          <h6 className="text-black-50">{subtitle}</h6>
        </div>
        <ProgressBar now={0} style={{ height: 5 }} />
      </div>
    </div>
  );
}

export default Card;
