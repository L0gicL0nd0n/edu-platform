import React, { useState, memo } from 'react';

function PhotoPlaceholder({ name }) {
  const initials = name.split(' ').slice(0, 2).map((w) => w[0]).join('');
  return (
    <svg viewBox="0 0 90 110" className="lecturer-photo-svg" xmlns="http://www.w3.org/2000/svg">
      <rect width="90" height="110" fill="#f0f2f5" />
      <circle cx="45" cy="42" r="18" fill="#b8c4d1" />
      <path d="M 15 105 Q 45 68 75 105 Z" fill="#b8c4d1" />
      <text x="45" y="100" textAnchor="middle" fontFamily="Arial" fontSize="10" fill="#7a8a9c">{initials}</text>
    </svg>
  );
}

function LecturerCard({ lecturer }) {
  const [open, setOpen] = useState(false);
  const [imgFailed, setImgFailed] = useState(false);
  const useRealPhoto = lecturer.photo && !imgFailed;

  return (
    <div className="lecturer-card">
      <div className="lecturer-photo">
        {useRealPhoto ? (
          <img
            src={lecturer.photo}
            alt={lecturer.name}
            loading="lazy"
            onError={() => setImgFailed(true)}
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
        ) : (
          <PhotoPlaceholder name={lecturer.name} />
        )}
      </div>
      <div className="lecturer-info">
        <h3>{lecturer.name}</h3>
        <p><strong>Образование:</strong> {lecturer.education}</p>
        <p><strong>Стаж:</strong> {lecturer.experience}</p>
        <p><strong>Учёная степень:</strong> {lecturer.degree}</p>
        <button className="toggle-btn" onClick={() => setOpen(!open)}>
          {open ? 'Скрыть детали' : 'Подробнее'}
        </button>
        {open && (
          <div className="lecturer-details">
            <h4>Преподаваемые дисциплины:</h4>
            {lecturer.disciplines.map((d) => (
              <div key={d.title} className="discipline">
                <h5>{d.title}</h5>
                <ul>{d.topics.map((t, i) => <li key={i}>{t}</li>)}</ul>
              </div>
            ))}
            <h4>Тарифы:</h4>
            <ul className="tariffs">
              {lecturer.tariffs.map((t) => (
                <li key={t.label}>{t.label}: <strong>{t.price}</strong></li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default memo(LecturerCard);
