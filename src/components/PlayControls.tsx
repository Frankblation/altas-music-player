import { useState, useEffect, useRef } from "react";
import { Play, Pause, SkipBack, SkipForward, Shuffle } from "lucide-react";

interface Song {
  song: string; // Add appropriate type for the song property
}

interface Props {
  songs: Song[];
  currentSongIndex: number;
  setCurrentSongIndex: (index: number) => void;
}

const PlayControls = ({ songs, currentSongIndex, setCurrentSongIndex }: Props) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState(1);
  const [isShuffle, setIsShuffle] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Ensure songs exist
  if (!songs || songs.length === 0) {
    return <div>No songs available</div>;
  }

  // Get current song
  const currentSong = songs[currentSongIndex];

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
      audioRef.current.playbackRate = speed;
    }
  }, [volume, speed]);

  // Play/Pause toggle
  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  // Update progress and duration
  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setProgress(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  // Handle skipping back
  const handleBack = () => {
    if (audioRef.current && audioRef.current.currentTime > 5) {
      audioRef.current.currentTime = 0; // Restart song if played for >5s
    } else if (currentSongIndex > 0) {
      setCurrentSongIndex(currentSongIndex - 1);
    }
  };

  // Handle skipping forward
  const handleForward = () => {
    if (isShuffle) {
      const randomIndex = Math.floor(Math.random() * songs.length);
      setCurrentSongIndex(randomIndex);
    } else if (currentSongIndex < songs.length - 1) {
      setCurrentSongIndex(currentSongIndex + 1);
    }
  };

  // Handle shuffle toggle
  const toggleShuffle = () => {
    setIsShuffle(!isShuffle);
  };

  // Handle speed toggle
  const toggleSpeed = () => {
    setSpeed((prev) => (prev === 2 ? 0.5 : prev === 0.5 ? 1 : 2));
  };

  // Handle volume change
  const handleVolumeChange = (e: { target: { value: any; }; }) => {
    const newVolume = Number(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  // Seek to specific time
  const handleSeek = (e: { target: { value: any; }; }) => {
    const newTime = Number(e.target.value);
    setProgress(newTime);
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
    }
  };

  // Format duration (MM:SS)
  const formatTime = (time: number) => {
    if (!time) return "00:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      {/* Audio Element */}
      <audio
        ref={audioRef}
        src={currentSong?.song}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={handleForward}
        autoPlay={isPlaying}
      />

      {/* Controls */}
      <div className="flex justify-center items-center space-x-6 text-black">
        <button onClick={handleBack}>
          <SkipBack />
        </button>
        <button onClick={togglePlay}>
          {isPlaying ? <Pause /> : <Play />}
        </button>
        <button onClick={handleForward}>
          <SkipForward />
        </button>
        <button onClick={toggleShuffle}>
          <Shuffle className={isShuffle ? "text-blue-500" : ""} />
        </button>
        <button onClick={toggleSpeed}>
          {speed === 2 ? "2x Speed" : speed === 0.5 ? "0.5x Speed" : "Normal Speed"}
        </button>
      </div>

      {/* Progress Bar */}
      <div className="w-full flex flex-col items-center">
        <input
          type="range"
          min="0"
          max={duration}
          value={progress}
          onChange={handleSeek}
          className="w-full"
        />
        <div className="flex justify-between w-full text-sm text-gray-600">
          <span>{formatTime(progress)}</span>
          <span>{formatTime(duration)}</span>
        </div>
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
          onChange={handleVolumeChange}
          className="w-24"
        />
      </div>
    </div>
  );
};

export default PlayControls;
