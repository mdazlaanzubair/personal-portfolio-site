import { HiHomeModern as HomeIcon } from "react-icons/hi2";
import {
  BsFillPersonFill as About,
  BsTelephoneFill as Contact,
} from "react-icons/bs";
import { MdWork as Work } from "react-icons/md";
import { FaFilePdf as Resume } from "react-icons/fa";
import { TiVideo as VideoCall } from "react-icons/ti";

const FloatingNav = () => {
  const social_links = [
    { title: "Home", link: "#Home", Icon: HomeIcon },
    { title: "About", link: "#About", Icon: About },
    { title: "Work ", link: "#Work", Icon: Work },
    { title: "Contact", link: "#Contact", Icon: Contact },
    { title: "Resume", link: "#Resume", Icon: Resume },
    { title: "Video Call", link: "#VideoCall", Icon: VideoCall },
  ];

  return (
    <ul className="flex lg:hidden w-2/3 items-center justify-center menu menu-horizontal bg-gradient-to-br from-navy-light via-navy to-navy rounded-box bottom-10 opacity-75 z-10 fixed left-1/2 transform -translate-x-1/2 shadow-lg">
      {social_links.map((social_link, index) => {
        const { title, link, Icon } = social_link;
        return (
          <li key={index}>
            <a href={link}>
              <Icon />
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default FloatingNav;
