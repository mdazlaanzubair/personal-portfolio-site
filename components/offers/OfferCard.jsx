"use client";

import { BiChevronRight as ListIcon } from "react-icons/bi";
import { useOffersContext } from "@/context/OffersContext";
import Button from "../Button";
import CountUp from "react-countup";

const OfferCard = () => {
  const { filteredOffers } = useOffersContext();
  console.log(filteredOffers);

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
              <div className="absolute bottom-0 right-0 pricing p-3 bg-base-100 bg-opacity-60 text-neutral font-black text-xl group-hover:bg-primary group-hover:shadow-2xl transition-all ease-in-out duration-300">
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
                  link={
                    "https://calendly.com/mdazlaanzubair/virtual-interaction"
                  }
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
