// src/App.jsx
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import "./index.css";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import AboutMe from "./components/About";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Internship from "./components/Internship";





function App() {
  return (
    <div className="bg-black min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      <AboutMe />

      {/*Internship Section*/}
      <Internship/>
      
      {/* Project Section */}
      <Projects />

      {/* Skills Section */}
      <Skills />

      {/* Contact Section */}
      <Contact />
     

      {/* Footer */}
      <Footer />

      


    </div>
  );
}

export default App;
