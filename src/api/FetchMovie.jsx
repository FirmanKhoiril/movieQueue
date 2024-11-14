import axios from 'axios'

const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYzQxMzE5YjljZDRiZTg5ZDg1YTYyZjIzMzUyYTRlNSIsIm5iZiI6MTczMDI3MDc1My45NzQzMjc2LCJzdWIiOiI2NzIwZWU4ZDM0YzBmYWJkNjgxZDYxZDEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.6iVpmBjS3I9Tc0jS19-0Y-3b2KYdj8b-g48JW47JK40`
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
