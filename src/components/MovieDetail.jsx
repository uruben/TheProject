import React, { useState } from 'react';

const MovieDetail = ({ movie }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [userRating, setUserRating] = useState(0);

  const handleFavoriteToggle = () => {
    setIsFavorite(!isFavorite);
  };

  const handleRatingChange = (e) => {
    setUserRating(Number(e.target.value));
  };

  return (
    <div>
      <img class= "float-left pt-7 border-b"
        src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
        alt={`${movie.title} Poster`} 
        
      />
      <h2 class="text-white pt-10 pr-80 font-bold text-xl">{movie.title}</h2>
      
      <p class="text-white pr-80">{movie.overview}</p>

     
      <div>
        <button class="text-white hover:text-yellow-700 flex items-center pl-32 pt-14 float-left" onClick={handleFavoriteToggle}>
          {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
        </button>
      </div>
      <div class="pt-14 pr-64">
        <label class="text-white">Rate this film:</label>
        <select class="text-white bg-zinc-700" value={userRating} onChange={handleRatingChange}>
          <option class="text-white bg-zinc-700" value={0}>Select Rating</option>
          <option class="text-white bg-zinc-700" value={1}>1</option>
          <option class="text-white bg-zinc-700" value={2}>2</option>
          <option class="text-white bg-zinc-700" value={3}>3</option>
          <option class="text-white bg-zinc-700" value={4}>4</option>
          <option class="text-white bg-zinc-700" value={5}>5</option>
        </select>
      </div>
      <p class="flex items-center text-white pt-24 pl-5">Release Date:     {movie.release_date}</p>
      <p class="flex items-center text-white pt-2 pl-5">Popularity Score:     {movie.popularity}</p>
      
    </div>
  );
};

export default MovieDetail