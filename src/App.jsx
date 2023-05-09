import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import HomePage from './pages/HomePage/HomePage';
import TimerPage from './pages/TimerPage/TimerPage';
import ResponsivePage from './pages/ResponsivePage/ResponsivePage';

import './App.css';

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/test-task-1" element={<TimerPage />} />
          <Route path="/test-task-2" element={<ResponsivePage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
