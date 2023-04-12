import React from 'react';
import { Scatter, ScatterChart, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const data = [
  { assignment: 1, mark: 60 },
  { assignment: 2, mark: 60 },
  { assignment: 3, mark: 58 },
  { assignment: 4, mark: 53 },
  { assignment: 5, mark: 60 },
];

const StatisticsPage = () => {
  return (
    <div>
      <h1 className='text-6xl font-bold text-center mb-24'>Assignment Marks</h1>
      <ScatterChart className='mx-auto' width={800} height={500}>
        <CartesianGrid />
        <XAxis dataKey="assignment" type="number" />
        <YAxis dataKey="mark" type="number" />
        <Tooltip cursor={{ strokeDasharray: '3 3' }} />
        <Scatter name="A school" data={data} fill="#8884d8" />
      </ScatterChart>
    </div>
  );
};

export default StatisticsPage;
