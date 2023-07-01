"use client";

import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { useServiceContext } from "@/context/ServiceContext";
import useThemeStore from "@/store/ThemeStore";

const ServiceCard = () => {
  const { services } = useServiceContext();
  const isDarkMode = useThemeStore((state) => state.isDarkMode);

  return services && services.length > 0
    ? services.map((service, index) => (
        <div
          key={index}
          className="group card bg-transparent rounded-sm shadow hover: hover:shadow-2xl hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all ease-in-out duration-300"
        >
          <figure className="px-10 pt-10">
            <span className="px-10 py-5">
              <img
                src={
                  isDarkMode
                    ? "https:" + service.fields.lightIcon.fields.file.url
                    : "https:" + service.fields.darkIcon.fields.file.url
                }
                width={50}
                height={50}
              />
            </span>
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="text-2xl font-bold group-hover:text-primary transition-all ease-in-out duration-300">
              {service.fields.title}
            </h2>
            <div className="text-xs leading-relaxed font-normal mb-5 text-left">
              {documentToReactComponents(service.fields.description)}
            </div>
            <div className="card-actions">
              <button className="btn btn-wide btn-outline btn-primary rounded-sm capitalize mr-2 hover:translate-x-1 hover:translate-y-1 transition-all ease-in-out duration-300">
                Inquire
              </button>
            </div>
          </div>
        </div>
      ))
    : null;
};

export default ServiceCard;
