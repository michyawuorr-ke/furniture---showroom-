
import React, { useState } from 'react';clear


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
import React, { useState } from 'react';

// Unified Premium Palette
const PALETTE = {
  champagne: '#F9F6F0',
  cognac: '#8B4513',
  blushSilk: '#F4E0E2',
  mocha: '#3C2F2F',
  charcoal: '#2A363B',
  olive: '#4F5D4E',
  textDark: '#1C1A17'
};

// Expanded Product Dataset
const COLLECTION = [
  {
    id: 'aura',
    name: 'The Aura Lounge Chair',
    tagline: 'Sovereign Comfort',
    baseDescription: 'An architectural silhouette engineered for absolute physical presence.',
    materials: [
      { name: 'Cognac Leather', hex: PALETTE.cognac, desc: 'Hand-selected full-grain aniline hide.' },
      { name: 'Blush Silk', hex: PALETTE.blushSilk, desc: 'Premium raw slub silk weave.' },
      { name: 'Mocha Bouclé', hex: PALETTE.mocha, desc: 'Heavyweight textured wool blend.' }
    ],
    specs: {
      Dimensions: 'W: 84cm × D: 88cm × H: 76cm',
      Origin: 'Handcrafted in Milan, Italy',
      Delivery: 'Complimentary white-glove setup in 6-8 weeks'
    }
  },
  {
    id: 'monolith',
    name: 'The Monolith Dining Table',
    tagline: 'Architectural Mass',
    baseDescription: 'Carved from a single block of raw Travertine marble, balanced on dual pillars.',
    materials: [
      { name: 'Travertine Solid', hex: '#EAE6DF', desc: 'Honed raw Italian limestone with natural veining.' },
      { name: 'Ebonized Oak', hex: '#1F1F1F', desc: 'Fumed open-grain solid European oak.' }
    ],
    specs: {
      Dimensions: 'L: 240cm × W: 100cm × H: 75cm',
      Origin: 'Quarried and finished in Tuscany',
      Delivery: 'Specialized structural freight installation required'
    }
  },
  {
    id: 'stratum',
    name: 'The Stratum Credenza',
    tagline: 'Linear Precision',
    baseDescription: 'Low-slung architectural storage featuring seamless compound miter edges.',
    materials: [
      { name: 'Smoked Walnut', hex: '#4A3B32', desc: 'Deep oil-finished walnut crown cuts.' },
      { name: 'Brushed Bronze', hex: '#A38A5E', desc: 'Hand-patinated architectural bronze panelling.' }
    ],
    specs: {
      Dimensions: 'W: 180cm × D: 45cm × H: 65cm',
      Origin: 'Assembled in Copenhagen, Denmark',
      Delivery: 'White-glove delivery in 4-6 weeks'
    }
  }
];

