import React from 'react'
import useGetTopRatedMovie from '../hooks/useGetTopRatedMovie';
import useScrollWheelCard from '../hooks/useScrollWhellCard';
import MovieHeadline from './ui/MovieHeadline';
import Card from './ui/Card';

const TopRatedMovie = () => {
    const {scrollTopRatedContainerRef}  = useScrollWheelCard()
    const { topRatedData, isSuccess} = useGetTopRatedMovie()

  return (
    <div className="flex flex-col gap-3 drop-shadow-lg w-full rounded-xl">
      <MovieHeadline title="Top Rated Movies" />
      <div
        ref={scrollTopRatedContainerRef}
        className="flex gap-6 w-full py-4 overflow-x-auto scrollbar-none"
      >
        {isSuccess &&
          topRatedData?.results?.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
      </div>
    </div>
  );
}

export default TopRatedMovie