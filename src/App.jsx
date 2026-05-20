import React, { useState } from 'react';

const COLORS = {
  bgLight: '#F9FAFB',
  cardBg: '#FFFFFF',
  textDark: '#1F2937',
  textMuted: '#4B5563',
  primaryBlue: '#2563EB',
  borderLight: '#E5E7EB',
  priceTag: '#059669',
  overlay: 'rgba(0, 0, 0, 0.5)'
};

const KENYAN_GOODS = [
  { 
    id: 'kg1', 
    name: 'Cushioned Fabric Armchair', 
    price: 'Ksh 24,500', 
    dimensions: '85cm W × 80cm D × 85cm H', 
    description: 'A single-seater lounge chair upholstered in dense, woven gray canvas fabric. Features a tufted button backrest and light natural hardwood tapered legs.', 
    imageUrl: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&w=600&q=80' 
  },
  { 
    id: 'kg2', 
    name: 'Compact 2-Seater Studio Sofa', 
    price: 'Ksh 45,000', 
    dimensions: '150cm L × 75cm D × 80cm H', 
    description: 'A space-saving two-seater sofa covered in thick gray fabric upholstery. Includes two large matching rectangular back support pillows and round timber feet.', 
    imageUrl: 'https://images.unsplash.com/photo-1484101403633-562f891dc89a?auto=format&fit=crop&w=600&q=80' 
  },
  { 
    id: 'kg3', 
    name: 'Handcrafted Hardwood Coffee Table', 
    price: 'Ksh 18,500', 
    dimensions: '110cm L × 60cm W × 45cm H', 
    description: 'A low-profile rectangular living room center table built from deep, dark-grain varnished timber paneling with thick, square solid wood block legs.', 
    imageUrl: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=600&q=80' 
  },
  { 
    id: 'kg4', 
    name: 'Minimalist Timber Dining Table', 
    price: 'Ksh 65,000', 
    dimensions: '160cm L × 90cm W × 75cm H', 
    description: 'A clean, modern dining table surface fashioned from light-varnished natural wood boards, paired with long matching slide-under benches.', 
    imageUrl: 'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=600&q=80' 
  },
  { 
    id: 'kg5', 
    name: 'Scandic-Style Light Lounge Chair', 
    price: 'Ksh 28,000', 
    dimensions: '70cm W × 75cm D × 90cm H', 
    description: 'A light-weight comfort chair featuring smooth, cream-colored loose fabric cushions nestled inside an open, exposed light ash wood structural outer frame.', 
    imageUrl: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=600&q=80' 
  },
  { 
    id: 'kg6', 
    name: 'Contemporary Platform Bed Frame', 
    price: 'Ksh 55,000', 
    dimensions: '5ft × 6ft (Standard Queen Size)', 
    description: 'A sturdy platform base frame constructed out of durable local blockboard wood. Complete with a clean, unadorned, vertical wood-paneled headboard.', 
    imageUrl: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=600&q=80' 
  }
];

