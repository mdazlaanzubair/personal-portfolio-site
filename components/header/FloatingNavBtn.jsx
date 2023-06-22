const FloatingNavBtn = ({ floatingNavToggle, setFloatingNavToggle }) => {
  return (
    <button
      className="btn btn-sm btn-ghost hover:bg-transparent fixed top-3 right-1 z-10"
      onClick={() => setFloatingNavToggle(!floatingNavToggle)}
    >
      <div className="group w-6 h-5 flex lg:hidden flex-col text-navy-accent justify-between items-center overflow-hidden cursor-pointer">
        <span className="w-full h-0.5 bg-navy-accent transform -translate-x-2 group-hover:translate-x-2 transition-all ease-in-out duration-500"></span>
        <span className="w-full h-0.5 bg-navy-accent transform"></span>
        <span className="w-full h-0.5 bg-navy-accent transform translate-x-2 group-hover:-translate-x-2 transition-all ease-in-out duration-500"></span>
      </div>
    </button>
  );
};

export default FloatingNavBtn;
