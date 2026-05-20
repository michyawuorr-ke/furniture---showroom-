import React, { useState } from 'react';

// Practical Home Furniture Store Palette
const COLORS = {
  bgLight: '#F8F9FA',
  cardBg: '#FFFFFF',
  textDark: '#212529',
  textMuted: '#6C757D',
  primaryBlue: '#0D6EFD',
  borderLight: '#DEE2E6',
  
  // Everyday Fabric Options
  fabricGray: '#8F9499',
  fabricBeige: '#E1D7C6',
  fabricBrown: '#655447',
  woodOak: '#D3A26A',
  woodWalnut: '#4F3A2F',
  woodWhite: '#FFFFFF'
};

// Data Model 1: Exactly 8 Everyday Furniture Items with Realistic Prices
const ORDINARY_GOODS = [
  {
    id: 'g1',
    name: 'Comfort 3-Seater Living Room Sofa',
    price: '$650',
    category: 'Sofa',
    dimensions: '84" W × 35" D × 34" H',
    description: 'A deep-seated family sofa with durable, stain-resistant fabric cushions.',
    imageUrl: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=600&q=80',
    options: [
      { name: 'Charcoal Gray', hex: COLORS.fabricGray },
      { name: 'Classic Beige', hex: COLORS.fabricBeige },
      { name: 'Chocolate Brown', hex: COLORS.fabricBrown }
    ]
  },
  {
    id: 'g2',
    name: '6-Seater Wooden Dining Table',
    price: '$450',
    category: 'Table',
    dimensions: '72" L × 36" W × 30" H',
    description: 'Sturdy wooden kitchen and dining table with an easy-to-clean veneered top.',
    imageUrl: 'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=600&q=80',
    options: [
      { name: 'Honey Oak Wood', hex: COLORS.woodOak },
      { name: 'Dark Walnut Wood', hex: COLORS.woodWalnut }
    ]
  },
  {
    id: 'g3',
    name: 'Standard Dining Room Chair',
    price: '$85',
    category: 'Chair',
    dimensions: '18" W × 20" D × 38" H',
    description: 'Comfortable high-back wooden chair with a padded fabric seat cushion.',
    imageUrl: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=600&q=80',
    options: [
      { name: 'Beige Cushion / Oak', hex: COLORS.fabricBeige },
      { name: 'Gray Cushion / Walnut', hex: COLORS.fabricGray }
    ]
  },
  {
    id: 'g4',
    name: '4-Drawer Bedroom Dresser',
    price: '$280',
    category: 'Storage',
    dimensions: '36" W × 18" D × 42" H',
    description: 'Spacious clothing storage drawers with smooth metal glide tracks.',
    imageUrl: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=600&q=80',
    options: [
      { name: 'Dark Walnut', hex: COLORS.woodWalnut },
      { name: 'Classic White', hex: COLORS.woodWhite }
    ]
  },
  {
    id: 'g5',
    name: 'Wooden Coffee Table with Shelf',
    price: '$150',
    category: 'Table',
    dimensions: '42" L × 22" W × 18" H',
    description: 'Rectangular center coffee table featuring a handy bottom shelf for magazines and remotes.',
    imageUrl: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=600&q=80',
    options: [
      { name: 'Honey Oak', hex: COLORS.woodOak },
      { name: 'Dark Walnut', hex: COLORS.woodWalnut }
    ]
  },
  {
    id: 'g6',
    name: 'Queen Size Wooden Bed Frame',
    price: '$399',
    category: 'Bed',
    dimensions: '64" W × 85" L × 48" H',
    description: 'Solid wood headboard and frame slats. No box spring required.',
    imageUrl: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=600&q=80',
    options: [
      { name: 'Honey Oak', hex: COLORS.woodOak },
      { name: 'Dark Walnut', hex: COLORS.woodWalnut },
      { name: 'Classic White', hex: COLORS.woodWhite }
    ]
  },
  {
    id: 'g7',
    name: 'Home Office Writing Desk',
    price: '$199',
    category: 'Desk',
    dimensions: '48" W × 24" D × 30" H',
    description: 'Simple computer desk with sturdy black metal legs and two storage drawers.',
    imageUrl: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=600&q=80',
    options: [
      { name: 'Oak Top', hex: COLORS.woodOak },
      { name: 'White Top', hex: COLORS.woodWhite }
    ]
  },
  {
    id: 'g8',
    name: 'Adjustable Mesh Swivel Office Chair',
    price: '$120',
    category: 'Chair',
    dimensions: '24" W × 24" D × 36"-40" H',
    description: 'Ergonomic office chair with lumbar support, armrests, and smooth rolling wheels.',
    imageUrl: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=600&q=80',
    options: [
      { name: 'Standard Black Mesh', hex: '#212529' }
    ]
  }
];

