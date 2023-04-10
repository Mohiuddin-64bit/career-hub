import React from 'react';
import Navbar from './component/Navbar';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <div className='container mx-auto'>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default App;