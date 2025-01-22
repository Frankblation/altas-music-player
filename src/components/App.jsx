import React from "react"
import CoverArt from "./CoverArt"
import NavBar from "./NavBar"
import MusicPlayer from "./MusicPlayer"
import Footer from "./Footer"

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-grow flex flex-col items-center justify-center p-6 bg-gray-100">
        <h1 className="text-4xl font-bold mb-8 text-gray-800">Web Play Cover Art</h1>
        <CoverArt coverId="example-cover-id" />
      </main>
      <MusicPlayer />
      <Footer />
    </div>
  )
}

export default App

