import React, { useState } from "react"
import NavBar from "./NavBar"
import MusicPlayer from "./MusicPlayer"
import Playlist from "./Playlist"
import Footer from "./Footer"

export default function App() {
  const [currentTrack, setCurrentTrack] = useState({
    id: 1,
    title: "Awesome Song",
    artist: "Amazing Artist",
    coverUrl: "https://via.placeholder.com/400x400?text=Awesome+Song",
    duration: "3:45",
  })

  const playlist = [
    { id: 1, title: "Awesome Song", artist: "Amazing Artist", duration: "3:45" },
    { id: 2, title: "Cool Tune", artist: "Groovy Band", duration: "4:20" },
    { id: 3, title: "Mellow Melody", artist: "Smooth Singer", duration: "3:15" },
  ]

  const handleTrackChange = (track) => {
    setCurrentTrack(track)
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <NavBar />
      <main className="flex-grow flex flex-col md:flex-row p-4 gap-4">
        <div className="md:w-2/3">
          <MusicPlayer currentTrack={currentTrack} />
        </div>
        <div className="md:w-1/3">
          <Playlist playlist={playlist} onTrackSelect={handleTrackChange} currentTrackId={currentTrack.id} />
        </div>
      </main>
      <Footer />
    </div>
  )
}

