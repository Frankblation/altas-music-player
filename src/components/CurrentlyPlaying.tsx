import { useState, useEffect } from "react";
import CoverArt from "./CoverArt.tsx";
import SongTitle from "./SongTitle.tsx";
import PlayControls from "./PlayControls.tsx";
import VolumeControls from "./VolumeControls.tsx";

interface CurrentlyPlayingProps {
  song: any;
  currentSongIndex: number;
  setCurrentSongIndex: (index: number) => void;
}

const CurrentlyPlaying: React.FC<CurrentlyPlayingProps> = ({ song, currentSongIndex, setCurrentSongIndex }) => {
  const [volume, setVolume] = useState(0.5);
  const [currentSong, setCurrentSong] = useState(song);
  const [loading, setLoading] = useState(!song.cover || !song.song);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSongDetails = async () => {
      if (!song.id || (song.cover && song.song)) return;

      try {
        const response = await fetch(`/api/v1/songs/${song.id}`);
        if (!response.ok) throw new Error(`Failed to fetch song: ${response.status}`);

        const songDetails = await response.json();
        setCurrentSong(songDetails);
        setLoading(false);
      } catch (err) {
        setError("Failed to load song details"); // Now this is okay
        setLoading(false);
      }
    };

    fetchSongDetails();
  }, [song]);

  if (loading) {
    return <div>Loading song...</div>;
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <div className="flex flex-col items-center space-y-6 p-6 bg-white rounded-lg shadow-lg">
      <CoverArt cover={currentSong.cover} />
      <SongTitle
        title={currentSong.title || "No Song Playing"}
        artist={currentSong.artist || "Unknown Artist"}
      />

      <PlayControls
        songs={[currentSong]}
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
      />
      <VolumeControls volume={volume} setVolume={setVolume} />
    </div>
  );
};

export default CurrentlyPlaying;
