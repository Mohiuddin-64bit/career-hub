import React from "react";
import JobCategory from "./JobCategory/JobCategory";
import FeaturedJobs from "./Featured Jobs/FeaturedJobs";

const Header = () => {
  return (
    <div>
      <div className="lg:flex mt-20 justify-between px-5 lg:px-0">
        <div>
          <div className="lg:w-2/4">
            <h1 className="text-6xl font-extrabold tracking-widest">
              One Step Closer To Your{" "}
              <span className="text-primary">Dream Job</span>
            </h1>
            <p className="text-gray-500 mt-4">
              Explore thousands of job opportunities with all the information
              you need. Its your future. Come find it. Manage all your job
              application from start to finish.
            </p>
            <div className="text-center lg:text-left">
            <button className="btn btn-primary my-5">Get Started</button>
            </div>
          </div>
        </div>
        <div className="mx-auto">
          <img
            className=""
            src="https://i.ibb.co/MhWpVDD/P3-OLGJ1-copy-1.png"
            alt=""
          />
        </div>
      </div>
    <JobCategory></JobCategory>
    <FeaturedJobs></FeaturedJobs>
    </div>
  );
  
};

export default Header;
