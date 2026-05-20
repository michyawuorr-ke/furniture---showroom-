import React, { useState } from 'react';

const COLORS = {
  bgLight: '#F8F9FA',
  cardBg: '#FFFFFF',
  textDark: '#212529',
  textMuted: '#6C757D',
  primaryBlue: '#0D6EFD',
  borderLight: '#DEE2E6',
  priceGreen: '#198754',
  overlay: 'rgba(0, 0, 0, 0.4)'
};

const ORDINARY_GOODS = [
  { id: 'g1', name: 'Comfort 3-Seater Living Room Sofa', price: '$650', dimensions: '84" W × 35" D × 34" H', description: 'A deep-seated family sofa with durable, stain-resistant fabric cushions.', imageUrl: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=600&q=80' },
  { id: 'g2', name: '6-Seater Wooden Dining Table', price: '$450', dimensions: '72" L × 36" W × 30" H', description: 'Sturdy wooden kitchen and dining table with an easy-to-clean veneered top.', imageUrl: 'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=600&q=80' },
  { id: 'g3', name: 'Standard Dining Room Chair', price: '$85', dimensions: '18" W × 20" D × 38" H', description: 'Comfortable high-back wooden chair with a padded fabric seat cushion.', imageUrl: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=600&q=80' },
  { id: 'g4', name: '4-Drawer Bedroom Dresser', price: '$280', dimensions: '36" W × 18" D × 42" H', description: 'Spacious clothing storage drawers with smooth metal glide tracks.', imageUrl: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=600&q=80' },
  { id: 'g5', name: 'Wooden Coffee Table with Shelf', price: '$150', dimensions: '42" L × 22" W × 18" H', description: 'Rectangular center coffee table featuring a handy bottom shelf for storage.', imageUrl: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=600&q=80' },
  { id: 'g6', name: 'Queen Size Wooden Bed Frame', price: '$399', dimensions: '64" W × 85" L × 48" H', description: 'Solid wood headboard and frame slats. No box spring required.', imageUrl: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=600&q=80' },
  { id: 'g7', name: 'Home Office Writing Desk', price: '$199', dimensions: '48" W × 24" D × 30" H', description: 'Simple computer desk with sturdy black metal legs and two storage drawers.', imageUrl: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=600&q=80' },
  { id: 'g8', name: 'Adjustable Mesh Swivel Office Chair', price: '$120', dimensions: '24" W × 24" D × 36" H', description: 'Ergonomic office chair with lumbar support, armrests, and rolling wheels.', imageUrl: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=600&q=80' }
];

const ORDINARY_ROOMS = [
  { id: 'r1', title: 'Complete Living Room Package', description: 'Everything you need to set up a comfortable family sitting area.', total: '$800', breakdown: '1× Comfort Sofa ($650) + 1× Coffee Table ($150)', imageUrl: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80' },
  { id: 'r2', title: 'Full Family Dining Package', description: 'A matching table and chair set perfect for everyday family meals.', total: '$960', breakdown: '1× Dining Table ($450) + 6× Dining Chairs ($510)', imageUrl: 'https://images.unsplash.com/photo-1617806118233-18e1db207f62?auto=format&fit=crop&w=800&q=80' },
  { id: 'r3', title: 'Master Bedroom Package', description: 'Get a clean, matching look for your bedroom with a frame and roomy dresser.', total: '$679', breakdown: '1× Queen Bed Frame ($399) + 1× 4-Drawer Dresser ($280)', imageUrl: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=800&q=80' },
  { id: 'r4', title: 'Work From Home Office Package', description: 'A simple, budget-friendly setup to stay productive at home.', total: '$319', breakdown: '1× Writing Desk ($199) + 1× Mesh Swivel Chair ($120)', imageUrl: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=800&q=80' },
  { id: 'r5', title: 'Kids Study & Sleep Corner', description: 'A space-saving layout designed for children and teenagers bedrooms.', total: '$598', breakdown: '1× Queen Bed Frame ($399) + 1× Writing Desk ($199)', imageUrl: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80' }
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
      
      {/* --- SITE HEADER WITH LEFT HAMBURGER MENU --- */}
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
        {/* THREE LINES HAMBURGER BUTTON */}
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
          <h1 style={{ margin: 0, fontSize: '20px', fontWeight: 'bold', color: COLORS.primaryBlue }}>
            Hometown Furniture Mart
          </h1>
        </div>
      </header>

      {/* --- SIDE MENU OVERLAY DISMISSED ON BACKDROP CLICK --- */}
      {isMenuOpen && (
        <>
          <div 
            onClick={() => setIsMenuOpen(false)}
            style={{
              position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
              backgroundColor: COLORS.overlay, zIndex: 200, transition: 'opacity 0.2s ease-on-out'
            }}
          />
          <div style={{
            position: 'fixed', top: 0, left: 0, width: '280px', height: '100vh',
            backgroundColor: '#FFFFFF', zIndex: 201, boxShadow: '4px 0 12px rgba(0,0,0,0.15)',
            display: 'flex', flexDirection: 'column', padding: '20px', boxSizing: 'border-box'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
              <span style={{ fontWeight: 'bold', fontSize: '16px', color: COLORS.textMuted }}>Navigation Menu</span>
              <button 
                onClick={() => setIsMenuOpen(false)}
                style={{ background: 'none', border: 'none', fontSize: '24px', cursor: 'pointer', color: COLORS.textMuted }}
              >
                &times;
              </button>
            </div>
            
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                { id: 'home', label: '🏠 Store Home Page' },
                { id: 'goods', label: '🛋️ Individual Goods Catalog' },
                { id: 'rooms', label: '📦 Curated Space Bundles' },
                { id: 'about', label: 'ℹ️ About Our Business' }
              ].map((link) => (
                <button
                  key={link.id}
                  onClick={() => navigateTo(link.id)}
                  style={{
                    textAlign: 'left', padding: '12px 16px', borderRadius: '6px',
                    border: 'none', fontSize: '15px', cursor: 'pointer',
                    fontWeight: currentPage === link.id ? 'bold' : 'normal',
                    backgroundColor: currentPage === link.id ? '#EBF3FF' : 'transparent',
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

      {/* --- PAGES CONTROLLER WORKSPACE --- */}
      <main style={{ padding: '20px', flexGrow: 1, maxWidth: '600px', width: '100%', margin: '0 auto', boxSizing: 'border-box' }}>
        
        {/* VIEW 1: HOME PAGE */}
        {currentPage === 'home' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ backgroundColor: '#EBF3FF', border: `1px solid ${COLORS.borderLight}`, padding: '24px', borderRadius: '8px', textAlign: 'center' }}>
              <h2 style={{ margin: '0 0 8px 0', fontSize: '20px', color: COLORS.primaryBlue }}>Welcome to Our Showroom!</h2>
              <p style={{ margin: 0, fontSize: '14px', color: COLORS.textDark, lineHeight: '1.5' }}>
                We provide affordable, everyday home furniture that is built to last. Browse our straightforward catalog of items or save directly by choosing one of our combined family room bundles.
              </p>
            </div>
            
            <h3 style={{ margin: '10px 0 0 0', fontSize: '16px', fontWeight: 'bold' }}>Featured Value Items</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {ORDINARY_GOODS.slice(0, 2).map((item) => (
                <div key={item.id} style={{ backgroundColor: COLORS.cardBg, border: `1px solid ${COLORS.borderLight}`, borderRadius: '8px', overflow: 'hidden', display: 'flex', height: '100px' }}>
                  <img src={item.imageUrl} alt={item.name} style={{ width: '100px', height: '100%', objectFit: 'cover' }} />
                  <div style={{ padding: '12px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '4px' }}>
                    <h4 style={{ margin: 0, fontSize: '14px', fontWeight: 'bold' }}>{item.name}</h4>
                    <span style={{ fontSize: '15px', fontWeight: 'bold', color: COLORS.priceGreen }}>{item.price}</span>
                  </div>
                </div>
              ))}
            </div>
            
            <button 
              onClick={() => navigateTo('goods')}
              style={{ backgroundColor: COLORS.primaryBlue, color: '#FFFFFF', border: 'none', padding: '12px', borderRadius: '6px', fontWeight: 'bold', fontSize: '14px', cursor: 'pointer' }}
            >
              View Full Furniture Catalog &rarr;
            </button>
          </div>
        )}

        {/* VIEW 2: GOODS CATALOG PAGE */}
        {currentPage === 'goods' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ marginBottom: '4px' }}>
              <h2 style={{ margin: '0 0 4px 0', fontSize: '18px', fontWeight: 'bold' }}>Individual Goods</h2>
              <p style={{ margin: 0, fontSize: '13px', color: COLORS.textMuted }}>Showing all 8 standard warehouse furniture pieces available for local pickup.</p>
            </div>
            {ORDINARY_GOODS.map((item) => (
              <div key={item.id} style={{ backgroundColor: COLORS.cardBg, border: `1px solid ${COLORS.borderLight}`, borderRadius: '8px', overflow: 'hidden' }}>
                <img src={item.imageUrl} alt={item.name} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h3 style={{ margin: 0, fontSize: '15px', fontWeight: 'bold' }}>{item.name}</h3>
                    <span style={{ fontSize: '16px', fontWeight: 'bold', color: COLORS.priceGreen }}>{item.price}</span>
                  </div>
                  <p style={{ margin: 0, fontSize: '13px', color: COLORS.textDark, lineHeight: '1.4' }}>{item.description}</p>
                  <div style={{ fontSize: '12px', color: COLORS.textMuted, backgroundColor: '#F8F9FA', padding: '6px 10px', borderRadius: '4px' }}>
                    <strong>Size Dimensions:</strong> {item.dimensions}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* VIEW 3: CURATED SPACE PAGE */}
        {currentPage === 'rooms' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ marginBottom: '4px' }}>
              <h2 style={{ margin: '0 0 4px 0', fontSize: '18px', fontWeight: 'bold' }}>Combined Room Packages</h2>
              <p style={{ margin: 0, fontSize: '13px', color: COLORS.textMuted }}>Save money on transportation and retail markups by purchasing a complete flat-pack bundle.</p>
            </div>
            {ORDINARY_ROOMS.map((room) => (
              <div key={room.id} style={{ backgroundColor: COLORS.cardBg, border: `1px solid ${COLORS.borderLight}`, borderRadius: '8px', overflow: 'hidden' }}>
                <img src={room.imageUrl} alt={room.title} style={{ width: '100%', height: '180px', objectFit: 'cover' }} />
                <div style={{ padding: '16px' }}>
                  <h3 style={{ margin: '0 0 6px 0', fontSize: '15px', fontWeight: 'bold' }}>{room.title}</h3>
                  <p style={{ margin: '0 0 12px 0', fontSize: '13px', color: COLORS.textMuted }}>{room.description}</p>
                  <div style={{ backgroundColor: '#F8F9FA', padding: '12px', borderRadius: '6px', border: `1px solid ${COLORS.borderLight}` }}>
                    <div style={{ fontSize: '12px', color: COLORS.textDark, marginBottom: '8px' }}>
                      <strong>Included Items:</strong> {room.breakdown}
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: `1px solid ${COLORS.borderLight}`, paddingTop: '8px', fontWeight: 'bold', fontSize: '13px' }}>
                      <span>Bundle Total Price:</span>
                      <span style={{ color: COLORS.priceGreen }}>{room.total}</span>
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
            <h2 style={{ margin: 0, fontSize: '18px', fontWeight: 'bold' }}>About Our Business</h2>
            <div style={{ backgroundColor: '#FFFFFF', border: `1px solid ${COLORS.borderLight}`, padding: '16px', borderRadius: '8px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <p style={{ margin: 0, fontSize: '14px', lineHeight: '1.5', color: COLORS.textDark }}>
                At Hometown Furniture Mart, we believe setting up a home shouldn't break the bank. We stock dependable, flat-pack wood and metal frames directly from trusted manufacturing lines. 
              </p>
              <p style={{ margin: 0, fontSize: '14px', lineHeight: '1.5', color: COLORS.textDark }}>
                By avoiding premium brand markups, high-end gallery retail spaces, and expensive luxury fabrics, we keep our operational overhead extremely low so we can pass those savings straight to our customers.
              </p>
            </div>
            
            <div style={{ backgroundColor: '#FFFFFF', border: `1px solid ${COLORS.borderLight}`, padding: '16px', borderRadius: '8px' }}>
              <h3 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: 'bold' }}>Warehouse Location & Hours</h3>
              <p style={{ margin: '0 0 4px 0', fontSize: '13px' }}><strong>Address:</strong> Block A7, Architectural Design Quarter, Nairobi</p>
              <p style={{ margin: '0 0 4px 0', fontSize: '13px' }}><strong>Monday — Friday:</strong> 09:00 - 18:00</p>
              <p style={{ margin: '0 0 4px 0', fontSize: '13px' }}><strong>Saturday Sessions:</strong> 10:00 - 15:00</p>
              <p style={{ margin: 0, fontSize: '13px', color: COLORS.textMuted }}><strong>Sundays & Holidays:</strong> Closed for inventory restocking</p>
            </div>
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
      </footer>

    </div>
  );
}
