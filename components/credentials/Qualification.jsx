"use state";

import { useEducationContext } from "@/context/EducationContext";
import QualificationTimeline from "./QualificationTimeline";
import ExperienceTimeline from "./ExperienceTimeline";
import ExperienceContextProvider from "@/context/ExperienceContext";

const Qualification = () => {
  const { degrees, certificates, sortQualification } = useEducationContext();

  const sortedDegrees = sortQualification(degrees);
  const sortedCertificates = sortQualification(certificates);

  return (
    <>
      <div className="flex flex-col min-h justify-center items-start gap-5 shadow-lg py-5 lg:py-16 bg-base-100">
        <div className="w-full px-5 lg:px-16">
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
        <div className="w-full flex flex-col justify-center items-start gap-5">
          <ExperienceContextProvider>
            <ExperienceTimeline qualifications={sortedDegrees} />
          </ExperienceContextProvider>
        </div>
      </div>
      <div className="w-full p-5 flex flex-col lg:flex-row gap-10 mt-16">
        {sortedDegrees && sortedDegrees.length > 0 && (
          <QualificationTimeline qualifications={sortedDegrees} />
        )}
        {sortedCertificates && sortedCertificates.length > 0 && (
          <QualificationTimeline qualifications={sortedCertificates} />
        )}
      </div>
    </>
  );
};

export default Qualification;
