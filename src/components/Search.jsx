import { useState } from "react";
import MovieCard from "./MovieCard";


// const url = 'https://api.themoviedb.org/3/authentication';
const OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YWEzODUwOTRhMzFmZjhlODQxNDBkNjA2ZGY2NDcwNCIsIm5iZiI6MTc4ODYwMzIzNC4zOTY5OTk4LCJzdWIiOiI2YTliZWI2MjhhMjE3Y2JkNTU0MWM5NjEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.NaBifFetjgZ1XaEKhaW5zIFIh4mbbXrd3BCJXMFtxiI'
  }
};


// const movieList = [{"Title":"The Avengers","Year":"2012","Rated":"PG-13","Released":"04 May 2012","Runtime":"143 min","Genre":"Action, Sci-Fi","Director":"Joss Whedon","Writer":"Joss Whedon, Zak Penn","Actors":"Robert Downey Jr., Chris Evans, Scarlett Johansson","Plot":"Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.","Language":"English, Russian","Country":"United States","Awards":"Nominated for 1 Oscar. 40 wins & 81 nominations total","Poster":"https://m.media-amazon.com/images/M/MV5BNGE0YTVjNzUtNzJjOS00NGNlLTgxMzctZTY4YTE1Y2Y1ZTU4XkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.0/10"},{"Source":"Rotten Tomatoes","Value":"91%"},{"Source":"Metacritic","Value":"69/100"}],"Metascore":"69","imdbRating":"8.0","imdbVotes":"1,555,308","imdbID":"tt0848228","Type":"movie","DVD":"N/A","BoxOffice":"$623,357,910","Production":"N/A","Website":"N/A","Response":"True"},
//                 {"Title":"Eternal Sunshine of the Spotless Mind","Year":"2004","Rated":"R","Released":"19 Mar 2004","Runtime":"108 min","Genre":"Drama, Romance, Sci-Fi","Director":"Michel Gondry","Writer":"Charlie Kaufman, Michel Gondry, Pierre Bismuth","Actors":"Jim Carrey, Kate Winslet, Tom Wilkinson","Plot":"When their relationship turns sour, a couple undergoes a medical procedure to have each other erased from their memories forever.","Language":"English","Country":"United States","Awards":"Won 1 Oscar. 73 wins & 111 nominations total","Poster":"https://m.media-amazon.com/images/M/MV5BMTY4NzcwODg3Nl5BMl5BanBnXkFtZTcwNTEwOTMyMw@@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.3/10"},{"Source":"Rotten Tomatoes","Value":"93%"},{"Source":"Metacritic","Value":"89/100"}],"Metascore":"89","imdbRating":"8.3","imdbVotes":"1,166,070","imdbID":"tt0338013","Type":"movie","DVD":"N/A","BoxOffice":"$34,400,301","Production":"N/A","Website":"N/A","Response":"True"}
// ]



export default function Search(){
  const [search, setSearch] = useState('');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null)


  async function handleSubmit(e) {
    e.preventDefault();

    const query = search.trim();
    if (!query) return;

    setLoading(true);
    setError(null);

    try {
      // 1. Fetch search results from TMDB
      const res = await fetch(
        `https://v3-cinemeta.strem.io/catalog/series/top/search=${encodeURIComponent(query)}.json`,
        OPTIONS
      );

      if (!res.ok) {
        throw new Error("Failed to fetch movies from TMDB");
      }

      const data = await res.json();

      // 2. Transform TMDB data to match the property names expected by <MovieCard />
      const formattedMovies = (data.metas || []).map((movie) => ({
        imdbID: movie.imdb_id || movie.id,
        Title: movie.name,
        Year: movie.releaseInfo || 'N/A',
        Plot: `Type: ${movie.type || 'Series'}`, //Cinema search results do not include full plots
        Poster: movie.poster || "https://via.placeholder.com/300x450?text=No+Poster"
      }));

      setMovies(formattedMovies);
    } catch (err) {
      console.error(err);
      setError("An error occurred while searching for movies.");
    } finally {
      setLoading(false);
    }
  }

    return (
      <>
        <form onSubmit={handleSubmit} >

            <input
              className="border rounded-xl p-1" 
              type="text" 
              placeholder="Search for a movie..." 
              value={search} 
              onChange={e => setSearch(e.target.value)}
            />


          <button type="submit"  className="ml-10 px-6 py-3 bg-sky-500 hover:bg-sky-400 active:scale-95 text-slate-950 font-semibold rounded-xl transition-all duration-200 shadow-lg shadow-sky-500/20 cursor-pointer">
            {loading ? "searching..." : "search"}
          </button>

        </form>

        {error && <p className="text-red-400 text-center my-4">{error}</p>}

        <MovieCard moviesprop={movies}/>
      </>
  )
}