"use client";

import useNavStore from "@/store/NavStore";
import { CgMenuGridR } from "react-icons/cg";
import { MdOutlineClose } from "react-icons/md";

const NavToggler = () => {
  const toggleNav = useNavStore((state) => state.toggleNav);
  const navToggler = useNavStore((state) => state.navToggler);

  return (
    <button
      type="button"
      className="btn btn-ghost btn-square bg-base-100 hover:text-primary hover:bg-transparent text-xl rounded-sm"
      onClick={() => navToggler()}
    >
      {toggleNav ? <MdOutlineClose /> : <CgMenuGridR />}
    </button>
  );
};

export default NavToggler;
