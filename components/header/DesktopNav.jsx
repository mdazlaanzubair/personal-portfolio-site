const DesktopNav = () => {
  const nav_links = [
    { title: "About", url: "#about-section" },
    { title: "Services ", url: "#service-section" },
    { title: "Experience ", url: "#experience-section" },
    { title: "Projects ", url: "#project-section" },
    { title: "Contact", url: "#contact-section" },
  ];

  return (
    <ul className="menu menu-horizontal px-1 translate-x-0">
      {nav_links.map((link, index) => (
        <li className="group" key={index}>
          <a href={link.url} className="bg-transparent hover:bg-transparent">
            <span className="relative overflow-x-hidden inline-flex font-medium tracking-wider text-sm text-navy-slate-dark group-hover:text-primary py-3">
              {link.title}
              <span className="absolute w-full h-0.5 bg-navy-dark group-hover:bg-primary left-0 bottom-0 -translate-x-full group-hover:translate-x-0 transition-all ease-in-out duration-200"></span>
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default DesktopNav;
