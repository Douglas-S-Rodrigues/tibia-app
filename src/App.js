import './App.css';
import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Characters from './pages/Characters';
import Header from './components/Header';
import Footer from './components/Footer';
import Highscores from './pages/Highscores';


function App() {
  return (
    <section>
      <Header />
      <Routes>
        <Route path="/characters" element={<Characters />} />
        <Route path="/highscores" element={<Highscores key="highscores"/>} />
      </Routes>
      <Footer />
    </section>
  );
}

export default App;
