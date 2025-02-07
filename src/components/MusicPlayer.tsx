
import type React from "react"
import { useState, useEffect } from "react"
import CurrentlyPlaying from "./CurrentlyPlaying"
import Playlist from "./Playlist"
import LoadingSkeleton from "./LoadingSkeleton"

interface Song {
  id: string
  title: string
  artist: string
  genre: string
  duration: number
  cover: string
  song: string
}

const MusicPlayer: React.FC = () => {
  const [songs, setSongs] = useState<Song[]>([])
  const [currentSongIndex, setCurrentSongIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [volume, setVolume] = useState(0.5)
  const [speed, setSpeed] = useState(1)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [isShuffle, setIsShuffle] = useState(false)

  const fetchPlaylist = async () => {
    try {

      const playlistResponse = await fetch("/api/v1/playlist")
      if (!playlistResponse.ok) {
        throw new Error(`Failed to fetch playlist: ${playlistResponse.status}`)
      }
      const playlistData = await playlistResponse.json()

      const songsWithDetails = await Promise.all(
        playlistData.map(async (song: { id: string }) => {
          const songResponse = await fetch(`/api/v1/songs/${song.id}`)
          if (!songResponse.ok) {
            throw new Error(`Failed to fetch song details: ${songResponse.status}`)
          }
          return songResponse.json()
        }),
      )

      setSongs(songsWithDetails)
      setLoading(false)
    } catch (err) {
      setError("Failed to load playlist. Try refreshing.")
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchPlaylist()
  }, [])

  const handleRetry = () => {
    setError(null)
    setLoading(true)
    setCurrentSongIndex(0)
    fetchPlaylist()
  }

  const handlePlaybackControls = {
    togglePlay: () => setIsPlaying(!isPlaying),
    nextSong: () => setCurrentSongIndex((currentSongIndex + 1) % songs.length),
    previousSong: () => setCurrentSongIndex(currentSongIndex > 0 ? currentSongIndex - 1 : songs.length - 1),
    changeSpeed: () => setSpeed(speed === 1 ? 2 : speed === 2 ? 0.5 : 1),
    toggleShuffle: () => setIsShuffle(!isShuffle),
  }

  if (loading) {
    return <LoadingSkeleton />
  }

  if (error) {
    return (
      <div className="text-red-500 p-4">
        <div>{error}</div>
        <button onClick={handleRetry} className="text-blue-500 hover:underline mt-2">
          Retry
        </button>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background rounded-3xl p-4">
      <div className="max-w-7xl rounded-3xl mx-auto flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-3/4 rounded-3xl">
          <CurrentlyPlaying
            songs={songs}
            currentSongIndex={currentSongIndex}
            setCurrentSongIndex={setCurrentSongIndex}
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
            volume={volume}
            setVolume={setVolume}
            speed={speed}
            isShuffle={isShuffle}
            handlePlaybackControls={handlePlaybackControls}
          />
        </div>
        <div className="w-full md:w-1/2">
          <Playlist songs={songs} currentSongIndex={currentSongIndex} onSongSelect={setCurrentSongIndex} />
        </div>
      </div>
    </div>
  )
}

export default MusicPlayer

