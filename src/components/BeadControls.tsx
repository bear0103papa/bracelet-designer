import React from 'react';
import { BeadSelectorState } from '../types/bead';

interface BeadControlsProps {
  settings: BeadSelectorState;
  onSettingChange: (setting: keyof BeadSelectorState, value: number) => void;
}

export const BeadControls: React.FC<BeadControlsProps> = ({
  settings,
  onSettingChange
}) => {
  return (
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
          onChange={(e) => onSettingChange('beadSize', Number(e.target.value))}
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
          onChange={(e) => onSettingChange('beadCount', Number(e.target.value))}
          className="w-full accent-blue-400"
        />
      </div>
    </div>
  );
};