import React, { useState } from 'react';

const COLORS = {
  bgLight: '#F9FAFB',
  cardBg: '#FFFFFF',
  textDark: '#1F2937',
  textMuted: '#6B7280',
  primaryBlue: '#2563EB',
  borderLight: '#E5E7EB',
  priceTag: '#059669',
  overlay: 'rgba(0, 0, 0, 0.5)'
};

// Explicitly matching the exact visual details of the chosen images
const KENYAN_GOODS = [
  { 
    id: 'kg1', 
    name: 'Modern Cushioned Fabric Armchair', 
    price: 'Ksh 24,500', 
    dimensions: '85cm W × 80cm D × 85cm H', 
    description: 'A single-seater accent chair with thick gray fabric cushioning, a tufted button backrest, and light-colored natural wooden legs.', 
    imageUrl: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&w=600&q=80' 
  },
  { 
    id: 'kg2', 
    name: 'Compact 2-Seater Studio Sofa', 
    price: 'Ksh 45,000', 
    dimensions: '150cm L × 75cm D × 80cm H', 
    description: 'A cozy, space-saving two-seater sofa upholstered in dense woven gray fabric, featuring two large matching back support pillows and round tapered wooden legs.', 
    imageUrl: 'https://images.unsplash.com/photo-1484101403633-562f891dc89a?auto=format&fit=crop&w=600&q=80' 
  },
  { 
    id: 'kg3', 
    name: 'Handcrafted Hardwood Coffee Table', 
    price: 'Ksh 18,500', 
    dimensions: '110cm L × 60cm W × 45cm H', 
    description: 'A low-profile rectangular living room center table built entirely from rich, dark-grain varnished hardwood panels with solid, thick wooden block legs.', 
    imageUrl: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=600&q=80' 
  },
  { 
    id: 'kg4', 
    name: 'Minimalist Wooden Dining Table Set', 
    price: 'Ksh 65,000', 
    dimensions: '160cm L × 90cm W × 75cm H', 
    description: 'A smooth, light-colored natural wood dining table accompanied by two matching long benches that slide neatly underneath to maximize open floor space.', 
    imageUrl: 'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=600&q=80' 
  },
  { 
    id: 'kg5', 
    name: 'Scandic-Style Light Lounge Chair', 
    price: 'Ksh 28,000', 
    dimensions: '70cm W × 75cm D × 90cm H', 
    description: 'An open-frame lounge armchair featuring smooth cream-colored fabric cushions set against a minimalist, light ash-wood structural frame.', 
    imageUrl: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=600&q=80' 
  },
  { 
    id: 'kg6', 
    name: 'Contemporary Low-Profile Bed Frame', 
    price: 'Ksh 55,000', 
    dimensions: '5ft × 6ft (Standard Queen Size)', 
    description: 'A sturdy platform wooden bed frame featuring a simple, solid vertical wood-paneled headboard with crisp white linens displayed on top.', 
    imageUrl: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=600&q=80' 
  }
];

