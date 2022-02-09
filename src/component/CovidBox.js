import React from "react";

const CovidBox = () => {
  return (
    <>
      <div className="covid-news-inner text-center shadow-sm border-1 px-2 py-2 rounded bg-warning">
        <p className="box-title text-uppercase">
          <sub className="fs-6 fw-bold">Our</sub>
          <span className="fs-3 fw-bold">Country</span>
        </p>
        <p className="box-content text-uppercase fs-2 fw-bold">India</p>
      </div>
    </>
  );
};

export default CovidBox;
