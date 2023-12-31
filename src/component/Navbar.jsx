import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="px-5 lg:px-0">
      <div className="navbar bg-base-100 py-7 px-0">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link className=" text-lg text-gray-500">Statistics</Link>
                <Link to='/appliedJobs' className=" text-lg text-gray-500">Applied Jobs</Link>
                <Link className=" text-lg text-gray-500">Blog</Link>
              </li>
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost normal-case text-lg lg:text-3xl font-bold">
            Job Hunter
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex gap-6">
          <Link to='statistics' className=" text-lg text-gray-500">Statistics</Link>
          <Link to='appliedJobs' className=" text-lg text-gray-500">Applied Jobs</Link>
          <Link to='blog' className=" text-lg text-gray-500">Blog</Link>
        </div>
        <div className="navbar-end">
          <button className="btn btn-primary">Start Applying</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
