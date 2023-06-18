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
    { title: "Home", link: "#Home", Icon: HomeIcon },
    { title: "About", link: "#About", Icon: About },
    { title: "Work ", link: "#Work", Icon: Work },
    { title: "Contact", link: "#Contact", Icon: Contact },
    { title: "Resume", link: "#Resume", Icon: Resume },
    { title: "Video Call", link: "#VideoCall", Icon: VideoCall },
  ];

  return (
    <div className="flex flex-col items-center max-h-[80vh] justify-between gap-3 fixed right-5 top-1/2 -translate-y-1/2">
      {social_links.map((social_link, index) => {
        const { title, link, Icon } = social_link;
        return (
          <div
            className="tooltip hover:tooltip-open tooltip-left tooltip-success"
            data-tip={title}
            key={index}
          >
            <a
              href={link}
              className="btn btn-ghost border-2 border-navy hover:bg-transparent hover:border-navy-accent btn-circle text-navy-slate-dark hover:text-navy-accent hover:-translate-y-1 transition-all ease-in-out duration-500 cursor-pointer"
              target="_blank"
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
