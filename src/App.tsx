import LandingPage from "@/pages/LandingPage";
import Contact from "@/pages/Contact";
import Projects from "./pages/Projects";
import About from "./pages/About";

import Header from "./components/Header";
import { ThemeProvider } from "./components/theme/Theme-Provider";

const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      {/* img src={background} className=" fixed object-cover h-screen w-full" /> */}
      <Header />
      <LandingPage />
      <About />
      <Projects />
      <Contact />
    </ThemeProvider>
  );
};

export default App;
