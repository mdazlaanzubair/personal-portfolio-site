"use client";

import useNavStore from "@/store/NavStore";
import Link from "next/link";

const Button = ({ type, link, text, target = "_self", active_nav_title }) => {
  const navActivator = useNavStore((state) => state.navActivator);

  return type !== "btn" ? (
    <Link
      href={link}
      target={target}
      className="group text-primary max-w-32 font-medium leading-loose"
      onClick={() => navActivator(active_nav_title)}
    >
      <span className="relative overflow-x-hidden inline-flex text-sm lg:text-base font-bold">
        {text}
        <span className="absolute w-full h-0.5 bg-primary left-0 bottom-0 -translate-x-2/3 group-hover:translate-x-0 transition-all ease-in-out duration-200"></span>
      </span>
    </Link>
  ) : (
    <Link
      href={link}
      target={target}
      className="btn btn-outline btn-primary rounded-sm capitalize font-bold hover:translate-x-1 hover:translate-y-1 transition-all ease-in-out duration-300"
      onClick={() => navActivator(active_nav_title)}
    >
      {text}
    </Link>
  );
};

export default Button;
