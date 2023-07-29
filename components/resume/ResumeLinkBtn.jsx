import Link from "next/link";

const ResumeLinkBtn = () => {
  return (
    <Link
      href="/resume"
      className="btn btn-outline btn-primary rounded-sm capitalize hover:translate-x-1 hover:translate-y-1 transition-all ease-in-out duration-300"
    >
      Resume
    </Link>
  );
};

export default ResumeLinkBtn;
