import React from "react";
import { useGlobalState } from "../../context/useGlobalState";
import { CgClose } from "react-icons/cg";
import { Link } from "react-router-dom";
import { sidebarLinks } from "../../utils/dummyData";

const Sidebar = () => {
  const { setToogleSidebar, toogleSidebar } = useGlobalState();

  const handleToogleSidebar = () => {
    setToogleSidebar((prev) => !prev);
  };
  return (
    <>
      <div
        onClick={handleToogleSidebar}
        className={`${
          toogleSidebar ? "block" : "hidden"
        } fixed z-[60] w-full h-screen bg-black/5`}
      ></div>
      <aside
        className={`${
          toogleSidebar ? "translate-x-[0%]" : "translate-x-[-100%]"
        } transition duration-300 ease-in-out fixed lg:hidden flex h-screen z-[999] flex-col drop-shadow-lg max-w-[350px] left-0 w-full px-4 py-6 bg-[#171a29]`}
      >
        <button type="button" className="cursor-pointer opacity-80 hover:opacity-100" onClick={handleToogleSidebar}>
          <CgClose size={24} />
        </button>
        <ul className="flex flex-col pt-8 gap-8">
        {sidebarLinks.map((link) => (
          <Link
            key={link.label}
            to={`/${link.label === "Home" ? "" : link.label.toLowerCase()}`}
            className="text-lg font-medium flex items-center gap-2.5  text-white hover:text-primary"
          >
            <link.icon size={18} />
            {link.label}
          </Link>
        ))}
      </ul>
      <hr className="border-white/20 mt-8" />
      </aside>
    </>
  );
};

export default Sidebar;
