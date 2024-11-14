import axios from 'axios'

const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${import.meta.env.VITE_MOVIE_API_READ_ACCESS_TOKEN}`
    }
  };

export const FetchPopularMovie = async () => {
    try {
        const { data } = await axios.get('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options);

        return data
    } catch (error) {
        console.log(error)
    }
}
export const FetchUpcomingMovie = async () => {
    try {
        const { data } = await axios.get('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', options);

        return data
    } catch (error) {
        console.log(error)
    }
}

export const FetchTopRatedMovie = async () => {
    try {
        const { data } = await axios.get('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options);

        return data
    } catch (error) {
        console.log(error)
    }
}

export const FetchSearchMovie = async (search) => {
    try {
        const { data } = await axios.get(`https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1&query=${search}`, options);

        return data
    } catch (error) {
        console.log(error)
    }
}

export const FetchDetailMovie = async (movie_id) => {
    try {
        const { data } = await axios.get(`https://api.themoviedb.org/3/movie/${movie_id}`, options);

        return data
    } catch (error) {
        console.log(error)
    }
}
