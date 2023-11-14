import LandingPage from "@/pages/LandingPage";
import Contact from "@/pages/Contact";
import Projects from "./pages/Projects";
import About from "./pages/About";

import background from "@/assets/background.jpg";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="text-white">
      <img src={background} className=" fixed object-cover h-screen w-full" />
      <div className=" backdrop-blur-3xl">
        <Header />
        <LandingPage />
        <About />
        <Projects />
        <Contact />
      </div>
    </div>
  );
};

export default App;
