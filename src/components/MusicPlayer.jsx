import React, { useState, useEffect } from "react"
import CurrentlyPlaying from "./CurrentlyPlaying"
import Playlist from "./Playlist"
import LoadingSkeleton from "./LoadingSkeleton"

const sampleSongs = [
  { id: 1, title: "Bohemian Rhapsody", artist: "Queen", length: "5:55", coverArt: "/images/Placeholder.svg" },
  { id: 2, title: "Stairway to Heaven", artist: "Led Zeppelin", length: "8:02", coverArt: "/images/Placeholder.svg" },
  { id: 3, title: "Hotel California", artist: "Eagles", length: "6:30", coverArt: "/images/Placeholder.svg" },
  { id: 4, title: "Imagine", artist: "John Lennon", length: "3:01", coverArt: "/images/Placeholder.svg" },
  { id: 5, title: "Smells Like Teen Spirit", artist: "Nirvana", length: "5:01", coverArt: "/images/Placeholder.svg" },
]

const MusicPlayer = () => {
  const [currentSongIndex, setCurrentSongIndex] = useState(0)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => setLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return <LoadingSkeleton />
  }

  return (
    <div className="min-h-screen bg-background text-foreground p-4 transition-colors duration-200">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/2">
            <CurrentlyPlaying song={sampleSongs[currentSongIndex]} />
          </div>
          <div className="w-full md:w-1/2">
            <Playlist songs={sampleSongs} currentSongIndex={currentSongIndex} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MusicPlayer

