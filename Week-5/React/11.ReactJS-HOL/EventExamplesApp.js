import React, { useState } from 'react';

export const EventExamplesApp = () => {
  const [counter, setCounter] = useState(5); // Starts at 5 as per standard screenshot[cite: 3]
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState('');

  // 1. Multi-method call triggered by Increment[cite: 3]
  const handleIncrement = () => {
    incrementValue();
    sayHello("Member1");
  };

  const incrementValue = () => {
    setCounter(prev => prev + 1);
  };

  const sayHello = (name) => {
    alert(`Hello! ${name}`); // Triggers the "Hello! Member1" alert popup[cite: 3]
  };

  // 2. Decrement Handler[cite: 3]
  const handleDecrement = () => {
    setCounter(prev => prev - 1);
  };

  // 3. Welcome handler passing an argument[cite: 3]
  const handleSayWelcome = (message) => {
    alert(message); // Triggers "welcome" alert[cite: 3]
  };

  // 4. Synthetic Event Handler[cite: 3]
  const handleSyntheticEvent = (e) => {
    console.log("Synthetic Event Type:", e.type); 
    alert("I was clicked"); // Triggers "I was clicked" alert[cite: 3]
  };

  // 5. Currency Converter Form Handler[cite: 3]
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload[cite: 3]
    const calculatedAmount = Number(amount) * 80; // Multiplies input by 80[cite: 3]
    alert(`Converting to Euro Amount is ${calculatedAmount}`); // Triggers converter alert[cite: 3]
  };

  return (
    <div style={containerStyle}>
      <h2 style={{ margin: '0 0 10px 0', fontWeight: 'normal' }}>{counter}</h2>

      <div style={buttonContainerStyle}>
        <button onClick={handleIncrement} style={btnStyle}>Increment</button> {/* cite: 3 */}
        <button onClick={handleDecrement} style={btnStyle}>Decrement</button> {/* cite: 3 */}
        <button onClick={() => handleSayWelcome("welcome")} style={btnStyle}>Say welcome</button> {/* cite: 3 */}
        <button onClick={handleSyntheticEvent} style={btnStyle}>Click on me</button> {/* cite: 3 */}
      </div>

      <div style={{ marginTop: '40px' }}>
        <h1 style={headingStyle}>Currency Convertor!!!</h1> {/* cite: 3 */}

        <form onSubmit={handleSubmit} style={formStyle}> {/* cite: 3 */}
          <div style={formGroupStyle}>
            <label style={labelStyle}>Amount:</label>
            <input 
              type="number" 
              value={amount} 
              onChange={(e) => setAmount(e.target.value)} 
              style={inputStyle} 
              required
            />
          </div>

          <div style={formGroupStyle}>
            <label style={labelStyle}>Currency:</label>
            <input 
              type="text" 
              value={currency} 
              onChange={(e) => setCurrency(e.target.value)} 
              style={inputStyle} 
              required
            />
          </div>

          <button type="submit" style={submitBtnStyle}>Submit</button> {/* cite: 3 */}
        </form>
      </div>
    </div>
  );
};

// Styling Object
const containerStyle = { fontFamily: 'sans-serif', padding: '30px', maxWidth: '600px' };
const buttonContainerStyle = { display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '6px' };
const btnStyle = { padding: '4px 10px', fontSize: '14px', backgroundColor: '#f0f0f0', border: '1px solid #a0a0a0', borderRadius: '2px', cursor: 'pointer' };
const headingStyle = { color: 'green', fontSize: '32px', margin: '20px 0' };
const formStyle = { display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '12px' };
const formGroupStyle = { display: 'flex', alignItems: 'center', gap: '10px' };
const labelStyle = { width: '80px', fontSize: '16px' };
const inputStyle = { width: '180px', padding: '4px', fontSize: '14px', border: '1px solid #7a7a7a' };
const submitBtnStyle = { marginLeft: '90px', padding: '3px 12px', fontSize: '14px', backgroundColor: '#f0f0f0', border: '1px solid #a0a0a0', borderRadius: '2px', cursor: 'pointer' };
