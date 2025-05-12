import React, { useState } from "react";

const CreateAccount = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [captchaInput, setCaptchaInput] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const captcha = "f7ac53"; // Static captcha

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMsg("");

    const phonePattern = /^[6-9]\d{9}$/;

    if (!phonePattern.test(phone)) {
      setErrorMsg("Invalid phone number format.");
      return;
    }

    if (captchaInput !== captcha) {
      setErrorMsg("Captcha does not match.");
      return;
    }

    alert("Account created successfully!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-xl bg-white rounded-3xl shadow-xl p-8">
        <h2 className="text-center text-2xl font-extrabold text-yellow-500 mb-6">
          Weare1 : Esports Business Program
        </h2>
        <p className="text-center text-gray-500 mb-6">
          Admission Portal - <span className="font-semibold">Create an Account</span>
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-gray-700 font-medium mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Example@gmail.com"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="name"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Phone</label>
            <div className="flex space-x-2">
              <select className="w-1/4 px-3 py-3 border border-gray-300 rounded-xl">
                <option value="+91">+91</option>
              </select>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="0000000000"
                required
                className="w-3/4 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Captcha</label>
            <div className="flex items-center space-x-4">
              <div className="bg-gray-100 px-5 py-3 text-lg font-bold rounded-xl border border-gray-300">
                {captcha}
              </div>
              <input
                type="text"
                value={captchaInput}
                onChange={(e) => setCaptchaInput(e.target.value)}
                placeholder="Enter text as shown"
                required
                className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>
          </div>

          {errorMsg && <p className="text-red-500 text-sm font-medium">{errorMsg}</p>}

          <button
            type="submit"
            className="w-full py-3 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-xl transition duration-300"
          >
            APPLY NOW
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateAccount;
