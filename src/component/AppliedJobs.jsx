import { Link, useLoaderData } from "react-router-dom";
import { getShoppingCart } from "./utilities/fakedb";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocation, faMoneyBill } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const AppliedJobs = () => {
  const { jobs } = useLoaderData();
  const shoppingCart = getShoppingCart();
  const jobIds = Object.keys(shoppingCart);

  const appliedJobs = jobs.filter((job) => jobIds.includes(job.id.toString()));

  return (
    <>
      <h1 className="font-bold text-center text-2xl lg:text-6xl mb-12 lg:mb-48">
        Applied Jobs
      </h1>
      <div className="ml-auto">
        <select className="select text-lg text-gray-600 w-fit bg-slate-200 border-none mb-3  max-w-xs">
          <option disabled selected>
            Filter By
          </option>
          <option>Remote Option</option>
          <option>On-site option</option>
        </select>
      </div>
      {appliedJobs.map((job) => (
        <div key={job.id} className="border-b border-gray-300 mb-8 pb-8">
          <div className="flex items-center gap-3 border border-gray-100 p-6">
            <div className="py-12 px-5 bg-gray-100">
              <img src={job.company_logo} alt="" />
            </div>
            <div>
              <h2 className="text-gray-600 font-bold text-lg">
                {job.job_title}
              </h2>
              <p className="text-gray-500 text-lg">{job.company_name}</p>
              <div className="flex gap-4 mt-3">
                <p className="border border-primary p-1 rounded text-primary">
                  {job.remote_or_onsite}
                </p>
                <p className="border border-primary p-1 rounded text-primary">
                  {job.fulltime_or_parttime}
                </p>
              </div>
              <div className="flex gap-4 mt-3">
                <p>
                  <FontAwesomeIcon icon={faLocation} /> {job.location}
                </p>
                <p>
                  <FontAwesomeIcon icon={faMoneyBill} /> {job.salary}
                </p>
              </div>
            </div>
            <div className="ml-auto">
              <Link to={`../jobDetails/${job.id}`}>
                <button className="btn btn-primary">View Detail</button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default AppliedJobs;
