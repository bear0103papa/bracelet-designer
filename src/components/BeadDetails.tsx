import React from 'react';
import { Bead } from '../types/bead';

interface BeadDetailsProps {
  bead: Bead;
}

export const BeadDetails: React.FC<BeadDetailsProps> = ({ bead }) => {
  return (
    <div className="w-80 bg-black/20 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
      <h4 className="text-gray-800 text-lg mb-4 font-light">{bead.name}的故事</h4>
      <p className="text-gray-700 text-sm mb-4 leading-relaxed">{bead.story}</p>
      
      <div className="space-y-3">
        <div>
          <h5 className="text-gray-800 text-sm mb-1">適合的星座</h5>
          <p className="text-gray-600 text-sm">{bead.zodiac.join('、')}</p>
        </div>
        <div>
          <h5 className="text-gray-800 text-sm mb-1">適合的生肖</h5>
          <p className="text-gray-600 text-sm">{bead.chineseZodiac.join('、')}</p>
        </div>
        <div>
          <h5 className="text-gray-800 text-sm mb-1">適合的性格</h5>
          <p className="text-gray-600 text-sm">{bead.mbti.join('、')}</p>
        </div>
        <div className="pt-2">
          <p className="text-gray-700 text-sm italic leading-relaxed">
            {bead.description}
          </p>
        </div>
      </div>
    </div>
  );
};