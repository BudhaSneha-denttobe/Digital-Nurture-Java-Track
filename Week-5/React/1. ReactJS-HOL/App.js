import React from 'react';
import { CalculateScore } from './Components/CalculateScore';

function App() {
  return (
    <div>
      {/* Passing required parameters to display student score details */}
      <CalculateScore Name="John Doe" School="Greenwood High" Total={450} Goal={500} />
    </div>
  );
}

export default App;
