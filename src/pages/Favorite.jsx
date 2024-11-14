import React from "react";
import { useGlobalState } from "../context/useGlobalState";
import Card from "../components/ui/Card";
import { Link } from "react-router-dom";

const Favorite = () => {
  const { favourite } = useGlobalState();
  return (
    <section className="flex gap-4 flex-col">
      {favourite.length > 0 ? (
        <>
          <h2 className="text-2xl font-semibold">Favorite Movie</h2>
          <div className="flex w-full pb-6 pt-3 flex-wrap justify-start items-center gap-4">
            {favourite.map((movie) => (
              <Card movie={movie} />
            ))}
          </div>
        </>
      ) : (
        <div className="flex items-center min-h-[80dvh] w-full justify-center flex-col space-y-4">
          <span className="text-gray-500 text-center">
            You haven't added any favorites yet! Start exploring movies and add
            them to your list.
          </span>
          <Link to={"/"}>
            <button className="bg-primary text-white py-3 px-6 rounded-lg drop-shadow-md hover:drop-shadow-lg hover:bg-opacity-90 transition-all duration-200 opacity-90 hover:opacity-100">
              Add new favorites
            </button>
          </Link>
        </div>
      )}
    </section>
  );
};

export default Favorite;
