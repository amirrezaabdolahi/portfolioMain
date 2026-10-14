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
  { icon: <FaGithub />, path: "https://github.com/amirrezaabdolahi" },
  { icon: <FaYoutube />, path: "" },
  { icon: <FaTwitter />, path: "" },
  { icon: <FaLinkedin />, path: "https://www.linkedin.com/in/amireza-abdolahi-283710349?utm_source=share_via&utm_content=profile&utm_medium=member_android" },
  { icon: <FaInstagram />, path: "https://instagram.com/maybe_im_amirreza?vrfl=YXRha3JrODBnMW8z" },
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
