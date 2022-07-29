import React from "react";
import { AiFillInstagram, AiFillFacebook } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer-container">
      <p>All Rights Reserved 2022</p>
      <p className="icons">
        <AiFillFacebook />
        <AiFillInstagram />
      </p>
    </div>
  );
};

export default Footer;
