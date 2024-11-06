import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav>
      <Link to={"/"}>
        <div>HOME</div>
      </Link>
      <Link to={"/owner"}>
        <div>OWNER</div>
      </Link>
    </nav>
  );
};
