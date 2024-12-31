import React from "react";
import { FaRegCircleCheck } from "react-icons/fa6";

const Card = ({ companyName, service, Solution, Challenge }) => {
  return (
    <div className="rounded-lg shadow-xl bg-white p-4  max-w-sm mx-auto hover:scale-105 transition-all duration-300 ease-in-out ">
      <div className="flex flex-col items-center justify-center space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800 text-center">
          {companyName}
        </h2>
        <div className="w-full border-t border-gray-300 pt-4"></div>
        <h3 className="text-xl font-semibold text-teal-600 text-center">
          {service}
        </h3>
        <p className="text-gray-600 text-center">{Challenge}</p>
        <p className="text-gray-800 text-center">{Solution}</p>
      </div>
      <div className="flex justify-center mt-4">
        <FaRegCircleCheck className="text-teal-500 text-2xl" />
      </div>
    </div>
  );
};

export default Card;
