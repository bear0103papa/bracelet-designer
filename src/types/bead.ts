export interface Bead {
    id: number;
    image: string;
    name: string;
    story: string;
    zodiac: string[];
    chineseZodiac: string[];
    mbti: string[];
    description: string;
  }
  
  export interface BeadSelectorProps {
    onSelect: (beadImage: string, position: number) => void;
  }
  
  export interface BeadSelectorState {
    beadSize: number;
    beadCount: number;
  }
  
  export interface SelectedBead {
    position: number;
    image: string;
  }