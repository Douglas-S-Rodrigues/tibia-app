import React from 'react';
import CharacterCard from '../components/CharacterCard';
import SearchBar from '../components/SearchBar';


function Characters() {
    return (
        <div>
            <SearchBar />
            <CharacterCard />
        </div>
    )
}

export default Characters;