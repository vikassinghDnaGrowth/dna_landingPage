import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    monthlyExpenses: "",
    email: "",
    contactNumber: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const response = await fetch(import.meta.env.VITE_SHEETDB_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
        mode: "cors", // Ensures CORS is allowed
      });

      const result = await response.json();

      if (result.success) {
        setSuccess("Form submitted successfully!");
        // Reset form after successful submission
        setFormData({
          firstName: "",
          lastName: "",
          companyName: "",
          monthlyExpenses: "",
          email: "",
          contactNumber: "",
        });
      }
    } catch (submissionError) {
      setError("An error occurred while submitting the form.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} id="contact-form">
      {error && (
        <p className="text-red-600 mb-4" aria-live="polite">
          {error}
        </p>
      )}
      {success && (
        <p className="text-green-600 mb-4" aria-live="polite">
          {success}
        </p>
      )}

      <h1 className="text-lg sm:text-3xl md:text-4xl text-center text-black font-bold font-roboto-slab uppercase mb-6">
        Get Started Today
      </h1>

      {/* First Name and Last Name */}
      <div className="mb-6 flex gap-4">
        <div className="flex-1">
          <label className="block text-black" htmlFor="firstName">
            First Name*
          </label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="Enter your first name"
            className="mt-1 block w-full p-2 border border-gray-900 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            required
          />
        </div>

        <div className="flex-1">
          <label className="block text-black" htmlFor="lastName">
            Last Name*
          </label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Enter your last name"
            className="mt-1 block w-full p-2 border border-gray-900 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            required
          />
        </div>
      </div>

      {/* Company Name and Monthly Expenses */}
      <div className="mb-6 flex gap-4">
        <div className="flex-1">
          <label className="block text-black" htmlFor="companyName">
            Company Name
          </label>
          <input
            type="text"
            name="companyName"
            id="companyName"
            value={formData.companyName}
            onChange={handleChange}
            placeholder="Enter your company name"
            className="mt-1 block w-full p-2 border border-gray-900 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>

        <div className="flex-1">
          <label className="block text-black" htmlFor="monthlyExpenses">
            Monthly Expenses*
          </label>
          <select
            name="monthlyExpenses"
            id="monthlyExpenses"
            value={formData.monthlyExpenses}
            onChange={handleChange}
            className="mt-1 text-sm block w-full p-2 border border-gray-900 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            required
          >
            <option value="">Select Monthly Expenses</option>
            <option value="under1000">Under $1,000</option>
            <option value="1000-5000">$1,000 - $5,000</option>
            <option value="5000-10000">$5,000 - $10,000</option>
            <option value="over10000">Over $10,000</option>
          </select>
        </div>
      </div>

      {/* Email */}
      <div className="mb-4">
        <label className="block text-black" htmlFor="email">
          Email*
        </label>
        <input
          type="email"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
          className="mt-1 block w-full p-2 border border-gray-900 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
          required
        />
      </div>

      {/* Contact Number */}
      <div className="mb-4">
        <label className="block text-black" htmlFor="contactNumber">
          Contact Number
        </label>
        <input
          type="tel"
          name="contactNumber"
          id="contactNumber"
          value={formData.contactNumber}
          onChange={handleChange}
          placeholder="Enter your contact number"
          className="mt-1 block w-full p-2 border border-gray-900 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
        />
      </div>

      {/* Submit Button */}
      <div className="flex justify-center items-center">
        <button
          type="submit"
          className="bg-blue-900 text-white text-lg py-2 px-12 rounded-xl hover:bg-blue-600 transition duration-200"
          disabled={loading}
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
      </div>

      <p className="text-center text-black mt-4">
        We’ll get back to you within 24 hours.
      </p>
    </form>
  );
};

export default ContactForm;
