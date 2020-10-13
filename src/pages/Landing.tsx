import React from 'react';
import { FiArrowRight } from 'react-icons/fi';

import '../styles/global.css';
import '../styles/pages/landing.css';
import LogoImg from '../images/Logo.svg';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div id='page-landing'>
      <div className='content-wrapper'>
        <img src={LogoImg} alt='Happy' />

        <main>
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças.</p>
          <input type='checkbox' id='btn' />

          <div className='location'>
            <strong>Salvador</strong>
            <span>Bahia</span>
          </div>

          <Link to='/app' className='enter-app'>
            <FiArrowRight size={26} color='rgba(0, 0, 0, 0.6)' />
          </Link>
        </main>
      </div>
    </div>
  );
};

export default Landing;
