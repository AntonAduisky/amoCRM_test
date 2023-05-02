import React from 'react';

import { Link } from 'react-router-dom';

import Header from '../../components/Header/Header';
import Main from '../../components/Main/Main';
import Footer from '../../components/Footer/Footer';

import Background from '../../components/Background/Background';

function TestTask2() {
  return (
    <div className="app">
      <Header />
      <Main />
      <Footer />

      <Link
        to="/"
        style={{ outline: '1px solid #656566', color: '#656566', padding: '5px', margin: '5px' }}>
        Главная
      </Link>

      <Background />
    </div>
  );
}

export default TestTask2;
