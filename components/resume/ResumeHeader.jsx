"use client";
import profilePic from "@/public/profile.jpg";
import Link from "next/link";

const ResumeHeader = () => {
  return (
    <div
      id="resume-header-section"
      className="w-full grid grid-cols-4 justify-start items-center gap-10"
    >
      <div className="w-full flex flex-col items-center justify-start gap-3">
        <div className="avatar">
          <div className="w-full rounded-ss-3xl rounded-ee-3xl ring ring-primary ring-offset-base-100 ring-offset-8">
            <img
              src={profilePic.src}
              alt="Muhammad Azlaan Zubair Profile Picture"
            />
          </div>
        </div>
      </div>
      <div className="col-span-3 w-full flex flex-col items-start justify-start gap-3">
        <h3 className="text-primary font-bold tracking-widest -mb-3 px-1">
          Hi, myself
        </h3>
        <h1 className="text-5xl font-black">
          Muhammad Azlaan
          <span className="text-primary">,</span>
        </h1>

        <p className="mb-2 font-medium text-base leading-relaxed">
          I&apos;m a software engineering graduate, specialized in building
          &amp; designing things for the web. You can call me a{" "}
          <Link href="/" className="font-bold text-primary">
            Web Engineer
          </Link>{" "}
          cause I can <span className="font-bold">Layout &amp; Prototype</span>,{" "}
          <span className="font-bold">Design &amp; Structure</span>,{" "}
          <span className="font-bold">Develop &amp; Build</span>,{" "}
          <span className="font-bold">Manage &amp; Maintain</span>,{" "}
          <span className="font-bold">Repair &amp; Construct</span> web related
          products.
        </p>
        <p className="font-medium text-base leading-relaxed">
          With more than <span className="font-bold">2 years</span> of
          experience I have demonstrated my skills &amp; talent in the field of
          web to optimize online appearances.
        </p>
      </div>
    </div>
  );
};

export default ResumeHeader;
