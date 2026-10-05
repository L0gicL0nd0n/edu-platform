import React from 'react';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-top-banner">
        <span className="banner-icon">A</span>
        <p>Более 500 студентов уже учатся с нами. Найди своего лектора сегодня!</p>
        <button className="banner-btn">Подобрать курс</button>
      </div>

      <div className="hero-content">
        <div className="hero-image">
          <img
            src="https://source.unsplash.com/800x600/?classroom,lecture"
            alt="Лекция"
            className="hero-img"
            onError={(e) => {
              // fallback if Unsplash is down
              e.currentTarget.style.display = 'none';
              e.currentTarget.parentElement.classList.add('hero-fallback');
            }}
          />
        </div>

        <div className="hero-text">
          <h2>Наши лекторы — признанные специалисты в своих областях, готовые делиться опытом и знаниями.</h2>
        </div>

        <div className="floating-a"><span>A</span></div>
      </div>
    </section>
  );
}
