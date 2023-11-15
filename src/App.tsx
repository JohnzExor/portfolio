import LandingPage from "@/pages/LandingPage";
import Contact from "@/pages/Contact";
import Projects from "./pages/Projects";
import About from "./pages/About";

import Header from "./components/Header";
import { ThemeProvider } from "./components/theme/Theme-Provider";

import background from "@/assets/background.svg";
import Footer from "./components/Footer";

const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <img
        src={background}
        alt="background"
        className="fixed w-full object-cover h-screen md:h-min opacity-30"
      />

      <div className=" backdrop-blur-3xl">
        <Header />
        <LandingPage />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
