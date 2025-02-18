import tianhe from '../assets/crystals/tianhe.png';
import clearQuartz from '../assets/crystals/clear-quartz.png';
import whiteAgate from '../assets/crystals/white-agate.png';
import plumTourmaline from '../assets/crystals/plum-tourmaline.png';
import purpleAgate from '../assets/crystals/purple-agate.png';
import blackSun from '../assets/crystals/black-sun.png';
import blackGold from '../assets/crystals/black-gold.png';
import silverMoonlight from '../assets/crystals/silver-moonlight.png';
import pinkLeaf from '../assets/crystals/粉晶葉子.png';
import pearl from '../assets/crystals/pearl.png';
import catPearl from '../assets/crystals/cat-pearl.png';

export const crystals = [
  {
    id: 'c1',
    name: '天河石',
    image: tianhe,
    size: 11.6, // mm
    category: 'crystal',
    color: '綠色系',
    power: '健康',
    price: 10,
    description: [
      '天河石具有強大的治癒能量',
      '能夠平衡身心，增進健康',
      '有助於緩解壓力和焦慮',
      '適合需要心靈平靜的人使用'
    ],
    zodiac: ['金牛座', '處女座'],
    chakra: '心輪'
  },
  {
    id: 'c2',
    name: '白水晶',
    image: clearQuartz,
    size: 12.5, // mm
    category: 'crystal',
    color: '白色系',
    power: '活力',
    price: 16,
    description: [
      '白水晶是最純淨的能量載體',
      '能夠淨化和放大其他水晶的能量',
      '提升精神力量和意識層次',
      '適合所有人使用的基礎水晶'
    ],
    zodiac: ['所有星座'],
    chakra: '頂輪'
  },
  {
    id: 'c3',
    name: '白阿賽',
    image: whiteAgate,
    size: 7.2, // mm
    category: 'crystal',
    color: '白色系',
    power: '招財',
    price: 17,
    description: [
      '白阿賽具有強大的招財能量',
      '能夠吸引財運和機會',
      '增強個人魅力與自信',
      '適合需要事業發展的人使用'
    ],
    zodiac: ['處女座', '天秤座'],
    chakra: '太陽輪'
  },
  {
    id: 'c4',
    name: '梅花碧璽',
    image: plumTourmaline,
    size: 11.1, // mm
    category: 'crystal',
    color: '粉紅色系',
    power: '快樂',
    price: 12,
    description: [
      '梅花碧璽帶來歡樂與幸福',
      '有助於緩解情緒壓力',
      '增進人際關係和溝通',
      '適合需要正向能量的人使用'
    ],
    zodiac: ['雙子座', '天秤座'],
    chakra: '心輪'
  },
  {
    id: 'c5',
    name: '紫阿賽',
    image: purpleAgate,
    size: 11.0, // mm
    category: 'crystal',
    color: '紫色系',
    power: '平安',
    price: 11,
    description: [
      '紫阿賽帶來平安與和諧',
      '有助於緩解壓力和焦慮',
      '增進人際關係和溝通',
      '適合需要正向能量的人使用'
    ],
  },
  {
    id: 'c6',
    name: '黑太陽',
    image: blackSun,
    size: 6.6, // mm
    category: 'crystal',
    color: '深色系',
    power: '避邪',
    price: 14,
    description: [
      '黑太陽具有強大的避邪能量',
      '能夠保護佩戴者免受負能量侵擾',
      '增強個人魅力與自信',
      '適合需要正向能量的人使用'
    ],
  },
  {
    id: 'c7',
    name: '黑金超',
    image: blackGold,
    size: 12.2, // mm
    category: 'crystal',
    color: '深色系',
    power: '平衡',
    price: 13,
    description: [
      '黑金超具有強大的平衡能量',
      '能夠平衡身心，增進健康',
      '有助於緩解壓力和焦慮',
      '適合需要心靈平靜的人使用'
    ],
  },
  {
    id: 'c8',
    name: '銀月光',
    image: silverMoonlight,
    size: 13.6, // mm
    category: 'crystal',
    color: '深色系',
    power: '友誼',
    price: 15,
    description: [
      '銀月光帶來友誼與和諧',
      '有助於緩解情緒壓力',
      '增進人際關係和溝通',
      '適合需要正向能量的人使用'
    ],
  },
  {
    id: 'c9',
    name: '粉晶葉子',
    image: pinkLeaf,
    size: 10.0, // mm
    category: 'crystal',
    color: '粉紅色系',
    power: '愛情',
    price: 18,
    description: [
      '粉晶葉子帶來愛情與幸福',
      '有助於緩解情緒壓力',
      '增進人際關係和溝通',
      '適合需要正向能量的人使用'
    ],
  }
];

export const accessories = [
  {
    id: 'a1',
    name: 'S925珍珠',
    image: pearl,
    category: 'accessory',
    type: 'pendant'
  },
  {
    id: 'a2',
    name: 'S925貓咪珍珠',
    image: catPearl,
    category: 'accessory',
    type: 'pendant'
  }
];

export const categories = [
  {
    id: 'crystal',
    name: '水晶',
  },
  {
    id: 'accessory',
    name: '配件',
  },
  {
    id: 'helper',
    name: '小幫手',
  }
]; 