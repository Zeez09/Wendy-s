import About from "./components/About";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Education from "./components/Education"
import Skills from "./components/Skills";
import Tools from "./components/Tools";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import BackToTop from "./components/BackToTop";



export default function Home() {
  return (
    <div>
      <NavBar />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Tools />
      <Experience />
      <Contact />
      <BackToTop />


    </div>
  
  );
}
