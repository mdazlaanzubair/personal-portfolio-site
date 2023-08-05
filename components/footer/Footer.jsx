"use client";

import { motion } from "framer-motion";

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
    { title: "Offers", link: "/offers" },
    { title: "Archives", link: "/archives" },
    {
      title: "Resume",
      link: "/resume",
    },
  ];

  return (
    <footer className="flex flex-col lg:flex-row items-center justify-between gap-5 text-xs lg:text-base px-5 lg:px-16 py-5">
      <ul className="flex flex-row gap-3 items-center justify-center">
        {footerNav.map((item, index) => {
          const { title, link } = item;
          return (
            <Link
              key={index}
              href={link}
              target={title === "Resume" ? "_blank" : "_self"}
              onClick={() => navActivator(title)}
            >
              <motion.li
                initial={{ opacity: 0, translateX: -10, translateY: -10 }}
                whileInView={{ opacity: 1, translateX: 0, translateY: 0 }}
                transition={{ duration: 0.3, delay: (index + 1) * 0.1 }}
                className={`py-1 text-base-content font-medium hover:font-semibold hover:text-primary transition-all ease-in-out duration-300 ${
                  title === activeNav ? "font-semibold text-primary" : ""
                }`}
              >
                {title}
              </motion.li>
            </Link>
          );
        })}
      </ul>
      <motion.div
        initial={{ opacity: 0, translateX: -10, translateY: -10 }}
        whileInView={{ opacity: 1, translateX: 0, translateY: 0 }}
        transition={{ duration: 0.3, delay: 0.5 }}
        className="hidden lg:flex flex-row gap-3 items-center justify-center"
      >
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
      </motion.div>

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
