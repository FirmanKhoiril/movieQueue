import React from 'react'
import { FetchDetailMovie } from '../api/FetchMovie'
import { useQuery } from '@tanstack/react-query'

export default function useGetDetailMovie(movie_id) {
    const {data, isError, isFetching, isLoading, isSuccess} = useQuery({
        queryKey: ['DetailMovie', movie_id],
        queryFn: () => FetchDetailMovie(movie_id),
        staleTime: 60 * (60 * 30),
        refetchInterval: 60 * (60 * 30),
        refetchOnWindowFocus: false
      })
      
    return { data, isError, isFetching, isLoading, isSuccess }
}
