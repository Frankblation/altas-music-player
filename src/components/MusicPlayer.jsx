import React, { useState, useEffect } from "react"
import CurrentlyPlaying from "./CurrentlyPlaying"
import Playlist from "./Playlist"

const sampleSongs = [
  { id: 1, title: "Bohemian Rhapsody", artist: "Queen", length: "5:55", coverArt: "/images/Placeholder.svg" },
  { id: 2, title: "Stairway to Heaven", artist: "Led Zeppelin", length: "8:02", coverArt: "/images/Placeholder.svg" },
  { id: 3, title: "Hotel California", artist: "Eagles", length: "6:30", coverArt: "/images/Placeholder.svg" },
  { id: 4, title: "Imagine", artist: "John Lennon", length: "3:01", coverArt: "/images/Placeholder.svg" },
  { id: 5, title: "Smells Like Teen Spirit", artist: "Nirvana", length: "5:01", coverArt: "/images/Placeholder.svg" },
]

const MusicPlayer = () => {
  const [currentSongIndex, setCurrentSongIndex] = useState(0)
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    // Check user's system preference
    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setDarkMode(true)
    }

    // Listen for changes in system preference
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (event) => {
      setDarkMode(event.matches)
    })
  }, [])

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark text-foreground-light dark:text-foreground-dark p-4 transition-colors duration-200">
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
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="fixed bottom-4 right-4 bg-primary-light dark:bg-primary-dark text-white px-4 py-2 rounded-full shadow-lg hover:opacity-80 transition-opacity duration-200"
      >
        Toggle {darkMode ? "Light" : "Dark"} Mode
      </button>
    </div>
  )
}

export default MusicPlayer

