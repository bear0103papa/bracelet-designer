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
  story: string;
  zodiac: string[];      // 適合的星座
  chineseZodiac: string[]; // 適合的生肖
  mbti: string[];        // 適合的MBTI
  description: string;   // 適合原因
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
  const [selectedBead, setSelectedBead] = useState<Bead | null>(null);

  const beads: Bead[] = [
    {
      id: 1,
      image: '/beads/01.png',
      name: '粉水晶',
      story: '粉水晶象徵著無條件的愛與內心的平靜。古羅馬人相信它能夠預防宿醉，並用來製作愛情護身符。',
      zodiac: ['處女座', '天秤座', '金牛座'],
      chineseZodiac: ['兔', '羊', '豬'],
      mbti: ['INFP', 'ENFJ', 'ISFP'],
      description: '粉水晶的溫柔能量特別適合追求心靈平靜的星座，也能幫助理性的MBTI類型打開感性的一面。對於善良溫和的生肖來說，更能發揮其療癒特質。'
    },
    {
      id: 2,
      image: '/beads/02.png',
      name: '紫水晶',
      story: '紫水晶自古以來就被視為智慧與靈性的象徵。在中世紀，人們相信戴著紫水晶能夠保持頭腦清醒，增強記憶力。',
      zodiac: ['射手座', '雙子座', '水瓶座'],
      chineseZodiac: ['龍', '虎', '猴'],
      mbti: ['INTJ', 'ENTP', 'INTP'],
      description: '紫水晶的高頻能量特別適合具有探索精神的星座，能夠啟發創意思維。對於聰明機敏的生肖和偏向思考的MBTI類型來說，更能激發智慧潛能。'
    },
    {
      id: 3,
      image: '/beads/03.png',
      name: '琥珀',
      story: '琥珀是遠古松脂經過數百萬年形成的寶石，蘊含著大地的溫暖能量。古希臘人認為琥珀是太陽神的眼淚。',
      zodiac: ['獅子座', '白羊座', '摩羯座'],
      chineseZodiac: ['牛', '馬', '狗'],
      mbti: ['ESTJ', 'ENTJ', 'ISTJ'],
      description: '琥珀的溫暖能量特別適合具有領導特質的星座，能夠增強自信與決斷力。對於務實穩重的生肖和果斷的MBTI類型來說，更能強化意志力。'
    },
    {
      id: 4,
      image: '/beads/04.png',
      name: '黑瑪瑙',
      story: '黑瑪瑙被視為保護石之王，能夠吸收負面能量，轉化為正面力量。古埃及人用它製作護身符。',
      zodiac: ['天蠍座', '巨蟹座', '雙魚座'],
      chineseZodiac: ['蛇', '雞', '鼠'],
      mbti: ['INFJ', 'ISTP', 'ESTP'],
      description: '黑瑪瑙的神秘能量特別適合直覺敏銳的星座，能夠增強洞察力。對於智慧謹慎的生肖和觀察力敏銳的MBTI類型來說，更能發揮保護作用。'
    },
    {
      id: 5,
      image: '/beads/05.png',
      name: '月光石',
      story: '月光石被認為蘊含著月亮的神秘力量，能夠增強直覺，啟發創意。羅馬人相信它能帶來好運與愛情。',
      zodiac: ['巨蟹座', '雙魚座', '天秤座'],
      chineseZodiac: ['兔', '豬', '羊'],
      mbti: ['INFP', 'ENFP', 'ISFJ'],
      description: '月光石的柔和能量特別適合感性的星座，能夠增強直覺與創造力。對於溫柔敏感的生肖和富有同���心的MBTI類型來說，更能發揮療癒力量。'
    },
    {
      id: 6,
      image: '/beads/06.png',
      name: '青金石',
      story: '青金石在古埃及被視為神聖的寶石，法老王的面具就是用青金石裝飾。它象徵著智慧與真理，能夠開啟第三眼chakra。',
      zodiac: ['射手座', '水瓶座', '獅子座'],
      chineseZodiac: ['龍', '虎', '猴'],
      mbti: ['ENTP', 'INTP', 'ENTJ'],
      description: '青金石的深邃能量特別適合具有哲學思維的星座，能夠增強智慧與洞察力。對於充滿智慧與勇氣的生肖和善於思考的MBTI類型來說，更能激發潛能。'
    },
    {
      id: 7,
      image: '/beads/07.png',
      name: '綠松石',
      story: '綠松石被美洲原住民視為神聖的護身石，能夠連接天地能量。古埃及人相信它能帶來好運與保護。',
      zodiac: ['金牛座', '處女座', '摩羯座'],
      chineseZodiac: ['牛', '蛇', '雞'],
      mbti: ['ISTJ', 'ISFJ', 'ESTJ'],
      description: '綠松石的穩定能量特別適合務實的星座，能夠增強定力與耐心。對於細心謹慎的生肖和注重細節的MBTI類型來說，更能帶來平衡與保護。'
    },
    {
      id: 8,
      image: '/beads/08.png',
      name: '白珍珠',
      story: '珍珠被視為月亮的眼淚，象徵純潔與優雅。古希臘人相信珍珠是愛神阿芙羅狄蒂的眼淚凝結而成。',
      zodiac: ['巨蟹座', '雙魚座', '天秤座'],
      chineseZodiac: ['兔', '羊', '豬'],
      mbti: ['INFP', 'ENFJ', 'ISFJ'],
      description: '珍珠的優雅能量特別適合感性的星座，能夠增強直覺與同理心。對於溫柔善良的生肖和富有同情心的MBTI類型來說，更能展現內在美。'
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
    const centerX = 170;
    const centerY = 180;
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
    <div className="flex flex-col gap-8 bg-white/5 backdrop-blur-xl p-12 rounded-3xl border border-white/10 shadow-2xl">
      {/* 設置控制條 */}
      <div className="flex flex-col gap-4 w-64 mb-6">
        <div>
          <label className="block text-sm font-light text-gray-700 mb-2">
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
          <label className="block text-sm font-light text-gray-700 mb-2">
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

        {/* 右側區域改為垂直佈局 */}
        <div className="flex gap-8">
          {/* 選擇區域 */}
          <div className="w-64">
            <h3 className="text-lg font-light text-gray-700 mb-6">選擇珠子</h3>
            <div className="grid grid-cols-2 gap-4">
              {beads.map((bead) => (
                <button
                  key={bead.id}
                  className="p-3 bg-black/30 rounded-xl hover:bg-black/40 transition-all group"
                  onClick={() => handleBeadSelect(bead.image)}
                  onMouseEnter={() => setSelectedBead(bead)}
                  onTouchStart={() => setSelectedBead(bead)}
                >
                  <img 
                    src={bead.image} 
                    alt={bead.name} 
                    className="w-12 h-12 rounded-full object-cover mx-auto group-hover:scale-105 transition-transform"
                  />
                  <p className="mt-2 text-sm text-gray-300 text-center font-light">{bead.name}</p>
                </button>
              ))}
            </div>
          </div>

          {/* 珠子詳情區域 */}
          {selectedBead && (
            <div className="w-80 bg-black/20 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
              <h4 className="text-gray-800 text-lg mb-4 font-light">{selectedBead.name}的故事</h4>
              <p className="text-gray-700 text-sm mb-4 leading-relaxed">{selectedBead.story}</p>
              
              <div className="space-y-3">
                <div>
                  <h5 className="text-gray-800 text-sm mb-1">適合的星座</h5>
                  <p className="text-gray-600 text-sm">{selectedBead.zodiac.join('、')}</p>
                </div>
                <div>
                  <h5 className="text-gray-800 text-sm mb-1">適合的生肖</h5>
                  <p className="text-gray-600 text-sm">{selectedBead.chineseZodiac.join('、')}</p>
                </div>
                <div>
                  <h5 className="text-gray-800 text-sm mb-1">適合的性格</h5>
                  <p className="text-gray-600 text-sm">{selectedBead.mbti.join('、')}</p>
                </div>
                <div className="pt-2">
                  <p className="text-gray-700 text-sm italic leading-relaxed">
                    {selectedBead.description}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BeadSelector;