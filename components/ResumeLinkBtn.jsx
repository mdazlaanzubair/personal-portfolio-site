import Link from "next/link";

const ResumeLinkBtn = () => {
  return (
    <Link href="/resume" target="_blank">
      <span className="btn btn-outline btn-primary rounded-sm capitalize hover:translate-x-1 hover:translate-y-1 transition-all ease-in-out duration-300">
        Resume
      </span>
    </Link>
  );
};

export default ResumeLinkBtn;
