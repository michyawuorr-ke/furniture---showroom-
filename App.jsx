import React, { useState } from 'react';

// Premium Unified Brand Palette
const PALETTE = {
  champagne: '#F9F6F0',
  warmBone: '#F0EAE1',
  textDark: '#1C1A17',
  accentCognac: '#8B4513',
  sidebarBg: '#F3EFE7',
  blushSilk: '#F4E0E2',
  mochaBoucle: '#3C2F2F',
  charcoal: '#2A363B'
};

// Data Model 1: Exactly 8 Standalone Luxury Furniture Items with Material Options
const GOODS_DATA = [
  {
    id: 'g1',
    name: 'The Aura Lounge Chair',
    price: '$4,200',
    category: 'Seating',
    dimensions: 'W: 84cm × D: 88cm × H: 76cm',
    description: 'Sculpted low-profile timber frame engineered to command sweeping spatial presence.',
    colors: [
      { name: 'Cognac Hide', hex: PALETTE.accentCognac },
      { name: 'Blush Silk', hex: PALETTE.blushSilk },
      { name: 'Mocha Bouclé', hex: PALETTE.mochaBoucle }
    ]
  },
  {
    id: 'g2',
    name: 'The Aileron Dining Table',
    price: '$8,500',
    category: 'Surfaces',
    dimensions: 'L: 240cm × W: 100cm × H: 75cm',
    description: 'Solid white oak plank table featuring custom tapered edge profiles and structural legs.',
    colors: [
      { name: 'Natural White Oak', hex: '#E6DFD3' },
      { name: 'Smoked Walnut', hex: '#4A3B32' },
      { name: 'Ebonized Oak', hex: '#1F1F1F' }
    ]
  },
  {
    id: 'g3',
    name: 'The Stratum Credenza',
    price: '$6,500',
    category: 'Casegoods',
    dimensions: 'W: 180cm × D: 45cm × H: 65cm',
    description: 'Low-slung linear architectural cabinetry featuring seamless compound miter frames.',
    colors: [
      { name: 'Muted Walnut', hex: '#5A4D41' },
      { name: 'Bleached Ash', hex: '#DFD9CE' }
    ]
  },
  {
    id: 'g4',
    name: 'The Orbit Coffee Table Trio',
    price: '$3,400',
    category: 'Surfaces',
    dimensions: 'Various Diams × H: 32cm / 38cm / 44cm',
    description: 'Nested organic solid wood table layers configured to follow curved layout pathways.',
    colors: [
      { name: 'Smoked Oak', hex: '#332C26' },
      { name: 'Natural Ash', hex: '#E3DCD0' }
    ]
  },
  {
    id: 'g5',
    name: 'The Aura Modular Sofa',
    price: '$12,500',
    category: 'Seating',
    dimensions: 'W: 340cm × D: 110cm × H: 68cm',
    description: 'A four-piece low horizons modular furniture block built for expansive living rooms.',
    colors: [
      { name: 'Champagne Velvet', hex: '#EFECE6' },
      { name: 'Mocha Bouclé', hex: PALETTE.mochaBoucle },
      { name: 'Charcoal Weave', hex: PALETTE.charcoal }
    ]
  },
  {
    id: 'g6',
    name: 'The Monolith Accent Chair',
    price: '$3,800',
    category: 'Seating',
    dimensions: 'W: 92cm × D: 90cm × H: 72cm',
    description: 'Sculptural reading accent chair using organic curves and heavy wool textile weights.',
    colors: [
      { name: 'Oatmeal Alpaca', hex: '#EAE5DC' },
      { name: 'Blush Silk', hex: PALETTE.blushSilk }
    ]
  },
  {
    id: 'g7',
    name: 'The Sovereign Platform Bed',
    price: '$9,500',
    category: 'Beds',
    dimensions: 'King Size / W: 220cm × L: 240cm',
    description: 'Bespoke floating bedroom layout integration featuring a seamless extended wall headboard.',
    colors: [
      { name: 'Rift-Cut White Oak', hex: '#DDD6C9' },
      { name: 'Dark Fumed Walnut', hex: '#2D2520' }
    ]
  },
  {
    id: 'g8',
    name: 'The Linear Executive Desk',
    price: '$5,400',
    category: 'Surfaces',
    dimensions: 'W: 200cm × D: 85cm × H: 74cm',
    description: 'Premium home office desk with integrated cord pathways and matte lacquer workspaces.',
    colors: [
      { name: 'Matte Charcoal & Oak', hex: '#262A2B' },
      { name: 'Pure Bone Oak', hex: '#EBE6DD' }
    ]
  }
];

