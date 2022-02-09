import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleDot } from "@fortawesome/free-solid-svg-icons";

const SubHeading = () => {
  return (
    <>
      <div className="covid-item d-flex align-items-baseline justify-content-center mt-2">
        <div className="inner-item">
          <FontAwesomeIcon icon={faCircleDot} className="text-danger fs-6" />
        </div>
        <div className="inner-item">
          <p className="text-center fs-6 fw-bold text-danger ms-1">Live</p>
        </div>
      </div>
    </>
  );
};

export default SubHeading;
