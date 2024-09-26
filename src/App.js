import React from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './pages/about';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/about" element={<About />} />
    </Routes>
    </Router>
  );
}

export default App;
