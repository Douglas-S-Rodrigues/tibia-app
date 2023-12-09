import React from "react"; 
import CharactersNavigateButton from "./CharactersNavigateButton";
import HighScoresNavigateButton from "./HighscoresNavigateButton";
import HomeNavigateButton from "./HomeNavigateButton";

function Header() {
    return (
        <div>
            <HomeNavigateButton />
            <CharactersNavigateButton />
            <HighScoresNavigateButton />
        </div>
    )
}

export default Header;