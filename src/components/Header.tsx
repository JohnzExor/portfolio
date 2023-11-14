import { BsCode, BsCodeSlash } from "react-icons/bs";

const Header = () => {
  return (
    <nav className=" p-4 w-full text-white flex justify-center">
      <label className="text-xl font-semibold flex items-center gap-1">
        <BsCode size={30} />
        Johnz. <span className=" font-bold">Dev</span>
        <BsCodeSlash size={30} />
      </label>
    </nav>
  );
};

export default Header;
