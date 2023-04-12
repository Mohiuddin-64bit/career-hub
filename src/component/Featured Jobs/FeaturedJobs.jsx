import React, { useEffect, useState } from "react";
import FeaturedJobsDetails from "./FeaturedJobsDetails";

const FeaturedJobs = () => {
  const [features, setFeatures] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const displayAllData = showAll ? features : features.slice(0, 4);
  useEffect(() => {
    fetch("6jobsDetails.json")
      .then((res) => res.json())
      .then((data) => setFeatures(data.jobs));
  }, []);

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
        {displayAllData.map((feature) => (
          <FeaturedJobsDetails
            key={feature.id}
            feature={feature}
          ></FeaturedJobsDetails>
        ))}
      </div>
      <div className="text-center">
        <button onClick={() => setShowAll(true)} className="btn btn-primary mt-12">See All</button>
      </div>
    </>
  );
};

export default FeaturedJobs;
