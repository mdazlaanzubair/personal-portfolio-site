"use client";

import { useEducationContext } from "@/context/EducationContext";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Link from "next/link";

const ResumeCertifications = () => {
  const { certificates, sortQualification } = useEducationContext();
  const sortedCertificates = sortQualification(certificates);

  return (
    <div className="w-full flex flex-col justify-center items-start font-medium">
      <h1 className="text-2xl font-black mb-5">Certifications</h1>
      <ul className="relative w-full grid grid-cols-2 justify-center gap-5">
        {sortedCertificates &&
          sortedCertificates.length > 0 &&
          sortedCertificates.map((qualification, index) => {
            const { from, to, title, url, institute, field, description } =
              qualification;

            return (
              <li
                key={index}
                className={`relative pb-10 flex flex-col items-center border-primary shadow bg-base-100`}
              >
                <span
                  className={`absolute -top-2 badge badge-primary font-bold text-xs rounded-sm z-20 left-0`}
                >
                  {from !== "null" ? from + " - " + to : to}
                </span>
                <div className={`flex flex-col p-5 mt-5`}>
                  <h1 className="text-sm lg:text-base font-black">
                    {title}{" "}
                    <Link href={url} target="_blank" className="text-primary">
                      @{institute}
                    </Link>
                  </h1>
                  <h2 className="text-xs lg:text-sm font-semibold">{field}</h2>

                  <div className="my-5 text-xs lg:text-sm font-medium">
                    {documentToReactComponents(description)}
                  </div>
                </div>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default ResumeCertifications;
