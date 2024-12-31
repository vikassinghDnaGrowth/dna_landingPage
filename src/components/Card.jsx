import React from "react";
import { FaRegCircleCheck } from "react-icons/fa6";

const Card = ({ companyName, service, result, Challenge }) => {
  return (
    <div className="rounded-lg shadow-lg bg-white overflow-hidden p-4">
      <div className="flex items-center justify-center ">
        <div className="">
          <h2 className="text-xl font-semibold text-gray-800">{companyName}</h2>
          {/* <p className="text-sm text-gray-500">{industry}</p> */}
        </div>
      </div>

      <div className="flex flex-col items-center justify-center ">
        <h3 className="text-lg font-semibold text-gray-700">{service}</h3>
        <p className=" text-gray-600">{Challenge}</p>
        <p className=" text-gray-600">{result}</p>
      </div>
    </div>
  );
};

export default Card;
