import './App.css';
import React from 'react';
import {Routes, Route} from 'react-router-dom';
import CharacterCard from './components/CharacterCard';

function App() {
  return (
    <section>
      <Routes>
        <Route path="/" element={<CharacterCard />} />
      </Routes>
    </section>
  );
}

export default App;
