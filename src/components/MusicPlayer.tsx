import React, { useState, useEffect } from "react";
import CurrentlyPlaying from "./CurrentlyPlaying";
import Playlist from "./Playlist";
import LoadingSkeleton from "./LoadingSkeleton";

interface Song {
  id: string;
  title: string;
  artist: string;
  genre: string;
  duration: number;
  cover: string; 
  song: string;
}

const MusicPlayer: React.FC = () => {
  const [songs, setSongs] = useState<Song[]>([]);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchPlaylist = async () => {
    try {
      const response = await fetch("/api/v1/playlist");
      if (!response.ok) {
        throw new Error(`Failed to fetch playlist: ${response.status}`);
      }
      const data = await response.json();
      setSongs(data);
      setLoading(false);
    } catch (err) {
      setError("Failed to load playlist. Try refreshing.");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPlaylist();
    fetchPlaylist();
  }, []);

  const handleRetry = () => {
    setError(null);
    setLoading(true);
    setCurrentSongIndex(0); // Reset to first song in case of error
    fetchPlaylist();
  };

  if (loading) {
    return <LoadingSkeleton />;
  }

  if (error) {
    return (
      <div className="text-red-500 p-4">
        <div>{error}</div>
        <button
          onClick={handleRetry}
          className="text-blue-500 hover:underline mt-2"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="shadow-lg rounded">
      <div className="min-h-screen bg-background text-foreground p-4 transition-colors duration-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-3/4">
              <CurrentlyPlaying 
                song={songs[currentSongIndex]} 
                currentSongIndex={currentSongIndex} 
                setCurrentSongIndex={setCurrentSongIndex} 
              />
            </div>
            <div className="w-full md:w-1/2">
              <Playlist
                songs={songs}
                currentSongIndex={currentSongIndex}
                onSongSelect={(index) => setCurrentSongIndex(index)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
