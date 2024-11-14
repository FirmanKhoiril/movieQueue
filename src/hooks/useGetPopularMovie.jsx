import { useQuery } from '@tanstack/react-query'
import { FetchPopularMovie } from '../api/FetchMovie'

export default function useGetPopularMovie() {
    const {data: popularData, isError, isFetching, isLoading, isSuccess} = useQuery({
        queryKey: ['PopularMovie'],
        queryFn: () => FetchPopularMovie(),
        staleTime: 60 * (60 * 30),
        refetchInterval: 60 * (60 * 30),
        refetchOnWindowFocus: false
      })
      
    return { popularData, isError, isFetching, isLoading, isSuccess }
}
