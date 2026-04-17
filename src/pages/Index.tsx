import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Exhibitions from "@/components/Exhibitions";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import NetworkBackground from "@/components/NetworkBackground";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <NetworkBackground />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Services />
        <Projects />
        <Exhibitions />
        <About />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Index;

