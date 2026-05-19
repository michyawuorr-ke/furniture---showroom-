import React, { useState } from 'react';

// Elite minimalist palette definitions
const PALETTE = {
  champagne: '#F9F6F0',
  cognac: '#8B4513',
  blushSilk: '#F4E0E2',
  mocha: '#3C2F2F',
  textDark: '#1C1A17'
};

export default function App() {
  const [selectedMaterial, setSelectedMaterial] = useState('Cognac Leather');
  const [activeSpecification, setActiveSpecification] = useState('Dimensions');

  const materials = [
    { name: 'Cognac Leather', hex: PALETTE.cognac, description: 'Hand-selected full-grain aniline hide.' },
    { name: 'Blush Silk', hex: PALETTE.blushSilk, description: 'Premium raw slub silk weave.' },
    { name: 'Mocha Bouclé', hex: PALETTE.mocha, description: 'Heavyweight textured wool blend.' }
  ];

  const specs = {
    Dimensions: 'W: 84cm × D: 88cm × H: 76cm',
    Origin: 'Handcrafted in Milan, Italy',
    Delivery: 'White-glove courier delivery in 6-8 weeks'
  };

  const handleVIPInquiry = () => {
    const text = encodeURIComponent(`Hello VIP Concierge, I would like to schedule a private commissioning consultation for The Aura Lounge Chair in ${selectedMaterial}.`);
    window.open(`https://wa.me/254700000000?text=${text}`, '_blank');
  };

  return (
    <div style={{
      backgroundColor: PALETTE.champagne,
      color: PALETTE.textDark,
      fontFamily: 'system-ui, -apple-system, sans-serif',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding: '24px',
      boxSizing: 'border-box',
      overflowX: 'hidden'
    }}>
      {/* Top Section: Brand Header & Museum-Grade Negative Space */}
      <header style={{ textAlign: 'center', marginTop: '20px' }}>
        <p style={{ letterSpacing: '0.3em', textTransform: 'uppercase', fontSize: '11px', margin: '0 0 8px 0', opacity: 0.6 }}>
          Sovereign Living
        </p>
        <h1 style={{ fontWeight: '300', fontSize: '28px', margin: '0', letterSpacing: '-0.02em' }}>
          The Aura Lounge Chair
        </h1>
      </header>

      {/* Center Section: Visual Focal Point Representation */}
      <main style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', flexGrow: 1, margin: '20px 0' }}>
        <div style={{
          width: '180px',
          height: '180px',
          borderRadius: '50%',
          backgroundColor: materials.find(m => m.name === selectedMaterial).hex,
          boxShadow: '0 20px 40px rgba(0,0,0,0.06)',
          transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
        }} />
        <p style={{ fontSize: '13px', marginTop: '32px', fontStyle: 'italic', opacity: 0.8, textAlign: 'center', height: '20px' }}>
          {materials.find(m => m.name === selectedMaterial).description}
        </p>
      </main>

      {/* Bottom Section: Strict 40% Thumb Zone Controls */}
      <footer style={{ display: 'flex', flexDirection: 'column', gap: '24px', paddingBottom: '10px' }}>
        
        {/* Material Swatches */}
        <div>
          <p style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '12px', opacity: 0.5 }}>
            Material / {selectedMaterial}
          </p>
          <div style={{ display: 'flex', gap: '16px' }}>
            {materials.map((m) => (
              <button
                key={m.name}
                onClick={() => setSelectedMaterial(m.name)}
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  backgroundColor: m.hex,
                  border: selectedMaterial === m.name ? `2px solid ${PALETTE.textDark}` : '2px solid transparent',
                  cursor: 'pointer',
                  padding: '0',
                  boxShadow: 'inset 0 0 0 2px #F9F6F0',
                  transition: 'transform 0.2s ease'
                }}
              />
            ))}
          </div>
        </div>

        {/* Architectural Specifications Bar */}
        <div style={{ backgroundColor: 'rgba(0,0,0,0.02)', padding: '16px', borderRadius: '8px' }}>
          <div style={{ display: 'flex', gap: '20px', marginBottom: '8px' }}>
            {Object.keys(specs).map((key) => (
              <button
                key={key}
                onClick={() => setActiveSpecification(key)}
                style={{
                  background: 'none',
                  border: 'none',
                  padding: '0 0 4px 0',
                  fontSize: '12px',
                  fontWeight: activeSpecification === key ? '600' : '400',
                  borderBottom: activeSpecification === key ? `1px solid ${PALETTE.textDark}` : '1px solid transparent',
                  color: activeSpecification === key ? PALETTE.textDark : 'rgba(0,0,0,0.4)',
                  cursor: 'pointer'
                }}
              >
                {key}
              </button>
            ))}
          </div>
          <p style={{ fontSize: '13px', margin: '4px 0 0 0', lineHeight: '1.5', opacity: 0.9 }}>
            {specs[activeSpecification]}
          </p>
        </div>

        {/* VIP Inquiry Action Button */}
        <button
          onClick={handleVIPInquiry}
          style={{
            backgroundColor: PALETTE.textDark,
            color: PALETTE.champagne,
            border: 'none',
            padding: '18px',
            borderRadius: '4px',
            fontSize: '13px',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            fontWeight: '500',
            cursor: 'pointer',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
          }}
        >
          Request Private Commission
        </button>
      </footer>
    </div>
  );
}
