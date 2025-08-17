import Link from "next/link";
import React from "react";

import {
  FaGithub,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "" },
  { icon: <FaYoutube />, path: "" },
  { icon: <FaTwitter />, path: "" },
  { icon: <FaLinkedin />, path: "" },
  { icon: <FaInstagram />, path: "" },
];

const Socials = ({ containerStyle, iconStyle }) => {
  return (
    <div className={containerStyle}>
      {socials.map((item, index) => (
        <Link href={item.path} key={index} className={iconStyle}>
          {item.icon}
        </Link>
      ))}
    </div>
  );
};

export default Socials;
