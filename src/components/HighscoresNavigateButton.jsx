import React from "react";
import { useNavigate } from "react-router-dom";

function HighScoresNavigateButton() {
    
    const navigate = useNavigate();
    
    return (
        <button onClick={() => navigate("/highscores")}>Highscores</button>
    )
}

export default HighScoresNavigateButton;