import React from "react"
import SongTitle from "./SongTitle"

export default function CurrentlyPlaying({ track }) {
  return (
    <div className="mt-4">
      <SongTitle title={track.title} artist={track.artist} />
      <div className="mt-2 bg-gray-200 rounded-full h-1.5">
        <div className="bg-blue-600 h-1.5 rounded-full w-1/3"></div>
      </div>
    </div>
  )
}

