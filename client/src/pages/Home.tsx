import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Projects />
      {/* <Team /> */}
      <Testimonials />
      {/* <Contact /> */}
    </>
  );
};

export default Home;
