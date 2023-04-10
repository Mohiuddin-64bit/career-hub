import React from "react";

const Header = () => {
  return (
    <div>
      <div className="flex mt-20 justify-between">
        <div  >
          <div className="w-2/4">
            <h1 className="text-6xl font-extrabold tracking-widest">
              One Step Closer To Your{" "}
              <span className="text-primary">Dream Job</span>
            </h1>
            <p className="text-gray-500 mt-4">
              Explore thousands of job opportunities with all the information
              you need. Its your future. Come find it. Manage all your job
              application from start to finish.
            </p>
            <button className="btn btn-primary mt-5">Get Started</button>
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
    </div>
  );

  // <a href="https://ibb.co/6ZVbPRR"><img src="https://i.ibb.co/MhWpVDD/P3-OLGJ1-copy-1.png" alt="P3-OLGJ1-copy-1" border="0"></a>
};

export default Header;
