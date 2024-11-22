import React, { useState } from 'react';
import BeadSelector from './components/BeadSelector';
import BraceletPreview from './components/BraceletPreview';

const App: React.FC = () => {
  const [selectedBeads, setSelectedBeads] = useState<string[]>(Array(12).fill(''));

  const handleBeadSelect = (beadImage: string, position: number) => {
    const newBeads = [...selectedBeads];
    newBeads[position] = beadImage;
    setSelectedBeads(newBeads);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
          <div className="max-w-md mx-auto">
            <div className="divide-y divide-gray-200">
              <BraceletPreview beads={selectedBeads} />
              <BeadSelector onSelect={handleBeadSelect} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App; 