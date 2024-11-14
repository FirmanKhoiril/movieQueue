import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import { Link } from "react-router-dom";
import moment from "moment";
import { useGlobalState } from "../../context/useGlobalState";

export default function Card({ movie }) {
  const {setFavourite, favourite} = useGlobalState()
  
  const toggleFavouriteMovie = () => {
    if (isFavouriteMovie()) {
      const updatedFavourites = favourite.filter((f) => f.id !== movie.id);
      setFavourite(updatedFavourites);
    } else {
      const newFavourite = [...favourite, movie];
      setFavourite(newFavourite);
    }
  };

  const isFavouriteMovie  = () => {
    if(favourite.some((f) => f.id === movie.id)) {
      return true
    }

    return false
  }

  return (
    <div className=" min-w-[calc(50%-13px)] max-w-[calc(50%-13px)] sm:min-w-[193px] sm:max-w-[193px] w-full cursor-pointer group relative">
      <LazyLoadImage
        className="rounded-lg object-fill"
        src={movie.poster_path !== null ? `https://image.tmdb.org/t/p/original/${movie.poster_path}` : `https://placehold.co/600x850`}
        alt={`${movie.title}`}
        effect="blur"
        loading="lazy"
      />
      <Link to={`/movie-detail/${movie.id}`}>
        <div className="absolute bottom-0 top-0 group-hover:opacity-100 opacity-0 transition duration-200 p-2 bg-gradient-to-b from-[rgba(0,0,0,0)] via-[rgba(0,0,0,0.6)] to-[rgba(0,0,0,1)] rounded-lg items-start justify-end flex flex-col h-[97.9%] w-full">
          <h2 className="text-base sm:text-lg font-bold w-full line-clamp-2">{movie.title}</h2>
          <p className="text-gray-500 text-sm">
            {moment(movie.release_date).format("LL")}
          </p>
        </div>
      </Link>
      <button
        type="button"
        onClick={() => toggleFavouriteMovie()}
        className="absolute top-2 right-2 z-20 hover:bg-white/40 p-2 opacity-0 group-hover:opacity-100 transition duration-200 bg-white/20 rounded-full flex items-center justify-center"
      >
        {isFavouriteMovie() ? (
          <IoMdHeart className="text-red-500" size={25} />
        ) : (
          <IoMdHeartEmpty size={25} />
        )}
      </button>
    </div>
  );
}
