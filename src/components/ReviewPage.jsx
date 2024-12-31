import React from "react";
import Card from "./Card";

// Importing images
import G6RenovationLogo from "../../assets/G6+Renovation+Logo - Sheree Gibson.png";
import GurooLogo from "../../assets/Guroo_US-removebg-preview.png";
import LionforceLogo from "../../assets/Lionforce-removebg-preview.png";
import MasterFoodsLogo from "../../assets/MasterFoods-removebg-preview.png";
import MedilineLogo from "../../assets/Mediline_ Canada.png";
// import QuiickbookLogo from "../../assets/unnamed__1_-removebg-preview.png";
import TaraWrightLogo from "../../assets/Tara wright - Canada, Halifax.png";
import VehyaLogo from "../../assets/Vehya-removebg-preview.png";
import UrbanexLogo from "../../assets/Urbanex.png";

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
    <div className="w-full flex flex-col items-center py-6 bg-blue-300 text-white mt-4">
      <h1 className="text-2xl md:text-4xl font-bold mb-12 text-[#2B3C77]">
        Client Success Stories
      </h1>

      {/* Container for Card Components and Images */}
      <div className="w-full flex flex-col md:flex-row justify-between gap-8 px-4">
        {/* Left side: Card Components */}
        <div className="w-full md:w-7/12 flex flex-wrap justify-center gap-4">
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
        <div className="w-full md:w-5/12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4">
          <img
            src={GurooLogo}
            alt="Company Logo"
            className="w-full h-32 object-contain transition-all duration-300 hover:scale-105"
          />
          <img
            src={LionforceLogo}
            alt="Company Logo"
            className="w-full h-32 object-contain transition-all duration-300 hover:scale-105"
          />
          <img
            src={MasterFoodsLogo}
            alt="Company Logo"
            className="w-full h-32 object-contain transition-all duration-300 hover:scale-105"
          />
          <img
            src={MedilineLogo}
            alt="Company Logo"
            className="w-full h-32 object-contain transition-all duration-300 hover:scale-105"
          />
          <img
            src={G6RenovationLogo}
            alt="Company Logo"
            className="w-full h-32 object-contain transition-all duration-300 hover:scale-105 "
          />
          {/* <img
            src={QuiickbookLogo}
            alt="Company Logo"
            className="w-full h-32 object-contain transition-all duration-300 hover:scale-105"
          /> */}
          <img
            src={TaraWrightLogo}
            alt="Company Logo"
            className="w-full h-32 object-contain transition-all duration-300 hover:scale-105"
          />
          <img
            src={VehyaLogo}
            alt="Company Logo"
            className="w-full h-32 object-contain transition-all duration-300 hover:scale-105"
          />
          <img
            src={UrbanexLogo}
            alt="Company Logo"
            className="w-full h-32 object-contain transition-all duration-300 hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
};

export default ReviewPage;
