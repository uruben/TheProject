import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div >
      <input class ="bg-zinc-700 border-solid border-0.5 border-gray-100" 
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for any film..." 
      />
      <button class="bg-zinc-600 text-white text p-0.3 pr-2 pl-2" onClick={handleSearch}>Search</button>
    </div>
  )
}

export default SearchBar