import {
  AiOutlineAntDesign as GraphicDesignIcon,
  AiOutlineShoppingCart as ShopIcon,
} from "react-icons/ai";
import { FaCode as WebDevIcon } from "react-icons/fa";
import { BsRocketTakeoff as SeoIcon } from "react-icons/bs";
import { SiWritedotas as WritingIcon } from "react-icons/si";
import { BsRobot as ScrapingIcon } from "react-icons/bs";

const Service = () => {
  const services = [
    {
      Icon: GraphicDesignIcon,
      title: "Graphic Design",
      desc: "Creating visually stunning graphics, logos, and branding materials that effectively represent your brand and leave a lasting impression.",
    },
    {
      Icon: WebDevIcon,
      title: "Web Development",
      desc: "Building functional and responsive websites with clean code and seamless navigation to ensure an optimal user experience.",
    },
    {
      Icon: SeoIcon,
      title: "SEO & Speed Optimization",
      desc: "Implementing search engine optimization techniques to improve your website's ranking on search engines. Also, optimize website speed for enhanced user experience.",
    },
    {
      Icon: ShopIcon,
      title: "Ecommerce Platforms",
      desc: "Setting up and customizing ecommerce platforms to facilitate online sales, streamline product management, and enhance customer experiences.",
    },
    {
      Icon: WritingIcon,
      title: "Content Writing",
      desc: "Crafting engaging and persuasive web content, blog posts, and articles that effectively communicate your brand message and attract your audience.",
    },
    {
      Icon: ScrapingIcon,
      title: "Web Scraping",
      desc: "Gathering valuable data from diverse online sources and delivering insights to support informed decision-making.",
    },
  ];

  return (
    <div id="service-section" className="hero py-20 md:py-24 justify-center">
      <div className="hero-content">
        <div className="max-w-full lg:px-20 lg:text-center">
          <h1 className="text-accent-focus tracking-widest font-semibold mb-3 px-1">
            My offerings
          </h1>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5 text-navy-slate-light">
            Services
          </h1>
          <h1 className="text-3xl md:text-3xl lg:text-4xl tracking-tight font-bold text-navy-slate-dark mb-8 lg:mb-5">
            I offer solutions that makes difference.
          </h1>
          <p className="mb-5 font-normal leading-loose text-navy-slate w-full md:max-w-2xl text-xs md:text-base lg:mx-auto">
            I offer services to cater to your specific requirements. Whether
            you&apos;re a small business owner, entrepreneur, or individual
            looking to establish your online presence, I have the expertise to
            deliver exceptional results.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service, index) => {
              const { title, desc, Icon } = service;
              return (
                <div
                  className="group card bg-base-100 shadow-xl hover:shadow-base-200 hover:shadow-2xl hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all ease-in-out duration-300"
                  key={index}
                >
                  <figure className="px-10 pt-10">
                    <span className="font-extralight text-3xl bg-neutral text-navy-slate-light group-hover:text-primary group-hover:bg-neutral-focus p-10 rounded-full transition-all ease-in-out duration-300">
                      <Icon />
                    </span>
                  </figure>
                  <div className="card-body items-center text-center">
                    <h2 className="card-title text-navy-slate-light">
                      {title}
                    </h2>
                    <p className="text-xs font-normal text-navy-slate mb-5">
                      {desc}
                    </p>
                    <div className="card-actions">
                      <button className="btn btn-wide btn-outline btn-primary rounded-sm capitalize mr-2 hover:translate-x-1 hover:translate-y-1 transition-all ease-in-out duration-300">
                        Inquire
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
