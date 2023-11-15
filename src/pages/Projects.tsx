import lumine from "@/assets/projects/lumine.png";
import projects from "@/assets/projects.svg";

const Projects = () => {
  return (
    <div
      className=" h-fit flex flex-col gap-10 items-center justify-center p-5"
      id="projects"
    >
      <h1 className="text-5xl">Projects</h1>
      <div className="flex justify-center gap-32">
        <img src={projects} className=" w-1/4 hidden md:block" />
        <div className=" border p-2 rounded-xl flex flex-col gap-2 md:w-1/3">
          <h1 className=" pl-2">Lumine</h1>
          <img src={lumine} className=" rounded-xl w-full" />
        </div>
      </div>
    </div>
  );
};

export default Projects;
