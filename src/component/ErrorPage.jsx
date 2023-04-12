import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div>
      <div className="text-center mt-32" id="error-page">
        <h1 className="text-4xl">Oops!</h1>
        <p className="text-4xl font-bold my-3">404</p>
        <p className="text-3xl">
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;
