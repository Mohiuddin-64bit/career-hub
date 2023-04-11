import React, { useEffect, useState } from "react";
import FeaturedJobsDetails from "./FeaturedJobsDetails";

const FeaturedJobs = () => {
  const [features, setFeatures] = useState([]);
  useEffect(() => {
    fetch("6jobsDetails.json")
      .then((res) => res.json())
      .then((data) => setFeatures(data.jobs));
  }, []);

  const handleId = (id) => {
    console.log(id);
  };
  return (
    <>
      <div className="mt-12 text-center">
        <h1 className="text-6xl font-bold">Featured Jobs</h1>
        <p className="text-gray-500 mt-4">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid lg:grid-cols-2 gap-8 mt-12 justify-center lg:justify-between">
        {features.slice(0, 4).map((feature) => (
          <FeaturedJobsDetails
            handleId={handleId}
            key={feature.id}
            feature={feature}
          ></FeaturedJobsDetails>
        ))}
      </div>
      <div className="text-center">
        <button className="btn btn-primary mt-12">sell all</button>
      </div>
    </>
  );
};

export default FeaturedJobs;
