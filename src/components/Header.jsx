import React from "react"; 
import CharactersNavigateButton from "./CharactersNavigateButton";
import HighScoresNavigateButton from "./HighscoresNavigateButton";

function Header() {
    return (
        <div>
            <CharactersNavigateButton />
            <HighScoresNavigateButton />
        </div>
    )
}

export default Header;