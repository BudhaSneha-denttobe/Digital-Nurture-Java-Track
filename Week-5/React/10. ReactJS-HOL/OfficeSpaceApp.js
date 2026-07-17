import React from 'react';

export const OfficeSpaceApp = () => {
  // 1. Element to display the heading of the page[cite: 2]
  const element = "Office Space";

  // Image source URL (using a clean placeholder image of an office lobby)
  const sr = "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80";

  // 2. JSX Attribute to display the image[cite: 2]
  const jsxatt = (
    <img 
      src={sr} 
      width="25%" 
      height="25%" 
      alt="Office Space" 
      style={{ borderRadius: '4px', display: 'block', margin: '15px 0' }} 
    />
  );

  // 3. Main Single Office Object[cite: 2]
  const ItemName = { Name: "DBS", Rent: 50000, Address: 'Chennai' }; // cite: 2

  // 4. List of Office Objects to loop through and display more data[cite: 2]
  const officeList = [
    { Name: "DBS", Rent: 50000, Address: 'Chennai' },
    { Name: "Premium Suites", Rent: 75000, Address: 'Bangalore' },
    { Name: "Co-Work Hub", Rent: 45000, Address: 'Hyderabad' },
    { Name: "Smart Tech Parks", Rent: 90000, Address: 'Mumbai' }
  ];

  // Helper function to dynamically choose text colors using the lab's conditional logic[cite: 2]
  // Color the Rent in Red if <= 60000, and Green if > 60000[cite: 2]
  const getRentColor = (rentAmount) => {
    let colors = [];
    if (rentAmount <= 60000) {
      colors.push('red'); // Red color for budget rents[cite: 2]
    } else {
      colors.push('green'); // Green color for premium rents[cite: 2]
    }
    return colors[0];
  };

  return (
    <div style={{ fontFamily: 'sans-serif', padding: '30px', maxWidth: '800px', margin: '0 auto' }}>
      
      {/* --- Part 1: Primary Featured Office (As per Hint Output) --- */}
      <h1>{element} , at Affordable Range</h1> {/* cite: 2 */}
      {jsxatt} {/* cite: 2 */}
      
      <h1 style={{ margin: '10px 0' }}>Name: {ItemName.Name}</h1> {/* cite: 2 */}
      
      {/* Rent styled in Red dynamically because 50000 <= 60000 */}
      <h3 style={{ color: getRentColor(ItemName.Rent), margin: '5px 0' }}>
        Rent: Rs. {ItemName.Rent}
      </h3> {/* cite: 2 */}
      
      <h3 style={{ margin: '5px 0', color: '#555' }}>
        Address: {ItemName.Address}
      </h3> {/* cite: 2 */}

      <hr style={{ margin: '40px 0', border: '0', borderTop: '2px solid #eee' }} />

      {/* --- Part 2: Loop / Map through the Office List data[cite: 2] --- */}
      <h2>Available Office Space Listings</h2>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '20px' }}>
        {officeList.map((office, index) => {
          return (
            <div 
              key={index} 
              style={{ 
                border: '1px solid #ddd', 
                borderRadius: '8px', 
                padding: '15px',
                backgroundColor: '#f9f9f9' 
              }}
            >
              <h3 style={{ marginTop: '0' }}>{office.Name}</h3>
              <p style={{ fontWeight: 'bold', color: getRentColor(office.Rent) }}>
                Rent: Rs. {office.Rent} {/* Dynamic CSS applied[cite: 2] */}
              </p>
              <p style={{ color: '#666', marginBottom: '0' }}>Address: {office.Address}</p>
            </div>
          );
        })}
      </div>

    </div>
  );
};
