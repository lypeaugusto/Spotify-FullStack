import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header.jsx';
import Home from './pages/HomeTEMP.jsx';
import Artists from './pages/ArtistsTEMP.jsx';
import Artist from './pages/ArtistTEMP.jsx';
import Songs from './pages/SongsTEMP.jsx';
import Song from './pages/SongTEMP.jsx';


const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/artists" element={<Artists />} />
        <Route path="/artist/:id" element={<Artist />} />
        <Route path="/songs" element={<Songs />} />
        <Route path="/song/:id" element={<Song />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;