import { useQuery } from '@tanstack/react-query'
import { FetchTopRatedMovie } from '../api/FetchMovie'

export default function useGetTopRatedMovie() {
    const {data: topRatedData, isError, isFetching, isLoading, isSuccess} = useQuery({
        queryKey: ['TopRatedMovie'],
        queryFn: () => FetchTopRatedMovie(),
        staleTime: 60 * (60 * 30),
        refetchInterval: 60 * (60 * 30),
        refetchOnWindowFocus: false
      })
      
    return { topRatedData, isError, isFetching, isLoading, isSuccess }
}
