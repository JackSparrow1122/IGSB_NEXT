"use client";

import Link from "next/link";
import React from "react";
import Image from "next/image";
import {
  FaPhoneAlt,
  FaEnvelope
} from "react-icons/fa";

import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube
} from "react-icons/fa6";


const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 border-t border-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* -----------------------------------------------
           LEFT COLUMN (Logo + Institute Name + Social Links)
        ------------------------------------------------ */}
        <div>
          <Image
            src="/Logo.png"
            alt="IGSB Logo"
            width={120}
            height={120}
            className="mb-4"
          />

          <p className="text-gray-700 text-sm font-medium leading-tight">
            Shree Chanakya Education Society’s
          </p>
          <h2 className="text-xl font-extrabold text-gray-900 leading-tight mt-1">
            INDIRA GLOBAL SCHOOL <br /> OF BUSINESS
          </h2>

          <p className="text-xs text-gray-600 mt-2">
            "Empowering Minds to Elevate Lives"
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4 text-xl text-blue-700">
            <FaFacebookF className="cursor-pointer hover:text-blue-900" />
            <FaLinkedinIn className="cursor-pointer hover:text-blue-900" />
            <FaInstagram className="cursor-pointer hover:text-blue-900" />
            <FaYoutube className="cursor-pointer hover:text-blue-900" />
          </div>
        </div>

        {/* -----------------------------------------------
           CENTER COLUMN (Featured Links)
        ------------------------------------------------ */}
        <div className="grid grid-cols-2 gap-10">
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              Featured Links
            </h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>Home</li>
              <li>About Us</li>
              <li>MBA Admissions</li>
              <li>Alumni</li>
              <li>Contact Us</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4 opacity-0">
              Featured Links
            </h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>Vidya Lakshmi Portal</li>
              <li>AICTE Feedback</li>
              <li>Students Engagement</li>
              <li>Student Achievements</li>
              <li>Student Life at IGSB</li>
              <li>New Voter Registration</li>
            </ul>
          </div>
        </div>

        {/* -----------------------------------------------
           RIGHT COLUMN (Contact Us)
        ------------------------------------------------ */}
        <div>
          <h3 className="text-lg font-bold text-gray-900 mb-4">Contact Us</h3>

          <p className="text-sm font-semibold text-gray-900">Address</p>
          <p className="text-sm text-gray-700 mt-1 mb-4 leading-relaxed">
            S.No. 64, 65, Gat No. 276,<br />
            At Post : Parandwadi, Near Somatnephata,<br />
            Tal. : Maval, Dist.: Pune – 410 506
          </p>

          <p className="text-sm font-semibold text-gray-900">Phone Number:</p>
          <p className="text-sm text-gray-700 mt-1">
            <strong>MBA:</strong> <br />
            Mobile: 9657856103 <br />
            Tel.: 02114691417
          </p>
          <p className="text-sm text-gray-700 mt-2">
            <strong>For Administrative Purpose:</strong> <br />
            Mobile: +91 9657856103
          </p>

          <p className="text-sm font-semibold text-gray-900 mt-4">Email:</p>

          <p className="text-sm text-gray-700 mt-1">
            <strong>For verification of student/Alumni academic records:</strong>
            <br />
            exam.committee@indiragsb.edu.in
          </p>

          <p className="text-sm text-gray-700 mt-2">
            <strong>MBA:</strong> <br />
            mba.admissions@indiragsb.edu.in
          </p>

          <p className="text-sm text-gray-700 mt-2">
            <strong>For Administrative Purpose:</strong> <br />
            admin@indiragsb.edu.in
          </p>
        </div>

      </div>

      <div className="bg-secondary text-white text-center py-3 text-xs sm:text-sm">
        © 2024. Indira Global School of Business.
      </div>
    </footer>
  );
};

export default Footer;
