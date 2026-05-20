import React, { useState } from 'react';

// Simple, non-premium colors for an everyday retail store
const COLORS = {
  bgLight: '#F8F9FA',
  cardBg: '#FFFFFF',
  textDark: '#212529',
  textMuted: '#6C757D',
  primaryBlue: '#0D6EFD',
  borderLight: '#DEE2E6',
  priceGreen: '#198754'
};

// Hardcoded everyday products - strictly 8 items with regular retail pricing
const ORDINARY_GOODS = [
  {
    id: 'g1',
    name: 'Comfort 3-Seater Living Room Sofa',
    price: '$650',
    dimensions: '84" W × 35" D × 34" H',
    description: 'A deep-seated family sofa with durable, stain-resistant fabric cushions.',
    imageUrl: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'g2',
    name: '6-Seater Wooden Dining Table',
    price: '$450',
    dimensions: '72" L × 36" W × 30" H',
    description: 'Sturdy wooden kitchen and dining table with an easy-to-clean veneered top.',
    imageUrl: 'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'g3',
    name: 'Standard Dining Room Chair',
    price: '$85',
    dimensions: '18" W × 20" D × 38" H',
    description: 'Comfortable high-back wooden chair with a padded fabric seat cushion.',
    imageUrl: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'g4',
    name: '4-Drawer Bedroom Dresser',
    price: '$280',
    dimensions: '36" W × 18" D × 42" H',
    description: 'Spacious clothing storage drawers with smooth metal glide tracks.',
    imageUrl: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'g5',
    name: 'Wooden Coffee Table with Shelf',
    price: '$150',
    dimensions: '42" L × 22" W × 18" H',
    description: 'Rectangular center coffee table featuring a handy bottom shelf for storage.',
    imageUrl: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'g6',
    name: 'Queen Size Wooden Bed Frame',
    price: '$399',
    dimensions: '64" W × 85" L × 48" H',
    description: 'Solid wood headboard and frame slats. No box spring required.',
    imageUrl: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'g7',
    name: 'Home Office Writing Desk',
    price: '$199',
    dimensions: '48" W × 24" D × 30" H',
    description: 'Simple computer desk with sturdy black metal legs and two storage drawers.',
    imageUrl: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'g8',
    name: 'Adjustable Mesh Swivel Office Chair',
    price: '$120',
    dimensions: '24" W × 24" D × 36" H',
    description: 'Ergonomic office chair with lumbar support, armrests, and rolling wheels.',
    imageUrl: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=600&q=80'
  }
];

// Hardcoded everyday packages - strictly 5 spaces with clear calculation math
const ORDINARY_ROOMS = [
  {
    id: 'r1',
    title: 'Complete Living Room Package',
    description: 'Everything you need to set up a comfortable family sitting area.',
    total: '$800',
    breakdown: '1× Comfort Sofa ($650) + 1× Coffee Table ($150)',
    imageUrl: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'r2',
    title: 'Full Family Dining Package',
    description: 'A matching table and chair set perfect for everyday family meals.',
    total: '$960',
    breakdown: '1× Dining Table ($450) + 6× Dining Chairs ($510)',
    imageUrl: 'https://images.unsplash.com/photo-1617806118233-18e1db207f62?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'r3',
    title: 'Master Bedroom Package',
    description: 'Get a clean, matching look for your bedroom with a frame and roomy dresser.',
    total: '$679',
    breakdown: '1× Queen Bed Frame ($399) + 1× 4-Drawer Dresser ($280)',
    imageUrl: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'r4',
    title: 'Work From Home Office Package',
    description: 'A simple, budget-friendly setup to stay productive at home.',
    total: '$319',
    breakdown: '1× Writing Desk ($199) + 1× Mesh Swivel Chair ($120)',
    imageUrl: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'r5',
    title: 'Kids Study & Sleep Corner',
    description: 'A space-saving layout designed for children and teenagers bedrooms.',
    total: '$598',
    breakdown: '1× Queen Bed Frame ($399) + 1× Writing Desk ($199)',
    imageUrl: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80'
  }
];

