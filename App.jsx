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

// Data Model 1: Exactly 8 Standalone Luxury Furniture Items with Live Image Assets
const GOODS_DATA = [
  {
    id: 'g1',
    name: 'The Aura Lounge Chair',
    price: '$4,200',
    category: 'Seating',
    dimensions: 'W: 84cm × D: 88cm × H: 76cm',
    description: 'Sculpted low-profile timber frame engineered to command sweeping spatial presence.',
    imageUrl: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=600&q=80',
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
    imageUrl: 'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=600&q=80',
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
    imageUrl: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=600&q=80',
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
    imageUrl: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=600&q=80',
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
    imageUrl: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=600&q=80',
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
    imageUrl: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=600&q=80',
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
    imageUrl: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=600&q=80',
    colors: [
      { name: 'Rift-Cut White Oak', hex: '#DDD6C9' },
      { name: 'Dark Fumed Walnut', hex: '#2D2520' }
    ]
  },
  {
    id: 'g8',
    name: 'The Linear Executive Desk',
    price: '$4,500',
    category: 'Surfaces',
    dimensions: 'W: 200cm × D: 85cm × H: 74cm',
    description: 'Premium home office desk with integrated cord pathways and matte lacquer workspaces.',
    imageUrl: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=600&q=80',
    colors: [
      { name: 'Matte Charcoal & Oak', hex: '#262A2B' },
      { name: 'Pure Bone Oak', hex: '#EBE6DD' }
    ]
  }
];

// Data Model 2: Exactly 5 Curated Architectural Spaces with Real Pricing Breakdown & Real Spaces Images
const CURATED_SPACES = [
  {
    id: 'space1',
    title: 'The Living Room (Curved Layout Suite)',
    description: 'Embracing a low center of gravity to maximize spatial volume along fluid walls.',
    imageUrl: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80',
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
    imageUrl: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80',
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
    imageUrl: 'https://images.unsplash.com/photo-1617806118233-18e1db207f62?auto=format&fit=crop&w=800&q=80',
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
    imageUrl: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=800&q=80',
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
    imageUrl: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80',
    items: [
      { name: '1× Linear Executive Desk', cost: '$4,400' },
      { name: '1× Premium Saddle Task Chair', cost: '$3,100' }
    ],
    total: '$7,500'
  }
];

