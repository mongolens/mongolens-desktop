import React from 'react';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Blank from './views/Blank';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Blank />} />
      </Routes>
    </Router>
  );
};

export default App;
