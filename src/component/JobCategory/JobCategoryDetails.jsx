import React from "react";

const JobCategoryDetails = ({ job }) => {
  const { title, company, location, logo } = job;
  return (
    <>
      <div>
        <div className="bg-slate-100 mb-2 p-8 rounded-lg text-center">
          <div className="flex justify-center">
            <img src={logo} alt="" />
          </div>
          <h3 className="font-bold mt-4">{title}</h3>
          <p className="text-gray-500">{location}</p>
        </div>
      </div>
    </>
  );
};

export default JobCategoryDetails;
