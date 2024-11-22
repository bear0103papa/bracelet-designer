import React from 'react';

interface BraceletPreviewProps {
  beads: string[];
}

const BraceletPreview: React.FC<BraceletPreviewProps> = ({ beads }) => {
  return (
    <div className="flex flex-wrap justify-center gap-2 p-4">
      {beads.map((bead, index) => (
        <div
          key={index}
          className="w-16 h-16 border rounded-full overflow-hidden"
        >
          {bead ? (
            <img
              src={bead}
              alt={`選擇的珠子 ${index + 1}`}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gray-200" />
          )}
        </div>
      ))}
    </div>
  );
};

export default BraceletPreview;