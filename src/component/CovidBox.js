import React from "react";
import CovidBoxItem from "../component/CovidBoxItem";

const CovidBox = () => {
  return (
    <>
      <div className="covid-news-item row align-items-center mb-3">
        <CovidBoxItem subtitle="Our" title="Country" heading="india" />
        <CovidBoxItem subtitle="Total" title="Recovered" heading="20073367" />
        <CovidBoxItem subtitle="Total" title="Confirmed" heading="24046120" />
        <CovidBoxItem subtitle="Total" title="Death" heading="262350" />
        <CovidBoxItem subtitle="Total" title="Active" heading="3700327" />
        <CovidBoxItem subtitle="On" title="Upadated" heading="10/02/2022" />
      </div>
    </>
  );
};

export default CovidBox;
