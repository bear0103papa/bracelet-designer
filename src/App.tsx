import React, { useState } from 'react';
import BeadSelector from './components/BeadSelector';
import './index.css';

const App: React.FC = () => {
  const [selectedBeads, setSelectedBeads] = useState<string[]>(Array(12).fill(''));

  const handleBeadSelect = (beadImage: string, position: number) => {
    const newBeads = [...selectedBeads];
    newBeads[position] = beadImage;
    setSelectedBeads(newBeads);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 relative">
      <div className="absolute inset-0 bg-black/50" />
      <div className="container mx-auto p-8 relative z-10">
        <h1 className="text-3xl font-light text-white/90 mb-12 text-center tracking-wider">
          精緻手鍊設計
        </h1>
        <div className="flex justify-center">
          <BeadSelector onSelect={handleBeadSelect} />
        </div>
      </div>
    </div>
  );
};

export default App; 