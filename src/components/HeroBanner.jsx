import React from "react";
import useGetPopularMovie from "../hooks/useGetPopularMovie";
import { useWindowSize } from "@uidotdev/usehooks";
import moment from "moment";
import { IoBookmark, IoStar } from "react-icons/io5";
import { FaPlay } from "react-icons/fa";
import { useGlobalState } from "../context/useGlobalState";
import { movieGenres } from '../utils/dummyData';

const HeroBanner = () => {
  const size = useWindowSize();
  const { setFavourite, favourite } = useGlobalState();
  const { popularData } = useGetPopularMovie();
  const movie = popularData?.results[0];
  
  const isFavouriteMovie  = () => {
    if(favourite.some((f) => f.id === movie.id)) {
      return true
    }
    return false
  }

  const toggleFavouriteMovie = () => {
    if (isFavouriteMovie()) {
      const updatedFavourites = favourite.filter((f) => f.id !== movie.id);
      setFavourite(updatedFavourites);
    } else {
      const newFavourite = [...favourite, movie];
      setFavourite(newFavourite);
    }
  };


  const getGenresByIds = (genreIds) => {
    return movieGenres
      .filter((genre) => genreIds.includes(genre.id))
      .map((g) => g.genre);
  };

  const genres = getGenresByIds(movie.genre_ids);

  return (
    <div className="w-full relative sm:max-h-[580px] max-h-[400px] h-full rounded-xl overflow-hidden shadow-lg">
      <img
        src={
          size.width <= 640
            ? `https://image.tmdb.org/t/p/original/${movie.poster_path}`
            : `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`
        }
        alt={movie.title}
        className="object-cover w-full h-full"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/50 rounded-xl flex items-end sm:items-center p-4 sm:p-12">
        <div className="text-white space-y-3 max-w-[500px]">
          <h1 className="text-3xl sm:text-4xl font-bold">{movie.title}</h1>
          <p className="text-lg text-gray-300">
            Release: {moment(movie.release_date).format("LL")}
          </p>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 after:content-['.'] after:text-2xl after:ml-1 after:mt-[-10px]">
              <span className="pt-1 text-yellow-500">{movie.vote_average.toFixed(1)}</span>
              <IoStar size={15} className="text-yellow-500" />
            </div>
            {genres.map((genre, idx) => (
              <div
                key={genre}
                className={`flex items-center gap-1 ${
                  idx !== genres.length - 1 ? "after:content-['.'] after:text-2xl after:ml-1 after:mt-[-10px]" : ""
                }`}
              >
                <span className="text-gray-300 text-base pt-[2px]">{genre}</span>
              </div>
            ))}
          </div>
          <p className="text-sm sm:text-base text-gray-300 line-clamp-3">
            {movie.overview}
          </p>
          <div className="flex gap-4 mt-4">
            <button className="px-4 py-2 flex items-center gap-2 bg-primary text-white font-semibold rounded hover:bg-primary/90 transition">
              <FaPlay size={18} className="hidden sm:inline" />
              <span className="text-sm sm:text-base">Watch Now</span>
            </button>
            <button
              className="px-4 py-2 flex items-center gap-2 bg-white/20 text-white font-semibold rounded hover:bg-white/30 transition"
              onClick={() => toggleFavouriteMovie()}
            >
              <IoBookmark size={18} className="hidden sm:inline" />
              <span className="text-sm sm:text-base">{isFavouriteMovie() ? "Remove from Favorites" : "Add to Favorites"}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
