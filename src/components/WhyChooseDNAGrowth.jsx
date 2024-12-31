import React from "react";
import {
  FaExchangeAlt,
  FaRegHandPointer,
  FaRegUser,
  FaLaptopCode,
} from "react-icons/fa"; // Importing relevant icons

const WhyChooseDNAGrowth = () => {
  return (
    <section className="bg-transparent py-2">
      <div className="max-w-screen-xl mx-auto px-4">
        {/* Key Points Section */}
        <div className="space-y-8">
          {/* Seamless Migration */}
          <div className="flex items-center space-x-4">
            <FaExchangeAlt className="text-3xl text-blue-500" />
            <div>
              <h1 className="text-xl font-semibold text-gray-800">
                Seamless Migration
              </h1>
              <p className="text-gray-600">
                We offer <span className="font-bold">free migration </span>of
                your accounts from Bench to Quickbooks/Xero, ensuring your
                financial data is transferred safely and with minimal
                disruption.
              </p>
            </div>
          </div>

          {/* Tailored Financial Solutions */}
          <div className="flex items-center space-x-4">
            <FaLaptopCode className="text-3xl text-green-500" />
            <div>
              <h1 className="text-xl font-semibold text-gray-800">
                Tailored Financial Solutions
              </h1>
              <p className="text-gray-600">
                Our expert team leverages trusted financial tools like
                QuickBooks, Xero, Zoho Books, Workday, and more to provide
                accurate, timely reporting.
              </p>
            </div>
          </div>

          {/* Personalized Support */}
          <div className="flex items-center space-x-4">
            <FaRegUser className="text-3xl text-yellow-500" />
            <div>
              <h1 className="text-xl font-semibold text-gray-800">
                Personalized Support
              </h1>
              <p className="text-gray-600">
                At DNA Growth, you’ll have access to a dedicated team that
                understands your business and provides the guidance you need,
                every step of the way.
              </p>
            </div>
          </div>

          {/* Tech-Savvy & Human Touch */}
          <div className="flex items-center space-x-4">
            <FaLaptopCode className="text-3xl text-purple-500" />
            <div>
              <h1 className="text-xl font-semibold text-gray-800">
                Tech-Savvy & Human Touch
              </h1>
              <p className="text-gray-600">
                We combine advanced technology with a personal, human touch to
                ensure your books are always accurate, up-to-date, and aligned
                with your business goals.
              </p>
            </div>
          </div>

          {/* 50% Off Your First Month */}
          <div className="flex items-center space-x-4">
            <FaRegHandPointer className="text-3xl text-red-500" />
            <div>
              <h1 className="text-xl font-semibold text-gray-800">
                50% Off Your First Month
              </h1>
              <p className="text-gray-600">
                To make your transition easier, we’re offering{" "}
                <span className="font-bold text-green-600">50% off</span> your first month. It's our way of showing
                our commitment to your business and easing the impact of the
                sudden change.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseDNAGrowth;