// Data Model 2: Exactly 5 Regular Family Room Bundles with Price Adding
const ORDINARY_ROOMS = [
  {
    id: 'r1',
    title: 'Complete Living Room Package',
    description: 'Everything you need to set up a comfortable family sitting area.',
    imageUrl: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80',
    items: [
      { name: '1× Comfort 3-Seater Sofa', cost: '$650' },
      { name: '1× Wooden Coffee Table', cost: '$150' }
    ],
    total: '$800'
  },
  {
    id: 'r2',
    title: 'Full Family Dining Package',
    description: 'A matching table and chair set perfect for everyday family meals.',
    imageUrl: 'https://images.unsplash.com/photo-1617806118233-18e1db207f62?auto=format&fit=crop&w=800&q=80',
    items: [
      { name: '1× 6-Seater Wooden Dining Table', cost: '$450' },
      { name: '6× Standard Dining Room Chairs', cost: '$510' }
    ],
    total: '$960'
  },
  {
    id: 'r3',
    title: 'Master Bedroom Package',
    description: 'Get a clean, matching look for your bedroom with a frame and roomy dresser.',
    imageUrl: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=800&q=80',
    items: [
      { name: '1× Queen Size Bed Frame', cost: '$399' },
      { name: '1× 4-Drawer Bedroom Dresser', cost: '$280' }
    ],
    total: '$679'
  },
  {
    id: 'r4',
    title: 'Work From Home Office Package',
    description: 'A simple, budget-friendly setup to stay productive at home.',
    imageUrl: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=800&q=80',
    items: [
      { name: '1× Home Office Writing Desk', cost: '$199' },
      { name: '1× Adjustable Swivel Chair', cost: '$120' }
    ],
    total: '$319'
  },
  {
    id: 'r5',
    title: 'Kids Study & Sleep Corner',
    description: 'A space-saving setup designed for children and teenagers.',
    imageUrl: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80',
    items: [
      { name: '1× Queen Bed Frame (Used as Twin Single)', cost: '$399' },
      { name: '1× Home Office Writing Desk', cost: '$199' }
    ],
    total: '$598'
  }
];

