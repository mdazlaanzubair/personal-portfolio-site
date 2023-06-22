import {
  FiGithub as Github,
  FiFacebook as Facebook,
  FiTwitter as Twitter,
  FiLinkedin as Linkedin,
  FiInstagram as Instagram,
} from "react-icons/fi";

const LeftSection = () => {
  const social_links = [
    { title: "Github", link: "#Github", Icon: Github },
    { title: "Facebook", link: "#Facebook", Icon: Facebook },
    { title: "Twitter", link: "#Twitter", Icon: Twitter },
    { title: "Instagram", link: "#Instagram", Icon: Instagram },
    { title: "Linkedin", link: "#Linkedin", Icon: Linkedin },
  ];

  return (
    <div className="flex flex-col items-center max-h-[80vh] justify-between gap-5 fixed left-10 bottom-0 z-10">
      <div className="flex flex-col">
        {social_links.map((social_link, index) => {
          const { title, link, Icon } = social_link;
          return (
            <div
              className="tooltip hover:tooltip-open tooltip-right "
              data-tip={title}
              key={index}
            >
              <a
                href={link}
                className="btn btn-ghost text-xl hover:bg-transparent btn-circle text-navy-slate-light hover:text-primary hover:-translate-y-2 hover:-translate-x-1 transition-all ease-in-out duration-500 cursor-pointer"
                target="_blank"
              >
                <Icon />
              </a>
            </div>
          );
        })}

        <span className="w-0.5 h-24 mx-auto shrink my-2 bg-navy-slate-dark"></span>
      </div>
    </div>
  );
};

export default LeftSection;
