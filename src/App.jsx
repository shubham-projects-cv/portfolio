import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Profile from "./components/Profile";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import FloatingResume from "./components/FloatingResume";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Profile />
      <Resume />
      <Skills />
      <Projects />
      <Contact />
      <FloatingResume />
    </>

  );
}