const KENYAN_ROOMS = [
  {
    id: 'kr1',
    title: 'The Bedsitter Starter Package',
    total: 'Ksh 81,500',
    description: 'A space-conscious, budget-friendly setup designed to furnish a single-room layout or studio apartment comfortably without overcrowding.',
    breakdown: '1× Compact 2-Seater Studio Sofa (Ksh 45,000) + 1× Hardwood Coffee Table (Ksh 18,500) + 1× Local Craft Accessories Allowance (Ksh 18,000)',
    imageUrl: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'kr2',
    title: 'The Scholar’s Reading Nook',
    total: 'Ksh 87,500',
    description: 'An intentional, quiet corner arrangement curated for home office spaces, quiet studies, or small master bedroom relaxation zones.',
    breakdown: '1× Cushioned Fabric Armchair (Ksh 24,500) + 1× Premium Modern Minimalist Writing Desk (Ksh 38,000) + 1× High-Stature Framing Accent Fitting (Ksh 25,000)',
    imageUrl: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'kr3',
    title: 'The Master Bedroom Suite',
    total: 'Ksh 115,000',
    description: 'A uniform, neat setup to elevate a main residential bedroom using strong timber joins and clean coordinating items.',
    breakdown: '1× Contemporary Platform Bed Frame (Ksh 55,000) + 2× Heavy-Varnished Timber Nightstands (Ksh 30,000) + 1× 3-Drawer Clothing Storage Chest (Ksh 30,000)',
    imageUrl: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'kr4',
    title: 'The Estate Living Room Package',
    total: 'Ksh 141,500',
    description: 'A comprehensive family gathering layout curated for a standard rental estate home or suburban sitting room.',
    breakdown: '1× Compact 2-Seater Studio Sofa (Ksh 45,000) + 2× Cushioned Fabric Armchairs (Ksh 49,000) + 1× Hardwood Coffee Table (Ksh 18,500) + 1× Solid Timber Low TV Stand (Ksh 29,000)',
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

      {isMenuOpen && (
        <>
          <div 
            onClick={() => setIsMenuOpen(false)}
            style={{
              position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
              backgroundColor: COLORS.overlay, zIndex: 200
            }}
          />
          <div style={{
            position: 'fixed', top: 0, left: 0, width: '280px', height: '100vh',
            backgroundColor: '#FFFFFF', zIndex: 201, boxShadow: '4px 0 12px rgba(0,0,0,0.15)',
            display: 'flex', flexDirection: 'column', padding: '20px', boxSizing: 'border-box'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
              <span style={{ fontWeight: 'bold', fontSize: '13px', color: COLORS.textMuted, letterSpacing: '0.5px' }}>STORE SECTIONS</span>
              <button 
                onClick={() => setIsMenuOpen(false)}
                style={{ background: 'none', border: 'none', fontSize: '24px', cursor: 'pointer', color: COLORS.textMuted }}
              >
                &times;
              </button>
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

      <main style={{ padding: '20px', flexGrow: 1, maxWidth: '600px', width: '100%', margin: '0 auto', boxSizing: 'border-box' }}>
        
        {currentPage === 'home' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div style={{ backgroundColor: '#EFF6FF', border: `1px solid ${COLORS.borderLight}`, padding: '20px', borderRadius: '8px' }}>
              <h2 style={{ margin: '0 0 6px 0', fontSize: '18px', color: COLORS.primaryBlue, fontWeight: 'bold' }}>Locally Crafted, Fairly Priced</h2>
              <p style={{ margin: 0, fontSize: '13px', color: COLORS.textDark, lineHeight: '1.5' }}>
                Welcome to our local Nairobi furniture workshop outlet. We build straightforward, solid timber frames and durable fabric seats using local materials. No imported retail markups—just reliable furniture priced transparently in Kenya Shillings.
              </p>
            </div>

            <div>
              <h3 style={{ margin: '0 0 12px 0', fontSize: '13px', fontWeight: 'bold', textTransform: 'uppercase', color: COLORS.textMuted }}>Explore Our Collections</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                
                <div onClick={() => navigateTo('goods')} style={{ cursor: 'pointer', backgroundColor: '#FFFFFF', border: `1px solid ${COLORS.borderLight}`, borderRadius: '8px', overflow: 'hidden', display: 'flex', alignItems: 'center' }}>
                  <img src="https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&w=300&q=80" style={{ width: '80px', height: '80px', objectFit: 'cover' }} alt="Goods" />
                  <div style={{ padding: '16px' }}>
                    <h4 style={{ margin: '0 0 2px 0', fontSize: '14px', fontWeight: 'bold' }}>Individual Goods Catalog</h4>
                    <p style={{ margin: 0, fontSize: '12px', color: COLORS.textMuted }}>View specific available armchairs, tables, and bed frames.</p>
                  </div>
                </div>

                <div onClick={() => navigateTo('rooms')} style={{ cursor: 'pointer', backgroundColor: '#FFFFFF', border: `1px solid ${COLORS.borderLight}`, borderRadius: '8px', overflow: 'hidden', display: 'flex', alignItems: 'center' }}>
                  <img src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=300&q=80" style={{ width: '80px', height: '80px', objectFit: 'cover' }} alt="Spaces" />
                  <div style={{ padding: '16px' }}>
                    <h4 style={{ margin: '0 0 2px 0', fontSize: '14px', fontWeight: 'bold' }}>Curated Space Packages</h4>
                    <p style={{ margin: 0, fontSize: '12px', color: COLORS.textMuted }}>See multi-item room packages optimized between Ksh 80k and 150k.</p>
                  </div>
                </div>

              </div>
            </div>

            <div style={{ borderLeft: `4px solid ${COLORS.primaryBlue}`, backgroundColor: '#FFFFFF', padding: '12px 16px', borderRadius: '0 8px 8px 0', border: `1px solid ${COLORS.borderLight}`, borderLeftColor: COLORS.primaryBlue }}>
              <span style={{ fontSize: '11px', fontWeight: 'bold', color: COLORS.primaryBlue, display: 'block', marginBottom: '2px', letterSpacing: '0.5px' }}>READY FOR WORKSHOP PICKUP</span>
              <p style={{ margin: 0, fontSize: '13px', color: COLORS.textDark }}>Visit our storage yard layout along the Architectural Design Quarter in Nairobi to see these items in person today.</p>
            </div>
          </div>
        )}

        {currentPage === 'goods' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div>
              <h2 style={{ margin: '0 0 4px 0', fontSize: '16px', fontWeight: 'bold' }}>Individual Workshop Goods</h2>
              <p style={{ margin: 0, fontSize: '13px', color: COLORS.textMuted }}>Describing only the exact physical items built and displayed across our local showroom inventory.</p>
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

        {currentPage === 'rooms' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div>
              <h2 style={{ margin: '0 0 4px 0', fontSize: '16px', fontWeight: 'bold' }}>Curated Space Packages</h2>
              <p style={{ margin: 0, fontSize: '13px', color: COLORS.textMuted }}>Four specific, real room combinations engineered for local houses within the Ksh 80,000 to Ksh 150,000 threshold.</p>
            </div>
            {KENYAN_ROOMS.map((room) => (
              <div key={room.id} style={{ backgroundColor: COLORS.cardBg, border: `1px solid ${COLORS.borderLight}`, borderRadius: '8px', overflow: 'hidden' }}>
                <img src={room.imageUrl} alt={room.title} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                <div style={{ padding: '16px' }}>
                  <h3 style={{ margin: '0 0 4px 0', fontSize: '15px', fontWeight: 'bold' }}>{room.title}</h3>
                  <p style={{ margin: '0 0 12px 0', fontSize: '13px', color: COLORS.textMuted, lineHeight: '1.4' }}>{room.description}</p>
                  <div style={{ backgroundColor: '#F9FAFB', padding: '12px', borderRadius: '6px', border: `1px solid ${COLORS.borderLight}` }}>
                    <div style={{ fontSize: '12px', color: COLORS.textDark, marginBottom: '8px', lineHeight: '1.4' }}>
                      <strong>Package Elements:</strong> {room.breakdown}
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: `1px solid ${COLORS.borderLight}`, paddingTop: '8px', fontWeight: 'bold', fontSize: '13px' }}>
                      <span>Combined Package Price:</span>
                      <span style={{ color: COLORS.priceTag }}>{room.total}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {currentPage === 'about' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <h2 style={{ margin: 0, fontSize: '16px', fontWeight: 'bold' }}>Our Local Workshop Story</h2>
            <div style={{ backgroundColor: '#FFFFFF', border: `1px solid ${COLORS.borderLight}`, padding: '16px', borderRadius: '8px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <p style={{ margin: 0, fontSize: '13px', lineHeight: '1.5', color: COLORS.textDark }}>
                Hometown Furniture Mart is a homegrown retail supplier. We source solid timber panels and structural lumber blockboards directly from local yards, moving them straight into our joinery and upholstery workspace.
              </p>
              <p style={{ margin: 0, fontSize: '13px', lineHeight: '1.5', color: COLORS.textDark }}>
                By removing high-cost high-end showroom rents, intermediate import agents, and lavish marketing campaigns, we offer clean, durable, every-day furniture built for residential houses at baseline local prices.
              </p>
            </div>
            
            <div style={{ backgroundColor: '#FFFFFF', border: `1px solid ${COLORS.borderLight}`, padding: '16px', borderRadius: '8px' }}>
              <h3 style={{ margin: '0 0 8px 0', fontSize: '13px', fontWeight: 'bold', color: COLORS.primaryBlue }}>Showroom Location & Timing</h3>
              <p style={{ margin: '0 0 6px 0', fontSize: '13px' }}>📍 <strong>Yard Location:</strong> Block A7, Architectural Design Quarter, Nairobi</p>
              <p style={{ margin: '0 0 6px 0', fontSize: '13px' }}>🕒 <strong>Monday — Friday:</strong> 09:00 AM to 06:00 PM</p>
              <p style={{ margin: '0 0 6px 0', fontSize: '13px' }}>🕒 <strong>Saturdays:</strong> 10:00 AM to 03:00 PM</p>
              <p style={{ margin: 0, fontSize: '13px', color: COLORS.textMuted }}>🚨 <strong>Sundays & Public Holidays:</strong> Closed for yard maintenance & timber restocking</p>
            </div>
          </div>
        )}

      </main>

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
