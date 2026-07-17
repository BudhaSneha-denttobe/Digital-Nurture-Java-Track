import React from 'react';

// 1. ListofPlayers Component (Using ES6 Map)[cite: 1]
export const ListofPlayers = ({ players }) => {
  return (
    <ul>
      {players.map((item, index) => (
        <div key={index}>
          <li>Mr. {item.name} <span>{item.score}</span></li> {/* cite: 1 */}
        </div>
      ))}
    </ul>
  );
};

// 2. Scorebelow70 Component (Filters using Arrow Function)[cite: 1]
export const Scorebelow70 = ({ players }) => {
  const players70 = [];
  players.map((item) => {
    if (item.score <= 70) { // Filter scores below 70[cite: 1]
      players70.push(item); // Push using arrow function style[cite: 1]
    }
    return null;
  });

  return (
    <ul>
      {players70.map((item, index) => (
        <div key={index}>
          <li>Mr. {item.name} <span>{item.score}</span></li>
        </div>
      ))}
    </ul>
  );
};

// 3. OddPlayers Component (Array Destructuring)[cite: 1]
export function OddPlayers([first, , third, , fifth]) { // Destructuring[cite: 1]
  return (
    <div>
      <ul>
        <li>First : {first} </li> {/* cite: 1 */}
        <li>Third : {third} </li> {/* cite: 1 */}
        <li>Fifth : {fifth}</li> {/* cite: 1 */}
      </ul>
    </div>
  );
}

// 4. EvenPlayers Component (Array Destructuring)
export function EvenPlayers([, second, , fourth, , sixth]) {
  return (
    <div>
      <ul>
        <li>Second : {second}</li>
        <li>Fourth : {fourth}</li>
        <li>Sixth : {sixth}</li>
      </ul>
    </div>
  );
}

// 5. ListofIndianPlayers Component (Displays Merged Array)
export const ListofIndianPlayers = ({ IndianPlayers }) => {
  return (
    <ul>
      {IndianPlayers.map((player, index) => (
        <div key={index}>
          <li>Mr. {player}</li>
        </div>
      ))}
    </ul>
  );
};

// Main Standalone App Controller[cite: 1]
export const CricketApp = () => {
  // --- TOGGLE THIS TO CHANGE OUTPUTS ---
  // Change to true for Output 1 | Change to false for Output 2[cite: 1]
  const flag = true; 

  // 11 Players Data Array[cite: 1]
  const players = [
    { name: "Jack", score: 50 },
    { name: "Michael", score: 70 },
    { name: "John", score: 40 },
    { name: "Ann", score: 61 },
    { name: "Elisabeth", score: 61 },
    { name: "Sachin", score: 95 },
    { name: "Dhoni", score: 100 },
    { name: "Virat", score: 84 },
    { name: "Jadeja", score: 64 },
    { name: "Raina", score: 75 },
    { name: "Rohit", score: 80 }
  ];

  // Indian Team Array[cite: 1]
  const IndianTeam = ["Sachin1", "Dhoni2", "Virat3", "Rohit4", "Yuvraj5", "Raina6"];

  // Merging Arrays using Spread Operator[cite: 1]
  const T20Players = ['First Player', 'Second Player', 'Third Player']; // cite: 1
  const RanjiTrophyPlayers = ['Fourth Player', 'Fifth Player', 'Sixth Player']; // cite: 1
  const IndianPlayers = [...T20Players, ...RanjiTrophyPlayers]; // cite: 1

  // Simple If-Else layout using the flag variable[cite: 1]
  if (flag === true) {
    return (
      <div style={{ fontFamily: 'sans-serif', padding: '20px' }}>
        <h1>List of Players</h1> {/* cite: 1 */}
        <ListofPlayers players={players} /> {/* cite: 1 */}
        <hr /> {/* cite: 1 */}
        <h1>List of Players having Scores Less than 70</h1> {/* cite: 1 */}
        <Scorebelow70 players={players} /> {/* cite: 1 */}
      </div>
    );
  } else {
    return (
      <div style={{ fontFamily: 'sans-serif', padding: '20px' }}>
        <div>
          <h1>Odd Players</h1> {/* cite: 1 */}
          {OddPlayers(IndianTeam)} {/* cite: 1 */}
          <hr /> {/* cite: 1 */}
          <h1>Even Players</h1> {/* cite: 1 */}
          {EvenPlayers(IndianTeam)} {/* cite: 1 */}
        </div>
        <hr /> {/* cite: 1 */}
        <div>
          <h1>List of Indian Players Merged:</h1> {/* cite: 1 */}
          <ListofIndianPlayers IndianPlayers={IndianPlayers} /> {/* cite: 1 */}
        </div>
      </div>
    );
  }
};
