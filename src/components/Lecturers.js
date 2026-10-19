import React, { useState, useDeferredValue, useMemo, memo } from 'react';
import { lecturers as baseLecturers } from '../data/lecturers';
import { manyLecturers } from '../data/testLecturers';
import LecturerCard from './LecturerCard';

// true  = 200 test lecturers (to demonstrate useDeferredValue)
// false = original 10 lecturers
const USE_TEST_DATA = true;
const lecturers = USE_TEST_DATA ? manyLecturers : baseLecturers;

// Memoized list: it re-renders only when `items` changes, i.e. only when
// the DEFERRED query changes. Typing in the input does not touch it.
const LecturerList = memo(function LecturerList({ items }) {
  if (items.length === 0) {
    return <p className="lecturers-empty">Лекторы не найдены. Измените запрос или фильтр.</p>;
  }
  return (
    <>
      {items.map((l) => (
        <LecturerCard key={l.id} lecturer={l} />
      ))}
    </>
  );
});

function matches(lecturer, q) {
  if (!q) return true;
  const haystack = [
    lecturer.name,
    lecturer.education,
    ...lecturer.disciplines.map((d) => d.title),
  ]
    .join(' ')
    .toLowerCase();
  return haystack.includes(q);
}

export default function Lecturers() {
  const [filter, setFilter] = useState('Все');
  const [query, setQuery] = useState('');

  // Input uses `query` (urgent). The list uses `deferredQuery` (can lag behind).
  const deferredQuery = useDeferredValue(query);
  const isStale = query !== deferredQuery;

  const filtered = useMemo(() => {
    const q = deferredQuery.trim().toLowerCase();
    return lecturers.filter(
      (l) => (filter === 'Все' || l.gender === filter) && matches(l, q)
    );
  }, [deferredQuery, filter]);

  return (
    <section className="lecturers">
      <h2 className="section-title">Лекторы</h2>

      <div className="search-bar">
        <input
          type="search"
          className="search-input"
          placeholder="Поиск по имени, образованию, дисциплине"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          aria-label="Поиск лекторов"
        />
        <span className="search-status" role="status" aria-live="polite">
          {isStale ? 'Обновление результатов…' : `Найдено: ${filtered.length}`}
        </span>
      </div>

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

      <div className={`lecturers-grid ${isStale ? 'lecturers-grid--stale' : ''}`}>
        <LecturerList items={filtered} />
      </div>
    </section>
  );
}
