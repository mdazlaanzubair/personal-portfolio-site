import { fetchContent } from "@/contentful/client";
import { NextResponse } from "next/server";

export async function GET() {
  // getting data from contentful database/cloud
  const projects = await getProjects();
  const experiences = await getExperience();
  const degrees = await getDegrees();
  const certificates = await getCertificates();

  // setting-up JSON Object
  const resume_content = {
    bios: {
      intro: {
        greetings: "Hi, myself",
        title: "Muhammad Azlaan",
        overview: [
          "I'm a software engineering graduate, specialized in building & designing things for the web. You can call me a Web Engineer cause I can Layout & Prototype, Design & Structure, Develop & Build, Manage & Maintain, Repair & Construct web related products.",
          "With more than 2 years of experience I have demonstrated my skills & talent in the field of web to optimize online appearances.",
        ],
      },
      details: [
        {
          title: "Full Name",
          desc: "Muhammad Azlaan Zubair",
        },
        {
          title: "Date of Birth",
          desc: "25 July, 1996",
        },
        {
          title: "Staying at",
          desc: "Karachi, Sindh, Pakistan",
        },
        {
          title: "Nationality",
          desc: "Pakistani",
        },
        {
          title: "Native Language",
          desc: "Urdu",
        },
      ],
      favorites: [
        {
          title: "Content Creators",
          desc: [
            {
              name: "Brad Traversy",
              link: "https://www.youtube.com/user/TechGuyWeb",
            },
            {
              name: "Geeks for Geeks",
              link: "https://www.geeksforgeeks.org/",
            },
          ],
        },
        {
          title: "AI Tools",
          desc: [
            {
              name: "Bard",
              link: "https://bard.google.com/",
            },
            {
              name: "Chat GPT",
              link: "https://chat.openai.com/",
            },
          ],
        },
        {
          title: "Video Games",
          desc: [
            {
              name: "CS GO",
              link: "https://store.steampowered.com/app/730/CounterStrike_Global_Offensive/",
            },
            {
              name: "Valorant",
              link: "https://playvalorant.com/en-gb/",
            },
          ],
        },
        {
          title: "Indoor Game",
          desc: [
            {
              name: "Chess",
              link: "https://www.chess.com/member/mdazlaanzubair",
            },
          ],
        },
        {
          title: "Movie",
          desc: [
            {
              name: "The Imitation Game",
              link: "https://www.imdb.com/title/tt2084970/",
            },
          ],
        },
        {
          title: "Series",
          desc: [
            {
              name: "Money Heist",
              link: "https://www.imdb.com/title/tt6468322/",
            },
          ],
        },
        {
          title: "Pets",
          desc: [
            {
              name: "Cat",
              link: "https://www.google.com/search?q=pets+cat+fluffy",
            },
            {
              name: "Dog",
              link: "https://www.google.com/search?q=animal+dog+husky",
            },
          ],
        },
      ],
      skill: [
        {
          title: "Frontend",
          abilities: [
            "HTML",
            "CSS",
            "Javascript",
            "Bootstrap",
            "Tailwind CSS",
            "Vue JS",
            "React JS",
            "Next JS",
          ],
        },
        {
          title: "Backend",
          abilities: [
            "Express JS",
            "Next JS",
            "Flask",
            "Node JS",
            "PHP",
            "Python",
            "C++",
          ],
        },
        {
          title: "Databases",
          abilities: [
            "SQL",
            "Mongo DB",
            "Firebase",
            "Supabase",
            "Mongo DB Atlas",
          ],
        },
        {
          title: "Generic",
          abilities: [
            "Layouts",
            "Prototyping",
            "MVC",
            "OOP",
            "Problem Solving",
            "Formal Writing",
          ],
        },
      ],
      social: [
        {
          title: "Email",
          url: "mailto:mdazlaan1996@gmail.com?subject=Hi%20There!&body=Hi%20Azlaan!%20Hope%20you're%20doin'%20well.",
          icon: "FaGooglePlusG",
          username: "mdazlaan1996@gmail.com",
        },
        {
          title: "Facebook",
          url: "https://www.facebook.com/mdazlaanzubair/",
          icon: "null",
          username: ".com/mdazlaanzubair",
        },
        {
          title: "Chess",
          url: "https://www.chess.com/member/mdazlaanzubair",
          icon: "FaChessKnight",
          username: ".com/member/mdazlaanzubair",
        },
        {
          title: "Github",
          url: "https://github.com/mdazlaanzubair",
          icon: "FaGithub",
          username: ".com/mdazlaanzubair",
        },
        {
          title: "Twitter",
          url: "https://twitter.com/mdazlaanzubair",
          icon: "FaTwitter",
          username: ".com/mdazlaanzubair",
        },
        {
          title: "Instagram",
          url: "https://www.instagram.com/mdazlaanzubair/",
          icon: "FaInstagram",
          username: "@mdazlaanzubair",
        },
        {
          title: "LinkedIn",
          url: "https://www.linkedin.com/in/mdazlaanzubair/",
          icon: "FaLinkedinIn",
          username: ".com/in/mdazlaanzubair",
        },
        {
          title: "Whatsapp",
          url: "https://wa.me/923113046692?text=Hi%20Azlaan!%20Hope%20you're%20doin'%20well.%20I%20just%20want%20to%20discuss%20a%20project%20with%20you.%20Please%20contact.",
          icon: "FaWhatsapp",
          username: "+92-311-3046692",
        },
      ],
    },
    qualifications: {
      experiences,
      degrees,
      certificates,
    },
    projects,
  };

  // returning JSON Object
  return NextResponse.json(
    { resume_content },
    {
      status: 200,
    }
  );
}

// functions to get dynamic content from contentful database/cloud
// 1. Projects
const getProjects = async () => {
  // getting data
  const data = await fetchContent("project");

  // extracting fields
  const projectsData = data.map((project) => project.fields);

  // returning values
  return projectsData;
};

// 2. Experience
const getExperience = async () => {
  // getting data
  const data = await fetchContent("experience");

  // extracting fields
  const experienceData = data.map((experience) => experience.fields);

  // sorting data "date wise"
  const sortedExperience = experienceData.sort((experience1, experience2) => {
    return experience2.to.localeCompare(experience1.to);
  });

  // getting recent experience
  const recentExp = sortedExperience.filter(
    (experience) => experience.to === "Present"
  );

  // getting all experience
  const allExp = sortedExperience.filter(
    (experience) => experience.to !== "Present"
  );

  // returning values
  return { recent: recentExp, all: allExp };
};

// 3. Degrees
const getDegrees = async () => {
  // getting data
  const data = await fetchContent("education");

  // extracting fields
  const degreesData = data
    .filter((degree) => degree.fields.type === "Degree")
    .map((degree) => degree.fields);

  // sorting data "date wise"
  const sortedDegrees = degreesData.sort((degree1, degree2) => {
    return degree2.to.localeCompare(degree1.to);
  });

  // excluding everything under-graduate programs
  const graduatePrograms = sortedDegrees.filter(
    (degree) => degree.title !== "High School" && degree.title !== "College"
  );

  // returning values
  return graduatePrograms;
};

// 4. Certificates
const getCertificates = async () => {
  // getting data
  const data = await fetchContent("education");

  // extracting fields
  const certificatesData = data
    .filter((certificate) => certificate.fields.type !== "Degree")
    .map((certificate) => certificate.fields);

  // sorting data "date wise"
  const sortedCertificates = certificatesData.sort(
    (certificate1, certificate2) => {
      return certificate2.to.localeCompare(certificate1.to);
    }
  );

  // returning values
  return sortedCertificates;
};
