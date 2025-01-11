import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
// import Contact  from "./components/Contact";
import Footer from "./components/Footer";


const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Projects />
      <About />
      {/* <Contact /> */}
      <Footer />
    </div>
  );
};

export default App;
