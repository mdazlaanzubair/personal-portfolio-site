"use state";

import { useEducationContext } from "@/context/EducationContext";
import QualificationTimeline from "./QualificationTimeline";

const Education = () => {
  const { degrees, certificates, sortQualification } = useEducationContext();

  const sortedDegrees = sortQualification(degrees);
  const sortedCertificates = sortQualification(certificates);

  return (
    <>
      <div className="flex flex-col min-h justify-center items-start gap-5 shadow-lg px-5 lg:px-16 py-5 lg:py-16 bg-base-100">
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
        </div>
      </div>
      <div className="w-full flex flex-col lg:flex-row justify-center items-start gap-5 px-0 lg:px-5 py-16">
        <div className="w-full lg:w-1/2 p-5 flex flex-col">
          <h2 className="text-xl md:text-2xl lg:text-3xl tracking-tight font-black text-neutral-content mb-8 lg:mb-10">
            Qualifications
          </h2>
          {sortedDegrees && sortedDegrees.length > 0 && (
            <QualificationTimeline qualifications={sortedDegrees} />
          )}
        </div>
        <div className="w-full lg:w-1/2 p-5 flex flex-col">
          <h2 className="text-xl md:text-2xl lg:text-3xl tracking-tight font-black text-neutral-content mb-8 lg:mb-10">
            Certifications
          </h2>
          {sortedCertificates && sortedCertificates.length > 0 && (
            <QualificationTimeline qualifications={sortedCertificates} />
          )}
        </div>
      </div>
    </>
  );
};

export default Education;
