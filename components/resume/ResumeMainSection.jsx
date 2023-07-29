import Footer from "../footer/Footer";
import ResumeHeader from "./ResumeHeader";
import ResumeBody from "./ResumeBody";

const ResumeMainSection = () => {
  return (
    <main data-theme={"winter"}>
      <div className="w-full m-0 p-0 bg-dark text-base-content">
        <div className="container mx-auto pl-16 pr-3 lg:px-16 py-5">
          <div
            id="project-section"
            className="flex flex-col min-h-screen justify-start items-start gap-3 shadow-lg px-5 lg:px-16 py-5 lg:py-16 bg-base-100"
          >
            <ResumeHeader />
            <div className="divider my-5"></div>
            <ResumeBody />
          </div>

          <div className="my-20"></div>

          <Footer />
        </div>
      </div>
    </main>
  );
};

export default ResumeMainSection;
