import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import CTA from "@/components/CTA";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Công Ty Xây Dựng Hoàng Long - Chất Lượng Là Danh Dự</title>
        <meta name="description" content="Công ty xây dựng Hoàng Long cung cấp dịch vụ xây dựng dân dụng, công nghiệp, thiết kế nội thất và tư vấn thiết kế với hơn 15 năm kinh nghiệm." />
        <meta property="og:title" content="Công Ty Xây Dựng Hoàng Long - Chất Lượng Là Danh Dự" />
        <meta property="og:description" content="Công ty xây dựng Hoàng Long cung cấp dịch vụ xây dựng dân dụng, công nghiệp, thiết kế nội thất và tư vấn thiết kế với hơn 15 năm kinh nghiệm." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=630" />
      </Helmet>
      <Hero />
      <About />
      <Services />
      <Projects />
      <Team />
      <Testimonials />
      <CTA />
      <Contact />
    </>
  );
};

export default Home;
