import React from "react"
import PlayListItem from "./PlayListItem"

export default function Playlist() {
  const playlist = [
    { id: 1, title: "Song 1", artist: "Artist 1", duration: "3:45" },
    { id: 2, title: "Song 2", artist: "Artist 2", duration: "4:20" },
    { id: 3, title: "Song 3", artist: "Artist 3", duration: "3:15" },
  ]

  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4">Playlist</h2>
      <ul>
        {playlist.map((song) => (
          <PlayListItem key={song.id} song={song} />
        ))}
      </ul>
    </div>
  )
}

