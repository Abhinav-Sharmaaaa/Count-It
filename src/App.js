import React from 'react';

import { Routes, Route } from 'react-router-dom';
import About from './pages/about';

function App() {
  return (
    <Routes>
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;