export default function App() {
  const [activePage, setActivePage] = useState('goods'); // Defaulting straight to the catalog
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
    name: 'Warm Aniline Leather & Oak',
    hex: PALETTE.accentCognac
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
            { id: 'goods', label: 'Our Goods (8 Signature Pieces)' },
            { id: 'rooms', label: '5 Curated Room Layouts' },
            { id: 'about', label: 'The Atelier Story' }
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

      {menuOpen && (
        <div onClick={() => setMenuOpen(false)} style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', backgroundColor: 'rgba(0,0,0,0.15)', zIndex: 150 }} />
      )}

      {/* --- CONTENT CONTROLLER DEPLOYMENT SYSTEM --- */}
      <main style={{ flexGrow: 1, padding: '24px 20px', display: 'flex', flexDirection: 'column' }}>

        {/* DESTINATION 1: OUR GOODS MATRIX (EXACTLY 8 ITEMS WITH LIVE REAL PRODUCTION IMAGES) */}
        {activePage === 'goods' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', animation: 'slideUp 0.4s ease' }}>
            <div>
              <span style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.15em', opacity: 0.5 }}>The Core Catalog</span>
              <h2 style={{ fontSize: '26px', fontWeight: '300', margin: '4px 0 0 0', letterSpacing: '-0.02em' }}>Signature Woodwork & Textiles</h2>
              <p style={{ fontSize: '12px', opacity: 0.6, margin: '6px 0 0 0' }}>Displaying our 8 hallmark standalone furniture pieces. Tap color options to instantly map selected finishes.</p>
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
                  
                  {/* LIVE HARDWARE VISUALIZATION CONTAINER */}
                  <div style={{
                    width: '100%',
                    height: '240px',
                    borderRadius: '3px',
                    position: 'relative',
                    overflow: 'hidden',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.04)'
                  }}>
                    <img 
                      src={item.imageUrl} 
                      alt={item.name}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                      }}
                    />
                    {/* Visual Color Overlay Indicator */}
                    <div style={{
                      position: 'absolute',
                      bottom: '12px',
                      right: '12px',
                      backgroundColor: 'rgba(255,255,255,0.9)',
                      padding: '4px 10px',
                      borderRadius: '2px',
                      fontSize: '10px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
                    }}>
                      <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: goodsColorState[item.id].hex }} />
                      Finish: {goodsColorState[item.id].name}
                    </div>
                  </div>

                  <div style={{ display: 'flex', justifycontent: 'space-between', alignItems: 'baseline' }}>
                    <h3 style={{ fontSize: '18px', fontWeight: '400', margin: 0 }}>{item.name}</h3>
                    <span style={{ fontSize: '16px', fontWeight: '600', color: PALETTE.accentCognac, marginLeft: 'auto' }}>{item.price}</span>
                  </div>

                  <p style={{ fontSize: '13px', lineHeight: '1.5', opacity: 0.7, margin: 0 }}>{item.description}</p>
                  
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', borderTop: '1px solid rgba(0,0,0,0.04)', paddingTop: '12px', fontSize: '11px', opacity: 0.6 }}>
                    <div><strong>Scale Dimensions:</strong> {item.dimensions}</div>
                    <div><strong>Classification:</strong> Architectural {item.category}</div>
                  </div>

                  {/* INTERACTIVE COLOR PICKER OVERLAY */}
                  <div style={{ marginTop: '4px' }}>
                    <p style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.05em', opacity: 0.4, marginBottom: '8px' }}>Available Color Customization:</p>
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

        {/* DESTINATION 2: 5 CURATED SPACES (MAXIMUM 5 ENVIRONMENTAL SYSTEMS WITH PRICING & IMAGE MAPPING) */}
        {activePage === 'rooms' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', animation: 'slideUp 0.4s ease' }}>
            <div>
              <span style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.15em', opacity: 0.5 }}>Architectural Layouts</span>
              <h2 style={{ fontSize: '26px', fontWeight: '300', margin: '4px 0 0 0', letterSpacing: '-0.02em' }}>5 Curated Architectural Environments</h2>
              <p style={{ fontSize: '12px', opacity: 0.6, margin: '6px 0 0 0' }}>Complete architectural furniture groups. Alter the global color path to inspect layout adaptability.</p>
            </div>

            {/* INTERACTIVE ROOM INTERFACE PICKER */}
            <div style={{ backgroundColor: PALETTE.warmBone, padding: '16px', borderRadius: '4px', border: '1px solid rgba(0,0,0,0.03)' }}>
              <p style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.08em', margin: '0 0 8px 0', fontWeight: '600' }}>Global Spatial Textile Mapping:</p>
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
            </div>

            {/* EXACTLY 5 SPACES DISPLAY LAYOUT */}
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
                    <span style={{ fontSize: '11px', fontWeight: '600', color: PALETTE.accentCognac }}>SPACE 0{idx + 1} // ARCHITECTURAL COMPOSITION</span>
                    <h3 style={{ fontSize: '20px', fontWeight: '400', margin: '4px 0 0 0' }}>{space.title}</h3>
                    <p style={{ fontSize: '13px', opacity: 0.7, margin: '6px 0 0 0', lineHeight: '1.5' }}>{space.description}</p>
                  </div>

                  {/* REAL HIGH END ROOM ENVIROMENT IMAGE */}
                  <div style={{
                    width: '100%',
                    height: '220px',
                    borderRadius: '2px',
                    overflow: 'hidden',
                    position: 'relative'
                  }}>
                    <img 
                      src={space.imageUrl} 
                      alt={space.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                    <div style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      backgroundColor: roomGlobalColor.hex,
                      mixBlendMode: 'color',
                      opacity: 0.2,
                      pointerEvents: 'none'
                    }} />
                  </div>

                  {/* ACCOUNTING BREAKDOWN TABLE */}
                  <div style={{ backgroundColor: 'rgba(0,0,0,0.015)', padding: '14px', borderRadius: '4px' }}>
                    <p style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.1em', margin: '0 0 10px 0', opacity: 0.5 }}>Individual Furniture Pricing Breakdown:</p>
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
                      <span style={{ textTransform: 'uppercase', letterSpacing: '0.05em' }}>Combined Environment Total:</span>
                      <span style={{ color: PALETTE.accentCognac, fontSize: '15px' }}>{space.total}</span>
                    </div>
                  </div>

                </div>
              ))}
            </div>
          </div>
        )}

        {/* DESTINATION 3: ABOUT US ATELIER */}
        {activePage === 'about' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', animation: 'slideUp 0.4s ease', maxWidth: '480px', margin: '12px auto 0 auto' }}>
            <div>
              <span style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.2em', opacity: 0.5 }}>The Atelier Philosophy</span>
              <h2 style={{ fontSize: '26px', fontWeight: '300', margin: '4px 0 12px 0', letterSpacing: '-0.02em' }}>Pure Woodwork Architecture. No Stonework.</h2>
              <p style={{ fontSize: '14px', lineHeight: '1.7', opacity: 0.7 }}>
                We work strictly in high-end structural timber engineering and ultra-premium tactile textiles. Every item is treated as a private commission, handcrafted by master artisans to align seamlessly with spatial curves and fluid modern sightlines.
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

      <style>{`
        @keyframes slideUp { 
          from { opacity: 0; transform: translateY(8px); } 
          to { opacity: 1; transform: translateY(0); } 
        }
      `}</style>
    </div>
  );
}
