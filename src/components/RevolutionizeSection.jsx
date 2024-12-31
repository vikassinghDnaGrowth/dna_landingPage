import React from "react";

const RevolutionizeSection = () => {
  const handleSwitchToDNAGrowth = () => {
    // Redirects the user to the DNA Growth website
    window.location.href = "https://www.dnagrowth.com/";
  };

  return (
    <div className="bg-gray-300 text-black py-12 px-8 flex flex-col items-center">
      <h2 className="text-4xl font-bold text-center mb-8">
        Ready to Revolutionize Your Financial Management?
      </h2>
      <p className="text-lg text-center max-w-3xl mb-8">
        Switching to DNA Growth is simple and hassle-free. With our proven
        process, we ensure minimal disruption while unlocking smarter, more
        efficient financial management for your business. Whether you're looking
        for seamless migration or ongoing financial expertise, we’ve got you
        covered.
      </p>

      <div className="bg-white text-gray-800 rounded-lg p-8 shadow-lg w-full max-w-3xl">
        <h3 className="text-3xl font-semibold text-center text-blue-600 mb-4">
          Take the First Step Today
        </h3>
        <p className="text-lg text-center mb-6">
          Ready to get your books in order with DNA Growth? Contact us today to
          get started and take advantage of our 50% off offer for your first
          month!
        </p>

        <div className="flex justify-center space-x-6">
          <button
            className="bg-green-500 text-white text-lg font-semibold py-3 px-8 rounded-lg transition-transform transform hover:scale-105"
            onClick={() => alert("Contact Form")}
          >
            Contact Us
          </button>

          <button
            className="bg-blue-600 text-white text-lg font-semibold py-3 px-8 rounded-lg transition-transform transform hover:scale-105"
            onClick={handleSwitchToDNAGrowth} // Call the function to redirect
          >
            Switch to DNA Growth
          </button>
        </div>
      </div>

      <div className="text-center mt-12">
        <h3 className="text-3xl font-semibold text-black mb-4">
          Revolutionize your financial operations and unleash your growth
          potential.
        </h3>
      </div>
    </div>
  );
};

export default RevolutionizeSection;
