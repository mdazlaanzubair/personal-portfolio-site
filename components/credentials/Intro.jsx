import { motion } from "framer-motion";

import { Tilt } from "react-tilt";
import CountUp from "react-countup";
import profilePic from "@/public/profile.jpg";

const Intro = () => {
  // tilt options
  const defaultOptions = {
    reverse: false, // reverse the tilt direction
    max: 50, // max tilt rotation (degrees)
    perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1.5, // 2 = 200%, 1.5 = 150%, etc..
    speed: 1000, // Speed of the enter/exit transition
    transition: true, // Set a transition on enter/exit.
    axis: null, // What axis should be disabled. Can be X or Y.
    reset: true, // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
  };

  const stats = [
    {
      title: "No. of Clients",
      sub_head: "Satisfied",
      count: 10,
    },
    {
      title: "No. of Projects",
      sub_head: "Completed",
      count: 40,
    },
    {
      title: "No. of Tech",
      sub_head: "Tried / Used",
      count: 80,
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row-reverse min-h-screen justify-between items-start gap-10 px-5 lg:px-16 py-5 lg:py-16">
      <div className="w-full lg:w-auto text-center">
        <motion.div
          initial={{ opacity: 0, translateY: 10 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="p-5 rounded-sm bg-dark shadow"
        >
          <Tilt options={defaultOptions}>
            <div className="w-1/2 avatar rounded-full shadow-2xl mx-auto">
              <div className="w-full mask mask-squircle">
                <img src={profilePic.src} />
              </div>
            </div>
          </Tilt>
        </motion.div>

        <div className="flex flex-wrap gap-3 my-5">
          {stats.map((item, index) => {
            const { title, sub_head, count } = item;
            return (
              <motion.div
                initial={{ opacity: 0, translateY: 10 }}
                whileInView={{ opacity: 1, translateY: 0 }}
                transition={{ duration: 0.3, delay: (index + 1) * 0.1 }}
                key={index}
                className="stat p-5 rounded-sm shadow bg-dark"
              >
                <div className="stat-title text-base-content">{title}</div>
                <div className="stat-value font-black">
                  <CountUp start={0} end={count} duration={2.75} />+
                </div>
                <div className="stat-desc badge badge-primary font-bold mt-2 mx-auto rounded-sm">
                  {sub_head}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <div className="w-full lg:max-w-3/4">
        <motion.h3
          initial={{ opacity: 0, translateY: 10 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="text-primary font-bold tracking-widest mb-3 px-1"
        >
          Me, Myself and I
        </motion.h3>
        <motion.h1
          initial={{ opacity: 0, translateY: 10 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="text-4xl md:text-5xl lg:text-6xl font-black mb-5"
        >
          Biography<span className="text-primary">.</span>
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, translateY: 10 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
          className="text-xl md:text-2xl lg:text-3xl tracking-tight font-bold text-neutral-content mb-8 lg:mb-10"
        >
          Passion fuels purpose!
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, translateY: 10 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.3, delay: 0.4 }}
          className="mb-5 font-normal leading-relaxed w-full text-sm md:text-base"
        >
          I am{" "}
          <strong title="mdazlaanzubair" className="text-primary">
            Muhammad Azlaan Zubair
          </strong>
          , a web developer and UI/UX designer with a passion for creating
          beautiful, functional, and user-centered digital experiences. I
          believe that design is about more than just making things look pretty.
          It&apos;s about solving problems and creating intuitive, enjoyable
          experiences for users.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, translateY: 10 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.3, delay: 0.5 }}
          className="mb-5 font-semibold leading-relaxed w-full text-sm md:text-base"
        >
          I&apos;ve been working in the design field for over years now, and
          I&apos;ve had the opportunity to work on a wide range of projects,
          from websites to web applications and scrapers. I&apos;ve learned that
          the best products are those that are based on a deep understanding of
          its user&apos;s needs.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, translateY: 10 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.3, delay: 0.6 }}
          className="mb-5 font-normal leading-relaxed w-full text-sm md:text-base"
        >
          If you&apos;re looking for someone who can create a digital experience
          that your users will love, I&apos;m the person you need to talk to.
          I&apos;m passionate about my work, and I&apos;m always looking for new
          challenges. I&apos;m confident that I can help you achieve your goals.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, translateY: 10 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.3, delay: 0.7 }}
          className="mb-5 font-normal leading-relaxed w-full text-sm md:text-base"
        >
          I&apos;m a valuable asset to any team, and I&apos;m sure to add a new
          level of excitement and creativity to your next project. I look
          forward to the opportunity to talk to you about your needs and how I
          can help you achieve your goals.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, translateY: 10 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.3, delay: 0.8 }}
          className="mb-5 font-semibold leading-relaxed w-full text-sm md:text-base"
        >
          Contact me today to learn more about my work and how I can help you.
        </motion.p>
      </div>
    </div>
  );
};

export default Intro;
