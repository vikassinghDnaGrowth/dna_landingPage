import React from "react";
import Card from "./Card";

// Importing images
import G6RenovationLogo from "../../assets/G6+Renovation+Logo - Sheree Gibson.png";
import GurooLogo from "../../assets/Guroo_US-removebg-preview.png";
import LionforceLogo from "../../assets/Lionforce-removebg-preview.png";
import MasterFoodsLogo from "../../assets/MasterFoods-removebg-preview.png";
import MedilineLogo from "../../assets/Mediline__Canada-removebg-preview.png";
import QuiickbookLogo from "../../assets/unnamed__1_-removebg-preview.png";
import TaraWrightLogo from "../../assets/Tara_wright_-_Canada__Halifax-removebg-preview.png";
import VehyaLogo from "../../assets/Vehya-removebg-preview.png";

import UrbanexLogo from "../../assets/Urbanex-removebg-preview.png";

const ReviewPage = () => {
  const reviews = [
    {
      companyName: "New York Food Commerce Business",
      service: "Bookkeeping & AP Management",
      Challenge:
        "The company struggled with manual accounting processes and growing transaction volumes.",
      Solution:
        "DNA Growth implemented automated bookkeeping, saving the company 40% on processing time and reducing payment delays by 25%.",
    },
    {
      companyName: "Toronto based Fashion E-Commerce Business",
      service: "Accounting Data Entry & AR Management",
      Challenge:
        "The business needed a solution for managing a rapidly growing transaction volume and inventory complexity.",
      Solution:
        "We provided real-time transaction tracking and streamlined accounts receivable, reducing accounting errors by 35% and outstanding payments by 30%.",
    },
  ];

  return (
    <div className="w-full flex flex-col items-center py-6 bg-purple-300 text-white mt-4">
      <h1 className="text-4xl font-bold mb-12 text-[#2B3C77]">Client Success Stories</h1>

      {/* Container for Card Components and Images */}
      <div className="w-full flex  justify-between gap-8 px-4">
        {/* Left side: Card Components */}
        <div className="w-full flex  sm:w-10/12 md:w-5/12 lg:w-10/12">
          {reviews.map((review, index) => (
            <Card
              key={index}
              companyName={review.companyName}
              Challenge={review.Challenge}
              service={review.service}
              Solution={review.Solution}
            />
          ))}
        </div>

        {/* Right side: Logos in a Grid */}
        <div className="w-full sm:w-10/12 md:w-6/12 lg:w-6/12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-2 ">
          <img
            src={G6RenovationLogo}
            alt="Company Logo"
            className="w-full h-32 object-contain"
          />
          <img
            src={GurooLogo}
            alt="Company Logo"
            className="w-full h-32 object-contain"
          />
          <img
            src={LionforceLogo}
            alt="Company Logo"
            className="w-full h-32 object-contain"
          />
          <img
            src={MasterFoodsLogo}
            alt="Company Logo"
            className="w-full h-32 object-contain"
          />
          <img
            src={MedilineLogo}
            alt="Company Logo"
            className="w-full h-32 object-contain"
          />
          <img
            src={QuiickbookLogo}
            alt="Company Logo"
            className="w-full h-32 object-contain"
          />
          <img
            src={TaraWrightLogo}
            alt="Company Logo"
            className="w-full h-32 object-contain"
          />
          <img
            src={VehyaLogo}
            alt="Company Logo"
            className="w-full h-32 object-contain"
          />

          <img
            src={UrbanexLogo}
            alt="Company Logo"
            className="w-full h-32 object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default ReviewPage;