const KENYAN_ROOMS = [
  { 
    id: 'kr1', 
    title: 'Bright & Airy Sitting Room Set', 
    description: 'A perfectly matched combination for open-plan houses or bright apartments.', 
    total: 'Ksh 69,500', 
    breakdown: '1× Fabric Armchair (Ksh 24,500) + 1× Studio Sofa (Ksh 45,000)', 
    imageUrl: 'https://images.unsplash.com/photo-1484101403633-562f891dc89a?auto=format&fit=crop&w=800&q=80' 
  },
  { 
    id: 'kr2', 
    title: 'Complete Lounge & Center Table Bundle', 
    description: 'Get the absolute best value out of our handcrafted solid timber inventory.', 
    total: 'Ksh 63,500', 
    breakdown: '1× Hardwood Coffee Table (Ksh 18,500) + 1× 2-Seater Sofa (Ksh 45,000)', 
    imageUrl: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80' 
  }
];

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigateTo = (pageId) => {
    setCurrentPage(pageId);
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <div style={{
      backgroundColor: COLORS.bgLight,
      color: COLORS.textDark,
      fontFamily: 'system-ui, -apple-system, sans-serif',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative'
    }}>
      
      {/* --- HEADER --- */}
      <header style={{ 
        backgroundColor: '#FFFFFF', 
        borderBottom: `1px solid ${COLORS.borderLight}`, 
        padding: '16px 20px', 
        display: 'flex', 
        alignItems: 'center',
        position: 'sticky',
        top: 0,
        zIndex: 100
      }}>
        <button 
          onClick={() => setIsMenuOpen(true)}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            width: '24px',
            height: '18px',
            padding: 0,
            marginRight: '20px'
          }}
        >
          <span style={{ width: '100%', height: '3px', backgroundColor: COLORS.textDark, borderRadius: '2px' }}></span>
          <span style={{ width: '100%', height: '3px', backgroundColor: COLORS.textDark, borderRadius: '2px' }}></span>
          <span style={{ width: '100%', height: '3px', backgroundColor: COLORS.textDark, borderRadius: '2px' }}></span>
        </button>

        <div style={{ flexGrow: 1 }}>
          <h1 style={{ margin: 0, fontSize: '18px', fontWeight: 'bold', color: COLORS.primaryBlue }}>
            Hometown Furniture Mart
          </h1>
        </div>
      </header>

      {/* --- HAMBURGER NAVIGATION DRAWER --- */}
      {isMenuOpen && (
        <>
          <div 
            onClick={() => setIsMenuOpen(false)}
            style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', backgroundColor: COLORS.overlay, zIndex: 200 }}
          />
          <div style={{
            position: 'fixed', top: 0, left: 0, width: '280px', height: '100vh',
            backgroundColor: '#FFFFFF', zIndex: 201, boxShadow: '4px 0 12px rgba(0,0,0,0.15)',
            display: 'flex', flexDirection: 'column', padding: '20px', boxSizing: 'border-box'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
              <span style={{ fontWeight: 'bold', fontSize: '14px', color: COLORS.textMuted, letterSpacing: '0.5px' }}>STORE SECTIONS</span>
              <button onClick={() => setIsMenuOpen(false)} style={{ background: 'none', border: 'none', fontSize: '24px', cursor: 'pointer', color: COLORS.textMuted }}>&times;</button>
            </div>
            
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {[
                { id: 'home', label: '🏠 Showroom Home' },
                { id: 'goods', label: '🛋️ Available Goods Catalog' },
                { id: 'rooms', label: '📦 Curated Living Spaces' },
                { id: 'about', label: 'ℹ️ About Our Local Workshop' }
              ].map((link) => (
                <button
                  key={link.id}
                  onClick={() => navigateTo(link.id)}
                  style={{
                    textAlign: 'left', padding: '12px 16px', borderRadius: '6px',
                    border: 'none', fontSize: '14px', cursor: 'pointer',
                    fontWeight: currentPage === link.id ? 'bold' : 'normal',
                    backgroundColor: currentPage === link.id ? '#EFF6FF' : 'transparent',
                    color: currentPage === link.id ? COLORS.primaryBlue : COLORS.textDark
                  }}
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>
        </>
      )}

      {/* --- CONTENT AREA --- */}
      <main style={{ padding: '20px', flexGrow: 1, maxWidth: '600px', width: '100%', margin: '0 auto', boxSizing: 'border-box' }}>
        
        {/* VIEW 1: HOME PAGE */}
        {currentPage === 'home' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {/* Direct Local Value Welcome Banner */}
            <div style={{ backgroundColor: '#EFF6FF', border: `1px solid ${COLORS.borderLight}`, padding: '20px', borderRadius: '8px' }}>
              <h2 style={{ margin: '0 0 6px 0', fontSize: '18px', color: COLORS.primaryBlue, fontWeight: 'bold' }}>Locally Crafted, Fairly Priced</h2>
              <p style={{ margin: 0, fontSize: '13px', color: COLORS.textDark, lineHeight: '1.5' }}>
                Welcome to our local Nairobi furniture workshop outlet. We build straightforward, solid timber frames and durable fabric seats using local materials. No imported retail markups—just reliable furniture priced transparently in Kenya Shillings.
              </p>
            </div>

            {/* Visual Quick Navigation Cards */}
            <div>
              <h3 style={{ margin: '0 0 12px 0', fontSize: '14px', fontWeight: 'bold', textTransform: 'uppercase', color: COLORS.textMuted }}>Explore Our Current Stocks</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                
                <div onClick={() => navigateTo('goods')} style={{ cursor: 'pointer', backgroundColor: '#FFFFFF', border: `1px solid ${COLORS.borderLight}`, borderRadius: '8px', overflow: 'hidden', display: 'flex', alignItems: 'center' }}>
                  <img src="https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&w=300&q=80" style={{ width: '80px', height: '80px', objectFit: 'cover' }} alt="Goods" />
                  <div style={{ padding: '16px' }}>
                    <h4 style={{ margin: '0 0 2px 0', fontSize: '14px', fontWeight: 'bold' }}>Individual Goods Catalog</h4>
                    <p style={{ margin: 0, fontSize: '12px', color: COLORS.textMuted }}>View specific available armchairs, tables, and bed frames.</p>
                  </div>
                </div>

                <div onClick={() => navigateTo('rooms')} style={{ cursor: 'pointer', backgroundColor: '#FFFFFF', border: `1px solid ${COLORS.borderLight}`, borderRadius: '8px', overflow: 'hidden', display: 'flex', alignItems: 'center' }}>
                  <img src="https://images.unsplash.com/photo-1484101403633-562f891dc89a?auto=format&fit=crop&w=300&q=80" style={{ width: '80px', height: '80px', objectFit: 'cover' }} alt="Spaces" />
                  <div style={{ padding: '16px' }}>
                    <h4 style={{ margin: '0 0 2px 0', fontSize: '14px', fontWeight: 'bold' }}>Curated Space Packages</h4>
                    <p style={{ margin: 0, fontSize: '12px', color: COLORS.textMuted }}>See multi-item furniture bundles arranged for complete rooms.</p>
                  </div>
                </div>

              </div>
            </div>

            {/* Quick Location Alert */}
            <div style={{ borderLeft: `4px solid ${COLORS.primaryBlue}`, backgroundColor: '#FFFFFF', padding: '12px 16px', borderRadius: '0 8px 8px 0', borderTop: `1px solid ${COLORS.borderLight}`, borderRight: `1px solid ${COLORS.borderLight}`, borderBottom: `1px solid ${COLORS.borderLight}` }}>
              <span style={{ fontSize: '12px', fontWeight: 'bold', color: COLORS.primaryBlue, display: 'block', marginBottom: '2px' }}>READY FOR PICKUP</span>
              <p style={{ margin: 0, fontSize: '13px', color: COLORS.textDark }}>Visit our main yard along the Architectural Design Quarter in Nairobi to view these exact physical models today.</p>
            </div>
          </div>
        )}

        {/* VIEW 2: GOODS CATALOG PAGE */}
        {currentPage === 'goods' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div>
              <h2 style={{ margin: '0 0 4px 0', fontSize: '16px', fontWeight: 'bold' }}>Individual Workshop Goods</h2>
              <p style={{ margin: 0, fontSize: '13px', color: COLORS.textMuted }}>Strictly describing the actual physical items built and on display in our yard.</p>
            </div>
            {KENYAN_GOODS.map((item) => (
              <div key={item.id} style={{ backgroundColor: COLORS.cardBg, border: `1px solid ${COLORS.borderLight}`, borderRadius: '8px', overflow: 'hidden' }}>
                <img src={item.imageUrl} alt={item.name} style={{ width: '100%', height: '220px', objectFit: 'cover' }} />
                <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '12px' }}>
                    <h3 style={{ margin: 0, fontSize: '15px', fontWeight: 'bold', lineHeight: '1.3' }}>{item.name}</h3>
                    <span style={{ fontSize: '15px', fontWeight: 'bold', color: COLORS.priceTag, whiteSpace: 'nowrap' }}>{item.price}</span>
                  </div>
                  <p style={{ margin: 0, fontSize: '13px', color: COLORS.textDark, lineHeight: '1.4' }}>{item.description}</p>
                  <div style={{ fontSize: '12px', color: COLORS.textMuted, backgroundColor: '#F3F4F6', padding: '6px 10px', borderRadius: '4px', marginTop: '4px' }}>
                    <strong>Tape Measurements:</strong> {item.dimensions}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* VIEW 3: CURATED SPACE PAGE */}
        {currentPage === 'rooms' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div>
              <h2 style={{ margin: '0 0 4px 0', fontSize: '16px', fontWeight: 'bold' }}>Curated Space Packages</h2>
              <p style={{ margin: 0, fontSize: '13px', color: COLORS.textMuted }}>Combined item sets prepared together to help budget for an entire living area at once.</p>
            </div>
            {KENYAN_ROOMS.map((room) => (
              <div key={room.id} style={{ backgroundColor: COLORS.cardBg, border: `1px solid ${COLORS.borderLight}`, borderRadius: '8px', overflow: 'hidden' }}>
                <img src={room.imageUrl} alt={room.title} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                <div style={{ padding: '16px' }}>
                  <h3 style={{ margin: '0 0 4px 0', fontSize: '15px', fontWeight: 'bold' }}>{room.title}</h3>
                  <p style={{ margin: '0 0 12px 0', fontSize: '13px', color: COLORS.textMuted }}>{room.description}</p>
                  <div style={{ backgroundColor: '#F9FAFB', padding: '12px', borderRadius: '6px', border: `1px solid ${COLORS.borderLight}` }}>
                    <div style={{ fontSize: '12px', color: COLORS.textDark, marginBottom: '8px', lineHeight: '1.4' }}>
                      <strong>Package Content:</strong> {room.breakdown}
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: `1px solid ${COLORS.borderLight}`, paddingTop: '8px', fontWeight: 'bold', fontSize: '13px' }}>
                      <span>Combined Price:</span>
                      <span style={{ color: COLORS.priceTag }}>{room.total}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* VIEW 4: ABOUT US PAGE */}
        {currentPage === 'about' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <h2 style={{ margin: 0, fontSize: '16px', fontWeight: 'bold' }}>About Our Local Workshop</h2>
            <div style={{ backgroundColor: '#FFFFFF', border: `1px solid ${COLORS.borderLight}`, padding: '16px', borderRadius: '8px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <p style={{ margin: 0, fontSize: '13px', lineHeight: '1.5', color: COLORS.textDark }}>
                Hometown Furniture Mart is a homegrown retail supplier. We source solid timbers and structured timber blockboards directly from local yards, moving them straight to our joinery and upholstery workspace.
              </p>
              <p style={{ margin: 0, fontSize: '13px', lineHeight: '1.5', color: COLORS.textDark }}>
                By removing high-cost high-end showroom rents, intermediate import agents, and lavish marketing campaigns, we offer clean, durable, every-day furniture built for residential houses at baseline local prices.
              </p>
            </div>
            
            <div style={{ backgroundColor: '#FFFFFF', border: `1px solid ${COLORS.borderLight}`, padding: '16px', borderRadius: '8px' }}>
              <h3 style={{ margin: '0 0 8px 0', fontSize: '13px', fontWeight: 'bold' }}>Showroom Location & Timing</h3>
              <p style={{ margin: '0 0 4px 0', fontSize: '13px' }}><strong>Yard Location:</strong> Block A7, Architectural Design Quarter, Nairobi</p>
              <p style={{ margin: '0 0 4px 0', fontSize: '13px' }}><strong>Monday — Friday:</strong> 09:00 AM to 06:00 PM</p>
              <p style={{ margin: '0 0 4px 0', fontSize: '13px' }}><strong>Saturdays:</strong> 10:00 AM to 03:00 PM</p>
              <p style={{ margin: 0, fontSize: '13px', color: COLORS.textMuted }}><strong>Sundays & Public Holidays:</strong> Closed for yard maintenance</p>
            </div>
          </div>
        )}

      </main>

      {/* --- LOCAL STORE FOOTER --- */}
      <footer style={{ backgroundColor: '#FFFFFF', borderTop: `1px solid ${COLORS.borderLight}`, padding: '20px', textAlign: 'center', marginTop: 'auto' }}>
        <p style={{ margin: '0 0 12px 0', fontSize: '13px', fontWeight: 'bold', color: COLORS.textDark }}>
          Confirm yard availability? Speak directly with our sales team
        </p>
        <button 
          onClick={() => window.open('https://wa.me/254700000000', '_blank')} 
          style={{ backgroundColor: COLORS.priceTag, color: '#FFFFFF', border: 'none', padding: '12px 24px', borderRadius: '6px', fontSize: '13px', fontWeight: 'bold', width: '100%', maxWidth: '280px', cursor: 'pointer' }}
        >
          WhatsApp Local Sales Desk
        </button>
      </footer>

    </div>
  );
}
