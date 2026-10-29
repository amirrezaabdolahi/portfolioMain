import Link from "next/link";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

const socials = [
  {
    icon: FaGithub,
    label: "GitHub",
    path: "https://github.com/amirrezaabdolahi",
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    path: "https://www.linkedin.com/in/amireza-abdolahi-283710349",
  },
  {
    icon: FaInstagram,
    label: "Instagram",
    path: "https://instagram.com/maybe_im_amirreza",
  },
];

const Socials = ({ containerStyle, iconStyle }) => {
  return (
    <div className={containerStyle}>
      {socials.map((item) => {
        const Icon = item.icon;

        return (
          <Link
            key={item.label}
            href={item.path}
            aria-label={item.label}
            title={item.label}
            target="_blank"
            rel="noopener noreferrer"
            className={iconStyle}
          >
            <Icon aria-hidden="true" />
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;