export default function App() {
  const [activeTab, setActiveTab] = useState('goods');

  return (
    <div style={{
      backgroundColor: COLORS.bgLight,
      color: COLORS.textDark,
      fontFamily: 'system-ui, -apple-system, sans-serif',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column'
    }}>
      
      {/* --- PLAIN STOREFRONT HEADER --- */}
      <header style={{ backgroundColor: '#FFFFFF', borderBottom: `1px solid ${COLORS.borderLight}`, padding: '20px', textAlign: 'center' }}>
        <h1 style={{ margin: '0 0 6px 0', fontSize: '24px', fontWeight: 'bold', color: COLORS.primaryBlue }}>
          Hometown Furniture Mart
        </h1>
        <p style={{ margin: 0, fontSize: '14px', color: COLORS.textMuted }}>
          Simple Home Furniture. Good Values. Affordable Delivery.
        </p>
      </header>

      {/* --- TAB SWITCHER --- */}
      <div style={{ display: 'flex', borderBottom: `1px solid ${COLORS.borderLight}`, backgroundColor: '#FFFFFF' }}>
        <button 
          onClick={() => setActiveTab('goods')} 
          style={{ flex: 1, padding: '14px', background: 'none', border: 'none', fontSize: '14px', fontWeight: activeTab === 'goods' ? 'bold' : 'normal', color: activeTab === 'goods' ? COLORS.primaryBlue : COLORS.textDark, borderBottom: activeTab === 'goods' ? `3px solid ${COLORS.primaryBlue}` : '3px solid transparent', cursor: 'pointer' }}
        >
          Individual Goods (8 Items)
        </button>
        <button 
          onClick={() => setActiveTab('rooms')} 
          style={{ flex: 1, padding: '14px', background: 'none', border: 'none', fontSize: '14px', fontWeight: activeTab === 'rooms' ? 'bold' : 'normal', color: activeTab === 'rooms' ? COLORS.primaryBlue : COLORS.textDark, borderBottom: activeTab === 'rooms' ? `3px solid ${COLORS.primaryBlue}` : '3px solid transparent', cursor: 'pointer' }}
        >
          Curated Spaces (5 Packages)
        </button>
      </div>

      {/* --- CONTENT WORKSPACE --- */}
      <main style={{ padding: '20px', flexGrow: 1, maxWidth: '600px', width: '100%', margin: '0 auto', boxSizing: 'border-box' }}>
        
        {/* DISPLAY INDIVIDUAL ITEMS */}
        {activeTab === 'goods' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {ORDINARY_GOODS.map((item) => (
              <div key={item.id} style={{ backgroundColor: COLORS.cardBg, border: `1px solid ${COLORS.borderLight}`, borderRadius: '8px', overflow: 'hidden' }}>
                <div style={{ width: '100%', height: '200px', backgroundColor: '#EEE' }}>
                  <img src={item.imageUrl} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h3 style={{ margin: 0, fontSize: '16px', fontWeight: 'bold' }}>{item.name}</h3>
                    <span style={{ fontSize: '18px', fontWeight: 'bold', color: COLORS.priceGreen }}>{item.price}</span>
                  </div>
                  <p style={{ margin: 0, fontSize: '13px', color: COLORS.textDark, lineHeight: '1.4' }}>{item.description}</p>
                  <div style={{ fontSize: '12px', color: COLORS.textMuted, backgroundColor: '#F8F9FA', padding: '6px 10px', borderRadius: '4px' }}>
                    <strong>Size:</strong> {item.dimensions}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* DISPLAY CURATED ROOM BUNDLES */}
        {activeTab === 'rooms' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {ORDINARY_ROOMS.map((room) => (
              <div key={room.id} style={{ backgroundColor: COLORS.cardBg, border: `1px solid ${COLORS.borderLight}`, borderRadius: '8px', overflow: 'hidden' }}>
                <div style={{ width: '100%', height: '180px', backgroundColor: '#EEE' }}>
                  <img src={room.imageUrl} alt={room.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ padding: '16px' }}>
                  <h3 style={{ margin: '0 0 6px 0', fontSize: '16px', fontWeight: 'bold' }}>{room.title}</h3>
                  <p style={{ margin: '0 0 12px 0', fontSize: '13px', color: COLORS.textMuted }}>{room.description}</p>
                  <div style={{ backgroundColor: '#F8F9FA', padding: '12px', borderRadius: '6px', border: `1px solid ${COLORS.borderLight}` }}>
                    <div style={{ fontSize: '12px', color: COLORS.textDark, marginBottom: '8px' }}>
                      <strong>Price Tally:</strong> {room.breakdown}
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: `1px solid ${COLORS.borderLight}`, paddingTop: '8px', fontWeight: 'bold', fontSize: '14px' }}>
                      <span>Total Bundle Price:</span>
                      <span style={{ color: COLORS.priceGreen }}>{room.total}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

      </main>

      {/* --- ORDINARY SERVICE AREA FOOTER --- */}
      <footer style={{ backgroundColor: '#FFFFFF', borderTop: `1px solid ${COLORS.borderLight}`, padding: '20px', textAlign: 'center', marginTop: 'auto' }}>
        <p style={{ margin: '0 0 10px 0', fontSize: '13px', fontWeight: 'bold', color: COLORS.textDark }}>
          Have stock questions? Contact our customer support desk directly
        </p>
        <button 
          onClick={() => window.open('https://wa.me/254700000000', '_blank')} 
          style={{ backgroundColor: COLORS.priceGreen, color: '#FFFFFF', border: 'none', padding: '12px 24px', borderRadius: '6px', fontSize: '13px', fontWeight: 'bold', width: '100%', maxWidth: '280px', cursor: 'pointer' }}
        >
          Message Local Store Support
        </button>
        <div style={{ fontSize: '11px', color: COLORS.textMuted, marginTop: '10px' }}>
          Store Hours: Mon-Sat 9am - 6pm | Delivery available locally
        </div>
      </footer>

    </div>
  );
}
