"use state";

import { BsCalendar2Check as Calendar } from "react-icons/bs";

import { useEducationContext } from "@/context/EducationContext";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const Education = () => {
  const { degrees, certificates, sortQualification } = useEducationContext();

  const sortedDegrees = sortQualification(degrees);
  const sortedCertificates = sortQualification(certificates);

  return (
    <div className="flex flex-col lg:flex-row min-h-screen justify-between items-start gap-5 shadow-lg px-5 lg:px-16 py-5 lg:py-16 bg-base-100">
      <div className="w-full">
        <h3 className="text-primary font-bold tracking-widest mb-3 px-1">
          My qualifications
        </h3>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-5">
          Credential<span className="text-primary">.</span>
        </h1>
        <h2 className="text-xl md:text-2xl lg:text-3xl tracking-tight font-bold text-neutral-content mb-8 lg:mb-10">
          Qualifications are the foundation, passion is the building.
        </h2>
        <div className="flex flex-col lg:flex-row justify-center items-start gap-3">
          <ul className="w-full lg:w-1/2 border-l border-dark">
            {sortedDegrees?.map((degree, index) => (
              <li
                key={index}
                className="relative mb-10 flex flex-row items-center"
              >
                <div className="absolute -left-3 flex items-center justify-center text-lg bg-dark text-primary rounded-full shadow-2xl">
                  <Calendar />
                </div>
                <div className="p-5 flex flex-col ml-6 bg-dark">
                  <span className="badge badge-primary font-bold text-xs rounded-sm">
                    {degree.from} - {degree.to}
                  </span>
                  <h1 className="text-base font-black">
                    {degree.title}{" "}
                    <span className="text-primary">@{degree.institute}</span>
                  </h1>
                  <h2 className="text-sm font-semibold">{degree.field}</h2>

                  <p className="my-5 text-sm font-medium">
                    {documentToReactComponents(degree.description)}
                  </p>
                </div>
              </li>
            ))}
          </ul>
          <ul className="w-full lg:w-1/2 border-r border-dark">
            {sortedCertificates?.map((certificate, index) => (
              <li
                key={index}
                className="relative mb-10 flex flex-row items-center"
              >
                <div className="absolute -right-3 flex items-center justify-center text-lg bg-dark text-primary rounded-full shadow-2xl">
                  <Calendar />
                </div>
                <div className="p-5 flex flex-col mr-6 bg-dark">
                  <span className="badge badge-primary font-bold text-xs rounded-sm">
                    {certificate.from} - {certificate.to}
                  </span>
                  <h1 className="text-base font-black">
                    {certificate.title}{" "}
                    <span className="text-primary">
                      @{certificate.institute}
                    </span>
                  </h1>
                  <h2 className="text-sm font-semibold">{certificate.field}</h2>

                  <p className="my-5 text-sm font-medium">
                    {documentToReactComponents(certificate.description)}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Education;
