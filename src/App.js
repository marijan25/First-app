import React from 'react';
import "./App.css"
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppBar from './components/AppBar';
import Tour from './pages/Tour';

function App() {
  return (
    <BrowserRouter>
      
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<Tour />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
