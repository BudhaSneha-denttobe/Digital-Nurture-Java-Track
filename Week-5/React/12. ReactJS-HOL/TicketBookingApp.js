import React, { useState } from 'react';

// --- Hint Components ---
function LoginButton(props) {
  return (
    <button onClick={props.onClick} style={btnStyle}>
      Login
    </button>
  );
} // cite: 4

function LogoutButton(props) {
  return (
    <button onClick={props.onClick} style={btnStyle}>
      Logout
    </button>
  );
} // cite: 4

function UserGreeting() {
  return <h1 style={greetingStyle}>Welcome back</h1>;
}

function GuestGreeting() {
  return <h1 style={greetingStyle}>Please sign up.</h1>;
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn; // cite: 4
  if (isLoggedIn) {
    return <UserGreeting />; // cite: 4
  }
  return <GuestGreeting />; // cite: 4
}

export const TicketBookingApp = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const flights = [
    { id: "FL101", from: "Mumbai", to: "Delhi", time: "08:00 AM", price: "Rs. 5500" },
    { id: "FL202", from: "Chennai", to: "Bangalore", time: "11:30 AM", price: "Rs. 3200" },
    { id: "FL303", from: "Hyderabad", to: "Mumbai", time: "03:15 PM", price: "Rs. 4800" }
  ];

  const handleLoginClick = () => setIsLoggedIn(true);
  const handleLogoutClick = () => setIsLoggedIn(false);
  const handleBookTicket = (id) => alert(`Success! Ticket for Flight ${id} booked.`);

  // Using an Element Variable to decide which button to render[cite: 4]
  let button;
  if (isLoggedIn) {
    button = <LogoutButton onClick={handleLogoutClick} />; // cite: 4
  } else {
    button = <LoginButton onClick={handleLoginClick} />; // cite: 4
  }

  return (
    <div style={containerStyle}>
      <Greeting isLoggedIn={isLoggedIn} /> {/* cite: 4 */}
      <div style={{ marginBottom: '30px' }}>
        {button}
      </div>

      <hr style={{ border: '0', borderTop: '1px solid #ddd', margin: '30px 0' }} />

      <h2 style={{ color: '#2c3e50', marginBottom: '20px' }}>Available Flights</h2>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        {flights.map((flight) => (
          <div key={flight.id} style={cardStyle}>
            <div>
              <h4 style={{ margin: '0 0 5px 0' }}>Flight {flight.id}: {flight.from} ➔ {flight.to}</h4>
              <p style={{ margin: '0', fontSize: '14px', color: '#7f8c8d' }}>
                Departure: {flight.time} | Price: <strong>{flight.price}</strong>
              </p>
            </div>

            {/* Book tickets only if logged in[cite: 4] */}
            {isLoggedIn ? (
              <button onClick={() => handleBookTicket(flight.id)} style={bookBtnStyle}>
                Book Ticket
              </button>
            ) : (
              <span style={badgeStyle}>Log in to Book</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

// Styling Objects
const containerStyle = { fontFamily: 'sans-serif', padding: '40px', maxWidth: '800px', margin: '0 auto' };
const greetingStyle = { fontSize: '36px', fontWeight: 'bold', color: '#000', margin: '0 0 15px 0' };
const btnStyle = { padding: '5px 15px', fontSize: '14px', backgroundColor: '#f0f0f0', border: '1px solid #a0a0a0', borderRadius: '2px', cursor: 'pointer' };
const cardStyle = { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px', border: '1px solid #ddd', borderRadius: '6px' };
const bookBtnStyle = { backgroundColor: '#27ae60', color: '#fff', border: 'none', padding: '8px 16px', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' };
const badgeStyle = { backgroundColor: '#f1f2f6', color: '#7f8c8d', padding: '6px 12px', borderRadius: '4px', fontSize: '13px', border: '1px dashed #ccc' };
