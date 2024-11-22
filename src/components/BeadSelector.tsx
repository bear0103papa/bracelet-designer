import React, { useState } from 'react';
import { BeadControls } from './BeadControls';
import { BeadPreview } from './BeadPreview';
import { BeadGrid } from './BeadGrid';
import { BeadDetails } from './BeadDetails';
import { beads } from '../data/beads';
import { Bead, BeadSelectorProps, BeadSelectorState, SelectedBead } from '../types/bead';

const BeadSelector: React.FC<BeadSelectorProps> = ({ onSelect }) => {
  const [selectedBeads, setSelectedBeads] = useState<SelectedBead[]>([]);
  const [currentPosition, setCurrentPosition] = useState(0);
  const [settings, setSettings] = useState<BeadSelectorState>({
    beadSize: 44,
    beadCount: 18
  });
  const [selectedBead, setSelectedBead] = useState<Bead | null>(null);

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

  const handleSettingChange = (setting: keyof BeadSelectorState, value: number) => {
    setSettings(prev => ({
      ...prev,
      [setting]: value
    }));
  };

  return (
    <div className="flex flex-col gap-8 bg-white/5 backdrop-blur-xl p-12 rounded-3xl border border-white/10 shadow-2xl">
      <BeadControls 
        settings={settings}
        onSettingChange={handleSettingChange}
      />
      
      <div className="flex gap-12">
        <BeadPreview 
          settings={settings}
          selectedBeads={selectedBeads}
        />
        
        <div className="flex gap-8">
          <BeadGrid 
            beads={beads}
            onSelect={handleBeadSelect}
            onBeadHover={setSelectedBead}
          />
          
          {selectedBead && (
            <BeadDetails bead={selectedBead} />
          )}
        </div>
      </div>
    </div>
  );
};

export default BeadSelector;