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
    <main className="min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#7CC9C9] via-[#6BB7B7] to-[#5AA5A5]" />
      
      <div className="absolute inset-0 flex items-center justify-center">
        <h2 className="text-gray-800/10 text-[200px] font-thin tracking-[0.5em] select-none">
          珠寶
        </h2>
      </div>
      
      <div className="container mx-auto p-8 relative z-10">
        <h1 className="text-gray-800 text-4xl font-extralight mb-16 text-center tracking-[0.2em]">
          個人化禮品
        </h1>
        <p className="text-gray-700 text-center max-w-2xl mx-auto mb-16 leading-relaxed tracking-wider font-light">
          個人化的珠寶首飾和禮品富含意義，值得永久珍藏成為傳家之寶。這些項鍊、手鍊和戒指可以雕刻、壓花或蝕刻字母印記、日期或訊息，以永遠留住特別時刻或記憶。
        </p>
        <div className="flex justify-center">
          <BeadSelector onSelect={handleBeadSelect} />
        </div>
      </div>
    </main>
  );
};

export default App; 