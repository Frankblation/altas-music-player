import React from "react"
import MusicPlayer from "../components/MusicPlayer"
import Footer from "../components/Footer"
const App = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="py-4 px-6 bg-primary text-primary-foreground">
        <h1 className="text-2xl font-bold">Atlas Music Player</h1>
      </header>

      <main className="container mx-auto px-4 py-8">
        <MusicPlayer />
      </main>

      <Footer />
    </div>
  )
}

export default App
