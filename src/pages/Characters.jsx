import React from 'react';
import CharacterCard from '../components/CharacterCard';
import SearchBar from '../components/SearchBar';
import SearchButton from '../components/SearchButton';


function Characters() {
    return (
        <div>
            <SearchBar />
            <SearchButton />
            <CharacterCard />
        </div>
    )
}

export default Characters;