import React from "react";
import { useNavigate } from "react-router-dom";


function HomeNavigateButton() {
    const navigate = useNavigate();
    return (
        <div>
            <button onClick={() => navigate('/')}>Home</button>
        </div>
    )
}


export default HomeNavigateButton;