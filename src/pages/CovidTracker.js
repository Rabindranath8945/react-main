import React from "react";
import CovidBox from "../component/CovidBox";
import Heading from "../component/Heading";
import SubHeading from "../component/SubHeading";

const CovidTracker = () => {
  return (
    <>
      <section className="section-covid">
        <div className="container">
          <SubHeading />
          <Heading />
          <div className="covid-news-item d-flex align-items-center mb-3 justify-content-between">
            <CovidBox />
            <CovidBox />
            <CovidBox />
          </div>
          <div className="covid-news-item d-flex align-items-center mb-3 justify-content-between">
            <CovidBox />
            <CovidBox />
            <CovidBox />
          </div>
        </div>
      </section>
    </>
  );
};

export default CovidTracker;
