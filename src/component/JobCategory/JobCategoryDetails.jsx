import React from 'react';

const JobCategoryDetails = ({job}) => {
  const {title, company, location, logo} = job
  return (
    <>
      <div>
        <div className='bg-slate-100 p-8 rounded-lg'>
          <img src={logo} alt="" />
          <h3 className='font-bold mt-4'>{title}</h3>
          <p className='text-gray-500'>{location}</p>
        </div>
      </div>
    </>
  );
};

export default JobCategoryDetails;