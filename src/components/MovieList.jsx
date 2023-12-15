import React from 'react';

const MovieList = ({ movies, onMovieClick }) => {
  return (
    <div className="pt-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {movies.map((movie) => (
        <div
          key={movie.id}
          className="bg-zinc-900 p-4 rounded-md cursor-pointer transition duration-300 transform hover:scale-105"
          onClick={() => onMovieClick(movie)}
        >
          <img
            className="w-full h-48 object-cover rounded-md mb-4"
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
          <p className="text-white font-semibold">{movie.title}</p>
        </div>
      ))}
    </div>
  );
};

export default MovieList;