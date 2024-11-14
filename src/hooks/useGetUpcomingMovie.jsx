import { useQuery } from '@tanstack/react-query'
import { FetchUpcomingMovie } from '../api/FetchMovie'

export default function useGetUpcomingVMovie() {
    const {data: upcomingData, isSuccess, isFetching, isLoading, isError} = useQuery({
        queryKey: ['UpcomingMovie'],
        queryFn: () => FetchUpcomingMovie(),
        staleTime: 60 * (60 * 30),
        refetchInterval: 60 * (60 * 30),
        refetchOnWindowFocus: false
      })
      
      return { upcomingData, isSuccess, isFetching, isLoading, isError}
}
