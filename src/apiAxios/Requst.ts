// api key 26ce05b29a9c85ce5b805fc74355b6bd

const API_KEY = "26ce05b29a9c85ce5b805fc74355b6bd"


const requests ={
    fetchTranding: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOrignals:`/discover/tv?api_key=${API_KEY}&with_networks=213` ,
    fetchTopRated:`/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies:`/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies:`/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies:`/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries:`/discover/movie?api_key=${API_KEY}&with_genres=99`,
}
export default requests