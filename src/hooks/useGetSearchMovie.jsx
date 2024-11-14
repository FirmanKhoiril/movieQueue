import { FetchSearchMovie } from '../api/FetchMovie'
import { useQuery } from '@tanstack/react-query'

export default function useGetSearchMovie(search) {
    const {data: searchMovieData, isError, isFetching, isLoading, isSuccess} = useQuery({
        queryKey: ['SearchMovie', search],
        queryFn: () => FetchSearchMovie(search),
        staleTime: 60 * (60 * 30),
        refetchInterval: 60 * (60 * 30),
        refetchOnWindowFocus: false
      })
      
    return { searchMovieData, isError, isFetching, isLoading, isSuccess }
}
