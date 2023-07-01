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
          className="group card rounded-sm shadow hover:shadow-2xl hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all ease-in-out duration-300"
        >
          <div className="card-body">
            <div className="flex flex-col justify-between items-center">
              <img
                src={
                  isDarkMode
                    ? "https:" + service.fields.lightIcon.fields.file.url
                    : "https:" + service.fields.darkIcon.fields.file.url
                }
                className="w-32 mb- mx-auto rounded-full group-hover:-rotate-6 group-hover:-translate-y-2 transition-all ease-in-out duration-300"
              />
              <div className="w-full h-full flex flex-col justify-between items-center">
                <h2 className="text-2xl mb-3 font-bold group-hover:text-primary transition-all ease-in-out duration-300">
                  {service.fields.title}
                </h2>
                <div className="text-xs leading-relaxed font-normal text-center">
                  {documentToReactComponents(service.fields.description)}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))
    : null;
};

export default ServiceCard;
