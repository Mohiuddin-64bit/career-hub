import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./component/Header";
import JobDetails from "./component/JobDetails";
import AppliedJobs from "./component/AppliedJobs";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: '/',
        element: <Header></Header>
      },
      {
        path: 'jobDetails/:id',
        element: <JobDetails></JobDetails>,
        loader: () => fetch('/6jobsDetails.json')
      },
      {
        path: 'appliedJobs',
        element: <AppliedJobs></AppliedJobs>,
        loader: () => fetch('/6jobsDetails.json')
        

      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
