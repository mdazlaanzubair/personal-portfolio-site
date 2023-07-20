import { Link } from "react-scroll";
import Button from "../Button";
import { ImHeart } from "react-icons/im";

const Footer = () => {
  const footerNav = [
    { title: "Home", link: "/" },
    { title: "About", link: "/about" },
    { title: "Work", link: "/archives" },
    { title: "Offers", link: "/services" },
  ];
  return (
    <footer className="flex flex-col lg:flex-row items-center justify-between gap-5 text-xs lg:text-base shadow-lg px-5 lg:px-16 py-5 bg-base-100">
      <ul className="flex flex-row gap-3 items-center justify-center">
        {footerNav.map((item, index) => {
          const { title, link } = item;
          return (
            <Link key={index} href={link}>
              <li className="py-1 border-b-2 text-base-content border-transparent hover:font-semibold hover:border-b-2 hover:text-primary hover:border-primary transition-all ease-in-out duration-300">
                {title}
              </li>
            </Link>
          );
        })}
      </ul>
      <div className="hidden lg:flex flex-row gap-3 items-center justify-center">
        <span>Created with</span>
        <span className="text-red-600">
          <ImHeart />
        </span>
        <span>by</span>
        <Button
          type="link"
          link="/"
          text="Md Azlaan Zubair"
          active_nav_title={"Home"}
        />
      </div>

      <div className="flex lg:hidden flex-row gap-3 items-center justify-center">
        <span>Crafted by</span>
        <Button
          type="link"
          link="/"
          text="Md Azlaan Zubair"
          active_nav_title={"Home"}
        />
      </div>
    </footer>
  );
};

export default Footer;
