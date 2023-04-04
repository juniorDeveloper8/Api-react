import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Lista from './components/Lista';
import Filtro from './hooks/Filtro';


function App() {

  return (
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='list' element={<Lista />} />
        <Route path='rol' element={<Filtro />} />
      </Routes>
  )
}
export default App;