import React from "react";
import Card from "./Card";

const ReviewPage = () => {
  const reviews = [
    {
      companyName: "New York Food Commerce Business",
      service: "Bookkeeping & AP Management",
      Challenge:
        "The company struggled with manual accounting processes and growing transaction volumes.",
      result:
        "DNA Growth implemented automated bookkeeping, saving the company 40% on processing time and reducing payment delays by 25%.",
    },
    {
      companyName: "Toronto based Fashion E-Commerce Business",
      service: "Accounting Data Entry & AR Management",
      Challenge:
        "Challenge: The business needed a solution for managing a rapidly growing transaction volume and inventory complexity.",
      result:
        "We provided real-time transaction tracking and streamlined accounts receivable, reducing accounting errors by 35% and outstanding payments by 30%.",
    },
  ];

  return (
    <div className="w-full flex flex-col items-center space-y-8 mt-16 py-5 bg-blue-300">
      <h1 className="text-3xl font-bold text-black">Client Success Stories</h1>

      {/* Displaying reviews and images in a row */}
      <div className="flex justify-around items-center w-full space-x-8  ">
        {/* Left side: Card components */}
        <div className="w-4/12  flex flex-wrap justify-center gap-8 pl-4 ">
          {reviews.map((review, index) => (
            <Card
              key={index}
              companyName={review.companyName}
              Challenge={review.Challenge}
              service={review.service}
              result={review.result}
            />
          ))}
        </div>

        {/* Right side: Images in 3 per row */}
        <div className="w-6/12 grid grid-cols-3 gap-4 bg-blue-300 ">
          <img
            src="assets/G6+Renovation+Logo - Sheree Gibson.png"
            alt="Company Logo"
            className="w-full h-32 object-contain"
          />
          <img
            src="assets/Guroo_US-removebg-preview.png"
            alt="Company Logo"
            className="w-full h-32 object-contain"
          />
          <img
            src="assets/Lionforce-removebg-preview.png"
            alt="Company Logo"
            className="w-full h-32 object-contain"
          />
          <img
            src="assets/MasterFoods-removebg-preview.png"
            alt="Company Logo"
            className="w-full h-32 object-contain"
          />
          <img
            src="assets/Mediline__Canada-removebg-preview.png"
            alt="Company Logo"
            className="w-full h-32 object-contain"
          />
          <img
            src="assets/Quiickbook-removebg-preview.png"
            alt="Company Logo"
            className="w-full h-32 object-contain"
          />
          <img
            src="assets/Tara_wright_-_Canada__Halifax-removebg-preview.png"
            alt="Company Logo"
            className="w-full h-32 object-contain"
          />
          <img
            src="assets/Vehya-removebg-preview.png"
            alt="Company Logo"
            className="w-full h-32 object-contain"
          />
          <img
            src="assets/Zero tax pro.png"
            alt="Company Logo"
            className="w-full h-32 object-contain"
          />
          <img
            src="assets/Urbanex-removebg-preview.png"
            alt="Company Logo"
            className="w-full h-32 object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default ReviewPage;