export default function App() {
  const [currentView, setCurrentView] = useState('home'); // home | collection | atelier
  const [selectedProduct, setSelectedProduct] = useState(COLLECTION[0]);
  const [selectedMaterial, setSelectedMaterial] = useState(COLLECTION[0].materials[0]);
  const [activeSpec, setActiveSpec] = useState('Dimensions');

  const navigateToProduct = (product) => {
    setSelectedProduct(product);
    setSelectedMaterial(product.materials[0]);
    setActiveSpec('Dimensions');
    setCurrentView('collection');
  };

  const handleVIPInquiry = () => {
    const text = encodeURIComponent(`Hello VIP Concierge, I am interested in scheduling a private commissioning consultation for ${selectedProduct.name} in ${selectedMaterial.name}.`);
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
      boxSizing: 'border-box'
    }}>
      
      {/* Top Sticky Navigation — Pure Minimalist Typography */}
      <nav style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '24px 20px',
        borderBottom: '1px solid rgba(0,0,0,0.04)',
        position: 'sticky',
        top: 0,
        backgroundColor: PALETTE.champagne,
        zIndex: 10
      }}>
        <span 
          onClick={() => setCurrentView('home')} 
          style={{ letterSpacing: '0.25em', textTransform: 'uppercase', fontSize: '12px', fontWeight: '600', cursor: 'pointer' }}
        >
          SOVEREIGN
        </span>
        <div style={{ display: 'flex', gap: '20px' }}>
          <button 
            onClick={() => setCurrentView('home')} 
            style={{ background: 'none', border: 'none', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: currentView === 'home' ? '600' : '400', opacity: currentView === 'home' ? 1 : 0.5, cursor: 'pointer' }}
          >
            Home
          </button>
          <button 
            onClick={() => setCurrentView('atelier')} 
            style={{ background: 'none', border: 'none', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: currentView === 'atelier' ? '600' : '400', opacity: currentView === 'atelier' ? 1 : 0.5, cursor: 'pointer' }}
          >
            Atelier
          </button>
        </div>
      </nav>

      {/* Main Content Router */}
      <main style={{ flexGrow: 1, padding: '24px 20px', display: 'flex', flexDirection: 'column' }}>
        
        {/* VIEW 1: HOME EDITORIAL */}
        {currentView === 'home' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '40px', animation: 'fadeIn 0.4s ease' }}>
            <div style={{ marginTop: '20px' }}>
              <p style={{ textTransform: 'uppercase', fontSize: '10px', letterSpacing: '0.2em', opacity: 0.5, marginBottom: '6px' }}>Collection N°01</p>
              <h2 style={{ fontSize: '36px', fontWeight: '300', margin: '0 0 16px 0', letterSpacing: '-0.03em', lineHeight: '1.1' }}>
                Architectural Statements For Private Spaces.
              </h2>
              <p style={{ fontSize: '14px', lineHeight: '1.6', opacity: 0.7, margin: '0', maxWidth: '400px' }}>
                Rejecting temporal digital trends for permanent material excellence. Handcrafted pieces built using raw mass, continuous grain structures, and museum-grade finishes.
              </p>
            </div>

            {/* Curated Borderless Catalog Grid */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginBottom: '20px' }}>
              <p style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.15em', opacity: 0.4, marginBottom: '-8px' }}>Select Masterpiece</p>
              {COLLECTION.map((product) => (
                <div 
                  key={product.id}
                  onClick={() => navigateToProduct(product)}
                  style={{
                    backgroundColor: 'rgba(0,0,0,0.015)',
                    padding: '24px',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    transition: 'transform 0.2s ease',
                    border: '1px solid rgba(0,0,0,0.02)'
                  }}
                >
                  <div style={{ paddingRight: '12px' }}>
                    <h3 style={{ fontSize: '18px', fontWeight: '400', margin: '0 0 4px 0' }}>{product.name}</h3>
                    <p style={{ fontSize: '12px', opacity: 0.5, margin: '0', fontStyle: 'italic' }}>{product.tagline}</p>
                  </div>
                  {/* Miniature Visual Indicator representing primary finish */}
                  <div style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    backgroundColor: product.materials[0].hex,
                    flexShrink: 0,
                    boxShadow: '0 4px 10px rgba(0,0,0,0.04)'
                  }} />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* VIEW 2: THE INTERACTIVE SHOWROOM COMPONENT */}
        {currentView === 'collection' && (
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', flexGrow: 1, animation: 'fadeIn 0.4s ease' }}>
            <div style={{ textAlign: 'center', marginTop: '10px' }}>
              <span onClick={() => setCurrentView('home')} style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.5, cursor: 'pointer' }}>
                ← Return to Gallery
              </span>
              <h2 style={{ fontWeight: '300', fontSize: '26px', margin: '12px 0 4px 0', letterSpacing: '-0.02em' }}>
                {selectedProduct.name}
              </h2>
              <p style={{ fontSize: '12px', opacity: 0.5, margin: '0 0 20px 0', letterSpacing: '0.05em' }}>{selectedProduct.tagline}</p>
            </div>

            {/* Active Morphing Color Circle Panel */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', flexGrow: 1, margin: '10px 0' }}>
              <div style={{
                width: '170px',
                height: '170px',
                borderRadius: '50%',
                backgroundColor: selectedMaterial.hex,
                boxShadow: '0 24px 48px rgba(0,0,0,0.08)',
                transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
              }} />
              <p style={{ fontSize: '13px', marginTop: '28px', fontStyle: 'italic', opacity: 0.8, textAlign: 'center', height: '36px', maxWidth: '280px', lineHeight: '1.4' }}>
                {selectedMaterial.desc}
              </p>
            </div>

            {/* Sticky Lower 40% Thumb Ergonomics Zone */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginTop: 'auto' }}>
              
              {/* Contextual Material Swatches */}
              <div>
                <p style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '10px', opacity: 0.5 }}>
                  Finish / {selectedMaterial.name}
                </p>
                <div style={{ display: 'flex', gap: '14px' }}>
                  {selectedProduct.materials.map((m) => (
                    <button
                      key={m.name}
                      onClick={() => setSelectedMaterial(m)}
                      style={{
                        width: '30px',
                        height: '30px',
                        borderRadius: '50%',
                        backgroundColor: m.hex,
                        border: selectedMaterial.name === m.name ? `2px solid ${PALETTE.textDark}` : '2px solid transparent',
                        cursor: 'pointer',
                        padding: '0',
                        boxShadow: 'inset 0 0 0 2px #F9F6F0',
                        transition: 'transform 0.2s ease'
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Specification Toggles */}
              <div style={{ backgroundColor: 'rgba(0,0,0,0.02)', padding: '14px', borderRadius: '6px' }}>
                <div style={{ display: 'flex', gap: '16px', marginBottom: '8px' }}>
                  {Object.keys(selectedProduct.specs).map((key) => (
                    <button
                      key={key}
                      onClick={() => setActiveSpec(key)}
                      style={{
                        background: 'none',
                        border: 'none',
                        padding: '0 0 2px 0',
                        fontSize: '11px',
                        fontWeight: activeSpec === key ? '600' : '400',
                        borderBottom: activeSpec === key ? `1px solid ${PALETTE.textDark}` : '1px solid transparent',
                        color: activeSpec === key ? PALETTE.textDark : 'rgba(0,0,0,0.4)',
                        cursor: 'pointer'
                  }}
                    >
                      {key}
                    </button>
                  ))}
                </div>
                <p style={{ fontSize: '12px', margin: '4px 0 0 0', lineHeight: '1.4', opacity: 0.9 }}>
                  {selectedProduct.specs[activeSpec]}
                </p>
              </div>

              {/* Native WhatsApp Handshake Anchor */}
              <button
                onClick={handleVIPInquiry}
                style={{
                  backgroundColor: PALETTE.textDark,
                  color: PALETTE.champagne,
                  border: 'none',
                  padding: '16px',
                  borderRadius: '3px',
                  fontSize: '12px',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  fontWeight: '500',
                  cursor: 'pointer'
                }}
              >
                Inquire Private Commission
              </button>
            </div>
          </div>
        )}

        {/* VIEW 3: THE ATELIER (HERITAGE STORY) */}
        {currentView === 'atelier' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '28px', marginTop: '20px', animation: 'fadeIn 0.4s ease' }}>
            <div>
              <p style={{ textTransform: 'uppercase', fontSize: '10px', letterSpacing: '0.2em', opacity: 0.5, marginBottom: '6px' }}>Our Values</p>
              <h2 style={{ fontSize: '30px', fontWeight: '300', margin: '0 0 14px 0', letterSpacing: '-0.02em' }}>The Atelier Philosophy</h2>
              <p style={{ fontSize: '14px', lineHeight: '1.6', opacity: 0.7, margin: '0' }}>
                We work exclusively outside the cycles of industrial mass manufacturing. Every order is handled as a singular private commission, cut and joined by master craftsmen to match specific environmental architectural layouts.
              </p>
            </div>
            
            <div style={{ borderTop: '1px solid rgba(0,0,0,0.05)', paddingTop: '24px' }}>
              <h4 style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.15em', margin: '0 0 10px 0', fontWeight: '600' }}>Sovereign Quality Guarantee</h4>
              <p style={{ fontSize: '13px', lineHeight: '1.5', opacity: 0.6, margin: '0' }}>
                Materials are certified and globally sourced directly from sustainable stone quarries and historic Italian textile mills. Each piece receives a unique stamped brass serial plaque registering the collector’s provenance details.
              </p>
            </div>
          </div>
        )}

      </main>

      {/* Global Inline CSS for Animations */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(4px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
