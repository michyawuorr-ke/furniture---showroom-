import React, { useState } from 'react';

// Elite Architectural Palette
const PALETTE = {
  champagne: '#F9F6F0',
  warmBone: '#F0EAE1',
  textDark: '#1C1A17',
  accentCognac: '#8B4513',
  sidebarBg: '#F3EFE7'
};

// Data Model 1: Individual Goods Product Matrix
const GOODS = [
  {
    id: 'g1',
    name: 'The Aura Lounge Chair',
    price: '$4,200',
    category: 'Seating',
    dimensions: 'W: 84cm × D: 88cm × H: 76cm',
    materials: 'Aniline Hide / Raw Silk / Bouclé',
    description: 'Sculpted low-profile timber frame engineered to command spatial presence.'
  },
  {
    id: 'g2',
    name: 'The Monolith Dining Table',
    price: '$8,800',
    category: 'Surfaces',
    dimensions: 'L: 240cm × W: 100cm × H: 75cm',
    materials: 'Travertine Limestone / Ebonized Oak',
    description: 'Honed organic marble mass supported by twin heavy architectural slab pillars.'
  },
  {
    id: 'g3',
    name: 'The Stratum Credenza',
    price: '$6,500',
    category: 'Casegoods',
    dimensions: 'W: 180cm × D: 45cm × H: 65cm',
    materials: 'Smoked Walnut / Hand-Patinated Bronze',
    description: 'Low-slung linear storage featuring seamless compound miter edges.'
  }
];

// Data Model 2: Curated Furniture Setups
const CURATED_ROOMS = [
  {
    id: 'r1',
    title: 'The Architectural Living Suite',
    price: '$14,500 Full Concept Package',
    components: 'Includes: 2× Aura Lounge Chairs, 1× Stratum Credenza, 1× Slate Low-Table',
    spatialPhilosophy: 'A study in low horizons and geometric stillness. The pieces are weighted to lock the room into a deep, gallery-adjacent calmness.'
  },
  {
    id: 'r2',
    title: 'The Atelier Pavilion Dining Setup',
    price: '$12,800 Full Concept Package',
    components: 'Includes: 1× Monolith Dining Table, 6× Tapered Minimalist Chairs',
    spatialPhilosophy: 'Raw masonry masses balanced against light, flowing textile lines. Formulated to perfectly anchor open-floor interior architectural scales.'
  }
];

