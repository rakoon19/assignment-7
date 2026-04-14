import { Link, useLocation } from "react-router";
import { VscGraphLine } from "react-icons/vsc";
import { IoTimeOutline } from "react-icons/io5";
import { BiHomeAlt2 } from "react-icons/bi";

const Navbar = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <div className="navbar bg-base-100 shadow-sm sticky top-0 z-50">

      <div className="navbar-start">
        <Link to="/" className="btn btn-ghost text-xl font-semibold">
          KeenKeeper
        </Link>
      </div>


      <div className="navbar-end hidden lg:flex gap-2">
        <Link
          to="/"
          className={`btn btn-ghost ${isActive("/") ? "text-white bg-[#244D3F]" : ""}`}
        >
          <BiHomeAlt2 className="w-5 h-5" />
          Home
        </Link>

        <Link
          to="/timeline"
          className={`btn btn-ghost ${isActive("/timeline") ? "text-white bg-[#244D3F]" : ""}`}
        >
          <IoTimeOutline className="w-5 h-5" />
          Timeline
        </Link>

        <Link
          to="/stats"
          className={`btn btn-ghost ${isActive("/stats") ? "text-white bg-[#244D3F]" : ""}`}
        >
          <VscGraphLine className="w-5 h-5" />
          Stats
        </Link>
      </div>


      <div className="navbar-end lg:hidden">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"   
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-1 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/" className={isActive("/") ? "text-white bg-[#244D3F]" : ""}>
                <BiHomeAlt2 className="w-5 h-5" /> Home
              </Link>
            </li>
            <li>
              <Link to="/timeline" className={isActive("/timeline") ? "text-white bg-[#244D3F]" : ""}>
                <IoTimeOutline className="w-5 h-5" /> Timeline
              </Link>
            </li>
            <li>
              <Link to="/stats" className={isActive("/stats") ? "text-white bg-[#244D3F]" : ""}>
                <VscGraphLine className="w-5 h-5" /> Stats
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;