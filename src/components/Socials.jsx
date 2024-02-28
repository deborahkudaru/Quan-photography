import React from "react";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";

const Socials = () => {
  return (
    <div id="icons">
      <a className="icons" href="">
        <BsInstagram />
      </a>
      <a className="icons" href="">
        <BsTwitter />
      </a>
    </div>
  );
};

export default Socials;
