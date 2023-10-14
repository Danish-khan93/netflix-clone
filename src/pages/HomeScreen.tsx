import { MovieBanner, MoviesRow, Nav } from "../component";
import requests from "../apiAxios/Requst";
const HomeScreen = () => {
  return (
    <div>
      <Nav />
      <MovieBanner />
      <MoviesRow title="Netflix Original" fetchUrl={requests.fetchNetflixOrignals} />
      <MoviesRow title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <MoviesRow title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <MoviesRow title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <MoviesRow title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <MoviesRow title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <MoviesRow title="Documentaries Movies" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
};

export default HomeScreen;
