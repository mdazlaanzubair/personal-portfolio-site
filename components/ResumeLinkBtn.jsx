import { motion } from "framer-motion";
import Link from "next/link";

const ResumeLinkBtn = () => {
  return (
    <Link
      href="https://rxresu.me/mdazlaan1996/resume-mdazlaanzubair"
      target="_blank"
    >
      <motion.span
        initial={{ opacity: 0, y: -10, scale: 0 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.2, delay: 0.5 }}
        className="btn btn-outline btn-primary rounded-sm capitalize hover:translate-x-1 hover:translate-y-1 transition-all ease-in-out duration-300"
      >
        Resume
      </motion.span>
    </Link>
  );
};

export default ResumeLinkBtn;
