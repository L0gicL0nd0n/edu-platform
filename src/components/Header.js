import React from 'react';

export default function Header({ currentPage, setPage }) {
  const links = ['Главная', 'Партнеры', 'О нас', 'Лекторы'];
  return (
    <header className="header">
      <nav className="nav">
        {links.map((link) => (
          <button
            key={link}
            className={`nav-link ${currentPage === link ? 'active' : ''}`}
            onClick={() => setPage(link)}
          >
            {link}
          </button>
        ))}
      </nav>
    </header>
  );
}
