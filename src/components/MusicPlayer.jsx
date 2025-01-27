import React, { useState } from "react"
import CoverArt from "./CoverArt"
import CurrentlyPlaying from "./CurrentlyPlaying"
import PlayControls from "./PlayControls"
import VolumeControls from "./VolumeControls"

export default function MusicPlayer({ currentTrack }) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [volume, setVolume] = useState(50)

  const togglePlay = () => setIsPlaying(!isPlaying)

  const handleVolumeChange = (newVolume) => setVolume(newVolume)

  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <CoverArt coverUrl={currentTrack.coverUrl} title={currentTrack.title} artist={currentTrack.artist} />
      <CurrentlyPlaying track={currentTrack} isPlaying={isPlaying} />
      <PlayControls isPlaying={isPlaying} onTogglePlay={togglePlay} />
      <VolumeControls volume={volume} onVolumeChange={handleVolumeChange} />
    </div>
  )
}

