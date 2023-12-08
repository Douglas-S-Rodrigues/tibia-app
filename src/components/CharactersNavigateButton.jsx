import React from "react";
import { useNavigate } from "react-router-dom";

function CharactersNavigateButton() {

    const navigate = useNavigate();
    
    return (
        <button onClick={() => navigate("/characters")}>Characters</button>
    )
}


export default CharactersNavigateButton;