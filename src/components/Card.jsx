import React from "react";

const Card = ({ companyName, service, Solution, Challenge }) => {
  return (
    <div className="rounded-lg shadow-xl bg-white p-4 hover:scale-105 transition-all duration-300 ease-in-out border-2 border-transparent hover:border-gray-300 flex flex-col justify-center items-center w-full sm:w-5/12 md:w-5/12 lg:w-5/12">
      <div className="flex flex-col items-center justify-center space-y-4">
        <h2 className="text-xl md:text-2xl font-semibold text-gray-800 text-center">
          {companyName}
        </h2>
        <div className="w-full border-t border-gray-300 pt-4"></div>
        <h3 className="text-lg md:text-xl font-semibold text-teal-600 text-center">
          {service}
        </h3>
        <p className="text-gray-600 text-center italic">{Challenge}</p>
        <p className="text-gray-800 text-center font-semibold">{Solution}</p>
      </div>
    </div>
  );
};

export default Card;
