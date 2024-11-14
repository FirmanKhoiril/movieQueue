import { Link, useLocation, useNavigate } from "react-router-dom";
import { CgMenu } from "react-icons/cg";
import { IoIosSearch } from "react-icons/io";
import { useGlobalState } from "../../context/useGlobalState";
import User from "../../assets/default-blue-netflix.png";

const Navbar = () => {
  const { setToogleSidebar, searchQuery, setSearchQuery } = useGlobalState();
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${searchQuery}`);
    setSearchQuery("");
  };

  return (
    <nav className="py-4 md:py-6 flex items-center sticky top-0 z-50 border-white/5 bg-[#0f111a] justify-between w-full">
      <div className="flex items-center gap-4">
        <button
          type="button"
          className="inline-flex lg:hidden opacity-80 hover:opacity-100"
          onClick={() => setToogleSidebar((prev) => !prev)}
        >
          <CgMenu size={25} color="white" />
        </button>
        <Link to={"/"}>
          <h1 className="text-[1.45em] sm:text-[1.7em] font-bold">
            Movie<span className="text-primary">Queue</span>
          </h1>
        </Link>
      </div>
      <ul className="hidden lg:flex items-center gap-8 flex-row">
        {["Home", "Favorite", "About"].map((link) => {
          const path = `/${link === "Home" ? "" : link.toLowerCase()}`;
          const isActive = location.pathname === path;
          return (
            <Link
              key={link}
              to={`/${link === "Home" ? "" : link.toLowerCase()}`}
              className={`${
                isActive ? "after:scale-x-100 after:border-b after:border-primary text-primary" : "text-white"
              } text-lg font-medium after:block after:content-[''] hover:after:scale-x-100 after:border-b after:border-primary after:scale-x-0 after:transition after:duration-300 after:ease-in-out after:origin-[0%_50%]`}
            >
              {link}
            </Link>
          );
        })}
      </ul>
      <div className="flex items-center gap-6">
        <form
          onSubmit={handleSubmit}
          className="relative group hidden md:inline-flex max-w-[350px] w-full"
        >
          <button
            type="button"
            className="absolute group-hover:text-white group-focus-within:text-white text-white/40 left-3 top-2"
          >
            <IoIosSearch size={24} />
          </button>
          <input
            type="text"
            placeholder="Search movies..."
            required
            className="bg-secondary/10 flex-1 rounded-md py-2 group-hover:border-white border-white/20 focus:border-white border pl-12 min-w-[320px] pr-4 focus:outline-none w-full"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </form>
        <div className="flex">
          <img
            src={User}
            alt="Default User Logo"
            className="rounded-lg w-10 md:w-12 h-10 hover:animate-spin transition duration-200"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
