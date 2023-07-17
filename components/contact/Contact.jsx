"use client";

import Link from "next/link";
import Animator from "../Animator";
import * as contact_animation_dark from "../../public/contact_animation_dark.json";
import * as contact_animation_light from "../../public/contact_animation_light.json";
import useThemeStore from "@/store/ThemeStore";
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
      url: "https://calendly.com/mdazlaanzubair/30min?month=2023-06",
    },
  ];

  return (
    <div
      id="contact-section"
      className="flex flex-row min-h-screen justify-start gap-5 shadow-lg px-5 lg:px-16 py-5 lg:py-16 bg-base-100"
    >
      <div>
        <h3 className="text-accent-focus tracking-widest font-semibold mb-3">
          What&apos;s next
        </h3>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-5">
          Reach Out
        </h1>
        <h2 className="text-xl md:text-2xl lg:text-3xl tracking-tight font-bold text-neutral-content mb-5">
          Have a question, project idea, or just want to say hello?
        </h2>
        <p className="mb-5 font-normal leading-relaxed w-full md:max-w-3xl text-sm md:text-base">
          I&apos;m passionate about creating your online appearance. Simply
          choose a time that works best for you and schedule a meeting,
          we&apos;ll connect to discuss your goals and ideas.
        </p>
        <p className="mb-3 font-semibold leading-loose w-full md:max-w-3xl text-xs md:text-base">
          Whether you need help with web design, development, SEO, or anything
          else related to establishing your online presence, I&apos;ve got you
          covered!
        </p>
        <div className="flex flex-row flex-wrap gap-3 mt-5 items-center">
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
      <div className="hidden max-w-full lg:flex">
        <Animator
          animation={
            isDarkMode ? contact_animation_dark : contact_animation_light
          }
        />
      </div>
    </div>
  );
};

export default Contact;
