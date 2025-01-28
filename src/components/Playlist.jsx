import React from "react"
import PlayListItem from "./PlayListItem"

const Playlist = ({ songs = [], currentSongIndex = 0 }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <h2 className="text-xl font-bold p-4 bg-gray-100 dark:bg-black">Playlist</h2>
      <div className="divide-y divide-gray-200">
        {Array.isArray(songs) && songs.length > 0 ? (
          songs.map((song, index) => (
            <PlayListItem
              key={index}
              title={song.title}
              artist={song.artist}
              length={song.length}
              isSelected={index === currentSongIndex}
            />
          ))
        ) : (
          <p className="p-4 text-gray-500">No songs in the playlist</p>
        )}
      </div>
    </div>
  )
}

export default Playlist

