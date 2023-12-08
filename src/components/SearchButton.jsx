import React, { useContext } from "react";
import MyContext from "../context/MyContext";

function SearchButton() {
  const { search, fetchCharacter, setResult } = useContext(MyContext);

  const handleSearch = async () => {
    try {
      await fetchCharacter(search);
      setResult(true);
    } catch (error) {
      console.error("Erro ao obter dados do personagem:", error);
      setResult(false);
    }
  };

  return (
    <button type="button" onClick={handleSearch}>
      Search
    </button>
  );
}

export default SearchButton;
