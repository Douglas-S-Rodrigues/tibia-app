import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

function SearchBar() {
  const { search, setSearch, fetchCharacter } = useContext(MyContext);

  const searchCharacter = () => {
    fetchCharacter(search);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Character name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit" onClick={searchCharacter}>
        Search
      </button>
    </div>
  );
}

export default SearchBar;
