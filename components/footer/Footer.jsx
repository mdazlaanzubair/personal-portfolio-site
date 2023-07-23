"use client";

import Link from "next/link";
import Button from "../Button";
import { ImHeart } from "react-icons/im";
import useNavStore from "@/store/NavStore";

const Footer = () => {
  const navActivator = useNavStore((state) => state.navActivator);
  const activeNav = useNavStore((state) => state.activeNav);

  const footerNav = [
    { title: "Home", link: "/" },
    { title: "Credentials", link: "/credentials" },
    { title: "Work", link: "/archives" },
    { title: "Offers", link: "/offers" },
  ];

  return (
    <footer className="flex flex-col lg:flex-row items-center justify-between gap-5 text-xs lg:text-base shadow-lg px-5 lg:px-16 py-5 bg-base-100">
      <ul className="flex flex-row gap-3 items-center justify-center">
        {footerNav.map((item, index) => {
          const { title, link } = item;
          return (
            <Link key={index} href={link} onClick={() => navActivator(title)}>
              <li
                className={`py-1 text-base-content font-medium hover:font-semibold hover:text-primary transition-all ease-in-out duration-300 ${
                  title === activeNav ? "font-semibold text-primary" : ""
                }`}
              >
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
