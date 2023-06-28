import {
  AiOutlineAntDesign as GraphicDesignIcon,
  AiOutlineShoppingCart as ShopIcon,
} from "react-icons/ai";
import { FaCode as WebDevIcon } from "react-icons/fa";
import { BsRocketTakeoff as SeoIcon } from "react-icons/bs";
import { SiWritedotas as WritingIcon } from "react-icons/si";
import { BsRobot as ScrapingIcon } from "react-icons/bs";
import ServiceCard from "./ServiceCard";

const Service = () => {
  const services = [
    {
      Icon: GraphicDesignIcon,
      title: "Graphic Design",
      desc: "Create visually stunning graphics, logos, and branding materials that effectively represent your brand and leave a lasting impression.",
    },
    {
      Icon: WebDevIcon,
      title: "Web Development",
      desc: "Build functional and responsive websites with clean code and seamless navigation to ensure an optimal user experience.",
    },
    {
      Icon: SeoIcon,
      title: "SEO & Speed Optimize",
      desc: "Implement search engine optimization techniques to improve your website's ranking on search engines and optimize website speed for enhanced user experience.",
    },
    {
      Icon: ShopIcon,
      title: "E-commerce Platforms",
      desc: "Set up and customize e-commerce platforms to facilitate online sales, streamline product management, and enhance customer experiences.",
    },
    {
      Icon: WritingIcon,
      title: "Content Writing",
      desc: "Craft engaging and persuasive web content, blog posts, and articles that effectively communicate your brand message and attract your audience.",
    },
    {
      Icon: ScrapingIcon,
      title: "Web Scraping",
      desc: "Gather valuable data from diverse online sources and deliver insights to support informed decision-making.",
    },
  ];

  return (
    <div
      id="service-section"
      className="flex flex-col min-h-screen justify-start px-0 py-10 lg:px-10 lg:py-20"
    >
      <h3 className="text-accent-focus tracking-widest font-semibold mb-3 px-1">
        My offerings
      </h3>
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5">
        Services
      </h1>
      <p className="mb-5 font-light leading-loose w-full md:max-w-2xl text-xs md:text-base">
        I offer services to cater to your specific requirements. Whether
        you&apos;re a small business owner, entrepreneur, or individual looking
        to establish your online presence, I have the expertise to deliver
        exceptional results.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <div className="card bg-transparent">
          <h2 className="text-3xl md:text-3xl lg:text-4xl tracking-tight font-bold text-neutral-content my-auto text-left lg:text-right">
            I offer solutions that makes difference.
          </h2>
        </div>
        {services.map((service, index) => {
          const { title, desc, Icon } = service;
          return (
            <ServiceCard key={index} title={title} desc={desc} Icon={Icon} />
          );
        })}
      </div>
    </div>
  );
};

export default Service;