// Data Model 2: Exactly 5 Curated Architectural Spaces with Real Pricing Breakdown
const CURATED_SPACES = [
  {
    id: 'space1',
    title: 'The Living Room (Curved Layout Suite)',
    description: 'Embracing a low center of gravity to maximize spatial volume along fluid walls.',
    items: [
      { name: '1× Aura Modular Sofa', cost: '$12,500' },
      { name: '1× Orbit Coffee Table Trio', cost: '$3,400' },
      { name: '1× Aura Lounge Chair', cost: '$4,200' }
    ],
    total: '$20,100'
  },
  {
    id: 'space2',
    title: 'The Reading Nook (Sculptural Corner)',
    description: 'A singular contemplative sanctuary zone tailored for a high-end curved radius nook.',
    items: [
      { name: '1× Monolith Accent Chair', cost: '$3,800' },
      { name: '1× Custom Integrated Side Table', cost: '$1,200' }
    ],
    total: '$5,000'
  },
  {
    id: 'space3',
    title: 'The Dining Environment (Linear Symmetry)',
    description: 'Grounded structural mass anchoring large volume open-concept interior grids.',
    items: [
      { name: '1× Aileron Dining Table', cost: '$8,500' },
      { name: '6× Aileron Dining Chairs (Suite)', cost: '$7,200' }
    ],
    total: '$15,700'
  },
  {
    id: 'space4',
    title: 'The Master Suite Sanctuary',
    description: 'Low-profile seamless platform bedroom layout mimicking high-end custom hotel architecture.',
    items: [
      { name: '1× Sovereign Platform Bed', cost: '$9,500' },
      { name: '2× Sovereign Nightstands (Pair)', cost: '$3,200' }
    ],
    total: '$12,700'
  },
  {
    id: 'space5',
    title: 'The Home Studio (Bespoke Office)',
    description: 'Functional geometric lines integrated flawlessly into contemporary structural designs.',
    items: [
      { name: '1× Linear Executive Desk', cost: '$5,400' },
      { name: '1× Premium Saddle Task Chair', cost: '$2,100' }
    ],
    total: '$7,500'
  }
];

