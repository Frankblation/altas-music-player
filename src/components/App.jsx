import React from "react"
import NavBar from "./NavBar"
import MusicPlayer from "./MusicPlayer"
import Playlist from "./Playlist"
import Footer from "./Footer"

export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <NavBar />
      <main className="flex-grow flex flex-col md:flex-row p-4">
        <div className="md:w-2/3 mb-4 md:mb-0 md:pr-4">
          <MusicPlayer />
        </div>
        <div className="md:w-1/3">
          <Playlist />
        </div>
      </main>
      <Footer />
    </div>
  )
}

