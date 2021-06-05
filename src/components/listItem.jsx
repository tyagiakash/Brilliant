import React from "react";

function ListItem({ image, title, subtitle }) {
  return (
    <div
      style={{ maxWidth: 370, minHeight: 120 }}
      className="d-flex flex-row align-items-center mouse mb-5"
    >
      <div>
        <img src={image} alt="" />
      </div>
      <div className="ms-4">
        <h4 className="mb-0" style={{ widthL: "100%", height: 60 }}>
          {title}
        </h4>
        <div style={{ width: "100%", height: 60 }}>
          <p className="text-muted line-ht">{subtitle}</p>
        </div>
      </div>
    </div>
  );
}

export default ListItem;
