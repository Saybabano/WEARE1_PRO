import React, { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    role: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = "First Name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last Name is required";
    if (!formData.email.includes("@")) newErrors.email = "Enter a valid email";
    if (formData.phone.length < 10) newErrors.phone = "Phone number must be 10 digits";
    if (!formData.role) newErrors.role = "Please select a role";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      alert("Form submitted successfully!");
    }
  };

  const inputBaseClasses =
    "w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition duration-200";

  return (
    <div className="bg-gradient-to-br from-black via-gray-900 to-black text-white min-h-screen flex items-center justify-center px-6 py-12">
      <div className="flex flex-col md:flex-row w-full max-w-5xl gap-10">
        {/* Left */}
        <div className="flex-1 space-y-6">
          <h1 className="text-3xl md:text-4xl font-bold leading-tight">
            Build a<br /> <span className="text-yellow-500">Top B-School</span>{" "}
            <span className="text-white">With Us</span>
          </h1>
          <p className="text-gray-400 text-lg">How would you like to engage?</p>
        </div>

        {/* Right - Form */}
        <div className="w-full md:max-w-md bg-white text-black rounded-2xl p-8 shadow-2xl">
          <form className="space-y-5" onSubmit={handleSubmit}>
            {/* Name Fields */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="w-full">
                <label htmlFor="firstName" className="block text-sm font-medium mb-1">First Name</label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  placeholder="First Name"
                  className={`${inputBaseClasses} ${errors.firstName && "border-red-500"}`}
                  value={formData.firstName}
                  onChange={handleChange}
                />
                {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
              </div>
              <div className="w-full">
                <label htmlFor="lastName" className="block text-sm font-medium mb-1">Last Name</label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  placeholder="Last Name"
                  className={`${inputBaseClasses} ${errors.lastName && "border-red-500"}`}
                  value={formData.lastName}
                  onChange={handleChange}
                />
                {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
              </div>
            </div>

            {/* Email & Phone */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="w-full">
                <label htmlFor="email" className="block text-sm font-medium mb-1">Email Address</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  className={`${inputBaseClasses} ${errors.email && "border-red-500"}`}
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>
              <div className="w-full">
                <label htmlFor="phone" className="block text-sm font-medium mb-1">Contact Number</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="Contact Number"
                  className={`${inputBaseClasses} ${errors.phone && "border-red-500"}`}
                  value={formData.phone}
                  onChange={handleChange}
                />
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
              </div>
            </div>

            {/* Role */}
            <div>
              <label htmlFor="role" className="block text-sm font-medium mb-1">Select Role</label>
              <select
                id="role"
                name="role"
                className={`${inputBaseClasses} ${errors.role && "border-red-500"}`}
                value={formData.role}
                onChange={handleChange}
              >
                <option value="">Select Role</option>
                <option value="Partner">Partner</option>
                <option value="Investor">Investor</option>
                <option value="Student">Student</option>
              </select>
              {errors.role && <p className="text-red-500 text-sm mt-1">{errors.role}</p>}
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Please enter your message"
                maxLength={500}
                className={`${inputBaseClasses} h-28 resize-none ${errors.message && "border-red-500"}`}
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              <div className="text-right text-sm text-gray-500">
                {formData.message.length}/500 characters
              </div>
              {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-fit bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-6 rounded-full text-sm font-semibold transition duration-300 shadow-md"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
