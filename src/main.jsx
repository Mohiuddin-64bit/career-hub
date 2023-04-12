import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./component/Header";
import JobDetails from "./component/JobDetails";
import AppliedJobs from "./component/AppliedJobs";
import ErrorPage from "./component/ErrorPage";
import StatisticsPage from "./component/StatisticsPage";
import Blog from "./component/Blog";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
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
      },
      {
        path: 'statistics',
        element: <StatisticsPage></StatisticsPage>
      },
      {
        path: 'blog',
        element: <Blog></Blog>
      }

    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
