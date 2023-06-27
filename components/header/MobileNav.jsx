import { MdWorkOutline as Work } from "react-icons/md";
import {
  AiOutlineIdcard as About,
  AiOutlinePhone as Contact,
} from "react-icons/ai";
import { SiExpensify as Experience } from "react-icons/si";
import { HiOutlineCog as Service } from "react-icons/hi";
import ThemeToggler from "../ThemeToggler";

const MobileNav = () => {
  const social_links = [
    { title: "About", url: "#about-section", Icon: About },
    { title: "Services ", url: "#service-section", Icon: Service },
    { title: "Experience ", url: "#experience-section", Icon: Experience },
    { title: "Projects ", url: "#project-section", Icon: Work },
    { title: "Contact", url: "#contact-section", Icon: Contact },
  ];

  return (
    <div className="flex flex-row items-center px-3 max-h-[80vh] justify-between gap-3 fixed bottom-10 left-1/2 -translate-x-1/2 bg-base-200 bg-opacity-50 rounded-full">
      {social_links.map((social_link, index) => {
        const { title, url, Icon } = social_link;
        return (
          <a
            key={index}
            href={url}
            className="group relative btn btn-ghost btn-circle border-none text-xl hover:border-primary hover:bg-transparent hover:-translate-y-2 hover:translate-x-1 transition-all ease-in-out duration-300 cursor-pointer"
          >
            <span className="absolute capitalize invisible text-xs px-3 py-2 text-transparent group-hover:text-base-100 rounded-full font-semibold bottom-10 group-hover:bg-primary group-hover:bottom-12 group-hover:visible transition-all ease-in-out duration-300">
              {title}
            </span>
            <span className="group-hover:text-primary">
              <Icon />
            </span>
          </a>
        );
      })}
      <ThemeToggler />
    </div>
  );
};

export default MobileNav;
