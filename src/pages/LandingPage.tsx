import profile from "@/assets/johnzyll.jpg";
import { motion } from "framer-motion";

import {
  BiLogoReact,
  BiLogoTailwindCss,
  BiLogoTypescript,
  BiLogoFirebase,
  BiLogoMongodb,
  BiLogoGithub,
} from "react-icons/bi";

import { SiExpress } from "react-icons/si";
import { useMediaQuery } from "usehooks-ts";

const LandingPage = () => {
  const matches = useMediaQuery("(min-width: 768px)");
  const variants = matches
    ? {
        title: { y: [170, 170, 0], x: [350, 350, 0] },
        description: { y: [-160, -160, 0], x: [-340, -340, 0] },
        transition: { duration: 2, ease: "easeOut" },
      }
    : {
        title: { y: [200, 0], x: 0 },
        description: { y: [-220, 0], x: 0 },
        transition: { duration: 2, ease: "easeOut", delay: 0.5 },
      };
  return (
    <div
      className=" w-full h-fit flex flex-col md:flex-row items-center justify-center p-6 gap-4"
      id="about"
    >
      <div className="flex flex-col gap-4 md:px-52 ">
        <div>
          <motion.h1
            className=" text-5xl md:text-6xl"
            animate={variants.title}
            transition={variants.transition}
          >
            Hi, I'm<span className="font-bold"> Johnzyll Jimeno</span>
          </motion.h1>
        </div>
        <motion.div
          className="flex flex-col md:flex-row justify-center gap-4"
          animate={{ opacity: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut", delay: 1 }}
        >
          <div className="text-center">
            <img
              src={profile}
              alt="profilepic"
              className="w-80 rounded-full shadow-2xl"
            />
          </div>
          <div className="flex flex-col justify-center gap-4">
            <div>
              <p>Full Stack Developer</p>
              <div className=" text-4xl flex gap-1">
                <BiLogoReact />
                <BiLogoTailwindCss />
                <BiLogoTypescript />
                <BiLogoFirebase />
                <SiExpress />
                <BiLogoMongodb />
              </div>
            </div>
            <div>
              <a
                href="https://github.com/JohnzExor?tab=repositories"
                target="_blank"
                className="flex gap-2 items-center w-fit"
              >
                <BiLogoGithub size={30} />
                Github
              </a>
            </div>
            <div className=" flex gap-2">
              <a
                href="#projects"
                className=" border rounded-2xl p-2 px-4 hover:bg-black hover:text-white dark:hover:bg-opacity-70 dark:hover:bg-white duration-500 dark:hover:text-black hover:ease-in"
              >
                Projects
              </a>
              <a
                href="#contact"
                className=" border rounded-2xl p-2 px-4 hover:bg-black hover:text-white dark:hover:bg-opacity-70 dark:hover:bg-white duration-500 dark:hover:text-black hover:ease-in"
              >
                Contact
              </a>
            </div>
          </div>
        </motion.div>
        <div className="flex flex-col md:items-end">
          <motion.p
            className="md:w-1/2 text-lg"
            animate={variants.description}
            transition={variants.transition}
          >
            "I am currently engaged in expanding my skill set as a full-stack
            developer, exploring new technologies and enhancing my proficiency
            in various aspects of development."
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
