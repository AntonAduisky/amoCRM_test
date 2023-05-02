import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import HomePage from './pages/HomePage/HomePage';
import TestTask1 from './pages/TestTask1/TestTask1';
import TestTask2 from './pages/TestTask2/TestTask2';

import './App.css';

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/test-task-1" element={<TestTask1 />} />
          <Route path="/test-task-2" element={<TestTask2 />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
