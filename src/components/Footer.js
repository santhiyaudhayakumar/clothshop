import React from "react";
import { FaFacebook, FaTwitter, FaInstagram  } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="bg-primary py-12">
      <div className="container mx-auto flex justify-between text-white">
        <div>
        <ul className="p-3 flex">
          <li className="m-3">Home</li>
          <li className="m-3">Contact</li>
        </ul>
        </div>
        <div>
        <ul className="p-2 flex">
          <li className="m-3"><FaFacebook /></li>
          <li className="m-3"><FaTwitter /></li>
          <li className="m-3"><FaInstagram /></li>
        </ul>
        </div>
        </div>
      <div className="container mx-auto">
        <p className="text-white text-center">
          Copyright &copy; San 🤍 2024. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
