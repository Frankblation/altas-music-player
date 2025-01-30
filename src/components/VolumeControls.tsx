import { useState } from "react";

const VolumeControls = ({ volume, setVolume }) => {
  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value); // Get value as float
    setVolume(newVolume); // Update parent component state
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
