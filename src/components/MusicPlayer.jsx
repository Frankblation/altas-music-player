import React, { useState } from "react"
import CoverArt from "./CoverArt"
import CurrentlyPlaying from "./CurrentlyPlaying"
import PlayControls from "./PlayControls"
import VolumeControls from "./VolumeControls"

export default function MusicPlayer() {
  const [currentTrack, setCurrentTrack] = useState({
    title: "Awesome Song",
    artist: "Amazing Artist",
    coverUrl: "https://via.placeholder.com/400x400?text=Awesome+Song",
  })

  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <CoverArt coverUrl={currentTrack.coverUrl} title={currentTrack.title} artist={currentTrack.artist} />
      <CurrentlyPlaying track={currentTrack} />
      <PlayControls />
      <VolumeControls />
    </div>
  )
}

