import React from "react";

const ErrorMessage = ({ error }) => {
  return (
    <div className="flex items-center justify-center text-center bg-primary text-gray-50 uppercase py-10">
      <h1 className="font-bold text-3xl">{error}</h1>
    </div>
  );
};

export default ErrorMessage;
