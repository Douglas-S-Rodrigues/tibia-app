import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

function SearchBar() {
  const { search, setSearch } = useContext(MyContext);

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Character name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
