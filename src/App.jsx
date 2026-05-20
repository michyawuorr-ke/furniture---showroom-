import React, { useState } from 'react';

const COLORS = {
  bgLight: '#F9FAFB',
  cardBg: '#FFFFFF',
  textDark: '#1F2937',
  textMuted: '#4B5563',
  primaryBlue: '#2563EB',
  borderLight: '#E5E7EB',
  priceTag: '#059669'
};

export default function App() {
  return (
    <div style={{ backgroundColor: COLORS.bgLight, minHeight: '100vh', padding: '20px', fontFamily: 'sans-serif' }}>
      <div style={{ backgroundColor: COLORS.cardBg, borderRadius: '8px', padding: '24px', maxWidth: '400px', margin: '0 auto', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', border: `1px solid ${COLORS.borderLight}` }}>
        <h1 style={{ color: COLORS.textDark, fontSize: '24px', marginBottom: '8px' }}>Furniture Showroom</h1>
        <p style={{ color: COLORS.textMuted, fontSize: '14px' }}>Welcome to the updated catalog view.</p>
      </div>
    </div>
  );
}
