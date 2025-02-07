import { useRef, useEffect, useState } from "react";

type Song = {
  id: string;
  title: string;
  artist: string;
  song: string;
};

type AudioPlayerProps = {
  playlist: Song[];
  currentSongIndex: number;
  setCurrentSongIndex: (index: number) => void;
  isPlaying: boolean;
  setIsPlaying: (playing: boolean) => void;
  isShuffle: boolean;
  volume: number;
  speed: number;
};

const AudioPlayer: React.FC<AudioPlayerProps> = ({
  playlist,
  currentSongIndex,
  setCurrentSongIndex,
  isPlaying,
  setIsPlaying,
  isShuffle,
  volume,
  speed,
}) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [shuffledIndices, setShuffledIndices] = useState<number[]>([]);
  const currentSong = playlist[currentSongIndex];

  useEffect(() => {
    if (isShuffle) {
      const indices = Array.from({ length: playlist.length }, (_, i) => i);
      const shuffled = indices
        .filter(i => i !== currentSongIndex)
        .sort(() => Math.random() - 0.5);
      setShuffledIndices([currentSongIndex, ...shuffled]);
    }
  }, [isShuffle, currentSongIndex, playlist.length]);

  const getNextIndex = (): number => {
    if (isShuffle) {
      const currentShuffleIndex = shuffledIndices.indexOf(currentSongIndex);
      return shuffledIndices[(currentShuffleIndex + 1) % playlist.length];
    }
    return (currentSongIndex + 1) % playlist.length;
  };

  const playNextSong = () => {
    const nextIndex = getNextIndex();
    setCurrentSongIndex(nextIndex);
    setIsPlaying(true);
  };

  useEffect(() => {
    if (!audioRef.current) return;
    audioRef.current.src = currentSong.song;
    if (isPlaying) {
      audioRef.current.play().catch(() => setIsPlaying(false));
    }
  }, [currentSong, isPlaying]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.playbackRate = speed;
    }
  }, [speed]);

  useEffect(() => {
    if (!audioRef.current) return;

    const handleEnded = () => {
      playNextSong();
    };

    audioRef.current.addEventListener("ended", handleEnded);
    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener("ended", handleEnded);
      }
    };
  }, [currentSong, isShuffle, shuffledIndices]);

  return <audio ref={audioRef} />;
};

export default AudioPlayer;