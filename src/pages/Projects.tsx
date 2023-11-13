import lumine from "@/assets/projects/lumine.png";
import projects from "@/assets/projects.svg";

const Projects = () => {
  return (
    <div
      className=" h-fit flex flex-col gap-10 items-center justify-center p-5"
      id="projects"
    >
      <h1 className=" font-bold text-5xl">Projects</h1>
      <div className="flex justify-center gap-32">
        <div>
          <div className=" border p-2 rounded-xl flex flex-col gap-2">
            <h1 className=" pl-2">Lumine</h1>
            <img src={lumine} className=" rounded-xl md:max-w-xl" />
          </div>
        </div>
        <img src={projects} className=" w-1/4 hidden md:block" />
      </div>
    </div>
  );
};

export default Projects;
