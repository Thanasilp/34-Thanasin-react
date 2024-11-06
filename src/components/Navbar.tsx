import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="flex justify-end items-center gap-12 bg-lime-800 h-24 font-bold text-3xl hover:bg-lime-600 duration-300">
      <Link to={"/"} className="text-white hover:text-lime-800">
        <div>HOME</div>
      </Link>
      <Link to={"/owner"} className="mr-12 text-white hover:text-lime-800">
        <div>OWNER</div>
      </Link>
    </nav>
  );
};
