import about from "@/assets/about.svg";

const About = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-32 p-6">
      <img src={about} className="md:hidden md:w-1/4" />

      <div className="md:w-1/3">
        <h1 className="text-5xl mb-2">About Me</h1>
        <p>
          I am currently dedicated to my Bachelor of Science studies in
          Information Technology, with a keen focus on the dynamic and
          ever-evolving landscape of web development. As a student, I am
          actively engaged in honing my skills as a full-stack developer,
          delving into the intricacies of both front-end and back-end
          technologies. This educational journey is not just about theoretical
          knowledge but also involves hands-on practical experience, equipping
          me to navigate and contribute to the continually changing world of web
          development.
        </p>
      </div>
      <img src={about} className="hidden md:block md:w-1/4" />
    </div>
  );
};

export default About;
