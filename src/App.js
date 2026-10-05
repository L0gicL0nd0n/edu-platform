import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Partners from './components/Partners';
import Lecturers from './components/Lecturers';

export default function App() {
  const [page, setPage] = useState('Главная');
  return (
    <div className="app">
      <Header currentPage={page} setPage={setPage} />
      {page === 'Главная' && (<><Hero /><About /><Partners /><Lecturers /></>)}
      {page === 'Партнеры' && <Partners />}
      {page === 'О нас' && <About />}
      {page === 'Лекторы' && <Lecturers />}
    </div>
  );
}
