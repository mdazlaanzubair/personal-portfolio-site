"use client";

import { motion } from "framer-motion";

import useNavStore from "@/store/NavStore";
import { CgMenuGridR } from "react-icons/cg";
import { MdOutlineClose } from "react-icons/md";

const NavToggler = () => {
  const toggleNav = useNavStore((state) => state.toggleNav);
  const navToggler = useNavStore((state) => state.navToggler);

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: 0.1 }}
      type="button"
      className="btn btn-ghost btn-square bg-base-100 hover:text-primary hover:bg-transparent text-xl rounded-sm"
      onClick={() => navToggler()}
    >
      {toggleNav ? <MdOutlineClose /> : <CgMenuGridR />}
    </motion.button>
  );
};

export default NavToggler;
