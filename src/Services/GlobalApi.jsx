import axios from "axios";

const moviesBaseUrl='https://api.themoviedb.org/3'
const api_key='6c85e73769973c01ba21205f0806a706'

const movieByGenreBaseURL='https://api.themoviedb.org/3/discover/movie?api_key=6c85e73769973c01ba21205f0806a706';

// https://api.themoviedb.org/3/trending/all/day?api_key=6c85e73769973c01ba21205f0806a706

const getTrendingVideos=axios.get(moviesBaseUrl+
    "/trending/all/day?api_key="+api_key);

    const getMovieByGenerId=(id)=>
        axios.get(movieByGenreBaseURL+"&with_genres="+id)


export default{
    getTrendingVideos,
    getMovieByGenerId
}