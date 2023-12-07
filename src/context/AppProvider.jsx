import React, { useState, useMemo } from 'react';
import MyContext from './MyContext';
import getCharacter from '../services/axiosApi';

function AppProvider({children}) {
    const [character, setCharacter] = useState([]);
    
    const fetchCharacter = async (name) => {
        const response = await getCharacter(name);
        setCharacter(response);
    };
    const contextValue = useMemo(
        () => ({
            character,
            fetchCharacter
        }),[character]
    )
    return (
        <MyContext.Provider value={contextValue}>
            {children}
        </MyContext.Provider>
    );
}

export default AppProvider;