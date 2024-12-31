import React from "react";
import ContactForm from "./components/ContactForm";
import ReviewPage from "./components/ReviewPage";
import WhyDNAGrowth from "./components/WhyDNAGrowth";
import WhyChooseDNAGrowth from "./components/WhyChooseDNAGrowth";
import RevolutionizeSection from "./components/RevolutionizeSection";
import logo from "../assets/DNAGrowth.png";
import whychoose from "../assets/slider-1 (1).jpg";

const App = () => {
  return (
    <div className="flex flex-col justify-center items-center h-full bg-gray-100 pt-8 pb-8 relative">
      {/* Logo at top-left */}
      <div className="absolute top-4 left-24 mb-4">
        <img src={logo} alt="DNA Growth Logo" className="h-12 w-auto" />
      </div>

      <div className="flex flex-col lg:flex-row justify-between max-w-7xl w-full p-8">
        {/* Left Section */}
        <div className="w-full lg:w-1/2 p-6 flex flex-col items-start space-y-6">
          <p className="text-xl font-semibold text-gray-500 border-[1px] border-gray-500 p-2 rounded-lg">
            Affected by the closure of Bench Accounting?
          </p>
          <h1 className="text-3xl font-bold text-[#2B3C77]">
            Let DNA Growth solve your bookkeeping.
          </h1>

          <p className="text-lg">
            We understand the frustration caused by the unexpected shutdown of
            Bench Accounting. At DNA Growth, we're here to make your transition
            as seamless and stress-free as possible. We recognize the challenges
            you’re facing and are committed to providing the expert human-led
            accounting support you need to move forward. If you're looking for a
            trusted alternative, we offer a{" "}
            <span className="font-bold">
              smooth and hassle-free transition{" "}
            </span>
            with a team of experienced professionals ready to pick up where
            Bench left off.
          </p>
        </div>

        {/* Right Section (Contact Form) */}
        <div
          className="w-full lg:w-5/12 p-6 bg-gray-50 rounded-lg shadow-lg"
          id="contact-form"
        >
          <ContactForm />
        </div>
      </div>

      <div className="flex flex-col bg-blue-100">
        <div className="flex justify-center items-center text-white p-4">
          <h1 className="text-3xl lg:text-5xl font-semibold text-[#2B3C77]">
            Why Choose DNA Growth?
          </h1>
        </div>
        <div className="flex flex-col lg:flex-row gap-4 justify-center items-center">
          <img className="w-10/12 lg:w-6/12" src={whychoose} alt="" />
          <WhyChooseDNAGrowth />
        </div>
      </div>

      <div className="w-full">
        <WhyDNAGrowth />
        <ReviewPage />
        <RevolutionizeSection />
      </div>
    </div>
  );
};

export default App;
