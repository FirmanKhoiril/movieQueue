import Loading from '../components/layout/Loading'
import NotFound from '../components/layout/NotFound'
import Error from '../components/layout/Error'
import useGetPopularMovie from '../hooks/useGetPopularMovie';
import PopularMovie from '../components/PopularMovie';
import UpcomingMovie from '../components/UpcomingMovie';
import useGetUpcomingVMovie from '../hooks/useGetUpcomingMovie';
import TopRatedMovie from '../components/TopRatedMovie';
import useGetTopRatedMovie from '../hooks/useGetTopRatedMovie';
import HeroBanner from '../components/HeroBanner';
import SearchMobile from '../components/SearchMobile';

const Home = () => {

  const { popularData ,isLoading: isLoadingP, isError: isErrorP } = useGetPopularMovie()
  const { upcomingData ,isError: isErrorU, isLoading: isLoadingU } = useGetUpcomingVMovie()
  const { topRatedData ,isError: isErrorTR, isLoading: isLoadingTR } = useGetTopRatedMovie()

  const isLoading = isLoadingP || isLoadingU || isLoadingTR;
  const isError = isErrorP || isErrorU || isErrorTR;

  if (isLoading) return <Loading />;
  if (isError) return <Error />;
  if (popularData.results.length === 0 || upcomingData.results.length === 0 || topRatedData.results.length === 0) return <NotFound />;

  return (
    <section className='flex items-center flex-col w-full'>
      <HeroBanner />
      <SearchMobile />
      <PopularMovie />
      <UpcomingMovie />
      <TopRatedMovie />
    </section>
  )
}

export default Home