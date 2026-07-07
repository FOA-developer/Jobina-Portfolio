import Hero from "../components/main/Hero";
import Navbar from "../components/main/Navbar";
import About from "../components/main/About";
import Experience from "../components/main/Experience";
import Work from "../components/main/Work";
import Credentials from "../components/main/Credentials";
import Contact from "../components/main/Contact";

const Home = () => {
  return (
  <div>
    <Navbar />
    <Hero />
    <About />
    <Experience />
    <Work />
    <Credentials />
    <Contact />
  </div>
  );
};

export default Home;