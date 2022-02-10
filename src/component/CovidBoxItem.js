import React from "react";

const CovidBoxItem = (props) => {
  return (
    <>
      <div className="col-4">
        <div className="covid-news-inner text-center shadow-sm border-1 px-2 py-2 rounded mb-3">
          <p className="box-title">
            <sub className="fs-6 me-2">{props.subtitle}</sub>
            <span className="fs-3 text-capitalize">{props.title}</span>
          </p>
          <p className="box-content text-uppercase fs-2 fw-bold">
            {props.heading}
          </p>
        </div>
      </div>
    </>
  );
};

export default CovidBoxItem;
