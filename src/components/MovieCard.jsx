
export default function MovieCard({moviesprop}){
    
    return (
        <div className="mt-4">
            {moviesprop.map((movie) => (
                <div key={movie.imdbID || movie.Title}>
                    <h3>{movie.Title} {movie.Year}</h3>
                    <p>{movie.Plot}</p>
                </div>
            ))}
        </div>
    )
}