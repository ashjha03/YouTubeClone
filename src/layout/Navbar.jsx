import { AiFillYoutube } from "react-icons/ai";

const Navbar = () => {
  return (
    <nav className="p-4 flex justify-between bg-[#0F0F0F] text-white">
      <div className="flex items-center">
        <AiFillYoutube className="text-[#FF0000] mx-1 text-4xl" />
        <h3 className="text-2xl">YouTube</h3>
      </div>
      <div className="searchBar">
        <input className="border py-2 px-5 w-[30vw] rounded-xl" placeholder="Search" type="text" />
      </div>
      <div></div>
    </nav>
  );
};

export default Navbar;
