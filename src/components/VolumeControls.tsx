import React, { useState } from "react";

interface VolumeControlsProps {
  volume: number;
  setVolume: (volume: number) => void;
}
const VolumeControls: React.FC<VolumeControlsProps> = ({ volume, setVolume }) => {
  const [localVolume, setLocalVolume] = useState(volume);

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    setLocalVolume(newVolume);

    console.log(`New volume: ${newVolume}, Local volume: ${localVolume}`);
  };

  return (
    <div className="flex flex-col items-center space-y-2">
      <input
        type="range"
        min="0"
        max="1"
        step="0.01"
        value={volume}
        onChange={handleVolumeChange}
        className="w-32 h-2 bg-blue-400 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-blue-300"
      />
      <div className="text-gray-600 text-sm">
        Volume: {(volume * 100).toFixed(0)}%
      </div>
    </div>
  );
};

export default VolumeControls;