export default function App() {
  const [currentTab, setCurrentTab] = useState('goods'); // goods = 8 individual items, rooms = 5 bundle deals
  
  // Tracks color choices for all 8 items individually
  const [selectedColors, setSelectedColors] = useState({
    g1: ORDINARY_GOODS[0].options[0],
    g2: ORDINARY_GOODS[1].options[0],
    g3: ORDINARY_GOODS[2].options[0],
    g4: ORDINARY_GOODS[3].options[0],
    g5: ORDINARY_GOODS[4].options[0],
    g6: ORDINARY_GOODS[5].options[0],
    g7: ORDINARY_GOODS[6].options[0],
    g8: ORDINARY_GOODS[7].options[0]
  });

  const handleColorChange = (itemId, choice) => {
    setSelectedColors(prev => ({ ...prev, [itemId]: choice }));
  };

  return (
    <div style={{
      backgroundColor: COLORS.bgLight,
      color: COLORS.textDark,
      fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      boxSizing: 'border-box'
    }}>

      {/* --- STANDARD HEADER --- */}
      <header style={{
        backgroundColor: '#FFFFFF',
        borderBottom: `1px solid ${COLORS.borderLight}`,
        padding: '16px 20px',
        textAlign: 'center',
        position: 'sticky',
        top: 0,
        zIndex: 10
      }}>
        <h1 style={{ margin: '0 0 4px 0', fontSize: '22px', fontWeight: 'bold', color: COLORS.primaryBlue }}>
          Hometown Furniture Mart
        </h1>
        <p style={{ margin: 0, fontSize: '13px', color: COLORS.textMuted }}>
          Quality Furniture for Every Room at Prices You Can Afford
        </p>
      </header>

      {/* --- SUB-NAVIGATION TABS --- */}
      <div style={{
        display: 'flex',
        borderBottom: `1px solid ${COLORS.borderLight}`,
        backgroundColor: '#FFFFFF'
      }}>
        <button
          onClick={() => setCurrentTab('goods')}
          style={{
            flex: 1,
            padding: '14px',
            background: 'none',
            border: 'none',
            fontSize: '14px',
            fontWeight: currentTab === 'goods' ? 'bold' : 'normal',
            color: currentTab === 'goods' ? COLORS.primaryBlue : COLORS.textDark,
            borderBottom: currentTab === 'goods' ? `3px solid ${COLORS.primaryBlue}` : '3px solid transparent',
            cursor: 'pointer'
          }}
        >
          Individual Items (8 Products)
        </button>
        <button
          onClick={() => setCurrentTab('rooms')}
          style={{
            flex: 1,
            padding: '14px',
            background: 'none',
            border: 'none',
            fontSize: '14px',
            fontWeight: currentTab === 'rooms' ? 'bold' : 'normal',
            color: currentTab === 'rooms' ? COLORS.primaryBlue : COLORS.textDark,
            borderBottom: currentTab === 'rooms' ? `3px solid ${COLORS.primaryBlue}` : '3px solid transparent',
            cursor: 'pointer'
          }}
        >
          Room Package Deals (5 Spaces)
        </button>
      </div>

      {/* --- MAIN VALUE SHOWCASE --- */}
      <main style={{ padding: '20px', flexGrow: 1, maxWidth: '600px', width: '100%', margin: '0 auto', boxSizing: 'border-box' }}>
        
        {/* TAB 1: SHOWCASE OF 8 INDIVIDUAL ITEMS */}
        {currentTab === 'goods' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ marginBottom: '4px' }}>
              <h2 style={{ fontSize: '18px', margin: '0 0 4px 0' }}>Our Product Catalog</h2>
              <p style={{ margin: 0, fontSize: '13px', color: COLORS.textMuted }}>Browse our standard store inventory below. Tap color circles to switch fabric or wood stains.</p>
            </div>

            {ORDINARY_GOODS.map((item) => (
              <div key={item.id} style={{
                backgroundColor: COLORS.cardBg,
                border: `1px solid ${COLORS.borderLight}`,
                borderRadius: '8px',
                overflow: 'hidden',
                boxShadow: '0 2px 4px rgba(0,0,0,0.02)'
              }}>
                {/* Product Image */}
                <div style={{ width: '100%', height: '200px', backgroundColor: '#EEE' }}>
                  <img 
                    src={item.imageUrl} 
                    alt={item.name} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                  />
                </div>

                {/* Product Text Details */}
                <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h3 style={{ margin: 0, fontSize: '16px', fontWeight: 'bold' }}>{item.name}</h3>
                    <span style={{ fontSize: '18px', fontWeight: 'bold', color: '#198754' }}>{item.price}</span>
                  </div>

                  <p style={{ margin: 0, fontSize: '13px', color: COLORS.textDark, lineHeight: '1.4' }}>
                    {item.description}
                  </p>

                  <div style={{ fontSize: '12px', color: COLORS.textMuted, backgroundColor: '#F8F9FA', padding: '6px 10px', borderRadius: '4px', marginTop: '4px' }}>
                    <strong>Dimensions:</strong> {item.dimensions} | <strong>Type:</strong> {item.category}
                  </div>

                  {/* Color Changer Area */}
                  {item.options.length > 1 && (
                    <div style={{ borderTop: `1px solid ${COLORS.borderLight}`, paddingTop: '10px', marginTop: '4px' }}>
                      <span style={{ fontSize: '12px', color: COLORS.textMuted, display: 'block', marginBottom: '6px' }}>
                        Selected Color/Finish: <strong>{selectedColors[item.id].name}</strong>
                      </span>
                      <div style={{ display: 'flex', gap: '12px' }}>
                        {item.options.map((option) => (
                          <button
                            key={option.name}
                            onClick={() => handleColorChange(item.id, option)}
                            style={{
                              width: '24px',
                              height: '24px',
                              borderRadius: '50%',
                              backgroundColor: option.hex,
                              border: selectedColors[item.id].name === option.name ? `2px solid ${COLORS.primaryBlue}` : '1px solid #CCC',
                              cursor: 'pointer',
                              padding: 0
                            }}
                            title={option.name}
                          />
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* TAB 2: SHOWCASE OF 5 ROOM PACKAGES WITH ACCURATE CALCULATION BREAKDOWNS */}
        {currentTab === 'rooms' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div>
              <h2 style={{ fontSize: '18px', margin: '0 0 4px 0' }}>Bundle & Save Deals</h2>
              <p style={{ margin: 0, fontSize: '13px', color: COLORS.textMuted }}>Furnish entire sections of your house in one go. Check our regular price item audits below.</p>
            </div>

            {ORDINARY_ROOMS.map((room, idx) => (
              <div key={room.id} style={{
                backgroundColor: COLORS.cardBg,
                border: `1px solid ${COLORS.borderLight}`,
                borderRadius: '8px',
                overflow: 'hidden',
                boxShadow: '0 2px 4px rgba(0,0,0,0.02)'
              }}>
                {/* Room Layout Image */}
                <div style={{ width: '100%', height: '180px', backgroundColor: '#EEE' }}>
                  <img 
                    src={room.imageUrl} 
                    alt={room.title} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                  />
                </div>

                <div style={{ padding: '16px' }}>
                  <span style={{ fontSize: '11px', color: COLORS.primaryBlue, fontWeight: 'bold', textTransform: 'uppercase' }}>
                    Package Option 0{idx + 1}
                  </span>
                  <h3 style={{ margin: '2px 0 6px 0', fontSize: '16px', fontWeight: 'bold' }}>{room.title}</h3>
                  <p style={{ margin: '0 0 14px 0', fontSize: '13px', color: COLORS.textMuted, lineHeight: '1.4' }}>{room.description}</p>

                  {/* Simple Retail Receipt List */}
                  <div style={{ backgroundColor: '#F8F9FA', padding: '12px', borderRadius: '6px', border: `1px solid ${COLORS.borderLight}` }}>
                    <span style={{ fontSize: '11px', color: COLORS.textMuted, fontWeight: 'bold', display: 'block', marginBottom: '6px', textTransform: 'uppercase' }}>
                      Price Details:
                    </span>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      {room.items.map((sub, sIdx) => (
                        <div key={sIdx} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px' }}>
                          <span>{sub.name}</span>
                          <span style={{ fontWeight: '500' }}>{sub.cost}</span>
                        </div>
                      ))}
                    </div>

                    {/* Simple Bottom Line Calculation */}
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      marginTop: '12px',
                      paddingTop: '8px',
                      borderTop: `1px solid ${COLORS.borderLight}`,
                      fontWeight: 'bold',
                      fontSize: '14px'
                    }}>
                      <span>Total Package Price:</span>
                      <span style={{ color: '#198754' }}>{room.total}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

      </main>

      {/* --- STANDARD RETAIL CONTACT FOOTER --- */}
      <footer style={{
        backgroundColor: '#FFFFFF',
        borderTop: `1px solid ${COLORS.borderLight}`,
        padding: '16px 20px',
        textAlign: 'center',
        marginTop: 'auto'
      }}>
        <p style={{ margin: '0 0 6px 0', fontSize: '13px', fontWeight: 'bold' }}>
          Questions? Call or text our store floor desk
        </p>
        <button
          onClick={() => window.open('https://wa.me/254700000000?text=Hi%2C%20I%20am%20checking%20out%20your%20furniture%20website%20and%20had%20a%20question%20about%20your%20stock.', '_blank')}
          style={{
            backgroundColor: '#198754',
            color: '#FFFFFF',
            border: 'none',
            padding: '12px 20px',
            borderRadius: '6px',
            fontSize: '13px',
            fontWeight: 'bold',
            cursor: 'pointer',
            width: '100%',
            maxWidth: '300px'
          }}
        >
          Message Customer Support
        </button>
        <div style={{ fontSize: '11px', color: COLORS.textMuted, marginTop: '12px' }}>
          Open Mon-Sat: 9am - 6pm | Closed Sundays
        </div>
      </footer>
    </div>
  );
}
