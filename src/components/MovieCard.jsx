
export default function MovieCard({moviesprop = []}){
    
    if(!moviesprop || moviesprop.length === 0){
        return <p className="mt-20 text-center text-slate-400">No movies found.</p>
    }

    return (
        <div>
            {moviesprop.map((movie) => (
                <div key={movie.imdbID || movie.Title} className="mt-10 border p-5 rounded-2xl text-center">
                    <h3 className="font-black">{movie.Title} {movie.Year}</h3>
                    <img src={movie.Poster} alt='movie-poster' className="mx-auto w-50 mt-5"/>
                    {/* <p className="mt-5">{movie.Plot}</p> */}
                </div>
            ))}
        </div>
    )
}