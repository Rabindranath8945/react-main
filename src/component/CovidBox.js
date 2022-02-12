import React, { useEffect, useState } from "react";
import CovidBoxItem from "../component/CovidBoxItem";

const CovidBox = () => {
  const [data, setData] = useState([]);

  const getCovidData = async () => {
    try {
      const res = await fetch("https://data.covid19india.org/data.json");
      const actualData = await res.json();
      // console.log(actualData.statewise[0]);
      setData(actualData.statewise[0]);
    } catch (err) {
      alert("This is some error");
    }
  };
  useEffect(() => {
    getCovidData();
  }, []);
  return (
    <>
      <div className="covid-news-item row align-items-center mb-3">
        <CovidBoxItem subtitle="Our" title="Country" heading="india" />
        <CovidBoxItem
          subtitle="Total"
          title="Recovered"
          heading={data.recovered}
        />
        <CovidBoxItem
          subtitle="Total"
          title="Confirmed"
          heading={data.confirmed}
        />
        <CovidBoxItem subtitle="Total" title="Death" heading={data.deaths} />
        <CovidBoxItem subtitle="Total" title="Active" heading={data.active} />
        <CovidBoxItem
          subtitle="Last"
          title="Upadated"
          heading={data.lastupdatedtime}
        />
      </div>
    </>
  );
};

export default CovidBox;
