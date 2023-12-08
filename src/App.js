import './App.css';
import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Characters from './pages/Characters';


function App() {
  return (
    <section>
      <Routes>
        <Route path="/" element={<Characters />} />
      </Routes>
    </section>
  );
}

export default App;
