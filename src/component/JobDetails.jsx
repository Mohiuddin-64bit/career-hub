import React, { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDay,
  faLocation,
  faMessage,
  faMoneyBill,
  faMoneyCheckDollar,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const JobDetails = () => {
  const { id } = useParams();
  const { jobs } = useLoaderData();

  const [job, setJob] = useState([]);

  useEffect(() => {
    if (jobs) {
      const foundJob = jobs.find((job) => job.id.toString() === id);
      setJob(foundJob);
    }
  }, [id, jobs]);

  if (!job) {
    return <div>Loading...</div>;
  }

  const {
    company_logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    fulltime_or_parttime,
    salary,
    job_description,
    job_responsibility,
    educational_requirements,
    experiences,
    contact_information,
  } = job;

  console.log(contact_information);
  return (
    <>
    <h1 className="font-bold text-center text-2xl lg:text-6xl mb-12 lg:mb-48">Job Details</h1>
      <div className="lg:flex gap-12 px-5 lg:px-0">
        <div>
          <p className="mb-5">
            <span className="font-bold">Job description: </span>
            {job_description}
          </p>
          <p className="mb-5">
            <span className="font-bold">Job Responsible: </span>
            {job_responsibility}
          </p>
          <p className="mb-5">
            <span className="font-bold">Educational Requirement:</span>{" "}
            {educational_requirements}
          </p>
          <p>
            <span className="font-bold">Experience: </span> {experiences}
          </p>
        </div>
        <div className="bg-primary bg-opacity-20 py-4 px-3 rounded-lg w-full mt-12 lg:mt-0 lg:w-1/2">
          <div>
            <h2 className="mb-3 font-bold text-lg">Job Details</h2>
            <hr />
            <p className="mt-3">
              <FontAwesomeIcon icon={faMoneyCheckDollar} />{" "}
              <span className="font-bold">Salary:</span> {salary}
            </p>
            <p className="mt-3">
              <FontAwesomeIcon icon={faCalendarDay} />{" "}
              <span className="font-bold">Job Title:</span> {job_title}
            </p>
          </div>
          <div className="mt-2">
            <h2 className="mb-3 font-bold text-lg">Contact Information</h2>
            <hr />
            <p className="mt-2">
              <FontAwesomeIcon icon={faPhone} />{" "}
              <span className="font-bold">Phone:</span>{" "}
              {contact_information?.phone}
            </p>
            <p>
              <FontAwesomeIcon icon={faMessage} />{" "}
              <span className="font-bold">Email:</span>{" "}
              {contact_information?.email}
            </p>
            <p>
              <FontAwesomeIcon icon={faLocation} />{" "}
              <span className="font-bold">Location:</span> {location}
            </p>
          </div>
          <div className="text-center mt-4">
            <Link>
              <button className="btn btn-wide btn-primary">Apply Now</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobDetails;
