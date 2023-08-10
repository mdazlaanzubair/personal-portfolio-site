import { motion } from "framer-motion";

import profilePic from "@/public/profile.jpg";
import Button from "../Button";

const Contact = () => {
  const nest_about_link = [
    {
      title: "Sent Email",
      url: `mailto:mdazlaan1996@gmail.com?subject=Hi%20There!&body=Hi%20Azlaan!%20Hope%20you're%20doin'%20well.%20I%20just%20want%20to%20discuss%20a%20project%20with%20you.%20Please%20contact.`,
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
      className="flex flex-col min-h-screen justify-start items-center text-center px-5 lg:px-16 py-5 lg:py-16"
    >
      <div className="avatar my-10">
        <div className="w-24 lg:w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-4">
          <motion.img
            initial={{ opacity: 0, scale: -1 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            src={profilePic.src}
            alt="Muhammad Azlaan Zubair Profile Picture"
          />
        </div>
      </div>
      <motion.h3
        initial={{ opacity: 0, translateY: 10 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
        className="text-primary font-bold tracking-widest mb-3 px-1"
      >
        Reach out
      </motion.h3>
      <motion.h1
        initial={{ opacity: 0, translateY: 10 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.3, delay: 0.3 }}
        className="text-4xl md:text-5xl lg:text-6xl font-black mb-5"
      >
        Contact<span className="text-primary">.</span>
      </motion.h1>
      <motion.h2
        initial={{ opacity: 0, translateY: 10 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.3, delay: 0.4 }}
        className="text-xl md:text-2xl lg:text-3xl tracking-tight font-bold text-neutral-content mb-5"
      >
        Have a question, project idea, or just want to say hello?
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, translateY: 10 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.3, delay: 0.5 }}
        className="mb-5 font-normal leading-relaxed w-full md:max-w-3xl text-sm md:text-base"
      >
        Shoot me an{" "}
        <Button link="mailto:mdazlaan1996@gmail.com" type="link" text="email" />{" "}
        if you want to connect! You can also connect by scheduling a video call
        to discuss your gosals and ideas.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, translateY: 10 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.3, delay: 0.6 }}
        className="flex flex-row flex-wrap gap-3 mt-5 justify-center items-center"
      >
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
      </motion.div>
    </div>
  );
};

export default Contact;
