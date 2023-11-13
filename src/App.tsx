import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Projects from "./pages/Projects";

import background from "@/assets/background.png";

const App = () => {
  return (
    <div className="text-white">
      <img src={background} className=" fixed object-cover h-screen w-full" />
      <div className=" backdrop-blur-md">
        <About />
        <Projects />
        <Contact />
      </div>
    </div>
  );
};

export default App;