export default function App() {
  const [activePage, setActivePage] = useState('home'); // home | goods | rooms | about | location
  const [menuOpen, setMenuOpen] = useState(false);

  const switchPage = (pageName) => {
    setActivePage(pageName);
    setMenuOpen(false); // Close menu seamlessly on selection
  };

  return (
    <div style={{
      backgroundColor: PALETTE.champagne,
      color: PALETTE.textDark,
      fontFamily: 'system-ui, -apple-system, sans-serif',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      boxSizing: 'border-box',
      position: 'relative',
      overflowX: 'hidden'
    }}>

      {/* --- PREMIUM STICKY TOP NAVIGATION BAR --- */}
      <nav style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '20px',
        borderBottom: '1px solid rgba(0,0,0,0.04)',
        position: 'sticky',
        top: 0,
        backgroundColor: PALETTE.champagne,
        zIndex: 100
      }}>
        {/* Functional Hamburger Menu Trigger Button */}
        <button 
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            flexDirection: 'column',
            gap: '5px',
            padding: '8px 4px',
            zIndex: 110
          }}
        >
          <div style={{ width: '22px', height: '2px', backgroundColor: PALETTE.textDark, transition: '0.3s' }} />
          <div style={{ width: '22px', height: '2px', backgroundColor: PALETTE.textDark, transition: '0.3s' }} />
          <div style={{ width: '16px', height: '2px', backgroundColor: PALETTE.textDark, transition: '0.3s' }} />
        </button>

        <span style={{ letterSpacing: '0.3em', textTransform: 'uppercase', fontSize: '13px', fontWeight: '600' }}>
          SOVEREIGN
        </span>

        <span style={{ fontSize: '10px', textTransform: 'uppercase', opacity: 0.4, letterSpacing: '0.1em' }}>
          Studio
        </span>
      </nav>

      {/* --- SLIDE-OUT HAMBURGER MENU OVERLAY --- */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '280px',
        height: '100vh',
        backgroundColor: PALETTE.sidebarBg,
        boxShadow: menuOpen ? '0 0 40px rgba(0,0,0,0.15)' : 'none',
        transform: menuOpen ? 'translateX(0)' : 'translateX(-100%)',
        transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        zIndex: 200,
        padding: '40px 24px',
        display: 'flex',
        flexDirection: 'column',
        boxSizing: 'border-box'
      }}>
        {/* Close Button Inside Menu */}
        <button 
          onClick={() => setMenuOpen(false)}
          style={{
            alignSelf: 'flex-end',
            background: 'none',
            border: 'none',
            fontSize: '20px',
            cursor: 'pointer',
            opacity: 0.6,
            marginBottom: '40px'
          }}
        >
          ✕
        </button>

        {/* Navigation Links List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
          {[
            { id: 'home', label: 'Home Entrance' },
            { id: 'goods', label: 'Our Goods Selection' },
            { id: 'rooms', label: 'Curated Room Vignettes' },
            { id: 'about', label: 'The Atelier Story' },
            { id: 'location', label: 'Location & Hours' }
          ].map((link) => (
            <button
              key={link.id}
              onClick={() => switchPage(link.id)}
              style={{
                background: 'none',
                border: 'none',
                textAlign: 'left',
                fontSize: '15px',
                textTransform: 'uppercase',
                letterSpacing: '0.15em',
                color: PALETTE.textDark,
                fontWeight: activePage === link.id ? '600' : '300',
                opacity: activePage === link.id ? 1 : 0.6,
                cursor: 'pointer',
                padding: '4px 0',
                borderLeft: activePage === link.id ? `2px solid ${PALETTE.accentCognac}` : '2px solid transparent',
                paddingLeft: activePage === link.id ? '12px' : '0',
                transition: 'all 0.2s ease'
              }}
            >
              {link.label}
            </button>
          ))}
        </div>
      </div>

      {/* Dim Background Overlay when menu is active */}
      {menuOpen && (
        <div 
          onClick={() => setMenuOpen(false)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0,0,0,0.2)',
            zIndex: 150,
            animation: 'fadeIn 0.3s ease'
          }}
        />
      )}

      {/* --- CORE CONTENT ROUTER DISPLAY PANELS --- */}
      <main style={{ flexGrow: 1, padding: '24px 20px', display: 'flex', flexDirection: 'column' }}>

        {/* PANEL 1: HOME PAGE ENTRY */}
        {activePage === 'home' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '40px', margin: 'auto 0', animation: 'slideUp 0.5s ease' }}>
            <div style={{ textAlign: 'center' }}>
              <p style={{ textTransform: 'uppercase', fontSize: '10px', letterSpacing: '0.25em', opacity: 0.5, marginBottom: '8px' }}> BATCH N°01 </p>
              <h1 style={{ fontSize: '38px', fontWeight: '300', margin: '0 0 16px 0', letterSpacing: '-0.03em', lineHeight: '1.1' }}>
                Permanent Form.<br/>Bespoke Mass.
              </h1>
              <p style={{ fontSize: '14px', lineHeight: '1.6', opacity: 0.7, maxWidth: '340px', margin: '0 auto 24px auto' }}>
                An immersive digital gallery showcasing raw stone profiles, fumed solid oak, and hand-selected Italian aniline hide.
              </p>
              <button 
                onClick={() => setActivePage('goods')}
                style={{
                  backgroundColor: PALETTE.textDark,
                  color: PALETTE.champagne,
                  border: 'none',
                  padding: '16px 28px',
                  borderRadius: '2px',
                  fontSize: '11px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.2em',
                  fontWeight: '500',
                  cursor: 'pointer'
                }}
              >
                Enter Collection
              </button>
            </div>
          </div>
        )}

        {/* PANEL 2: OUR GOODS (PICTURE ARCHETYPES WITH DETAILED PRICES) */}
        {activePage === 'goods' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', animation: 'slideUp 0.5s ease' }}>
            <div>
              <span style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.15em', opacity: 0.5 }}>The Studio Catalog</span>
              <h2 style={{ fontSize: '26px', fontWeight: '300', margin: '4px 0 0 0', letterSpacing: '-0.02em' }}>Bespoke Individual Goods</h2>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {GOODS.map((item) => (
                <div key={item.id} style={{
                  backgroundColor: 'rgba(0,0,0,0.015)',
                  border: '1px solid rgba(0,0,0,0.03)',
                  padding: '24px 20px',
                  borderRadius: '4px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px'
                }}>
                  {/* Item Simulated Visual Canvas Mass */}
                  <div style={{
                    width: '100%',
                    height: '120px',
                    backgroundColor: PALEMENT_BOX_COLOR(item.id),
                    borderRadius: '2px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '11px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    opacity: 0.8
                  }}>
                    [ {item.category} Silhouette Display ]
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginTop: '4px' }}>
                    <h3 style={{ fontSize: '18px', fontWeight: '400', margin: 0 }}>{item.name}</h3>
                    <span style={{ fontSize: '16px', fontWeight: '600', color: PALETTE.accentCognac }}>{item.price}</span>
                  </div>

                  <p style={{ fontSize: '13px', lineHeight: '1.5', opacity: 0.7, margin: 0 }}>{item.description}</p>
                  
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', borderTop: '1px solid rgba(0,0,0,0.04)', paddingTop: '12px', fontSize: '11px', opacity: 0.6 }}>
                    <div><strong>Dimensions:</strong> {item.dimensions}</div>
                    <div><strong>Available Composition:</strong> {item.materials}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* PANEL 3: CURATED ROOM VIGNETTES (FURNITURE SYSTEM PACKAGES) */}
        {activePage === 'rooms' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', animation: 'slideUp 0.5s ease' }}>
            <div>
              <span style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.15em', opacity: 0.5 }}>Spatial Settings</span>
              <h2 style={{ fontSize: '26px', fontWeight: '300', margin: '4px 0 0 0', letterSpacing: '-0.02em' }}>Curated Configurations</h2>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
              {CURATED_ROOMS.map((room) => (
                <div key={room.id} style={{
                  backgroundColor: 'rgba(0,0,0,0.01)',
                  padding: '24px 20px',
                  borderLeft: `2px solid ${PALETTE.textDark}`,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px'
                }}>
                  <h3 style={{ fontSize: '19px', fontWeight: '400', margin: 0 }}>{room.title}</h3>
                  <span style={{ fontSize: '14px', fontWeight: '600', color: PALETTE.accentCognac }}>{room.price}</span>
                  <p style={{ fontSize: '13px', lineHeight: '1.6', opacity: 0.7, margin: 0 }}>{room.spatialPhilosophy}</p>
                  
                  <div style={{
                    backgroundColor: PALETTE.warmBone,
                    padding: '12px',
                    borderRadius: '2px',
                    fontSize: '12px',
                    lineHeight: '1.4',
                    fontWeight: '500'
                  }}>
                    {room.components}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* PANEL 4: ABOUT US (THE ATELIER STORY) */}
        {activePage === 'about' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', animation: 'slideUp 0.5s ease', maxWidth: '460px', margin: '16px auto 0 auto' }}>
            <div>
              <span style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.2em', opacity: 0.5 }}>Heritage Focus</span>
              <h2 style={{ fontSize: '26px', fontWeight: '300', margin: '4px 0 12px 0', letterSpacing: '-0.02em' }}>The Atelier Philosophy</h2>
              <p style={{ fontSize: '14px', lineHeight: '1.7', opacity: 0.7, margin: '0 0 16px 0' }}>
                We operate strictly outside the boundaries of industrial volume manufacturing. Every piece is handled as an independent private commission, handcrafted by master woodworkers and stonemasons to ensure seamless timber lines and raw masonry precision.
              </p>
              <p style={{ fontSize: '14px', lineHeight: '1.7', opacity: 0.7, margin: 0 }}>
                Our signature materials are sourced transparently from certified sustainable Tuscan marble quarries and historic European grain stocks. We individually stamp each piece with a solid brass serialization token to guarantee absolute provenance over time.
              </p>
            </div>
          </div>
        )}

        {/* PANEL 5: LOCATION AND HOURS */}
        {activePage === 'location' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', animation: 'slideUp 0.5s ease', maxWidth: '460px', margin: '16px auto 0 auto' }}>
            <div>
              <span style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.15em', opacity: 0.5 }}>The Studio Vault</span>
              <h2 style={{ fontSize: '26px', fontWeight: '300', margin: '4px 0 0 0', letterSpacing: '-0.02em' }}>Hours & Appointment Private Bookings</h2>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', fontSize: '14px', lineHeight: '1.6' }}>
              <div style={{ backgroundColor: 'rgba(0,0,0,0.015)', padding: '16px', borderRadius: '4px' }}>
                <h4 style={{ margin: '0 0 6px 0', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Studio Atelier Space</h4>
                <p style={{ margin: 0, opacity: 0.7 }}>Block A7, Architectural Design Quarter<br />Nairobi Workspace / Galleria Extension</p>
              </div>

              <div style={{ backgroundColor: 'rgba(0,0,0,0.015)', padding: '16px', borderRadius: '4px' }}>
                <h4 style={{ margin: '0 0 6px 0', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Showroom Access Hours</h4>
                <div style={{ opacity: 0.7 }}>
                  <div>Monday — Friday: 09:00 - 18:00</div>
                  <div>Saturday Sessions: 10:00 - 15:00</div>
                  <div style={{ color: PALETTE.accentCognac, marginTop: '4px', fontWeight: '500' }}>Sundays / Holidays: Closed for Private Material Sourcing</div>
                </div>
              </div>

              <p style={{ fontSize: '12px', opacity: 0.5, fontStyle: 'italic', margin: 0 }}>
                * Note: Private viewings of raw stone slabs and custom furniture fittings require a 24-hour advanced scheduling booking via the concierge connection link below.
              </p>
            </div>
          </div>
        )}

      </main>

      {/* --- FLOATING CONCIERGE FOOTER ACTION LINK --- */}
      <footer style={{ padding: '20px', borderTop: '1px solid rgba(0,0,0,0.04)', backgroundColor: 'rgba(0,0,0,0.005)' }}>
        <button
          onClick={() => window.open(`https://wa.me/254700000000?text=Hello%20Sovereign%20Studio%20Concierge%2C%20I%20would%20like%20to%20arrange%20a%20private%20consultation%20appointment.`, '_blank')}
          style={{
            width: '100%',
            backgroundColor: PALETTE.textDark,
            color: PALETTE.champagne,
            border: 'none',
            padding: '16px',
            borderRadius: '2px',
            fontSize: '11px',
            textTransform: 'uppercase',
            letterSpacing: '0.2em',
            fontWeight: '600',
            cursor: 'pointer'
          }}
        >
          Initiate Concierge Appointment
        </button>
      </footer>

      {/* Animation Style Overlays */}
      <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideUp { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>
    </div>
  );
}

// Utility style mapper helper
function PALEMENT_BOX_COLOR(id) {
  if (id === 'g1') return '#8B4513'; // Cognac
  if (id === 'g2') return '#EAE6DF'; // Travertine
  return '#4A3B32'; // Walnut
}