export default function App() {
  const [activePage, setActivePage] = useState('home'); // home | goods | rooms | about | location
  const [menuOpen, setMenuOpen] = useState(false);

  // Advanced Interactive Color States for 8 Individual Goods
  const [goodsColorState, setGoodsColorState] = useState({
    g1: GOODS_DATA[0].colors[0],
    g2: GOODS_DATA[1].colors[0],
    g3: GOODS_DATA[2].colors[0],
    g4: GOODS_DATA[3].colors[0],
    g5: GOODS_DATA[4].colors[0],
    g6: GOODS_DATA[5].colors[0],
    g7: GOODS_DATA[6].colors[0],
    g8: GOODS_DATA[7].colors[0]
  });

  // Advanced Global Color State for Curated Room Environments
  const [roomGlobalColor, setRoomGlobalColor] = useState({
    name: 'Champagne Velvet / Light Wood',
    hex: PALETTE.warmBone
  });

  const updateGoodsColor = (itemId, colorObj) => {
    setGoodsColorState(prev => ({ ...prev, [itemId]: colorObj }));
  };

  const switchPage = (pageId) => {
    setActivePage(pageId);
    setMenuOpen(false);
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

      {/* --- STICKY NAVIGATION BAR (40% THUMB OPTIMIZED HAMBURGER) --- */}
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
          <div style={{ width: '22px', height: '2px', backgroundColor: PALETTE.textDark }} />
          <div style={{ width: '22px', height: '2px', backgroundColor: PALETTE.textDark }} />
          <div style={{ width: '14px', height: '2px', backgroundColor: PALETTE.textDark }} />
        </button>

        <span style={{ letterSpacing: '0.25em', textTransform: 'uppercase', fontSize: '13px', fontWeight: '600' }}>
          SOVEREIGN STUDIO
        </span>

        <span style={{ fontSize: '9px', textTransform: 'uppercase', opacity: 0.4, letterSpacing: '0.05em' }}>
          Portfolio
        </span>
      </nav>

      {/* --- SLIDE-OUT PANEL HAMBURGER INTERFACE --- */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '290px',
        height: '100vh',
        backgroundColor: PALETTE.sidebarBg,
        boxShadow: menuOpen ? '0 0 50px rgba(0,0,0,0.12)' : 'none',
        transform: menuOpen ? 'translateX(0)' : 'translateX(-100%)',
        transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        zIndex: 200,
        padding: '40px 24px',
        display: 'flex',
        flexDirection: 'column',
        boxSizing: 'border-box'
      }}>
        <button 
          onClick={() => setMenuOpen(false)}
          style={{ alignSelf: 'flex-end', background: 'none', border: 'none', fontSize: '20px', cursor: 'pointer', opacity: 0.5, marginBottom: '32px' }}
        >
          ✕
        </button>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '26px' }}>
          {[
            { id: 'home', label: 'Main Portal' },
            { id: 'goods', label: 'Our Goods (8 Signature Pieces)' },
            { id: 'rooms', label: '5 Curated Room Layouts' },
            { id: 'about', label: 'The Atelier Story' },
            { id: 'location', label: 'Studio Hours & Location' }
          ].map((link) => (
            <button
              key={link.id}
              onClick={() => switchPage(link.id)}
              style={{
                background: 'none',
                border: 'none',
                textAlign: 'left',
                fontSize: '14px',
                textTransform: 'uppercase',
                letterSpacing: '0.15em',
                color: PALETTE.textDark,
                fontWeight: activePage === link.id ? '600' : '300',
                opacity: activePage === link.id ? 1 : 0.6,
                cursor: 'pointer',
                padding: '6px 0',
                borderLeft: activePage === link.id ? `2px solid ${PALETTE.accentCognac}` : '2px solid transparent',
                paddingLeft: activePage === link.id ? '12px' : '0'
              }}
            >
              {link.label}
            </button>
          ))}
        </div>
      </div>

      {/* Background Dim Click Mask */}
      {menuOpen && (
        <div onClick={() => setMenuOpen(false)} style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', backgroundColor: 'rgba(0,0,0,0.15)', zIndex: 150 }} />
      )}

      {/* --- CONTENT CONTROLLER DEPLOYMENT SYSTEM --- */}
      <main style={{ flexGrow: 1, padding: '24px 20px', display: 'flex', flexDirection: 'column' }}>

        {/* DESTINATION 1: LANDING PAGE */}
        {activePage === 'home' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', margin: 'auto 0', textAlign: 'center', animation: 'slideUp 0.4s ease' }}>
            <div>
              <p style={{ textTransform: 'uppercase', fontSize: '10px', letterSpacing: '0.3em', opacity: 0.5, marginBottom: '8px' }}>ARCHITECTURAL COMMISSIONS</p>
              <h1 style={{ fontSize: '36px', fontWeight: '300', margin: '0 0 16px 0', letterSpacing: '-0.03em', lineHeight: '1.1' }}>
                Bespoke Geometry.<br/>Bespoke Mass.
              </h1>
              <p style={{ fontSize: '14px', lineHeight: '1.6', opacity: 0.7, maxWidth: '340px', margin: '0 auto 24px auto' }}>
                Explore an immersive tactile ecosystem of masterwood furniture systems designed explicitly for custom room sightlines.
              </p>
              <button 
                onClick={() => setActivePage('goods')}
                style={{
                  backgroundColor: PALETTE.textDark,
                  color: PALETTE.champagne,
                  border: 'none',
                  padding: '16px 32px',
                  borderRadius: '1px',
                  fontSize: '11px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.2em',
                  fontWeight: '600',
                  cursor: 'pointer'
                }}
              >
                Enter Showroom Collection
              </button>
            </div>
          </div>
        )}

        {/* DESTINATION 2: OUR GOODS MATRIX (EXACTLY 8 ITEMS WITH INTERACTIVE SWATCHES) */}
        {activePage === 'goods' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', animation: 'slideUp 0.4s ease' }}>
            <div>
              <span style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.15em', opacity: 0.5 }}>The Core Catalog</span>
              <h2 style={{ fontSize: '26px', fontWeight: '300', margin: '4px 0 0 0', letterSpacing: '-0.02em' }}>Standalone Masterpieces</h2>
              <p style={{ fontSize: '12px', opacity: 0.6, margin: '6px 0 0 0' }}>Displaying our 8 hallmark furniture commissions. Tap swatches to live-alter timber finishes and textile weights.</p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
              {GOODS_DATA.map((item) => (
                <div key={item.id} style={{
                  backgroundColor: 'rgba(0,0,0,0.015)',
                  border: '1px solid rgba(0,0,0,0.03)',
                  padding: '24px 20px',
                  borderRadius: '4px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px'
                }}>
                  
                  {/* DYNAMIC IMMERSIVE MATERIAL SHAPE DISPLAY BOX */}
                  <div style={{
                    width: '100%',
                    height: '140px',
                    backgroundColor: goodsColorState[item.id].hex,
                    borderRadius: '3px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
                    boxShadow: 'inset 0 0 40px rgba(0,0,0,0.05)',
                    position: 'relative'
                  }}>
                    <span style={{
                      fontSize: '11px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                      color: goodsColorState[item.id].hex === PALETTE.mochaBoucle || goodsColorState[item.id].hex === '#1F1F1F' || goodsColorState[item.id].hex === '#2D2520' || goodsColorState[item.id].hex === '#332C26' || goodsColorState[item.id].hex === '#262A2B' ? PALETTE.champagne : PALETTE.textDark,
                      fontWeight: '500',
                      opacity: 0.8
                    }}>
                      {item.category} Frame Profile
                    </span>
                    <span style={{
                      fontSize: '10px',
                      marginTop: '4px',
                      opacity: 0.6,
                      color: goodsColorState[item.id].hex === PALETTE.mochaBoucle || goodsColorState[item.id].hex === '#1F1F1F' || goodsColorState[item.id].hex === '#2D2520' || goodsColorState[item.id].hex === '#332C26' || goodsColorState[item.id].hex === '#262A2B' ? PALETTE.champagne : PALETTE.textDark
                    }}>
                      Active Finish: {goodsColorState[item.id].name}
                    </span>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                    <h3 style={{ fontSize: '18px', fontWeight: '400', margin: 0 }}>{item.name}</h3>
                    <span style={{ fontSize: '16px', fontWeight: '600', color: PALETTE.accentCognac }}>{item.price}</span>
                  </div>

                  <p style={{ fontSize: '13px', lineHeight: '1.5', opacity: 0.7, margin: 0 }}>{item.description}</p>
                  
                  {/* Technical Metrics Area */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', borderTop: '1px solid rgba(0,0,0,0.04)', paddingTop: '12px', fontSize: '11px', opacity: 0.6 }}>
                    <div><strong>Scale Metrics:</strong> {item.dimensions}</div>
                    <div><strong>Composition Track:</strong> {item.materials}</div>
                  </div>

                  {/* INTERACTIVE COMPONENT COLOR SWATCH PICKERS CONTAINER */}
                  <div style={{ marginTop: '4px' }}>
                    <p style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.05em', opacity: 0.4, marginBottom: '8px' }}>Select Individual Finish:</p>
                    <div style={{ display: 'flex', gap: '10px' }}>
                      {item.colors.map((colorOption) => (
                        <button
                          key={colorOption.name}
                          onClick={() => updateGoodsColor(item.id, colorOption)}
                          style={{
                            width: '28px',
                            height: '28px',
                            borderRadius: '50%',
                            backgroundColor: colorOption.hex,
                            border: goodsColorState[item.id].name === colorOption.name ? `2px solid ${PALETTE.textDark}` : '2px solid transparent',
                            boxShadow: 'inset 0 0 0 2px #F9F6F0',
                            cursor: 'pointer',
                            padding: 0,
                            transition: 'transform 0.2s ease'
                          }}
                          title={colorOption.name}
                        />
                      ))}
                    </div>
                  </div>

                </div>
              ))}
            </div>
          </div>
        )}

        {/* DESTINATION 3: 5 CURATED SPACES (MAXIMUM 5 ENVIRONMENTAL SYSTEMS WITH FULL BREAKDOWN) */}
        {activePage === 'rooms' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', animation: 'slideUp 0.4s ease' }}>
            <div>
              <span style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.15em', opacity: 0.5 }}>Architectural Layouts</span>
              <h2 style={{ fontSize: '26px', fontWeight: '300', margin: '4px 0 0 0', letterSpacing: '-0.02em' }}>5 Curated Spatial Environments</h2>
              <p style={{ fontSize: '12px', opacity: 0.6, margin: '6px 0 0 0' }}>Complete furniture combinations designed to harmonize together, listed with item-by-item cost auditing numbers.</p>
            </div>

            {/* HIGH-END INTERACTIVE MASTER ROOM FINISH CONTROLLER */}
            <div style={{ backgroundColor: PALETTE.warmBone, padding: '16px', borderRadius: '4px', border: '1px solid rgba(0,0,0,0.03)' }}>
              <p style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.08em', margin: '0 0 8px 0', fontWeight: '600' }}>Global Studio Spatial Palette Mapper:</p>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {[
                  { name: 'Warm Aniline Leather & Oak', hex: '#8B4513' },
                  { name: 'Minimalist Silk & Bleached Ash', hex: '#F4E0E2' },
                  { name: 'Heavy Earth Wool & Smoked Walnut', hex: '#3C2F2F' }
                ].map((theme) => (
                  <button
                    key={theme.name}
                    onClick={() => setRoomGlobalColor({ name: theme.name, hex: theme.hex })}
                    style={{
                      backgroundColor: roomGlobalColor.name === theme.name ? PALETTE.textDark : 'rgba(0,0,0,0.04)',
                      color: roomGlobalColor.name === theme.name ? PALETTE.champagne : PALETTE.textDark,
                      border: 'none',
                      padding: '8px 12px',
                      borderRadius: '2px',
                      fontSize: '11px',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    {theme.name}
                  </button>
                ))}
              </div>
              <div style={{ marginTop: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: roomGlobalColor.hex }} />
                <span style={{ fontSize: '12px', fontStyle: 'italic', opacity: 0.8 }}>
                  Active Environmental Tone: <strong>{roomGlobalColor.name}</strong> mapped onto all space layouts below.
                </span>
              </div>
            </div>

            {/* EXACTLY 5 CURATED ENVIRONMENTAL ROOM BLOCKS */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              {CURATED_SPACES.map((space, idx) => (
                <div key={space.id} style={{
                  backgroundColor: 'rgba(0,0,0,0.01)',
                  borderTop: `2px solid ${PALETTE.textDark}`,
                  paddingTop: '20px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '14px'
                }}>
                  <div>
                    <span style={{ fontSize: '11px', fontWeight: '600', color: PALETTE.accentCognac }}>SPACE 0{idx + 1} // COMPOSITION</span>
                    <h3 style={{ fontSize: '20px', fontWeight: '400', margin: '4px 0 0 0' }}>{space.title}</h3>
                    <p style={{ fontSize: '13px', opacity: 0.7, margin: '6px 0 0 0', lineHeight: '1.5' }}>{space.description}</p>
                  </div>

                  {/* IMMERSIVE COMPOSITION FINISH VISUAL BOX */}
                  <div style={{
                    width: '100%',
                    height: '100px',
                    backgroundColor: roomGlobalColor.hex,
                    opacity: 0.25,
                    borderRadius: '2px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '11px',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: PALETTE.textDark,
                    fontWeight: '500'
                  }}>
                    [ Environment Multi-Item Space Preview Layout ]
                  </div>

                  {/* ITEM AUDIT PRICE MATRIX TABLE */}
                  <div style={{ backgroundColor: 'rgba(0,0,0,0.015)', padding: '14px', borderRadius: '4px' }}>
                    <p style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.1em', margin: '0 0 10px 0', opacity: 0.5 }}>Bespoke Costing Ledger:</p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {space.items.map((subItem, sIdx) => (
                        <div key={sIdx} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', borderBottom: '1px dashed rgba(0,0,0,0.05)', paddingBottom: '4px' }}>
                          <span style={{ opacity: 0.8 }}>{subItem.name}</span>
                          <span style={{ fontWeight: '500' }}>{subItem.cost}</span>
                        </div>
                      ))}
                    </div>
                    
                    {/* ENVIRONMENTAL INTEGRATED AGGREGATE TOTAL */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '14px', paddingTop: '10px', borderTop: `1px solid ${PALETTE.textDark}`, fontWeight: '600', fontSize: '14px' }}>
                      <span style={{ textTransform: 'uppercase', letterSpacing: '0.05em' }}>Combined Environment Total Value:</span>
                      <span style={{ color: PALETTE.accentCognac, fontSize: '15px' }}>{space.total}</span>
                    </div>
                  </div>

                </div>
              ))}
            </div>
          </div>
        )}

        {/* DESTINATION 4: ABOUT US ATELIER */}
        {activePage === 'about' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', animation: 'slideUp 0.4s ease', maxWidth: '480px', margin: '12px auto 0 auto' }}>
            <div>
              <span style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.2em', opacity: 0.5 }}>The Studio DNA</span>
              <h2 style={{ fontSize: '26px', fontWeight: '300', margin: '4px 0 12px 0', letterSpacing: '-0.02em' }}>Bespoke Architecture, Permanent Materials.</h2>
              <p style={{ fontSize: '14px', lineHeight: '1.7', opacity: 0.7, margin: '0 0 16px 0' }}>
                We operate strictly outside the standard patterns of industrial volume commercial manufacturing. Every collection order is treated as a singular private commission, handcrafted by elite woodworkers to guarantee seamless timber lines, grain paths, and raw physical structural integrity.
              </p>
              <p style={{ fontSize: '14px', lineHeight: '1.7', opacity: 0.7, margin: 0 }}>
                Our signature natural textiles and oak variants are harvested transparently from sustainable European reserves and historic Italian mills. We sign, date, and uniquely tag every single production run with stamped metal brass markers to guarantee authentic provenance across generations.
              </p>
            </div>
          </div>
        )}

        {/* DESTINATION 5: LOCATION AND TIME CONFIGURATIONS */}
        {activePage === 'location' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', animation: 'slideUp 0.4s ease', maxWidth: '480px', margin: '12px auto 0 auto' }}>
            <div>
              <span style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.15em', opacity: 0.5 }}>The Vault Space</span>
              <h2 style={{ fontSize: '26px', fontWeight: '300', margin: '4px 0 0 0', letterSpacing: '-0.02em' }}>Location & Studio Booking Hours</h2>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', fontSize: '14px', lineHeight: '1.6' }}>
              <div style={{ backgroundColor: 'rgba(0,0,0,0.015)', padding: '16px', borderRadius: '4px' }}>
                <h4 style={{ margin: '0 0 6px 0', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Studio Atelier Workshop</h4>
                <p style={{ margin: 0, opacity: 0.7 }}>Suite A7, Creative Design District<br />Nairobi Workspace Hub / Extension Bounds</p>
              </div>

              <div style={{ backgroundColor: 'rgba(0,0,0,0.015)', padding: '16px', borderRadius: '4px' }}>
                <h4 style={{ margin: '0 0 6px 0', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Showroom Access Matrix</h4>
                <div style={{ opacity: 0.7 }}>
                  <div>Monday — Friday: 09:00 - 18:00</div>
                  <div>Saturday Sessions: 10:00 - 15:00</div>
                  <div style={{ color: PALETTE.accentCognac, marginTop: '4px', fontWeight: '500' }}>Sundays / Public Holidays: Studio Closed</div>
                </div>
              </div>

              <p style={{ fontSize: '12px', opacity: 0.5, fontStyle: 'italic', margin: 0 }}>
                * Note: Deep consultations regarding timber profiling and leather hide inspections require a 24-hour advanced scheduling confirmation notice sent directly to the concierge desk below.
              </p>
            </div>
          </div>
        )}

      </main>

      {/* --- STICKY FOOTER NATIVE VIP CONCIERGE INTEGRATION LINK --- */}
      <footer style={{ padding: '20px', borderTop: '1px solid rgba(0,0,0,0.04)', backgroundColor: 'rgba(0,0,0,0.005)' }}>
        <button
          onClick={() => window.open(`https://wa.me/254700000000?text=Hello%20Sovereign%20Studio%20Concierge%2C%20I%20would%20like%20to%20arrange%20a%20private%20appointment%20commission%20review.`, '_blank')}
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
          Initiate Private Commission Consultation
        </button>
      </footer>

      {/* Embedded High-End Structural CSS Animation Triggers */}
      <style>{`
        @keyframes slideUp { 
          from { opacity: 0; transform: translateY(8px); } 
          to { opacity: 1; transform: translateY(0); } 
        }
      `}</style>
    </div>
  );
}
