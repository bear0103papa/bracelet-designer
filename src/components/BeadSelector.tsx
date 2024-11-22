import React from 'react';

interface BeadSelectorProps {
  onSelect: (beadImage: string, position: number) => void;
}

const BeadSelector: React.FC<BeadSelectorProps> = ({ onSelect }) => {
  const beads = [
    // 這裡放入您的素材圖片路徑
  ];

  return (
    <div className="grid grid-cols-4 gap-4 mt-6">
      {beads.map((bead, index) => (
        <button
          key={index}
          className="p-2 border rounded-lg hover:shadow-lg transition-shadow"
          onClick={() => onSelect(bead, index)}
        >
          <img src={bead} alt={`珠子 ${index + 1}`} className="w-full h-auto" />
        </button>
      ))}
    </div>
  );
};

export default BeadSelector;