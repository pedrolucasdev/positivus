import CallToAction from "./components/CallToAction";
import CaseStudies from "./components/CaseStudies";
import CustomCursor from "./components/common/CustomCursor";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Sponsors from "./components/Sponsors";
import Team from "./components/Team";
import Testimonials from "./components/Testimonials";
import WorkingProcess from "./components/WorkingProcess";

export default function Home() {
  return (
    <div className="relative flex flex-col w-full h-full pt-[30px] md:pt-10 items-center ">
      <CustomCursor></CustomCursor>
      <div className="flex flex-col max-w-[1340px] w-full">
        <Header></Header>
        <Hero></Hero>
        <Sponsors></Sponsors>
        <Services></Services>
        <CallToAction></CallToAction>
        <CaseStudies></CaseStudies>
        <WorkingProcess></WorkingProcess>
        <Team></Team>
        <Testimonials></Testimonials>
        <Footer></Footer>
      </div>
    </div>
  );
}
