import React from 'react';

function ICLLogo() {
  return (
    <svg viewBox="0 0 120 60" className="partner-logo" xmlns="http://www.w3.org/2000/svg">
      <text x="10" y="30" fontFamily="Arial Black, sans-serif" fontSize="24" fontWeight="900" fill="#d62828">ICL</text>
      <text x="10" y="48" fontFamily="Arial, sans-serif" fontSize="8" fill="#333">Services</text>
    </svg>
  );
}

function KatnetLogo() {
  return (
    <svg viewBox="0 0 120 60" className="partner-logo" xmlns="http://www.w3.org/2000/svg">
      <text x="10" y="30" fontFamily="Arial, sans-serif" fontSize="18" fontWeight="700" fill="#00a651">KATNET</text>
      <rect x="10" y="36" width="60" height="3" fill="#00a651" />
    </svg>
  );
}

export default function Partners() {
  const partners = [
    {
      name: 'ICL',
      Logo: ICLLogo,
      description: 'ICL — российская ИТ-компания, специализирующаяся на разработке ПО и предоставлении ИТ-услуг.'
    },
    {
      name: 'KATNET',
      Logo: KatnetLogo,
      description: 'Катнет — один из крупнейших российских операторов связи, предоставляющий услуги доступа в интернет.'
    }
  ];

  return (
    <section className="partners">
      <h2 className="section-title">Партнеры</h2>
      <div className="partners-grid">
        {partners.map((p) => (
          <div className="partner-card" key={p.name}>
            <div className="partner-logo-wrap">
              <p.Logo />
            </div>
            <div className="partner-info">
              <p>{p.description}</p>
              <a href="#!" className="partner-link" aria-label={`Перейти к ${p.name}`}>↗</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
