"use client";

import { fetchContent } from "@/contentful/client";
import { useState, createContext, useContext, useEffect } from "react";

const EducationContext = createContext({});

export const useEducationContext = () => useContext(EducationContext);

const EducationContextProvider = ({ children }) => {
  // initial position coordinates
  const [degrees, setDegrees] = useState([]);
  const [certificates, setCertificates] = useState([]);

  // segregate education into degrees / certificates
  const segregateQualifications = (qualification) => {
    setDegrees(
      qualification
        .filter((education) => education.fields.type === "Degree")
        .map((education) => education.fields)
    );

    setCertificates(
      qualification
        .filter((education) => education.fields.type !== "Degree")
        .map((education) => education.fields)
    );
  };

  // sorting qualification with dates
  const sortQualification = (qualification) => {
    const sortedQualification = qualification.sort(
      (qualification1, qualification2) => {
        return qualification2.to.localeCompare(qualification1.to);
      }
    );

    return sortedQualification;
  };

  // fetch services content from contentful
  useEffect(() => {
    fetchContent("education")
      .then((data) => {
        segregateQualifications(data);
      })
      .catch((err) =>
        console.log("Error while fetching experience data:\n\n", err)
      );
  }, []);

  const value = {
    degrees,
    certificates,
    sortQualification,
  };

  return (
    <EducationContext.Provider value={value}>
      {children}
    </EducationContext.Provider>
  );
};

export default EducationContextProvider;
