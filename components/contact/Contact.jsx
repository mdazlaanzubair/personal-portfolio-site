"use client";

import useThemeStore from "@/store/ThemeStore";
import profilePic from "@/public/profile.jpg";
import Button from "../Button";

const Contact = () => {
  const isDarkMode = useThemeStore((state) => state.isDarkMode);

  const nest_about_link = [
    {
      title: "Sent Email",
      url: "mailto:mdazlaan1996@gmail.com",
      email: "mdazlaan1996@gmail.com",
    },
    {
      title: "Book a call",
      url: "https://calendly.com/mdazlaanzubair/virtual-interaction",
    },
  ];

  return (
    <div
      id="contact-section"
      className="flex flex-col min-h-screen justify-start items-center text-center shadow-lg px-5 lg:px-16 py-5 lg:py-16 bg-base-100"
    >
      <div className="avatar my-10">
        <div className="w-24 lg:w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-4">
          <img
            src={profilePic.src}
            alt="Muhammad Azlaan Zubair Profile Picture"
          />
        </div>
      </div>
      <h3 className="text-primary font-bold tracking-widest mb-3 px-1">
        Reach out
      </h3>
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-5">
        Contact<span className="text-primary">.</span>
      </h1>
      <h2 className="text-xl md:text-2xl lg:text-3xl tracking-tight font-bold text-neutral-content mb-5">
        Have a question, project idea, or just want to say hello?
      </h2>
      <p className="mb-5 font-normal leading-relaxed w-full md:max-w-3xl text-sm md:text-base">
        Shoot me an{" "}
        <Button link="mailto:mdazlaan1996@gmail.com" type="link" text="email" />{" "}
        if you want to connect! You can also connect by scheduling a video call
        to discuss your goals and ideas.
      </p>
      <div className="flex flex-row flex-wrap gap-3 mt-5 justify-center items-center">
        {nest_about_link.map((link, index) => {
          const { title, url, email } = link;
          return email ? (
            <Button key={index} link={url} type="link" text={email} />
          ) : (
            <Button
              key={index}
              link={url}
              type="btn"
              target="_blank"
              text={title}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Contact;
