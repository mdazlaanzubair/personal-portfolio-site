"use client";

import { BiChevronRight as ListIcon } from "react-icons/bi";
import { useOffersContext } from "@/context/OffersContext";
import Button from "../Button";
import CountUp from "react-countup";

const OfferCard = () => {
  const { filteredOffers } = useOffersContext();

  return (
    filteredOffers &&
    filteredOffers.length > 0 && (
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10">
        {filteredOffers.map((offer, index) => (
          <div
            key={index}
            className="group card w-fill bg-dark shadow hover:shadow-lg rounded-sm transition-all ease-in-out duration-300"
          >
            <figure className="relative ">
              <img
                src={"https:" + offer.img.fields.file.url}
                alt="Service thumbnail"
              />
              <div className="absolute bottom-0 right-0 pricing p-3 bg-base-100 bg-opacity-60 text-base-content font-black text-xl group-hover:text-base-200 group-hover:bg-primary group-hover:shadow-2xl transition-all ease-in-out duration-300">
                $ <CountUp start={0} end={offer.cost} duration={2.75} />
              </div>
            </figure>
            <div className="relative card-body flex flex-col justify-between">
              <div className="flex flex-col justify-between">
                <h2 className="text-lg font-bold mb-5">{offer.title}</h2>
                <ul>
                  {offer.offers.map((item, index) => (
                    <li
                      key={index}
                      className="text-sm flex flex-row items-center mb-3 ml-1"
                    >
                      <span className="text-primary mr-2 font-medium">
                        <ListIcon />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="card-actions justify-center items-center mt-5 gap-3">
                <Button
                  link={`mailto:mdazlaan1996@gmail.com?subject=Inquiry%20about%20${
                    offer.title
                  }%20Service&body=Hi%20Azlaan!%20Hope%20you're%20doing%20well.%20I%20want%20to%20discuss%20about${
                    "'" + offer.title + "'"
                  }%20with%20you.%20Please%20contact.`}
                  type="link"
                  target="_blank"
                  text={"Inquire now"}
                />
                <Button
                  link={
                    "https://calendly.com/mdazlaanzubair/virtual-interaction"
                  }
                  type="btn"
                  target="_blank"
                  text={"Book a Call"}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  );
};

export default OfferCard;
