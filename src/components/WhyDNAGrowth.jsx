import React from "react";
import { FaRobot, FaUsers, FaChartLine, FaClipboardList } from "react-icons/fa"; // Importing icons

const WhyDNAGrowth = () => {
  return (
    <section className="mt-8 bg-gray-100">
      <div className="max-w-screen-xl mx-auto px-4">
        {/* Header */}
        <h2 className="text-3xl md:text-4xl text-center font-bold text-gray-800 mb-12">
          Why DNA Growth is the Best Choice for You
        </h2>

        {/* Key Points Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Modern Software Stack */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-300 ease-in-out text-center">
            {/* Image with reduced size */}
            <img
              src="assets\Quiickbook.png"
              alt="Modern Software Stack"
              className="w-16 h-auto mx-auto mb-4" // Adjusted width to 6rem (w-24)
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Modern Software Stack
            </h3>
            <p className="text-gray-600">
              Our smart, industry-leading tools, including QuickBooks, Xero,
              Zoho Books, and Power BI, ensure accurate, real-time financial
              data and insights. With AI-powered transaction categorization, we
              save you over 70 hours every month.
            </p>
          </div>

          {/* Expert Financial Support */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-300 ease-in-out text-center">
            <FaUsers className="text-4xl text-green-500 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Expert Financial Support
            </h3>
            <p className="text-gray-600">
              Our team of experienced accountants provides daily updates and
              insights, helping you manage your finances with precision, so you
              can make informed decisions without surprises.
            </p>
          </div>

          {/* Proactive Financial Management */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-300 ease-in-out text-center">
            <FaChartLine className="text-4xl text-yellow-500 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Proactive Financial Management
            </h3>
            <p className="text-gray-600">
              We focus on preventing issues before they arise, helping you
              manage your financial operations proactively, unlike the
              disruptions you may have faced with Bench.
            </p>
          </div>

          {/* Comprehensive Financial Services */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-300 ease-in-out text-center">
            <FaClipboardList className="text-4xl text-red-500 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Comprehensive Financial Services
            </h3>
            <p className="text-gray-600">
              We offer full-service solutions for all your financial
              needs—bookkeeping, compliance, reporting, and forecasting. Our
              holistic approach ensures every aspect of your business's finances
              is taken care of.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyDNAGrowth;
