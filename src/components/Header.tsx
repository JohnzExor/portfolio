import { BsCodeSlash } from "react-icons/bs";
import { ModeToggle } from "./theme/Mode-Toggle";

const Header = () => {
  return (
    <nav className=" p-4 w-full  flex justify-center gap-4">
      <label className="text-xl flex items-center gap-1">
        <p className=" font-semibold">
          Johnz<span className=" font-thin">.Dev</span>
        </p>
        <BsCodeSlash size={30} />
      </label>
      <ModeToggle />
    </nav>
  );
};

export default Header;
