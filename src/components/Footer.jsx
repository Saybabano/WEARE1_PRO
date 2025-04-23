import React from "react";
import { FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import { FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-black text-white px-6 py-12">
      {/* Main grid section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 border-b border-gray-700 pb-10">
        
        {/* Logo */}
        <div className="flex flex-col items-start">
          <img
            src=""
            alt="Weare1 logo"
            className="mb-4 w-36"
          />
          <p className="text-gray-400 text-sm max-w-xs">
            Empowering students through innovation, tech, and learning.
          </p>
        </div>

        {/* About */}
        <div>
          <h3 className="font-semibold text-lg mb-4">About us</h3>
          <p className="mb-2 text-gray-400 cursor-pointer  hover:text-white transition">Careers</p>
        </div>

        {/* Academics */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Academics</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li className="cursor-pointer hover:text-white transition">Postgraduate Programme</li>
            <li className="cursor-pointer hover:text-white transition">Undergraduate Programme</li>
            <li className="cursor-pointer hover:text-white transition">Executive Programme</li>
          </ul>
        </div>

        {/* Innovation */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Innovation</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li className="cursor-pointer hover:text-white transition">Student Startups</li>
            <li className="cursor-pointer hover:text-white transition">Faculty Research</li>
          </ul>
        </div>

        {/* Other Links */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Other Links</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li className="cursor-pointer hover:text-white transition">For Companies</li>
            <li className="cursor-pointer hover:text-white transition">Jobs</li>
            <li className="cursor-pointer hover:text-white transition">Become A Master</li>
            <li className="cursor-pointer hover:text-white transition">Events</li>
            <li className="cursor-pointer hover:text-white transition">Blog</li>
          </ul>
        </div>
      </div>

      {/* Address & Socials */}
      <div className="max-w-7xl mx-auto mt-10 grid gap-6 md:grid-cols-2 text-sm text-gray-400">
        {/* Contact info */}
        <div>
          <p className="flex items-start gap-2 mb-3">
            <FaMapMarkerAlt className="mt-1" />
            P28, Ward-49, Shankar Vihar, Ajmer Road, Jaipur, Rajasthan – 302006, India
          </p>
          <p className="flex items-center gap-2">
            <FaEnvelope />
            saurabh@weare1.academy
          </p>
        </div>

        {/* Social icons */}
        <div className="flex justify-start md:justify-end items-center gap-6 text-xl">
          <FaInstagram className="hover:text-pink-500 cursor-pointer transition" />
          <FaLinkedin className="hover:text-blue-500 cursor-pointer transition" />
          <FaYoutube className="hover:text-red-500 cursor-pointer transition" />
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="max-w-7xl mx-auto mt-10 flex flex-col md:flex-row justify-between items-center border-t border-gray-700 pt-6 text-sm text-gray-400 gap-4">
        <p>© 2025 Weare1 Academy. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:underline hover:text-white transition">Privacy Policy</a>
          <a href="#" className="hover:underline hover:text-white transition">Terms & Conditions</a>
          <a href="#" className="hover:underline hover:text-white transition">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
