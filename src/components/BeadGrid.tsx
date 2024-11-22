import React from 'react';
import { Bead } from '../types/bead';

interface BeadGridProps {
  beads: Bead[];
  onSelect: (image: string) => void;
  onBeadHover: (bead: Bead) => void;
}

export const BeadGrid: React.FC<BeadGridProps> = ({ beads, onSelect, onBeadHover }) => {
  return (
    <div className="w-full md:w-64">
      <h3 className="text-lg font-light text-gray-700 mb-6">選擇珠子</h3>
      <div className="grid grid-cols-4 md:grid-cols-2 gap-4">
        {beads.map((bead) => (
          <button
            key={bead.id}
            className="p-3 bg-black/30 rounded-xl hover:bg-black/40 transition-all group"
            onClick={() => onSelect(bead.image)}
            onMouseEnter={() => onBeadHover(bead)}
            onTouchStart={() => onBeadHover(bead)}
          >
            <img 
              src={bead.image} 
              alt={bead.name} 
              loading="lazy"
              className="w-12 h-12 rounded-full object-cover mx-auto group-hover:scale-105 transition-transform"
            />
            <p className="mt-2 text-sm text-gray-700 text-center font-light">{bead.name}</p>
          </button>
        ))}
      </div>
    </div>
  );
};