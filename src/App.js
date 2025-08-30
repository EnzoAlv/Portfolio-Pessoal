import React from "react";
import Header from "./components/header";
import About from "./components/about";
import Hero from "./components/hero";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Experience from "./components/experience";
import Footer from "./components/footer";
function App() {
  return (
    <>
    <Header/>
    <main>
      <Hero/>
      <About/>
      <Projects/>
      <Experience/>
      <Contact/>
      <Footer/>
    </main>
    </>
  );
}

export default App;
