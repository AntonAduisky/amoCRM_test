import React from 'react';
import { Link } from 'react-router-dom';

import Background from '../../components/Background/Background';

import './HomePage.scss';

function HomePage() {
  return (
    <div className="home-page">
      <Link to="/test-task-1" className="button">
        Перейти к тестовому заданию 1
      </Link>
      <Link to="/test-task-2" className="button">
        Перейти к тестовому заданию 2
      </Link>

      <Background />
    </div>
  );
}

export default HomePage;
