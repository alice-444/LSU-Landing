import * as React from 'react';

export const NewsletterWelcomeEmail: React.FC = () => (
  <div style={{
    fontFamily: 'sans-serif',
    backgroundColor: '#fffaf5',
    padding: '40px 20px',
    textAlign: 'center'
  }}>
    <div style={{
      maxWidth: '600px',
      margin: '0 auto',
      backgroundColor: '#ffffff',
      borderRadius: '20px',
      padding: '40px',
      border: '1px solid #ffe8cc'
    }}>
      <div style={{ marginBottom: '30px' }}>
        <img
          src="https://learnsup.fr/logo/logo.png"
          alt="LearnSup Logo"
          style={{ width: '180px', height: 'auto' }}
        />
      </div>

      <h1 style={{ color: '#FFB647', margin: '0 0 20px 0', fontSize: '28px' }}>
        Bienvenue chez LearnSup !
      </h1>

      <p style={{ fontSize: '18px', color: '#555', lineHeight: '1.6', margin: '0 0 30px 0' }}>
        Merci de vous être inscrit à notre newsletter. <br />
        Nous avons hâte de partager avec vous nos actualités et nos conseils éducatifs.
      </p>

      <a
        href="https://learnsup.fr"
        style={{
          display: 'inline-block',
          backgroundColor: '#FFB647',
          color: '#ffffff',
          padding: '14px 30px',
          borderRadius: '50px',
          textDecoration: 'none',
          fontWeight: 'bold',
          fontSize: '16px'
        }}
      >
        Découvrir LearnSup
      </a>

      <p style={{ fontSize: '14px', color: '#999', marginTop: '40px' }}>
        À très vite,<br />
        L'équipe LearnSup
      </p>
    </div>
  </div>
);
