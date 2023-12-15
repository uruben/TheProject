import React, { useState, useEffect } from 'react'
import axios from 'axios'
import apiKey from './config'

import MovieList from './MovieList'
import MovieDetail from './MovieDetail'
import SearchBar from './SearchBar'

const MovieBrowser = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [sortBy, setSortBy] = useState('popularity.desc'); 

  useEffect(() => {
    const fetchData = async () => {
      try {
       
        const response = await axios.get(
          `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&page=${currentPage}&sort_by=${sortBy}`
        );
        setMovies(response.data.results);
        setTotalPages(response.data.total_pages);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, [currentPage, sortBy]); // Fetch data whenever the page or sorting criteria changes

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
  };

  const handleSearch = async (query) => {
    try {
      
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}&page=${currentPage}&sort_by=${sortBy}`
      );
      setMovies(response.data.results);
      setSelectedMovie(null);
      setTotalPages(response.data.total_pages);
    } catch (error) {
      console.error('Error searching for movies:', error);
    }
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const handleSortChange = (newSortBy) => {
    setSortBy(newSortBy);
  };

  const handleFavoriteToggle = () => {
    // todo; save favorite status
  };

  const handleRatingSubmit = () => {
    // todo; submit user rating
  };

  return (
    <div >
      <SearchBar onSearch={handleSearch} />
      <div class="text-white pt-1">
        <label class="text-white pt-4">Or Sort By:</label>
        <select class="text-white bg-zinc-700" value={sortBy} onChange={(e) => handleSortChange(e.target.value)}>
          <option value="popularity.desc" class="text-white bg-zinc-700">Popular</option>
          <option value="popularity.asc" class="text-white bg-zinc-700">Least Popular</option>
          <option value="release_date.desc" class="text-white bg-zinc-700">Newest Releases</option>
          <option value="release_date.asc" class="text-white bg-zinc-700">Oldest Releases</option>
          <option value="vote_average.desc" class="text-white bg-zinc-700">Highest Rated</option>
          <option value="vote_average.asc" class="text-white bg-zinc-700">Lowest rated</option>
        </select>
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : selectedMovie ? (
        <MovieDetail
          movie={selectedMovie}
          onFavoriteToggle={handleFavoriteToggle}
          onRatingSubmit={handleRatingSubmit}
        />
      ) : (
        <>
          <MovieList movies={movies} onMovieClick={handleMovieClick} />
          <div class="bg-zinc-700  text-white font-bold py-2 px-4 gap-20 rounded">
            <button class="hover:text-sky-400"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Previous Page
            </button>
            <span class="pl-12 pr-12">Page {currentPage} of {totalPages}</span>
            <button class="hover:text-sky-400"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Next Page
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default MovieBrowser