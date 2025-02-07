import { Play, Pause, SkipBack, SkipForward, Shuffle } from "lucide-react";


interface Props {
  isPlaying: boolean;
  togglePlay: () => void;
  playNextSong: () => void;
  playPreviousSong: () => void;
  isShuffle: boolean;
  toggleShuffle: () => void;
  speed: number;
  toggleSpeed: () => void;
  volume: number;
  setVolume: (volume: number) => void;
}

const PlayControls: React.FC<Props> = ({
  isPlaying,
  togglePlay,
  playNextSong,
  playPreviousSong,
  isShuffle,
  toggleShuffle,
  speed,
  toggleSpeed,
  volume,
  setVolume,
}) => {
  return (
    <div className="flex flex-col items-center space-y-4">
      {/* Controls */}
      <div className="flex justify-center items-center space-x-6 text-black">
        <button onClick={playPreviousSong}>
          <SkipBack />
        </button>
        <button onClick={togglePlay}>
          {isPlaying ? <Pause /> : <Play />}
        </button>
        <button onClick={playNextSong}>
          <SkipForward />
        </button>
        <button onClick={toggleShuffle}>
          <Shuffle className={isShuffle ? "text-blue-500" : ""} />
        </button>
        <button onClick={toggleSpeed}>
          {speed === 2 ? "2x Speed" : speed === 0.5 ? "0.5x Speed" : "Normal Speed"}
        </button>
      </div>

      {/* Volume Control */}
      <div className="flex items-center space-x-2">
        <span>🔊</span>
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={(e) => setVolume(Number(e.target.value))}
          className="w-24"
        />
      </div>
    </div>
  );
};

export default PlayControls;
