"use client";

import ExperienceContextProvider from "@/context/ExperienceContext";
import ResumeExperience from "./ResumeExperience";
import ResumeSidePanel from "./ResumeSidePanel";
import EducationContextProvider from "@/context/EducationContext";
import ResumeQualifications from "./ResumeQualifications";
import ResumeCertifications from "./ResumeCertifications";
import ResumeSkills from "./ResumeSkills";

const ResumeBody = () => {
  return (
    <div className="flex flex-col justify-center items-start gap-3">
      <div
        id="resume-body-section"
        className="w-full grid grid-cols-4 justify-center items-start gap-3"
      >
        <div className="w-full col-span-3">
          <ResumeSkills />

          <div className="divider my-5" />

          <ExperienceContextProvider>
            <ResumeExperience />
          </ExperienceContextProvider>
        </div>
        <div className="w-full p-3">
          <ResumeSidePanel />
        </div>
      </div>

      <div className="divider my-5" />

      <EducationContextProvider>
        <ResumeQualifications />

        <div className="divider my-5" />

        <ResumeCertifications />
      </EducationContextProvider>
    </div>
  );
};

export default ResumeBody;
