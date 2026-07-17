import React from 'react';

export const CalculateScore = ({ Name, School, Total, Goal }) => {
  // Simple scoring average computation as specified by Lab 1
  const average = (Total / Goal) * 100;

  return (
    <div style={containerStyle}>
      <h2 style={{ color: '#2c3e50', borderBottom: '2px solid #3498db', paddingBottom: '10px' }}>
        Student Management Portal
      </h2>
      <div style={cardStyle}>
        <p><strong>Student Name:</strong> {Name}</p>
        <p><strong>School:</strong> {School}</p>
        <p><strong>Total Marks:</strong> {Total}</p>
        <p><strong>Target Goal:</strong> {Goal}</p>
        <hr style={{ border: '0', borderTop: '1px solid #ddd' }} />
        <h3 style={{ color: '#27ae60' }}>
          Average Score: {average.toFixed(2)}%
        </h3>
      </div>
    </div>
  );
};

const containerStyle = { fontFamily: 'sans-serif', padding: '20px', maxWidth: '400px', margin: '0 auto' };
const cardStyle = { padding: '20px', border: '1px solid #ddd', borderRadius: '8px', backgroundColor: '#f9f9f9', marginTop: '15px' };
