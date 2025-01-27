import React from "react"
import PlayListItem from "./PlayListItem"

export default function Playlist({ playlist, onTrackSelect, currentTrackId }) {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4">Playlist</h2>
      <ul>
        {playlist.map((song) => (
          <PlayListItem
            key={song.id}
            song={song}
            onSelect={() => onTrackSelect(song)}
            isActive={song.id === currentTrackId}
          />
        ))}
      </ul>
    </div>
  )
}

