import { AiFillYoutube } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="p-4 lg:flex justify-between bg-[#0F0F0F] text-white">
      <Link to='/' className="flex items-center pb-2 lg:pb-0">
        <AiFillYoutube className="text-[#FF0000] mx-1 text-4xl" />
        <h3 className="text-2xl">YouTube</h3>
      </Link>
      <form className="searchBar">
        <input className="border text-black py-2 px-5 w-[60vw] lg:w-[30vw] rounded-xl" placeholder="Search" type="text" />
        <button type="submit" className="btn inline-block py-1 px-4 bg-[#272727] rounded-lg mx-3">Search</button>
      </form>
      <div></div>
    </nav>
  );
};

export default Navbar;
