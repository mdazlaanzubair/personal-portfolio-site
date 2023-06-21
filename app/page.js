import Footer from "@/components/Footer";
import LeftSection from "@/components/LeftSection";
import MainSection from "@/components/MainSection";
import RightSection from "@/components/RightSection";
import Header from "@/components/header/Header";

export default function Home() {
  return (
    <main>
      <Header />

      <div className="w-full min-h-screen flex justify-center items-top gap-20 px-5">
        <div className="hidden relative lg:flex flex-shrink-0">
          <LeftSection />
        </div>
        <div className="relative flex-grow">
          <MainSection />
        </div>
        <div className="hidden relative lg:flex flex-shrink-0">
          <RightSection />
        </div>
      </div>

      <Footer />
    </main>
  );
}
