// RoutesApp.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CentralPedidos from './pages/CentralPedidos';
import Header from './pages/Header';

function RoutesApp() {
  return (
    <BrowserRouter>
      {/* Renderize o componente Header fora das rotas */}
      
      <Routes>
        <Route path="/1" element={<Header />} />
        <Route path="/2" element={<Header />} />
        <Route path="/3" element={<Header />} />
        <Route path="/4" element={<Header />} />
        <Route path="/5" element={<Header />} />
        <Route path="/6" element={<Header />} />
        <Route path="/7" element={<Header />} />
        <Route path="/8" element={<Header />} />
        <Route path="/9" element={<Header />} />
        <Route path="/10" element={<Header />} />
        <Route path="/11" element={<Header />} />
        <Route path="/12" element={<Header />} />
        <Route path="/13" element={<Header />} />
        <Route path="/14" element={<Header />} />
        <Route path="/15" element={<Header />} />
        <Route path="/admin" element={<CentralPedidos />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;
