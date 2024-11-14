import React from "react";
import { useParams } from "react-router-dom";
import useGetSearchMovie from "../hooks/useGetSearchMovie";
import Loading from "../components/layout/Loading";
import NotFound from "../components/layout/NotFound";
import Error from "../components/layout/Error";
import Card from "../components/ui/Card";

const SearchResult = () => {
  const { movie } = useParams();

  const { searchMovieData, isError, isFetching, isLoading, isSuccess } =
    useGetSearchMovie(movie);

  if (isLoading || isFetching) return <Loading />;
  if (isError) return <Error />;
  if (searchMovieData.results.length === 0) return <NotFound />;

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl">Searching: {movie}</h1>
      <div className="flex items-center flex-wrap justify-between space-y-4">
        {isSuccess &&
          searchMovieData?.results?.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
      </div>
    </div>
  );
};

export default SearchResult;
