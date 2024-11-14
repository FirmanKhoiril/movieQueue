import { useParams } from "react-router-dom";
import useGetDetailMovie from "../hooks/useGetDetailMovie";
import Loading from "../components/layout/Loading";
import Error from "../components/layout/Error";
import NotFound from "../components/layout/NotFound";
import { IoBookmark, IoStar } from "react-icons/io5";
import { movieGenres } from "../utils/dummyData";
import moment from "moment";

const MovieDetail = () => {
  const { id } = useParams();
  const {
    data: movie,
    isSuccess,
    isError,
    isFetching,
    isLoading,
  } = useGetDetailMovie(id);

  if (isLoading || isFetching) return <Loading />;
  if (isError) return <Error />;
  if (!movie) return <NotFound />;

  return (
    isSuccess && (
      <section className="flex-col flex py-2 space-y-4">
        <div className="flex items-center flex-wrap md:flex-nowrap gap-8 justify-center md:justify-between flex-row md:space-x-4">
          <img
            src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
            className="w-[350px] rounded-md shadow-xl shadow-white/20"
            alt={movie.title}
          />
          <div className="flex flex-col space-y-4 w-full text-center md:text-start">
            <div className="flex md:flex-row flex-col items-center gap-2">
            <h1 className="text-2xl font-bold">{movie.title}</h1>
            <p className="text-slate-500 lg:text-base text-sm">#{movie.tagline}</p>
            </div>
            <div className="flex items-center justify-center md:justify-start">
            <p className="text-yellow-500 justify-center md:justify-start flex items-center gap-1"><span><IoStar size={15} /></span>{movie.vote_average.toFixed(1)}/10 &nbsp;</p>
            <p>|&nbsp; {moment(movie.release_date).format("LL")}</p>
            </div>
            <div className="flex items-center md:justify-start justify-center gap-2">
              {movie.genres?.map((genre) => (
                <p className="text-sm cursor-default bg-white/5 px-2 py-1 rounded-md hover:bg-white/10" key={genre.id}>{genre.name}</p>
              ))}
            </div>
            <p>{movie.overview}</p>
            <h1 className="text-2xl pt-2 pb-1">Production Companies</h1>
          <div className="flex items-center justify-center md:justify-start gap-5 flex-wrap w-full">
            {movie.production_companies?.map((production) => (
              <div className="bg-white/70 p-2 text-black rounded-md">
                <img
                  src={`https://image.tmdb.org/t/p/original/${production?.logo_path}`}
                  alt={production.name}
                  className="w-[140px] h-[60px] object-fill"
                />
              </div>
            ))}
          </div>
          </div>
        </div>
      </section>
    )
  );
};

export default MovieDetail;
