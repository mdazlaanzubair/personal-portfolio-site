import Link from "next/link";

const FeaturedProject = ({ url, title, desc, imgUrl, skills }) => {
  return (
    <Link href={url} target="_blank" className="group">
      <div className="card rounded-sm bg-dark shadow group-hover:shadow-xl transition-all ease-in-out duration-300">
        <div className="card-body">
          <img
            src={"https:" + imgUrl}
            alt="featured project"
            className="w-full"
          />
          <div className="details mt-10">
            <h2 className="text-base lg:text-xl font-bold mb-3">{title}</h2>
            <span className="paragraph block text-xs lg:text-sm">{desc}</span>
            <div className="flex flex-row flex-wrap gap-1 justify-end items-center mt-5">
              {skills.map((skill, index) => (
                <div key={index} className="badge badge-primary text-xs">
                  <span className="text-xs font-semibold">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default FeaturedProject;
