import { HiHomeModern as HomeIcon } from "react-icons/hi2";
import {
  BsFillPersonFill as About,
  BsTelephoneFill as Contact,
} from "react-icons/bs";
import { MdWork as Work } from "react-icons/md";
import { FaFilePdf as Resume } from "react-icons/fa";
import { TiVideo as VideoCall } from "react-icons/ti";

const RightSection = () => {
  const social_links = [
    { title: "Home", link: "#home-section", Icon: HomeIcon },
    { title: "About", link: "#about-section", Icon: About },
    { title: "Work ", link: "#Work", Icon: Work },
    { title: "Contact", link: "#Contact", Icon: Contact },
    { title: "Resume", link: "#Resume", Icon: Resume },
    { title: "Video Call", link: "#VideoCall", Icon: VideoCall },
  ];

  return (
    <div className="flex flex-col items-center max-h-[80vh] justify-between gap-3 fixed right-10 top-1/2 -translate-y-1/2">
      {social_links.map((social_link, index) => {
        const { title, link, Icon } = social_link;
        return (
          <div
            className="tooltip hover:tooltip-open tooltip-left"
            data-tip={title}
            key={index}
          >
            <a
              href={link}
              className="btn btn-ghost border-2 text-lg hover:border-primary hover:bg-transparent btn-circle text-navy-slate-dark hover:text-navy-accent hover:-translate-y-2 hover:translate-x-1 transition-all ease-in-out duration-200 cursor-pointer"
            >
              <Icon />
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default RightSection;
