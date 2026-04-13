import { VscGraphLine } from "react-icons/vsc";
import { IoTimeOutline } from "react-icons/io5";
import { BiHomeAlt2 } from "react-icons/bi";


const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm">
        
        {/* left */}
        <div className="navbar-start">
            <a className="btn btn-ghost text-xl">KeenKeeper</a>
        </div>

        {/* right */}
        {/* css for active btn - text-white bg-[#244D3F] */}
        <div className="navbar-end hidden lg:flex gap-2">
            <button className="btn btn-ghost"><BiHomeAlt2 />Home</button>
            <button className="btn btn-ghost"><IoTimeOutline />Timeline</button>
            <button className="btn btn-ghost"><VscGraphLine />
Stats</button>
        </div>

        {/* mobile with menu */}
        <div className="navbar-end lg:hidden">
            <div className="dropdown dropdown-end">
            
            <div tabIndex={0} role="button" className="btn btn-ghost">
                <svg xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </div>

            {/* dropdown menu */}
            <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-40"
            >
                <li><a><BiHomeAlt2 />Home</a></li>
                <li><a><IoTimeOutline />Timeline</a></li>
                <li><a><VscGraphLine />Stats</a></li>
            </ul>

            </div>
        </div>
        </div>
    );
};

export default Navbar;