import React, { useState } from 'react';

interface BeadSelectorProps {
  onSelect: (beadImage: string, position: number) => void;
}

interface BeadSelectorState {
  beadSize: number;  // 珠子大小（像素）
  beadCount: number; // 珠子數量
}

interface Bead {
  id: number;
  image: string;
  name: string;
}

interface SelectedBead {
  position: number;
  image: string;
}

const BeadSelector: React.FC<BeadSelectorProps> = ({ onSelect }) => {
  const [selectedBeads, setSelectedBeads] = useState<SelectedBead[]>([]);
  const [currentPosition, setCurrentPosition] = useState(0);
  const [settings, setSettings] = useState<BeadSelectorState>({
    beadSize: 44,    // 默認44像素
    beadCount: 18    // 默認18顆
  });

  const beads: Bead[] = [
    {
      id: 1,
      image: '/beads/01.png',
      name: '粉水晶'
    },
    {
      id: 2,
      image: '/beads/02.png',
      name: '串珠2'
    },
    {
      id: 3,
      image: '/beads/03.png',
      name: '串珠3'
    },
    {
      id: 4,
      image: '/beads/04.png',
      name: '串珠4'
    },
    {
      id: 5,
      image: '/beads/05.png',
      name: '串珠5'
    },
    {
      id: 6,
      image: '/beads/06.png',
      name: '串珠6'
    },
    {
      id: 7,
      image: '/beads/07.png',
      name: '串珠7'
    },
    {
      id: 8,
      image: '/beads/08.png',
      name: '串珠8'
    } 
  ];

  const handleBeadSelect = (beadImage: string) => {
    const newSelectedBeads = [...selectedBeads];
    newSelectedBeads[currentPosition] = {
      position: currentPosition,
      image: beadImage
    };
    setSelectedBeads(newSelectedBeads);
    setCurrentPosition((prev) => (prev + 1) % settings.beadCount);
    onSelect(beadImage, currentPosition);
  };

  const calculatePosition = (index: number, totalBeads: number): React.CSSProperties => {
    const centerX = 300;
    const centerY = 500;
    const radius = 130;
    
    const angle = (index * (360 / totalBeads) - 90) * (Math.PI / 180);
    
    const x = centerX + radius * Math.cos(angle);
    const y = centerY + radius * Math.sin(angle);
    
    return {
      position: 'absolute' as const,
      left: `${x}px`,
      top: `${y}px`,
      transform: 'translate(-50%, -50%)'
    };
  };

  // 控制條改變處理函數
  const handleSettingChange = (setting: keyof BeadSelectorState, value: number) => {
    setSettings(prev => ({
      ...prev,
      [setting]: value
    }));
    // 移除重置邏輯，保持既有選擇
  };

  return (
    <div className="flex flex-col gap-6 bg-black/40 backdrop-blur-xl p-10 rounded-2xl border border-white/5 shadow-2xl">
      {/* 設置控制條 */}
      <div className="flex flex-col gap-4 w-64 mb-6">
        <div>
          <label className="block text-sm font-light text-gray-300 mb-2">
            珠子大小: {settings.beadSize}px
          </label>
          <input
            type="range"
            min="20"
            max="60"
            value={settings.beadSize}
            onChange={(e) => handleSettingChange('beadSize', Number(e.target.value))}
            className="w-full accent-blue-400"
          />
        </div>
        <div>
          <label className="block text-sm font-light text-gray-300 mb-2">
            珠子數量: {settings.beadCount}顆
          </label>
          <input
            type="range"
            min="12"
            max="24"
            value={settings.beadCount}
            onChange={(e) => handleSettingChange('beadCount', Number(e.target.value))}
            className="w-full accent-blue-400"
          />
        </div>
      </div>

      <div className="flex gap-12">
        {/* 預覽區域 */}
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

        {/* 選擇區域 */}
        <div className="w-72">
          <h3 className="text-lg font-light text-gray-300 mb-6">選擇珠子</h3>
          <div className="grid grid-cols-2 gap-6">
            {beads.map((bead) => (
              <button
                key={bead.id}
                className="p-4 bg-black/30 rounded-xl hover:bg-black/40 transition-all group"
                onClick={() => handleBeadSelect(bead.image)}
              >
                <img 
                  src={bead.image} 
                  alt={bead.name} 
                  style={{
                    width: `${settings.beadSize}px`,
                    height: `${settings.beadSize}px`
                  }}
                  className="rounded-full object-cover mx-auto group-hover:scale-105 transition-transform"
                />
                <p className="mt-3 text-sm text-gray-400 text-center font-light">{bead.name}</p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeadSelector;