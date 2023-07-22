import Link from "next/link";

const ResumeDownloadBtn = () => {
  return (
    <Link
      href="3"
      target="_blank"
      className="btn btn-outline btn-primary rounded-sm capitalize hover:translate-x-1 hover:translate-y-1 transition-all ease-in-out duration-300"
    >
      Resume
    </Link>
  );
};

export default ResumeDownloadBtn;
