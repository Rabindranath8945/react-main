import React from "react";
import CovidBox from "../component/CovidBox";
import Heading from "../component/Heading";
import SubHeading from "../component/SubHeading";
import Greeting from "../component/Greeting";

const CovidTracker = () => {
  return (
    <>
      <section className="section-covid">
        <div className="container">
          <div className="section-header mb-2">
            <SubHeading />
            <Heading />
          </div>
          <div className="covid-box">
            <CovidBox />
          </div>
          <div className="section-greeting">
            <Greeting />
          </div>
        </div>
      </section>
    </>
  );
};

export default CovidTracker;
