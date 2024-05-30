import React, { useEffect, useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Hello from './Hello';
import Slash from './Slash';
import Home from './Home';

function App() {
  
  return (
    
    <Routes>
      <Route>
        <Route path="/" element={<Slash />} />
        <Route path="hello" element={<Hello />} />
      </Route>
    </Routes>
  );
}

export default App;





