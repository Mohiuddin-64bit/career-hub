import React, { useEffect, useState } from "react";
import JobCategoryDetails from "./JobCategoryDetails";

const JobCategory = () => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    fetch("4jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data.cards));
  }, []);
  return (
    <div>
      <div className="mt-32">
        <h1 className="text-6xl font-bold text-center mb-6">
          Job Category List
        </h1>
        <p className="text-gray-500 text-center">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="lg:flex  justify-between mt-12">
      {jobs.map((job) => <JobCategoryDetails key={job.id} job={job}></JobCategoryDetails>)}
      </div>
    </div>
  );
};

export default JobCategory;
