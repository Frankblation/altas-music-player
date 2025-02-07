// Playlist.tsx
import PlayListItem from "./PlayListItem.tsx"

interface Song {
  id: string;
  title: string;
  artist: string;
  genre: string;
  duration: number;
}

interface PlaylistProps {
  songs: Song[];
  currentSongIndex: number;
  onSongSelect: (index: number) => void;
}

const formatDuration = (seconds: number): string => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
};

const Playlist = ({ songs = [], currentSongIndex = 0, onSongSelect }: PlaylistProps) => {
  return (
    <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
      <h2 className="text-xl font-bold rounded-md p-4 bg-gray-100 dark:bg-black">Playlist</h2>
      <div className="divide-y divide-gray-200">
        {songs.length > 0 ? (
          songs.map((song, index) => (
            <PlayListItem
              key={song.id}
              title={song.title}
              artist={song.artist}
              length={formatDuration(song.duration)}
              isSelected={index === currentSongIndex}
              onClick={() => onSongSelect(index)} // On selecting a song, update the currentSongIndex
            />
          ))
        ) : (
          <p className="p-4 text-gray-500">No songs in the playlist</p>
        )}
      </div>
    </div>
  )
}

export default Playlist;
