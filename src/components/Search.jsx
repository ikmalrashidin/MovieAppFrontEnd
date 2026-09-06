import { useState } from "react";
import MovieCard from "./MovieCard";

// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YWEzODUwOTRhMzFmZjhlODQxNDBkNjA2ZGY2NDcwNCIsIm5iZiI6MTc4ODYwMzIzNC4zOTY5OTk4LCJzdWIiOiI2YTliZWI2MjhhMjE3Y2JkNTU0MWM5NjEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.NaBifFetjgZ1XaEKhaW5zIFIh4mbbXrd3BCJXMFtxiI'
//   }
// };

const movieList = [{"Title":"The Avengers","Year":"2012","Rated":"PG-13","Released":"04 May 2012","Runtime":"143 min","Genre":"Action, Sci-Fi","Director":"Joss Whedon","Writer":"Joss Whedon, Zak Penn","Actors":"Robert Downey Jr., Chris Evans, Scarlett Johansson","Plot":"Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.","Language":"English, Russian","Country":"United States","Awards":"Nominated for 1 Oscar. 40 wins & 81 nominations total","Poster":"https://m.media-amazon.com/images/M/MV5BNGE0YTVjNzUtNzJjOS00NGNlLTgxMzctZTY4YTE1Y2Y1ZTU4XkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.0/10"},{"Source":"Rotten Tomatoes","Value":"91%"},{"Source":"Metacritic","Value":"69/100"}],"Metascore":"69","imdbRating":"8.0","imdbVotes":"1,555,308","imdbID":"tt0848228","Type":"movie","DVD":"N/A","BoxOffice":"$623,357,910","Production":"N/A","Website":"N/A","Response":"True"},
                {"Title":"Eternal Sunshine of the Spotless Mind","Year":"2004","Rated":"R","Released":"19 Mar 2004","Runtime":"108 min","Genre":"Drama, Romance, Sci-Fi","Director":"Michel Gondry","Writer":"Charlie Kaufman, Michel Gondry, Pierre Bismuth","Actors":"Jim Carrey, Kate Winslet, Tom Wilkinson","Plot":"When their relationship turns sour, a couple undergoes a medical procedure to have each other erased from their memories forever.","Language":"English","Country":"United States","Awards":"Won 1 Oscar. 73 wins & 111 nominations total","Poster":"https://m.media-amazon.com/images/M/MV5BMTY4NzcwODg3Nl5BMl5BanBnXkFtZTcwNTEwOTMyMw@@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.3/10"},{"Source":"Rotten Tomatoes","Value":"93%"},{"Source":"Metacritic","Value":"89/100"}],"Metascore":"89","imdbRating":"8.3","imdbVotes":"1,166,070","imdbID":"tt0338013","Type":"movie","DVD":"N/A","BoxOffice":"$34,400,301","Production":"N/A","Website":"N/A","Response":"True"}
]



export default function Search(){
  const [search, setSearch] = useState('');
  const [movies, setMovies] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(null)


  function handleSubmit(e){
    e.preventDefault();

    const query = search.trim().toLowerCase();
    if (!query) return;

    const movieFiltered = movieList.filter((movie) => 
      movie.Title.toLowerCase().includes(query)
    );

    setMovies(movieFiltered);

  }

    return (
      <>
        <form onSubmit={handleSubmit}>

          <input 
            type="text" 
            placeholder="Search for a movie..." 
            value={search} 
            onChange={e => setSearch(e.target.value)}
          />

          <button type="submit" >
            Search
          </button>

        </form>


        <MovieCard moviesprop={movies}/>
      </>
  )
}