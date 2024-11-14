import React from 'react'
import MovieHeadline from './ui/MovieHeadline'
import useScrollWheelCard from "../hooks/useScrollWhellCard";
import useGetUpcomingVMovie from '../hooks/useGetUpcomingMovie';
import Card from './ui/Card'

const UpcomingMovie = () => {
    const {scrollUpcomingContainerRef}  = useScrollWheelCard()
    const { upcomingData} = useGetUpcomingVMovie()
  return (
    <div className="flex flex-col gap-3 drop-shadow-lg w-full rounded-xl">
        <MovieHeadline title="Upcoming Movies" />  
        <div ref={scrollUpcomingContainerRef} className="flex gap-6 w-full py-4 overflow-x-auto scrollbar-none">
          {upcomingData?.results?.map((movie) => (
            <Card  key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
  )
}

export default UpcomingMovie