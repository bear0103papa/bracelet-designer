import React from 'react';
import { SelectedBead, BeadSelectorState } from '../types/bead';

interface BeadPreviewProps {
  settings: BeadSelectorState;
  selectedBeads: SelectedBead[];
  calculatePosition: (index: number, totalBeads: number) => React.CSSProperties;
}

export const BeadPreview: React.FC<BeadPreviewProps> = ({
  settings,
  selectedBeads,
  calculatePosition
}) => {
  return (
    <div className="relative w-[400px] h-[400px] bg-black/20 rounded-2xl backdrop-blur-sm p-6">
      <div className="absolute inset-0 border border-gray-700/30 rounded-2xl" />
      <div className="relative">
        {Array(settings.beadCount).fill(null).map((_, index) => (
          <div
            key={index}
            style={{
              ...calculatePosition(index, settings.beadCount),
              width: `${settings.beadSize}px`,
              height: `${settings.beadSize}px`
            }}
          >
            {selectedBeads[index] ? (
              <img 
                src={selectedBeads[index].image} 
                alt={`珠子 ${index + 1}`}
                style={{
                  width: `${settings.beadSize}px`,
                  height: `${settings.beadSize}px`
                }}
                className="rounded-full object-cover shadow-md"
              />
            ) : (
              <div 
                style={{
                  width: `${settings.beadSize}px`,
                  height: `${settings.beadSize}px`
                }}
                className="rounded-full border border-gray-200 bg-white/80 shadow-sm" 
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};