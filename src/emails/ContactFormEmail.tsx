import * as React from 'react';

interface ContactFormEmailProps {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const ContactFormEmail: React.FC<Readonly<ContactFormEmailProps>> = ({
  name,
  email,
  subject,
  message,
}) => (
  <div style={{ fontFamily: 'sans-serif', color: '#333', lineHeight: '1.5', padding: '20px', backgroundColor: '#fffaf5' }}>
    <div style={{ maxWidth: '600px', margin: '0 auto', border: '1px solid #ffe8cc', borderRadius: '16px', padding: '30px', backgroundColor: '#ffffff' }}>
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <img
          src="https://learnsup.com/logo/logo.png"
          alt="LearnSup Logo"
          style={{ width: '150px', height: 'auto' }}
        />
      </div>

      <h2 style={{ color: '#FFB647', marginTop: 0, textAlign: 'center' }}>Nouveau message de contact</h2>
      <hr style={{ border: 'none', borderTop: '1px solid #eee', marginBottom: '20px' }} />

      <p style={{ margin: '10px 0' }}><strong>De :</strong> {name} ({email})</p>
      <p style={{ margin: '10px 0' }}><strong>Objet :</strong> {subject}</p>

      <div style={{ backgroundColor: '#fffaf5', padding: '20px', borderRadius: '12px', marginTop: '20px', borderLeft: '4px solid #FFB647' }}>
        <p style={{ margin: 0, whiteSpace: 'pre-wrap', color: '#555' }}>{message}</p>
      </div>

      <p style={{ fontSize: '12px', color: '#999', marginTop: '30px', textAlign: 'center' }}>
        Envoyé depuis le formulaire de contact LearnSup.
      </p>
    </div>
  </div>
);
