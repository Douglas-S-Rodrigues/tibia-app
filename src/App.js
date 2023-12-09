import './App.css';
import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Characters from './pages/Characters';
import Header from './components/Header';
import Footer from './components/Footer';
import Highscores from './pages/Highscores';
import Home from './pages/Home';
import BoostedBossCard from './components/BoostedBossCard';
import BoostedCreatureCard from './components/BosstedCreatureCard';


function App() {
  return (
    <section>
      <Header />
      <BoostedCreatureCard />
      <BoostedBossCard />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/highscores" element={<Highscores />} />
      </Routes>
      <Footer />
    </section>
  );
}

export default App;
