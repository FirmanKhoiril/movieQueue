import React from "react";
import useGetPopularMovie from "../hooks/useGetPopularMovie";
import useScrollWheelCard from "../hooks/useScrollWhellCard";
import MovieHeadline from "./ui/MovieHeadline";
import Card from "./ui/Card";

const PopularMovie = () => {
  const { popularData, isSuccess } = useGetPopularMovie();
  const {scrollPopularContainerRef}  = useScrollWheelCard()

  return (
    <div className="flex flex-col gap-3 pt-6 drop-shadow-lg w-full rounded-xl">
      <MovieHeadline title="Popular Movies" />
        <div
        ref={scrollPopularContainerRef}
        className="flex gap-6 w-full py-4 overflow-x-auto scrollbar-none"
      >
        {isSuccess &&
          popularData?.results?.slice(1, popularData?.results.length - 1).map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
      </div>
    
    </div>
  );
};

export default PopularMovie;
