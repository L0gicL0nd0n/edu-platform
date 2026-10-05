import React, { useState } from 'react';
import { lecturers } from '../data/lecturers';
import LecturerCard from './LecturerCard';

export default function Lecturers() {
  const [filter, setFilter] = useState('Все');
  const filtered = lecturers.filter((l) => filter === 'Все' || l.gender === filter);
  return (
    <section className="lecturers">
      <h2 className="section-title">Лекторы</h2>
      <div className="filter-bar">
        {['Все', 'Мужчина', 'Женщина'].map((f) => (
          <button
            key={f}
            className={`filter-btn ${filter === f ? 'active' : ''}`}
            onClick={() => setFilter(f)}
          >
            {f === 'Мужчина' ? 'Мужчины' : f === 'Женщина' ? 'Женщины' : 'Все'}
          </button>
        ))}
      </div>
      <div className="lecturers-grid">
        {filtered.map((l) => <LecturerCard key={l.id} lecturer={l} />)}
      </div>
    </section>
  );
}
