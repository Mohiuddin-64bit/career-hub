import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocation, faMoneyBill } from "@fortawesome/free-solid-svg-icons";

const FeaturedJobsDetails = ({ feature, handleId }) => {
  const {
    company_logo,
    job_title,
    id,
    company_name,
    remote_or_onsite,
    location,
    salary,
    fulltime_or_parttime,
  } = feature;
  return (
    <>
      <div className="bg-slate-100 p-8 rounded-lg tracking-widest">
        <img className="mb-5" src={company_logo} alt="" />
        <h3 className="font-bold text-2xl text-gray-700">{job_title}</h3>
        <p className="text-gray-500">{company_name}</p>
        <div className="flex gap-3 items-center my-2">
          <p className="border text-primary font-semibold border-primary p-1 my-1 w-fit rounded-lg">
            {remote_or_onsite}
          </p>
          <p className="border text-primary font-semibold border-primary p-1 my-1 w-fit rounded-lg">
            {fulltime_or_parttime}
          </p>
        </div>
        <div className="lg:flex gap-3">
          <p>
          <FontAwesomeIcon icon={faMoneyBill} /> {salary}
          </p>
          <p>
            <FontAwesomeIcon icon={faLocation} /> {location}
          </p>
        </div>
        <Link to={`jobDetails/${id}`}>
          <button className="btn btn-primary mt-5">View Details</button>
        </Link>
      </div>
    </>
  );
};

export default FeaturedJobsDetails;
