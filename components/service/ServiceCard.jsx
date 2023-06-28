const ServiceCard = ({ title, desc, Icon }) => {
  return (
    <div className="group card bg-transparent rounded-sm shadow hover: hover:shadow-2xl hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all ease-in-out duration-300">
      <figure className="px-10 pt-10">
        <span className="font-extralight text-3xl bg-primary bg-opacity-5 group-hover:text-primary p-10 rounded-full transition-all ease-in-out duration-300">
          <Icon />
        </span>
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="text-2xl font-bold group-hover:text-primary transition-all ease-in-out duration-300">
          {title}
        </h2>
        <p className="text-xs leading-relaxed font-normal mb-5">{desc}</p>
        <div className="card-actions">
          <button className="btn btn-wide btn-outline btn-primary rounded-sm capitalize mr-2 hover:translate-x-1 hover:translate-y-1 transition-all ease-in-out duration-300">
            Inquire
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
